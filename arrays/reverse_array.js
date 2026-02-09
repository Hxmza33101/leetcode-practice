var reverse = function(s) {
    let l = s.length;
    let i = 0;

    while (i < l) {
        [s[i], s[l]] = [s[l], s[i]];
        i++;
        l--;
    }
}

/*This is an in place reverse array function. It reverses the array by starting at both ends and simultaneously switches
 the position of both elements. This effectively reverses the array as once i is greater than l, the array is rotated */