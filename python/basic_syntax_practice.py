# VARIABLES
x = 5
name = "Hamza"
is_Cool = True

# PRINTING
print("Hello")

# ARRAYS -> LISTS
arr = [1, 2, 3]


# OBJECTS -> DICTIONARIES
user = {
    "name": "Adam",
    "age": 18
}

print(user["name"])



# IF STATEMENTS
if x > 5:
    print('big')
else: 
    print('small')


# LOOPS

for i in arr:
    print(i)
    
# range loop, like classic js for loop
for i in range(5): # 0 to 4
    print(i)
  
    
# FUNCTION
def add(a, b):
    return a + b


# NONE vs NULL/UNDEFINED
None

# TRUTHY AND FALSY
if not arr:
    print("empty")

# CLASSES (Basic)
class Person:
    def __init__(self, name):
        self.name = name
        
# IMPORTS
import math