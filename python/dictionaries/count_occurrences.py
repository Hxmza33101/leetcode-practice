from itertools import count


def count_occurrences(arr):
    count = {}
    
    for i in arr:
        if i in count:
            count[i]+=1
        else:
            count[i] = 1            
    print(count)
    return count    

count_occurrences(['a','b','a'])  # → {'a': 2, 'b': 1}
count_occurrences(['a','a','b','c','a','121'])  # → {'a': 2, 'b': 1}