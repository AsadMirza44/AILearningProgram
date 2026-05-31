# Week 4 Starter: Quiz App
# This app asks questions, checks answers, and shows a score.
# Complete the TODO sections to make it fully work.
#
# How to run:
#   Option A — Local:  python starter.py
#   Option B — Colab:  paste into a new cell and press Ctrl+Enter

# Step 1: A list of questions — each question is a dictionary with two keys
questions = [
    {"question": "What does AI stand for?",          "answer": "artificial intelligence"},
    {"question": "What is a hallucination in AI?",   "answer": "false information that sounds true"},
    {"question": "What does ML stand for?",          "answer": "machine learning"},
    # TODO: Add two more questions here — any topic you like
    # {"question": "...", "answer": "..."},
]

score = 0   # This variable counts correct answers

# Step 2: Loop through every question in the list
for item in questions:
    print("\n" + item["question"])
    user_answer = input("Your answer: ")

    # TODO: Compare user_answer to item["answer"]
    # The comparison should be case-insensitive so "Machine Learning" and "machine learning" both count
    # Hint: use .lower() on both sides of the == comparison
    if user_answer.lower() == item["answer"].lower():
        print("Correct!")
        score = score + 1
    else:
        print(f"Not quite. The answer was: {item['answer']}")

# Step 3: Show the final score when all questions are done
print(f"\nFinal score: {score} out of {len(questions)}")

# ----- CHALLENGE -----
# 1. Show a different message depending on the score:
#    - 100%: "Perfect score!"
#    - 60% or above: "Well done!"
#    - Below 60%: "Keep practising."
#    Hint: calculate percentage = score / len(questions) * 100

# 2. After all questions, show which questions the student got wrong and what the correct answers were.
