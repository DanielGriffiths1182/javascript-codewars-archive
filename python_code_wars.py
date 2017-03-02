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

# 5 Sum all the numbers of the array (in F# and Haskell you get a list)
# except the highest and the lowest element (the value, not the index!).
# (The highest/lowest element is respectively only one element at each edge,
# even if there are more than one with the same value!)
def sum_array(arr):
    if not arr or len(arr) <= 2:
        return 0
    else:
        arr.sort()
        return sum(arr[1:-1])

def sum_array(arr):
    return sum(sorted(arr)[1:-1]) if arr and len(arr) > 1 else 0

def sum_array(arr):
    if arr == None or len(arr) < 3:
        return 0
    return sum(arr) - max(arr) - min(arr)

# 6 In this little assignment you are given a string of space separated numbers,
# and have to return the highest and lowest number.
def high_and_low(numbers):
    nums = map(int, numbers.split(" "))
    return " " .join(map(str, (max(nums), min(nums))))

def high_and_low(numbers):
    nums = sorted(numbers.split(), key=int)
    return '{} {}'.format(nums[-1], nums[0])

# 7 Find the average of a list (array), if the list is empty, still return 0.
def find_average(array):
    if len(array) == 0:
        return 0
    else:
        return sum(array)/len(array)

# 8 Return the given string (st) with the order of words reversed.
def reverse(st):
    return " ".join(st.split()[::-1])

# 9 Given n (number of times someone hoola-hoops),
# if (n) is greater than or equal to 10 (see if statement), else (see else statement)
def hoopCount(n):
    if n >= 10:
        return "Great, now move on to tricks"
    else:
        return "Keep at it until you get it"

def hoopCount(n):
    return "Keep at it until you get it" if n<10 else "Great, now move on to tricks"

# 10 (Took a long time to figure out the import groupby tool, and itertools)
# sum(l) and len(l), these are getting easy to remember
# Extract integers from string, sum the list of extracted integers.
def sum_from_string(string):
    from itertools import groupby
    l = [int(''.join(i)) for is_digit, i in groupby(string, str.isdigit) if is_digit]
    return sum(l)

import re
def sum_from_string(string):
    d = re.findall("\d+",string)
    return sum(int(i) for i in d)

# 11 Return boolean (true, false) confirming if (string) is an isogram (contains no duplicate characters).
def is_isogram(string):
    line = string.upper()
    if not line:
        return True
    for x in line:
        if line.count(x) > 1:
            return False
    return True

def is_isogram(string):
    return len(string) == len(set(string.lower()))

#  12 Simple correction of 'order of operations' function.
def calculate(a, b, c):
    return (a + b) * c

# 13 Return true if string contains only digits, false otherwise or false if empty.
def is_digit(n):
    return n.isdigit() and len(n)==1

# 14 Find length of shortest word in string. (Python sort is alphabetic. you have to define key=len)
def find_short(s):
    list = s.split()
    return len(sorted(list, key=len)[0])

def find_short(s):
    return min(len(x) for x in s.split())
