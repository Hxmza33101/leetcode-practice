def reverse(arr):
    i = 0
    l = len(arr)-1
    while i < l:
        [arr[i], arr[l]] = [arr[l], arr[i]];
        i+=1
        l-=1
    print(arr)
    return arr

reverse([1,2,3,4])