def count_vowels(str):
    count = 0
    for i in str:
        if i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u':
            count += 1
    print(count)
    return count
            

count_vowels("hello world")  # → 3