def remove_evens(arr):
    result = []
    for i in arr:
        if i%2 != 0:
            result.append(i)
    print(result)
    return result
            

remove_evens([1,2,3,4,5])  # → [1,3,5]