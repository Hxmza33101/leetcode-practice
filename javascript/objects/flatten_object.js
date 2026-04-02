function flattenObject(obj, prefix = "") {
    const result = {};

    for (const key in obj) {
        const value = obj[key];
        const fullKey = prefix ? `${prefix}.${key}` : key;

        if (value !== null && typeof value === "object" && !Array.isArray(value)) {
            Object.assign(result, flattenObject(value, fullKey));
        } else {
            result[fullKey] = value;
        }
    }

    return result;
}

console.log(flattenObject({ a: { b: { c: 1 } } })); // -> { 'a.b.c': 1 }