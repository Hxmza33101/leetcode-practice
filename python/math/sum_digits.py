def sum_digits(n):
    sum = 0;
    for digit in str(n):
        sum += int(digit)
        
    print(sum)
    return sum

sum_digits(1234)  # → 10