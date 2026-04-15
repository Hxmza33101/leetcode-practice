def merge(arr, arr2):
    result = []
    i = 0
    j = 0
    while i < len(arr) and j < len(arr2):
        if arr[i] < arr2[j]:
            result.append(arr[i])
            i+=1
        else:
            result.append(arr2[j])
            j+=1

    while i < len(arr):
        result.append(arr[i])
        i+=1

    while j < len(arr2):
        result.append(arr2[j])
        j+=1

    print(result)
    return result


merge([1,3,5], [2,4,6])  # → [1,2,3,4,5,6]