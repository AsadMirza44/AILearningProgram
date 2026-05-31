# Week 4 Starter: Calling an AI API from Python
# This shows the minimum code needed to send a prompt to Claude and get a reply.
#
# Before running:
#   1. Install the SDK:    pip install anthropic
#   2. Set your API key:
#        Windows:   set ANTHROPIC_API_KEY=your-key-here
#        Mac/Linux: export ANTHROPIC_API_KEY=your-key-here
#   Or use the Colab link below which sets this up in a few clicks.
#
# Google Colab: https://colab.research.google.com/
#   (Create a new notebook, paste this code, add your key as a Secret)

import anthropic

# Step 1: Create the client — it reads your API key automatically from the environment
client = anthropic.Anthropic()

# Step 2: Write your prompt (try changing this to anything you like)
my_prompt = "Explain machine learning in 3 bullet points for a 14-year-old student."

# Step 3: Send the prompt and receive a response
print("Sending prompt to Claude...\n")

message = client.messages.create(
    model="claude-haiku-4-5-20251001",   # Fast and affordable — good for learning
    max_tokens=512,                       # Limits response length (controls cost)
    messages=[
        {"role": "user", "content": my_prompt}
    ]
)

# Step 4: Print the text response
print("Claude's response:")
print(message.content[0].text)

# ----- CHALLENGE 1 -----
# Change my_prompt to:
#   "Give me 5 multiple-choice quiz questions about Python basics."
# Run the script again and compare the output.

# ----- CHALLENGE 2 -----
# Add a system prompt by adding this parameter to client.messages.create():
#   system="You are a friendly teacher for complete beginners. Keep all answers short and simple."
# How does the output change?

# ----- CHALLENGE 3 -----
# Ask the user to type their own prompt using input():
#   user_prompt = input("Enter your prompt: ")
# Then pass user_prompt instead of my_prompt.
# You now have a minimal personal AI assistant in 20 lines of Python.
