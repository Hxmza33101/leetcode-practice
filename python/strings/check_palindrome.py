def is_palindrome(str):
    result = str[::-1]
    if str == result:
        return True
    return False
    


print(is_palindrome("racecar"))  # → True
print(is_palindrome("hello"))  # → False