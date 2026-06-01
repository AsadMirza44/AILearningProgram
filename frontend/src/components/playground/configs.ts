import type { PlaygroundConfig } from "./types";

// Keys are exact activity title strings from curriculum_transformers.py
export const PLAYGROUND_CONFIGS: Record<string, PlaygroundConfig> = {

  // ── Week 1 ──────────────────────────────────────────────────────────────────

  "AI or Not AI? (Human vs AI Challenge)": {
    type: "flip-voting",
    voteOptions: ["AI-Generated", "Human-Made"],
    cards: [
      {
        id: "w1-1",
        front: "A chatbot response that summarizes a textbook paragraph",
        answer: "AI-Generated",
        explanation: "Language models are designed to read and condense text. Summarization is one of the most common AI tasks."
      },
      {
        id: "w1-2",
        front: "A hand-drawn classroom poster made by a teacher with markers",
        answer: "Human-Made",
        explanation: "Physical hand-drawn art requires human physical action. AI cannot pick up a marker."
      },
      {
        id: "w1-3",
        front: "A music playlist that updated itself based on your recent listening history",
        answer: "AI-Generated",
        explanation: "Recommendation engines use ML to predict what you will like next based on patterns in your listening history."
      },
      {
        id: "w1-4",
        front: "A basic calculator showing that 247 × 36 = 8,892",
        answer: "Human-Made",
        explanation: "A calculator applies fixed arithmetic rules — no learning, no pattern recognition, no inference. That is not AI."
      },
      {
        id: "w1-5",
        front: "A photorealistic portrait of a smiling person who has never existed",
        answer: "AI-Generated",
        explanation: "Generative image models like DALL-E or Stable Diffusion can create completely fictional photorealistic faces from text prompts."
      },
      {
        id: "w1-6",
        front: "A student essay corrected by the teacher with a red pen",
        answer: "Human-Made",
        explanation: "Physical pen marks on paper are a manual human action. The teacher made every correction decision themselves."
      },
      {
        id: "w1-7",
        front: "A spam filter that automatically blocked 47 junk emails this morning",
        answer: "AI-Generated",
        explanation: "Spam filters use ML classifiers trained on millions of labeled emails to detect junk automatically."
      },
      {
        id: "w1-8",
        front: "Tomorrow's weather forecast shown in a weather app",
        answer: "AI-Generated",
        explanation: "Modern weather forecasting uses ML models trained on decades of atmospheric data to predict future conditions."
      }
    ]
  },

  "AI Myth Busters": {
    type: "flip-voting",
    voteOptions: ["True", "False", "Partly True"],
    cards: [
      {
        id: "w1-mb1",
        front: "AI is always more accurate than a human expert",
        answer: "False",
        explanation: "AI can outperform humans on specific narrow tasks, but it also hallucinates, makes confident errors, and lacks real-world judgment in many situations."
      },
      {
        id: "w1-mb2",
        front: "AI learns and updates its knowledge every time you chat with it",
        answer: "False",
        explanation: "Most AI tools do not retrain from conversations. The model weights are fixed after training. Any 'memory' feature is a layer on top, not true continuous learning."
      },
      {
        id: "w1-mb3",
        front: "AI can create text, images, music, and code from simple instructions",
        answer: "True",
        explanation: "Generative AI models produce all these content types. This is one of their most practically useful capabilities today."
      },
      {
        id: "w1-mb4",
        front: "AI understands language the same way humans do",
        answer: "False",
        explanation: "AI uses statistical patterns to predict likely next tokens — it does not understand meaning the way humans do. Fluent output does not mean genuine understanding."
      },
      {
        id: "w1-mb5",
        front: "AI will eventually take over every human job",
        answer: "Partly True",
        explanation: "AI will automate many tasks and change many roles, but human judgment, creativity, empathy, and context remain essential in most fields."
      },
      {
        id: "w1-mb6",
        front: "You can always trust AI output without fact-checking it",
        answer: "False",
        explanation: "AI systems hallucinate — they produce confident but incorrect answers. Verification is always necessary, especially for facts, figures, and citations."
      }
    ]
  },

  "Prompt Battle (Talk to the AI)": {
    type: "prompt-editor",
    task: "Write a prompt asking AI to explain photosynthesis for a 12-year-old student who finds science difficult.",
    weakPrompt: "Explain photosynthesis",
    hint: "Use the prompt formula: Who should the AI act as? What should it do? Who is the audience? What constraints apply? What format do you want?",
    rubricItems: [
      { label: "Role", description: "Tells AI who to act as (e.g. 'friendly science tutor')", keywords: ["you are", "act as", "as a", "pretend", "role"] },
      { label: "Audience", description: "States who the explanation is for (age/level)", keywords: ["year old", "grade", "student", "child", "12", "young", "beginner"] },
      { label: "Task", description: "Clear instruction on what to produce", keywords: ["explain", "describe", "write", "teach", "break down", "show"] },
      { label: "Constraints", description: "Limits on length, tone, or complexity", keywords: ["simple", "short", "avoid", "do not", "keep", "easy", "plain", "clear", "basic"] },
      { label: "Output Format", description: "How the answer should look (analogy, steps, etc.)", keywords: ["example", "analogy", "step", "list", "diagram", "picture", "summary", "paragraph"] }
    ],
    aiEnabled: true
  },

  // ── Week 2 ──────────────────────────────────────────────────────────────────

  "Bad prompt vs good prompt challenge": {
    type: "prompt-editor",
    task: "Improve this weak study prompt so it produces a genuinely useful AI response.\n\nWeak prompt: \"Help me study for my exam\"",
    weakPrompt: "Help me study for my exam",
    hint: "This prompt is missing: what subject? what exam? what does 'study' mean here — quiz me, summarize content, explain a concept? Add role, context, and output format.",
    rubricItems: [
      { label: "Role", description: "What should the AI act as?", keywords: ["you are", "act as", "as a", "tutor", "teacher", "expert", "study partner"] },
      { label: "Subject / Context", description: "What subject or topic is this about?", keywords: ["biology", "history", "math", "physics", "chemistry", "science", "english", "for", "about", "on", "topic"] },
      { label: "Task", description: "What exactly should AI do — quiz, explain, summarize?", keywords: ["quiz", "explain", "summarize", "test", "practice", "flashcard", "question", "create", "generate", "help me with"] },
      { label: "Constraints", description: "Difficulty level, length, or format limits", keywords: ["grade", "level", "beginner", "short", "simple", "advanced", "only", "keep", "max", "no more than"] },
      { label: "Output Format", description: "How should the output look?", keywords: ["list", "bullet", "numbered", "question", "answer", "format", "structure", "section", "table"] }
    ],
    aiEnabled: true
  },

  "Context window compression": {
    type: "prompt-editor",
    task: "Compress this overloaded prompt to under 100 words while keeping all essential information.",
    weakPrompt: `You are a helpful AI assistant who specializes in providing detailed explanations for students who are preparing for their final examinations in various subjects. I am currently studying for my biology exam which covers topics including cell biology, genetics, evolution, ecology, and human physiology. I have been struggling particularly with the concepts related to cellular respiration and photosynthesis. I would really appreciate it if you could help me by creating some practice questions about these topics. The questions should be multiple choice format and should be at an appropriate difficulty level for a high school student. Please also provide the correct answers and brief explanations for each answer so that I can understand why each answer is correct. I would like about 10 questions please.`,
    hint: "Goal: ≤100 words. Keep: subject, specific topics, task type, format, difficulty. Cut: filler phrases, over-explanation, restated obvious context.",
    mode: "compress",
    maxWords: 100,
    rubricItems: [
      { label: "Subject kept", description: "Biology is still mentioned", keywords: ["biology", "bio"] },
      { label: "Topics kept", description: "Cellular respiration or photosynthesis mentioned", keywords: ["cellular respiration", "photosynthesis", "respiration", "photosyn"] },
      { label: "Task kept", description: "Still asks for practice questions", keywords: ["question", "quiz", "practice", "multiple choice", "mcq"] },
      { label: "Format kept", description: "Still specifies answer/explanation format", keywords: ["answer", "explanation", "correct", "multiple choice", "explain"] },
      { label: "Under 100 words", description: "Word count is 100 or fewer", keywords: [] }
    ]
  },

  "Compare weak and strong AI answers": {
    type: "scenario-judge",
    scenarios: [
      {
        id: "w2-cmp1",
        situation: "Prompt: \"Explain gravity\"\n\nAnswer A: \"Gravity is a force that attracts objects with mass toward each other. The more mass an object has, the stronger its gravitational pull. Earth's gravity keeps us on the ground and the Moon in orbit around us.\"\n\nAnswer B: \"Gravity is a force.\"\n\nWhich answer is stronger?",
        options: ["Answer A is stronger", "Answer B is stronger", "They are equally good"],
        correctIndex: 0,
        rationale: "Answer A is stronger because it defines gravity, explains the role of mass, and gives two concrete real-world examples. Answer B is technically correct but gives the student nothing actionable or memorable to work with."
      },
      {
        id: "w2-cmp2",
        situation: "Prompt A: \"Explain mitosis\"\n\nPrompt B: \"You are a biology tutor. Explain mitosis to a grade 10 student in exactly 5 numbered steps, one sentence each.\"\n\nWhich prompt produces a more useful study answer?",
        options: ["Prompt A is better", "Prompt B is better", "Both are equally good"],
        correctIndex: 1,
        rationale: "Prompt B is better because it specifies the role, audience (grade 10), format (5 numbered steps), and length constraint (one sentence each). Prompt A gives the AI no guidance — the output could be a PhD thesis or a single line."
      },
      {
        id: "w2-cmp3",
        situation: "A student sent two prompts and got these results:\n\nPrompt: \"Write revision notes\"\nResult: A vague 3-paragraph summary with no structure.\n\nPrompt: \"You are a study coach. Create revision bullet points for the Water Cycle, suitable for a grade 9 student. Use 5 bullets, each under 20 words.\"\nResult: 5 clear, concise bullet points covering evaporation, condensation, precipitation, collection, and transpiration.\n\nWhat made the second prompt better?",
        options: [
          "It used longer words",
          "It specified role, topic, audience, format, and constraints",
          "It mentioned 'revision' twice",
          "It was sent at a better time"
        ],
        correctIndex: 1,
        rationale: "The second prompt works because it leaves nothing ambiguous: who the AI is (study coach), what to do (revision bullets), what subject (Water Cycle), who it is for (grade 9), and exactly how to format it (5 bullets, ≤20 words each)."
      }
    ]
  },

  // ── Week 3 ──────────────────────────────────────────────────────────────────

  "Manual classification game": {
    type: "card-sorter",
    bins: [
      { id: "spam", label: "Spam" },
      { id: "not-spam", label: "Not Spam" }
    ],
    cards: [
      { id: "e1", text: "Congratulations! You've won a $1,000 gift card. Click here to claim NOW!!!", correctBin: "spam", explanation: "Excessive punctuation, urgency language, and 'you've won' phrasing are classic spam signals the classifier learned from training data." },
      { id: "e2", text: "Hi Sarah, here are the chemistry notes from today's class as I promised.", correctBin: "not-spam", explanation: "Personal greeting, known context (class notes), and specific recipient name are features the model associates with legitimate email." },
      { id: "e3", text: "URGENT: Your account will be suspended in 24 hours. Verify NOW: bit.ly/urgent123", correctBin: "spam", explanation: "Account suspension threats, all-caps urgency, and suspicious shortened URLs are all high-weight spam features." },
      { id: "e4", text: "Your library book 'Deep Learning' is due back on December 15th.", correctBin: "not-spam", explanation: "Clear institutional sender, specific book title, and a concrete date make this a predictable and legitimate automated notification." },
      { id: "e5", text: "Earn $5,000 per week from home! No experience needed. Reply YES to start!", correctBin: "spam", explanation: "Unrealistic income claims, 'no experience needed', and a reply request are strong spam pattern matches." },
      { id: "e6", text: "Reminder: the Monday 3pm study group moves to Tuesday 4pm in Room B12.", correctBin: "not-spam", explanation: "Specific room number, time, and group context all signal a routine legitimate notification the classifier would rate as safe." },
      { id: "e7", text: "LIMITED OFFER: Buy prescription meds online — no prescription required!", correctBin: "spam", explanation: "Pharmaceutical spam with no-prescription claims and scarcity language is one of the most common spam categories in training datasets." },
      { id: "e8", text: "Your semester report is ready — log in to the student portal to view your grades.", correctBin: "not-spam", explanation: "Directing to an official portal (not an external link) and expected institutional context strongly predict a legitimate message." }
    ]
  },

  "Bias in dataset discussion": {
    type: "scenario-judge",
    scenarios: [
      {
        id: "w3-bias1",
        situation: "A hiring AI was trained on 10 years of resumes from a tech company where 85% of engineers were male. It now consistently ranks male candidates higher for engineering roles. What is the main problem?",
        options: [
          "The AI is working correctly — it learned from real historical data",
          "The training data reflects historical discrimination, not merit",
          "The AI needs more data overall, regardless of who it includes",
          "Bias only matters when the AI makes obvious mistakes"
        ],
        correctIndex: 1,
        rationale: "The dataset reflects historical discrimination, not merit. High accuracy on biased data does not mean the system is fair — it means it accurately replicated the unfairness. The fix is not more data, but representative and audited data."
      },
      {
        id: "w3-bias2",
        situation: "A student exam-risk prediction model was trained only on data from urban schools. It is now deployed in rural schools where it performs poorly on many students. What type of problem is this?",
        options: [
          "The model is broken and should be discarded",
          "Rural students need to adapt to the model",
          "Distribution mismatch — rural students were not represented in training",
          "The testing data was identical to the training data"
        ],
        correctIndex: 2,
        rationale: "When training data does not represent the deployment population, predictions are unreliable. This is called distribution shift. The model should be retrained with data that includes both urban and rural students."
      },
      {
        id: "w3-bias3",
        situation: "A medical AI achieves 98% accuracy overall. But 95% of training images came from patients with lighter skin tones. The model frequently misses conditions in patients with darker skin tones. Is 98% accuracy enough to deploy it globally?",
        options: [
          "Yes — 98% accuracy means it is safe",
          "No — aggregate accuracy hides dangerous performance gaps for underrepresented groups",
          "Yes — all patients will benefit on average",
          "No — accuracy is never meaningful in medicine"
        ],
        correctIndex: 1,
        rationale: "98% overall can hide 99.5% for one group and 85% for another. In medical contexts that gap can cost lives. Evaluation must be broken down by subgroup — aggregate accuracy alone is not sufficient for high-stakes deployment."
      }
    ]
  },

  "Classroom survey data collection": {
    type: "card-sorter",
    bins: [
      { id: "feature", label: "Feature (Input to the Model)" },
      { id: "label", label: "Label (What We Want to Predict)" },
      { id: "irrelevant", label: "Not Useful for This Task" }
    ],
    cards: [
      // Task framing: predict whether a student will pass or fail the final exam
      { id: "ds1", text: "Average homework completion rate (%)", correctBin: "feature", explanation: "An input signal that correlates with exam outcome — a useful feature candidate." },
      { id: "ds2", text: "Whether the student passed or failed the final exam (Yes / No)", correctBin: "label", explanation: "This is what we want to predict — the target label, not an input." },
      { id: "ds3", text: "Number of absences in the semester", correctBin: "feature", explanation: "Absence rate is a known correlate of academic performance — a strong feature." },
      { id: "ds4", text: "Student's eye colour", correctBin: "irrelevant", explanation: "No known correlation with academic performance — including it adds noise, not signal." },
      { id: "ds5", text: "Average quiz score in the first 4 weeks", correctBin: "feature", explanation: "Early quiz scores are a strong leading indicator and practical feature for predicting final outcome." },
      { id: "ds6", text: "Student ID number", correctBin: "irrelevant", explanation: "An arbitrary identifier with no relationship to exam performance — the model would memorize IDs rather than learn patterns." },
      { id: "ds7", text: "Hours per week spent on self-study", correctBin: "feature", explanation: "Study time is directly relevant to learning outcomes — a practical and measurable feature." },
      { id: "ds8", text: "Final exam score (0–100)", correctBin: "label", explanation: "The raw score is the underlying signal for the pass/fail label — it is an outcome, not an input." }
    ]
  },

  // ── Week 4 ──────────────────────────────────────────────────────────────────

  "Build a rule-based chatbot": {
    type: "code-walkthrough",
    steps: [
      {
        label: "Step 1 — Store the user's message",
        code: `# Get what the student typed and normalise it
user_input = input("Student: ").lower().strip()`,
        explanation: ".lower() converts to lowercase so 'HELP' and 'help' match the same rule. .strip() removes accidental spaces around the message."
      },
      {
        label: "Step 2 — Check one condition",
        code: `# Respond to one keyword
if "schedule" in user_input:
    print("Your next class is Math at 10am in Room 12.")`,
        explanation: "The 'in' operator checks if 'schedule' appears anywhere in the message. If yes, we print a fixed response. This is the simplest form of rule-based logic."
      },
      {
        label: "Step 3 — Add more conditions",
        code: `if "schedule" in user_input:
    print("Your next class is Math at 10am in Room 12.")
elif "homework" in user_input:
    print("Your homework is due Friday by 5pm.")
elif "help" in user_input:
    print("I can help with: schedule, homework, or grades.")
else:
    print("Sorry, I don't understand that yet.")`,
        explanation: "elif means 'else if' — conditions are checked in order. The else block handles anything the bot doesn't recognise yet. This is how rule-based chatbots work: a chain of if/elif/else."
      },
      {
        label: "Step 4 — Keep the conversation going",
        code: `while True:
    user_input = input("Student: ").lower().strip()

    if user_input == "quit":
        print("Goodbye!")
        break

    if "schedule" in user_input:
        print("Your next class is Math at 10am in Room 12.")
    elif "homework" in user_input:
        print("Your homework is due Friday by 5pm.")
    elif "help" in user_input:
        print("I can help with: schedule, homework, or grades.")
    else:
        print("Sorry, I don't understand that yet.")`,
        explanation: "while True keeps the bot running until the student types 'quit'. The break statement exits the loop. Notice the difference between this rule-based bot and an AI chatbot — this bot can only respond to exactly what we programmed."
      }
    ],
    challenges: [
      { prompt: "Add 5 more responses for: grades, absent, library, exam date, and a goodbye message when the student types 'bye'.", hint: "For grades: elif 'grade' in user_input: print('Your current average is 78%.')" },
      { prompt: "What happens if the student types 'SCHEDULE' in capitals? Does the bot still respond? Why?", hint: "Look at the .lower() call — it converts everything to lowercase before checking, so 'SCHEDULE' becomes 'schedule'." },
      { prompt: "Can you make the bot ask for the student's name at the start and use it in responses?", hint: "Before the while loop: name = input('Your name: '). Then in responses: print(f'Hi {name}, your next class is Math.')" }
    ]
  },

  "Build a quiz app": {
    type: "code-walkthrough",
    steps: [
      {
        label: "Step 1 — Store questions in a list",
        code: `# A list of dictionaries — each question has text, options, and the correct answer
questions = [
    {
        "question": "What is the capital of France?",
        "options": ["A) London", "B) Berlin", "C) Paris", "D) Madrid"],
        "answer": "C"
    },
    {
        "question": "What does CPU stand for?",
        "options": ["A) Central Processing Unit", "B) Computer Power Unit",
                   "C) Core Program Utility", "D) Central Program Upload"],
        "answer": "A"
    }
]`,
        explanation: "We use a list of dictionaries. Each dictionary has three keys: the question text, a list of options, and the correct letter. Adding more questions later just means adding more dictionaries."
      },
      {
        label: "Step 2 — Loop through and display each question",
        code: `score = 0

for i, q in enumerate(questions):
    print(f"\\nQuestion {i + 1}: {q['question']}")
    for option in q["options"]:
        print(option)`,
        explanation: "enumerate() gives us both the index (i) and the question object (q). The inner loop prints each answer option. We start score at 0 before the loop."
      },
      {
        label: "Step 3 — Get the answer and check it",
        code: `for i, q in enumerate(questions):
    print(f"\\nQuestion {i + 1}: {q['question']}")
    for option in q["options"]:
        print(option)

    user_answer = input("Your answer (A/B/C/D): ").upper().strip()

    if user_answer == q["answer"]:
        print("Correct!")
        score += 1
    else:
        print(f"Wrong. The correct answer was {q['answer']}.")`,
        explanation: ".upper() makes the input uppercase so 'a' and 'A' both match. We compare to q['answer'] and update the score. += 1 means 'add 1 to the current score'."
      },
      {
        label: "Step 4 — Show the final score",
        code: `print(f"\\nYou scored {score} out of {len(questions)}.")

percentage = (score / len(questions)) * 100
if percentage >= 70:
    print("Well done! You passed.")
else:
    print(f"Keep studying — you need 70% to pass ({70 - round(percentage)}% more).")`,
        explanation: "len(questions) gives the total count automatically — the message stays accurate when we add more questions. We calculate a percentage and give meaningful pass/fail feedback."
      }
    ],
    challenges: [
      { prompt: "Add 2 more questions on any topic. Make sure each has 4 options and a correct answer letter.", hint: "Copy a dictionary from the list and change the values. Don't forget the comma after each closing brace." },
      { prompt: "Make answer comparison case-insensitive AND whitespace-safe — so 'a', 'A', and ' a ' all count as correct.", hint: "input('Answer: ').strip().upper() — you already have .upper(), just add .strip() to remove surrounding spaces." },
      { prompt: "Show the user which questions they got wrong at the end. Print each wrong question and the correct answer.", hint: "Create an empty list wrong = [] before the loop. Inside: if user_answer != q['answer']: wrong.append(q). After the loop: for q in wrong: print(q['question'], '->', q['answer'])" }
    ]
  },

  "Call an AI API from Python": {
    type: "code-walkthrough",
    steps: [
      {
        label: "Step 1 — Load the API key safely",
        code: `import os
from anthropic import Anthropic

# NEVER paste your key directly into code
# Load it from an environment variable
api_key = os.environ.get("ANTHROPIC_API_KEY")

if not api_key:
    print("Error: ANTHROPIC_API_KEY is not set.")
    exit(1)

client = Anthropic(api_key=api_key)`,
        explanation: "We use os.environ.get() to read the key from the environment — not from the code itself. If you paste your key into code and share it, anyone can use your account. Always load keys from environment variables."
      },
      {
        label: "Step 2 — Write a prompt and call the API",
        code: `message = client.messages.create(
    model="claude-haiku-4-5-20251001",
    max_tokens=256,
    messages=[
        {
            "role": "user",
            "content": "Explain what a variable is to a beginner programmer in 3 sentences."
        }
    ]
)`,
        explanation: "client.messages.create() sends the request. model= selects which Claude version to use. max_tokens= sets the output limit (controls cost). messages= is a list of role/content pairs — 'user' is your prompt."
      },
      {
        label: "Step 3 — Read the response",
        code: `# The response text is at message.content[0].text
response_text = message.content[0].text
print("Claude says:")
print(response_text)`,
        explanation: "The API returns a structured object. The generated text lives at message.content[0].text. We extract it and print it. The [0] is needed because the content list can contain multiple content blocks."
      },
      {
        label: "Step 4 — Make it interactive",
        code: `while True:
    user_prompt = input("\\nYour question (or 'quit'): ").strip()

    if user_prompt.lower() == "quit":
        break
    if not user_prompt:
        continue

    response = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=256,
        messages=[{"role": "user", "content": user_prompt}]
    )
    print("\\nClaude:", response.content[0].text)`,
        explanation: "We wrap the API call in a loop so students can ask multiple questions. We check for empty input (continue skips back to the start) and 'quit' to exit. This is the core pattern for any AI-powered command-line tool."
      }
    ],
    challenges: [
      { prompt: "Change the prompt to ask Claude to explain a concept from this week's lesson (e.g. 'Explain what a loop is with one Python example'). Run it and read the output.", hint: "Change the 'content' value in Step 2 to your new question." },
      { prompt: "Add a system prompt that tells Claude to always respond like a friendly tutor for 14-year-old students.", hint: "Add system='You are a friendly tutor for 14-year-old students. Keep answers short and clear.' as a parameter to client.messages.create()." },
      { prompt: "What happens if you lower max_tokens to 50? What gets cut off and why?", hint: "The model stops mid-sentence when it hits the limit. 50 tokens ≈ 200 characters. Try it and observe where the response ends." }
    ]
  },

  // ── Week 5 ──────────────────────────────────────────────────────────────────

  "Paper-based RAG simulation": {
    type: "scenario-judge",
    scenarios: [
      {
        id: "w5-rag1",
        situation: "Question: 'Can students use AI tools for assignments?'\n\nAnswer from memory (no document): 'It depends on the teacher and school. Some allow it, some do not.'\n\nAnswer after retrieving the School AI Policy document: 'Students may use AI tools for research and drafting only. All submitted work must be reviewed and understood by the student. AI-generated content submitted as original work without disclosure is a violation of the academic integrity policy.'\n\nWhich answer is more reliable?",
        options: [
          "The memory answer is more reliable — it is broadly true",
          "The document-grounded answer is more reliable — it is specific and citable",
          "Both answers are equally useful"
        ],
        correctIndex: 1,
        rationale: "The document-grounded answer is specific, policy-accurate, and citable. The memory answer is vague and could be wrong or outdated. This is exactly what RAG is for: replacing guesswork with retrieval from authoritative sources."
      },
      {
        id: "w5-rag2",
        situation: "A student asks: 'When is the next parent-teacher evening?'\n\nAnswer A (no retrieval): 'Parent-teacher evenings are usually held once or twice per term.'\n\nAnswer B (after retrieving the school calendar): 'The next parent-teacher evening is Thursday 12th December from 4pm to 7pm. Bookings open Monday via the school portal.'\n\nWhich answer actually helps the student?",
        options: [
          "Answer A — it is always true regardless of the year",
          "Answer B — it answers the specific question the student actually asked",
          "Answer A is safer because it avoids making specific claims"
        ],
        correctIndex: 1,
        rationale: "Answer B is better because retrieval turned a general statement into actionable information. Answer A is technically true but completely useless for someone wanting to book a slot. RAG makes the difference between 'generally accurate' and 'specifically helpful'."
      },
      {
        id: "w5-rag3",
        situation: "Which of these tasks would benefit most from RAG?",
        options: [
          "Asking AI to write a poem in the style of Shakespeare",
          "Asking AI what this school's specific laptop loan policy says",
          "Asking AI to explain what photosynthesis is",
          "Asking AI to translate a sentence into French"
        ],
        correctIndex: 1,
        rationale: "The laptop loan policy is a specific institutional document the AI has no way to know without retrieval. The other tasks — creative writing, science explanation, translation — rely on general knowledge the model already has from training."
      },
      {
        id: "w5-rag4",
        situation: "A team designs a RAG system but forgets to update the knowledge base after new class notes are uploaded. Students start getting answers about topics from two weeks ago as if they are current. What went wrong?",
        options: [
          "The retrieval algorithm is broken",
          "The freshness/update trigger was not set up — stale documents give stale answers",
          "RAG does not work for class notes",
          "The chunks were too small"
        ],
        correctIndex: 1,
        rationale: "RAG is only as good as its knowledge source. Stale documents produce stale answers regardless of how good the retrieval is. Real RAG systems need explicit freshness policies: when should documents be re-indexed? Who can trigger updates?"
      }
    ]
  },

  "Design a RAG for the class file system": {
    type: "template-builder",
    exportLabel: "Export RAG Design",
    sections: [
      { id: "knowledge-sources", label: "Knowledge Sources", hint: "List the documents, files, or databases your system will retrieve from. Be specific — file names or folder paths.", placeholder: "e.g.\n- /class-notes/week-01-to-07.md (indexed weekly)\n- /policies/student-handbook.pdf\n- /timetable/semester-2-schedule.csv", rows: 4 },
      { id: "chunking-strategy", label: "Chunking Strategy", hint: "How will you split documents into searchable pieces? What size? What logic?", placeholder: "e.g. Split by heading. Max 300 words per chunk. Overlap last 2 sentences with next chunk to preserve context across boundaries.", rows: 3 },
      { id: "retrieval-rules", label: "Retrieval Rules", hint: "How many chunks are retrieved per query? What happens when nothing matches well?", placeholder: "e.g. Retrieve top 3 most relevant chunks. Minimum similarity 0.75. If nothing meets threshold: respond 'I could not find this in the class documents — please check with your teacher.'", rows: 3 },
      { id: "citation-format", label: "Citation Format", hint: "How will the AI show users where answers came from?", placeholder: "e.g. End every answer with [Source: filename, section]. If multiple sources, list all. Never answer a policy question without citing the document.", rows: 2 },
      { id: "freshness-triggers", label: "Freshness and Update Triggers", hint: "When and how will the knowledge base be updated?", placeholder: "e.g. Re-index every Monday at 7am. Teacher can trigger manual re-index from the admin panel. Any file older than 30 days gets a 'may be outdated' flag.", rows: 3 },
      { id: "surprising-decision", label: "One Design Decision That Surprised You", hint: "What was the hardest trade-off? Why?", placeholder: "e.g. I was surprised that smaller chunks give more precise answers but lose surrounding context. I chose 200-word chunks with 40-word overlap to balance precision with context continuity.", rows: 3 }
    ]
  },

  "MCP-style tool list design": {
    type: "template-builder",
    exportLabel: "Export Tool Design",
    sections: [
      { id: "tool-1", label: "Tool 1 — Name and Purpose", hint: "Read-only information retrieval tool. What does it expose?", placeholder: "Name: search_class_notes\nPurpose: Searches indexed class notes by topic and returns the 3 most relevant sections.\nAccess: Read-only — cannot modify any file.", rows: 3 },
      { id: "tool-2", label: "Tool 2 — Name and Purpose", hint: "A scheduling or calendar-related tool.", placeholder: "Name: get_timetable\nPurpose: Returns the current week's class schedule including room numbers and teacher names.\nAccess: Read-only — from the timetable database.", rows: 3 },
      { id: "tool-3", label: "Tool 3 — Name and Purpose", hint: "A tool that creates or drafts content (but does NOT send it automatically).", placeholder: "Name: draft_message\nPurpose: Drafts an email or notification based on student name, date, and reason.\nAccess: Creates a draft only. Teacher must review and approve before sending.", rows: 3 },
      { id: "permissions", label: "Permission Matrix — Who Can Use What?", hint: "Define which user roles can access which tools.", placeholder: "Student: search_class_notes (read), get_timetable (read)\nTeacher: all tools (read + write approval)\ndraft_message: student can initiate, teacher must approve before any external send", rows: 4 },
      { id: "restricted-actions", label: "Forbidden / Restricted Actions", hint: "What must this assistant NEVER do autonomously?", placeholder: "Never send any external message without teacher approval.\nNever access another student's personal records.\nNever execute code or modify files outside /class-notes/.\nNever answer questions about student grades to anyone other than that student or their teacher.", rows: 3 },
      { id: "human-review", label: "Human Review Checkpoint (written as a Rule)", hint: "Write the exact rule that forces a human to approve before high-impact action.", placeholder: "Rule: Before any communication leaves this system — email, notification, or report — present the full draft to the teacher and require explicit written confirmation. The assistant cannot send autonomously under any circumstances.", rows: 3 }
    ]
  },

  // ── Week 6 ──────────────────────────────────────────────────────────────────

  "Agent building blocks comparison lab": {
    type: "scenario-judge",
    scenarios: [
      {
        id: "w6-lab1",
        situation: "You want the AI coding agent to always explain code in plain English and cite sources whenever it references documentation. What building block implements this?",
        options: ["Plugin — install a citation tool", "Rule — always-on behavioral guidance", "Skill — an explanation workflow", "Hook — fires when a file is read"],
        correctIndex: 1,
        rationale: "Always-on behavioral standards (tone, citation habit) are Rules. They shape every response the agent gives without being triggered by specific events."
      },
      {
        id: "w6-lab2",
        situation: "Your team has an 8-step deployment process that must happen in exact order every time a class web app goes live. What building block stores this?",
        options: ["Plugin — bundle the deployment steps", "Rule — always deploy in this order", "Skill — a repeatable deployment workflow", "Hook — fires on every file save"],
        correctIndex: 2,
        rationale: "A repeatable procedure with specific ordered steps is a Skill. Skills teach the agent a workflow it can apply on demand when deployment is requested."
      },
      {
        id: "w6-lab3",
        situation: "You want a format checker to run automatically every time the agent saves a file, and block the save if formatting is wrong. What building block is this?",
        options: ["Plugin — install a linter", "Rule — always format correctly", "Skill — a formatting procedure", "Hook — event-driven automation on file save"],
        correctIndex: 3,
        rationale: "This is event-driven automation that fires on a lifecycle event (file save) — a Hook. Hooks react to events; they are not passive guidance like rules, nor procedures like skills."
      },
      {
        id: "w6-lab4",
        situation: "A large research task should have one agent gathering sources, a second agent drafting a report, and a third agent reviewing it — all working independently with defined handoffs.",
        options: ["Plugin — bundle all three tasks", "Rule — cover all tasks in one rule", "Three Skills — one per task", "Three Subagents — each with focused scope"],
        correctIndex: 3,
        rationale: "Independent, parallel workers with separate contexts and goals are Subagents. Each handles its own scope and passes results to the lead agent for coordination."
      },
      {
        id: "w6-lab5",
        situation: "During a task the agent needs to search the web, read files from a folder, and call a calendar API. What building block are these?",
        options: ["Rules — always have access to these", "Skills — search and read procedures", "Tools — callable actions the agent invokes", "Hooks — fire when access is needed"],
        correctIndex: 2,
        rationale: "Search, file reading, and API calls are active capabilities the agent invokes during work — Tools. Tools let agents act on external systems."
      },
      {
        id: "w6-lab6",
        situation: "Your whole team wants a pre-packaged set of capabilities — a code linter, a documentation browser, and a testing framework — installed across all projects in one step.",
        options: ["Plugin — a bundled installable capability pack", "Rule — use all three tools by default", "Skill — a setup workflow", "Hook — fires on environment start"],
        correctIndex: 0,
        rationale: "A bundled, installable set of capabilities is a Plugin. Plugins package multiple features into a single extension rather than configuring each one individually."
      },
      {
        id: "w6-lab7",
        situation: "Every time a new session starts, you want the agent to automatically load the project's coding standards and current sprint goals before the first message.",
        options: ["Rule — add standards to the rules file", "Skill — a session setup workflow", "Tool — load context on demand", "Hook — session startup trigger"],
        correctIndex: 3,
        rationale: "An action that fires automatically at a specific lifecycle moment (session start) is a Hook. This startup hook loads context before the first message without requiring any user action."
      },
      {
        id: "w6-lab8",
        situation: "After every tool call you want to automatically log what tool was used, what the input was, and what the result was — for teacher review.",
        options: ["Rule — always log tool usage", "Tool — a logging tool the agent calls", "Hook — post-tool event fires automatically", "Skill — a logging procedure"],
        correctIndex: 2,
        rationale: "Automatic logging that fires after every tool call is a post-tool Hook. Hooks are reactive — they fire on events without the agent needing to remember to trigger them explicitly."
      }
    ]
  },

  "Rules vs skills sorting game": {
    type: "card-sorter",
    bins: [
      { id: "rule", label: "Rule — Always-On Guidance" },
      { id: "skill", label: "Skill — Repeatable Workflow" }
    ],
    cards: [
      { id: "rs1", text: "Always use British English spelling and punctuation in all written output.", correctBin: "rule", explanation: "A persistent behavioral standard that applies to everything the agent writes — a Rule." },
      { id: "rs2", text: "When deploying the web app: run tests → build → check output → push to staging → smoke test → push to production.", correctBin: "skill", explanation: "A specific ordered procedure for a recurring task — a Skill applied on demand when deployment is needed." },
      { id: "rs3", text: "Never include real student names, emails, or ID numbers in any output.", correctBin: "rule", explanation: "A safety and privacy boundary that applies across all work at all times — a Rule." },
      { id: "rs4", text: "To conduct a code review: read the diff → check logic errors → check security → suggest improvements → write summary comment.", correctBin: "skill", explanation: "A repeatable domain procedure with defined steps — a Skill the agent applies when asked to review code." },
      { id: "rs5", text: "When explaining a concept, always give: definition → real-world example → connection to prior knowledge.", correctBin: "rule", explanation: "A persistent teaching style standard that shapes how every explanation is structured — a Rule." },
      { id: "rs6", text: "For lesson plan creation: identify learning objectives → choose activities → plan assessment → add timing → add differentiation notes.", correctBin: "skill", explanation: "Lesson planning has a clear repeatable workflow with specific steps — a Skill used when creating a lesson." },
      { id: "rs7", text: "Always cite the source document and section number when referencing any class policy.", correctBin: "rule", explanation: "Always-on citation behavior is a Rule — it guides output standards without being a specific task procedure." },
      { id: "rs8", text: "To onboard a new student: send welcome email → add to roster → share Week 1 schedule → confirm receipt.", correctBin: "skill", explanation: "Onboarding is a specific multi-step procedure applied when a new student arrives — a Skill, not a persistent standard." }
    ]
  },

  "Tool permission boundary design": {
    type: "template-builder",
    exportLabel: "Export Permission Design",
    sections: [
      { id: "system-purpose", label: "System Purpose", hint: "What is this AI assistant for? One clear sentence.", placeholder: "A school study assistant that helps students find information about their courses, schedule, and class policies.", rows: 2 },
      { id: "allowed-tools", label: "Allowed Tools", hint: "List tools the assistant CAN use. For each: name, what it does, read/write access.", placeholder: "search_class_notes — read-only\nget_timetable — read-only\ncheck_policy — read-only, returns a policy section by topic\ndraft_message — creates a draft only, does NOT send", rows: 4 },
      { id: "forbidden-tools", label: "Forbidden Actions (What It Must NEVER Do Automatically)", hint: "Be specific — what actions are off-limits?", placeholder: "Never send any message without human approval.\nNever access another student's personal records.\nNever execute code or run shell commands.\nNever modify or delete any files.", rows: 3 },
      { id: "human-review", label: "Human Review Checkpoint (as a Rule)", hint: "Write the rule that forces human approval before high-impact actions.", placeholder: "Rule: Before any communication leaves this system, show the full draft to the teacher and require explicit written confirmation. Do not proceed without a clear 'yes'.", rows: 3 },
      { id: "guardrail-hook", label: "Guardrail Hook", hint: "Describe an automated check that fires before a sensitive tool runs.", placeholder: "Pre-tool hook on draft_message: log the intended recipient, subject, and full message body to the audit log. If the recipient is external to the school, require an additional confirmation step before creating the draft.", rows: 3 }
    ]
  },

  // ── Week 7 ──────────────────────────────────────────────────────────────────

  "Capstone planning workshop": {
    type: "template-builder",
    exportLabel: "Export Capstone Plan",
    sections: [
      { id: "problem", label: "Problem Statement", hint: "Describe the problem your project solves. Who has this problem? Why does it matter?", placeholder: "e.g. Students at our school struggle to find relevant revision notes quickly before exams. There is no organized, searchable system for past class materials, so students waste time hunting through files.", rows: 3 },
      { id: "users", label: "Target Users", hint: "Who will use this? List roles and what each needs.", placeholder: "e.g.\nStudents (Year 10–12): fast access to revision content, quiz generation.\nTeachers: upload and organize materials, view student activity.", rows: 3 },
      { id: "ai-features", label: "AI Features", hint: "What specifically will AI do in your project? Be concrete.", placeholder: "e.g. Semantic search over class notes. Auto-summarization of long documents. Quiz generation from selected topics. Adaptive difficulty based on prior quiz scores.", rows: 3 },
      { id: "prompts", label: "Prompt Examples", hint: "Write 1–2 example prompts your system will use.", placeholder: "System prompt: 'You are a study assistant. Answer questions using only the provided class notes. Always cite your source document and section.'\n\nUser prompt: 'Summarize the key points from Week 3 on data bias in 5 bullet points.'", rows: 5 },
      { id: "rag-idea", label: "RAG / Knowledge Source", hint: "What knowledge will your system retrieve from? How will it be chunked?", placeholder: "e.g. PDFs of class notes, indexed by week. Chunked at 300 words with 50-word overlap. Retrieved by semantic similarity. Freshness: re-indexed every Monday.", rows: 3 },
      { id: "mcp-tools", label: "MCP / Tool Ideas", hint: "What tools will your AI system use during tasks?", placeholder: "e.g. search_notes(query, week) — read-only\ngenerate_quiz(topic, count, difficulty) — produces MCQ\nget_student_progress(student_id) — teacher only", rows: 3 },
      { id: "agent-layers", label: "Agent Building Blocks (Week 6 — justify each)", hint: "Which building blocks does your project use? Why?", placeholder: "Rule: Always cite source, never invent content not in the notes.\nSkill: Quiz generation workflow — 5-step procedure.\nTool: search_notes, generate_quiz.\nHook: Pre-search log for teacher audit.\nSubagent: Separate scoring agent for quiz evaluation.", rows: 5 },
      { id: "safety", label: "Safety and Ethics Considerations", hint: "What could go wrong? How are you protecting users?", placeholder: "Risk: AI could hallucinate content not in the class notes.\nMitigation: RAG + 'only answer from documents' system prompt + teacher review of any AI output flagged as uncertain.\nPrivacy: No personal student data stored beyond anonymous session IDs.", rows: 4 },
      { id: "model-choice", label: "Model Choice and Cost Note", hint: "Which model, why, and roughly what will it cost?", placeholder: "Claude Haiku for search queries (fast, cheap, good for retrieval tasks — ~$0.25/M tokens).\nClaude Sonnet for quiz generation (better multi-step reasoning).\nEstimate: <$2/month for 100 active student sessions.", rows: 3 }
    ]
  },

  "Capstone agent building blocks mapping": {
    type: "scenario-judge",
    scenarios: [
      {
        id: "w7-map1",
        situation: "Your capstone study assistant should always respond in simple language for Year 10 students and never give answers that have not been verified against the class notes. What building block implements this?",
        options: ["Plugin — install a language simplifier", "Rule — persistent behavioral guidance for every response", "Skill — a simplification workflow to run on request", "Hook — fires when a response is generated"],
        correctIndex: 1,
        rationale: "Always-on behavioral standards (tone, verification requirement) are Rules. They shape every response the agent gives without being triggered by specific events or needing to be invoked."
      },
      {
        id: "w7-map2",
        situation: "Every time a student requests a quiz, your capstone should: identify the topic → retrieve relevant notes → generate 5 questions at the right difficulty → present one at a time → score and give feedback. What building block stores this?",
        options: ["Rule — always follow these quiz steps", "Skill — a repeatable quiz generation workflow", "Hook — fires when quiz is requested", "Subagent — independent quiz agent"],
        correctIndex: 1,
        rationale: "A multi-step repeatable procedure (quiz generation workflow) is a Skill. It defines exactly what the agent does step by step when a specific task is requested."
      },
      {
        id: "w7-map3",
        situation: "Your capstone has three independent modules: one retrieves notes, one generates practice questions, and one tracks student progress. They run in parallel and pass results to each other. What architecture fits best?",
        options: ["Three Rules, one for each module", "One Skill covering all three tasks", "Three Subagents coordinated by a lead agent", "Three Hooks that fire in sequence"],
        correctIndex: 2,
        rationale: "Three independent modules with their own scope, running in parallel with defined handoffs, are Subagents. The lead agent coordinates them and combines results."
      },
      {
        id: "w7-map4",
        situation: "Before your capstone's note search tool runs, you want to automatically log what the student searched for so teachers can review which topics students are struggling with most.",
        options: ["Rule — add logging to the behavior guide", "Tool — the search tool logs itself internally", "Hook — pre-tool hook fires before each search", "Skill — logging is a step in the search workflow"],
        correctIndex: 2,
        rationale: "Automatic logging that fires before a specific tool runs is a pre-tool Hook. Hooks react to lifecycle events without the agent needing to remember to trigger them each time."
      }
    ]
  },

  "Peer review": {
    type: "template-builder",
    exportLabel: "Export Peer Review",
    sections: [
      { id: "project-reviewed", label: "Project Being Reviewed", hint: "Briefly describe the project you are reviewing in 1–2 sentences.", placeholder: "e.g. A RAG-based study assistant for Year 10 Biology students that retrieves class notes and generates revision quizzes.", rows: 2 },
      { id: "clarity", label: "Clarity Check", hint: "Is the problem statement clear? Can you explain it back in one sentence?", placeholder: "The problem is [clear / unclear] because...\nI can summarize it as: ...\nThe target user is [well-defined / vague] because...", rows: 3 },
      { id: "ai-usefulness", label: "AI Usefulness Check", hint: "Does AI genuinely improve the solution? Or could a simpler tool do it?", placeholder: "AI is genuinely useful here because...\nA simpler approach might work for [X part] because...\nThe AI feature I think adds most value is...", rows: 3 },
      { id: "agent-layers", label: "Agent Layers Check", hint: "Which Week 6 building blocks does this project use? Are they justified?", placeholder: "They use: [list building blocks].\nI agree with [X] because...\nI think they should also consider [Y] because...\nOne building block that seems misidentified is... because...", rows: 4 },
      { id: "safety", label: "Safety and Ethics Check", hint: "What risks did they identify? What might they have missed?", placeholder: "They identified the risk of...\nI also see a potential issue with...\nA mitigation they could add: ...", rows: 3 },
      { id: "one-improvement", label: "Your Best Suggestion", hint: "What is the single most impactful improvement you would suggest and why?", placeholder: "The most valuable change would be... because it would directly improve... and reduce the risk of...", rows: 3 }
    ]
  }
};
