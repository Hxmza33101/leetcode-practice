# This problem requires the function to return an array without duplicates while preservine the order of the original inputted array.

def remove_duplicates(arr):
    result = []
    for i in range(len(arr)):
        if i not in result:
            result.append(arr[i])
            
    print(result)
    return result

remove_duplicates([1,2,2,3,1])  # → [1,2,3]