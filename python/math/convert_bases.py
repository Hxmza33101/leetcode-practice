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


def bin_to_dec(n):

def bin_to_hex(n):

def dec_to_bin(n):
    
def dec_to_hex(n):

def hex_to_dec(n):
    
def hex_to_bin(n):

convert()