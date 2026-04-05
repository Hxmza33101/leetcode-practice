def count_occurrences(arr):
    count = {}
    
    for i in arr:
        if i in count:
            count[i]+=1
        else:
            count[i] = 1            
    print(count)
    return count    

# Shorter way to do it using the built in .get() method in Python
def count_occurrences1(arr):
    count = {}
    
    for i in arr:
        count[i] = count.get(i, 0) + 1
    
    print(count)
    return count


count_occurrences(['a','b','a'])  # → {'a': 2, 'b': 1}
count_occurrences1(['a','a','b','c','a','121'])  # → {'a': 2, 'b': 1}