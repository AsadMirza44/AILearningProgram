# Week 4 Starter: Automated Study Schedule
# This script takes a list of tasks and prints a daily revision plan.
# Complete the TODO sections, then try the challenges.
#
# How to run:
#   Option A — Local:  python starter.py
#   Option B — Colab:  paste into a new cell and press Ctrl+Enter

# Step 1: A list of study tasks — each task is a dictionary
tasks = [
    {"subject": "Maths",   "topic": "Algebra review",     "minutes": 30},
    {"subject": "Science", "topic": "Cell division notes", "minutes": 45},
    {"subject": "English", "topic": "Essay outline",       "minutes": 40},
    {"subject": "History", "topic": "WW2 timeline",        "minutes": 25},
    {"subject": "Maths",   "topic": "Practice problems",   "minutes": 30},
    # TODO: Add one more task of your own
]

# Step 2: Define a function that prints the full schedule
def print_schedule(task_list):
    print("\n=== YOUR STUDY SCHEDULE ===")
    total_minutes = 0

    for index, task in enumerate(task_list):
        # TODO: Print each task using a numbered format like:
        # "1. Maths — Algebra review (30 min)"
        # Hint: use index + 1 for the number, task["subject"], task["topic"], task["minutes"]
        print(f"{index + 1}. {task['subject']} — {task['topic']} ({task['minutes']} min)")
        total_minutes = total_minutes + task["minutes"]

    # Step 3: Print the total time
    print(f"\nTotal study time: {total_minutes} minutes ({total_minutes // 60}h {total_minutes % 60}m)")

# Step 4: Call the function to run it
print_schedule(tasks)

# ----- CHALLENGE -----
# 1. Sort tasks from shortest to longest before printing.
#    Hint: sorted_tasks = sorted(tasks, key=lambda t: t["minutes"])

# 2. Group tasks by subject and print all Maths tasks together, then Science, etc.

# 3. Add a "priority" field to each task ("high", "medium", "low")
#    and only print the high-priority tasks first.
