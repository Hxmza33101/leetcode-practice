def first_unique(str):
    count = {}
    
    for i in str:
        if i in count:
            count[i]+=1
        else:
            count[i] = 1      
            
    for key, value in count.items():
        if value == 1:
            return key
        
        
        
print(first_unique("aabccde")) # → "b"