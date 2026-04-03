def reverse_words(string):
    forward_result = string.split()
    backward_result = []
    for i in range(len(forward_result)):
        backward_result.append(forward_result[len(forward_result)-1 - i])
        
    final = " ".join(backward_result)
    
    print(final)
    return final
    
    
# Cleaner Version
def reverse_words1(string):
    result = " ".join(string.split()[::-1])
    print(result)
    return result
            

reverse_words("hello world")  # → "world hello"
reverse_words1("hello world")  # → "world hello"