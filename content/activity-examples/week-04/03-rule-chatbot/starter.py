# Week 4 Starter: Rule-Based School Helper Chatbot
# This chatbot uses if/elif/else conditions to decide which reply to give.
# Add at least 5 more conditions to complete the challenge.
#
# How to run:
#   Option A — Local:  python starter.py
#   Option B — Colab:  paste into a new cell and press Ctrl+Enter
#
# Key difference from AI chatbots: this bot NEVER learns — every reply
# is hand-coded by the programmer. Change a rule and it changes forever.

print("School Helper Bot — type 'quit' to exit")
print("-" * 40)

while True:
    user_input = input("You: ").strip().lower()

    if user_input == "quit":
        print("Bot: Goodbye! Good luck with your studies.")
        break

    # --- Existing conditions (2 provided) ---
    elif "homework" in user_input:
        print("Bot: Check the class portal for homework deadlines and requirements.")

    elif "exam" in user_input or "test" in user_input:
        print("Bot: Revision tip — practice past papers and quiz yourself without your notes first.")

    # --- TODO: Add 5 or more conditions below ---
    # Copy the format:  elif "KEYWORD" in user_input:
    #                       print("Bot: YOUR RESPONSE")

    # Condition 3: schedule / timetable
    # elif ...

    # Condition 4: grades / marks / score
    # elif ...

    # Condition 5: absent / missed / class
    # elif ...

    # Condition 6: help / confused / don't understand
    # elif ...

    # Condition 7: library / books / resources
    # elif ...

    # Default reply when no condition matches
    else:
        print("Bot: I am not sure about that yet. Try asking about homework, exams, or your timetable.")

# ----- CHALLENGE -----
# 1. Add a greeting at the start that asks the user their name and uses it in replies.
# 2. Count how many questions were asked and print the total at the end.
# 3. Add a condition that detects when the user seems stressed (keywords: stressed, worried, anxious)
#    and respond with an encouraging message.
