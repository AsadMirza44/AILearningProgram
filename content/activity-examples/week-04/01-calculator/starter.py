# Week 4 Starter: Simple Calculator
# Complete this script by running it in Python or pasting it into Google Colab.
#
# How to run:
#   Option A — Local:  python starter.py
#   Option B — Colab:  paste into a new cell and press Ctrl+Enter

# Step 1: Store two numbers in variables (change these values to try different calculations)
number_a = 10
number_b = 5

# Step 2: Perform the four basic operations
addition       = number_a + number_b
subtraction    = number_a - number_b
multiplication = number_a * number_b
division       = number_a / number_b    # Warning: dividing by zero causes an error

# Step 3: Print each result using an f-string
print(f"{number_a} + {number_b} = {addition}")
print(f"{number_a} - {number_b} = {subtraction}")
print(f"{number_a} x {number_b} = {multiplication}")
print(f"{number_a} / {number_b} = {division}")

# ----- CHALLENGE -----
# 1. Add a modulo operation (%) that finds the remainder when number_a is divided by number_b
#    modulo = ...
#    print(...)

# 2. Ask the user to type in their own two numbers using input()
#    Hint: num = int(input("Enter a number: "))
#    Then recalculate all four operations with those numbers.
