# 1 Remove all whitespace from object (string)
def no_space(x):
    return x.replace(" ", "")

# 2 Multiply two integers and return the product
def multiply(a, b):
  return a * b

# 3 Return (Even) or (Odd) depending on the integer value of (number)
def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"
# ALTERNATE SOLUTIONS
def even_or_odd(number):
  return 'Odd' if number % 2 else 'Even'

# 4 Given a string of words, return the length of the shortest word(s).
# String will never be empty and you do not need to account for different data types.
def find_short(s):
      a = min(s.split(' '), key=len)
      return len(a)
# ALTERNATE SOLUTIONS
def find_short(s):
    return min(len(x) for x in s.split())

def find_short(s):
    s = s.split()
    return len(min(s, key = len))
