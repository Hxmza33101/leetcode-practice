def convert():
    print("What do you want to convert from?")
    before = input("d(ecimal), b(inary) or h(exidecimal): ")
    
    print("\n What do you want to convert to?")
    after = input("d(ecimal), b(inary) or h(exidecimal): ")
    
    number = input("\n Number to convert: ")
    
    
    if before == after:
        print(number)
        return number
    
    if before == "d":
        if after == "b":
            dec_to_bin(number)
        
        if after == "h":
            dec_to_hex(number)
    
    if before == "b":
        if after == "d":
            bin_to_dec(number)
        if after == "h":
            bin_to_hex(number)
    
    if before == "h":
        if after == "d":
            hex_to_dec(number)
        if after == "b":
            hex_to_bin(number)
        
    return 0


def bin_to_dec(binary):
    decimal = 0
    
    # reverse so rightmost bit starts at position 0
    binary = binary[::-1]

    for i in range(len(binary)):
        digit = int(binary[i])
        decimal += digit * (2 ** i)

    return decimal

def bin_to_hex(binary):
    while len(binary) % 4 != 0:
        binary = "0" + binary

    hex_digits = "0123456789ABCDEF"
    hexidecimal = ""

    for i in range(0, len(binary), 4):
        group = binary[i:i+4]          # take 4 bits
        value = int(group, 2)         # binary -> decimal
        hexidecimal += hex_digits[value]   # decimal -> hex digit

    return hexidecimal.lstrip("0") or "0"


def dec_to_bin(decimal):
    if decimal == 0:
        return "0"

    binary = ""

    while decimal > 0:
        remainder = decimal % 2
        binary = str(remainder) + result
        decimal = decimal // 2

    return binary
    
def dec_to_hex(decimal):
    if num == 0:
        return "0"

    hex_digits = "0123456789ABCDEF"
    hexidecimal = ""

    while num > 0:
        remainder = num % 16
        hexidecimal = hex_digits[remainder] + hexidecimal
        num = num // 16

    return hexidecimal

def hex_to_dec(hexidecimal):
    hex_digits = "0123456789ABCDEF"
    hexidecimal = hexidecimal.upper()
    decimal = 0

    power = 0

    for digit in hexidecimal[::-1]:
        value = hex_digits.index(digit)
        decimal += value * (16 ** power)
        power += 1

    return decimal
    
def hex_to_bin(hexidecimal):
    hex_digits = "0123456789ABCDEF"
    binary = ""
    
    hexidecimal = hexidecimal.upper()

    for digit in hexidecimal:
        value = hex_digits.index(digit)
        group = ""

        while value > 0:
            remainder = value % 2
            group = str(remainder) + group
            value = value // 2

        group = group.zfill(4)
        binary += group

    return binary.lstrip("0") or "0"

convert()