from copy import deepcopy


PROGRAM_TITLE = "AI-Enabled Student Program"
PROGRAM_SUBTITLE = "A 6-week practical program to help students understand, use, evaluate, and build with AI."


CURRICULUM_MAP = {
    "week-01": {
        "id": "week-01",
        "sequence": 1,
        "title": "AI Foundations and AI Literacy",
        "short_title": "AI Foundations",
        "theme_color": "sky",
        "estimated_minutes": 120,
        "focus": "Understand what AI is, where it is used, what it can and cannot do, and how to think critically about AI output.",
        "signature_activity": "Spot the hallucination studio",
        "status": "available",
    },
    "week-02": {
        "id": "week-02",
        "sequence": 2,
        "title": "Prompt Engineering and AI for Learning",
        "short_title": "Prompt Engineering",
        "theme_color": "pink",
        "estimated_minutes": 120,
        "focus": "Use better prompts, structure, constraints, iteration, and verification to turn AI into a stronger study partner.",
        "signature_activity": "Bad prompt vs good prompt challenge",
        "status": "available",
    },
    "week-03": {
        "id": "week-03",
        "sequence": 3,
        "title": "Data Thinking and Machine Learning Basics",
        "short_title": "Data and ML",
        "theme_color": "teal",
        "estimated_minutes": 120,
        "focus": "Understand datasets, features, labels, prediction, recommendation, and why biased data creates weak AI systems.",
        "signature_activity": "Manual classification game",
        "status": "available",
    },
    "week-04": {
        "id": "week-04",
        "sequence": 4,
        "title": "Python, Automation, and Computational Thinking",
        "short_title": "Python and Automation",
        "theme_color": "green",
        "estimated_minutes": 120,
        "focus": "Learn Python basics, logic, and simple automation patterns to understand how AI apps and workflows are built.",
        "signature_activity": "Build a rule-based chatbot",
        "status": "available",
    },
    "week-05": {
        "id": "week-05",
        "sequence": 5,
        "title": "RAG, MCP, and AI-Powered Systems",
        "short_title": "RAG and MCP",
        "theme_color": "violet",
        "estimated_minutes": 120,
        "focus": "Understand retrieval, semantic search, knowledge grounding, MCP, tools, resources, prompts, and agent-style systems.",
        "signature_activity": "Paper-based RAG simulation",
        "status": "available",
    },
    "week-06": {
        "id": "week-06",
        "sequence": 6,
        "title": "Capstone Development and AI Showcase",
        "short_title": "Capstone Showcase",
        "theme_color": "rose",
        "estimated_minutes": 140,
        "focus": "Apply AI concepts, prompting, data thinking, RAG, MCP, workflows, and ethics in a final AI-enabled project.",
        "signature_activity": "Capstone planning workshop",
        "status": "available",
    },
    "teacher-workshop-01": {
        "id": "teacher-workshop-01",
        "sequence": 7,
        "title": "AI for Teachers: Practical Classroom Planning Workshop",
        "short_title": "Teacher Workshop",
        "theme_color": "amber",
        "estimated_minutes": 360,
        "focus": "Help non-technical teachers use AI for lesson planning, classroom activities, assessment, feedback, differentiation, and productivity with clear review habits.",
        "signature_activity": "Topic to lesson workflow studio",
        "track": "teacher",
        "delivery_label": "Workshop",
        "sequence_label": "Teacher Workshop",
        "audience": "Non-technical teachers",
        "status": "available",
    },
}


def _concept(title, definition, why, use_case, examples, mistakes, practices):
    return {
        "title": title,
        "definition": definition,
        "why_it_matters": why,
        "real_world_use_case": use_case,
        "practical_examples": examples,
        "common_mistakes": mistakes,
        "best_practices": practices,
    }


def _text_excerpt(value, fallback="Concept summary coming soon."):
    if isinstance(value, list):
        value = value[0] if value else fallback
    if not value:
        return fallback
    value = value.strip()
    return value if len(value) <= 132 else f"{value[:129].rstrip()}..."


def _slugify(text):
    return text.lower().replace(" ", "-").replace("/", "-").replace(",", "").replace(".", "")


def _attach_media_slots(concepts):
    enriched = []
    for concept in concepts:
        updated = deepcopy(concept)
        slug = _slugify(updated["title"])
        updated["media_slots"] = [
            {
                "id": f"{slug}-image",
                "title": f"{updated['title']} Image",
                "kind": "image",
                "prompt": f"Reserved static visual slot for {updated['title']}."
            },
            {
                "id": f"{slug}-gif",
                "title": f"{updated['title']} GIF",
                "kind": "gif",
                "prompt": f"Reserved animated visual slot for {updated['title']}."
            }
        ]
        enriched.append(updated)
    return enriched


def _build_visual_gallery(week_id, content):
    gallery = []
    diagrams = content["curriculum"].get("diagrams", [])

    for index, diagram in enumerate(diagrams):
        summary = ""
        if isinstance(diagram, dict):
            fields = diagram.get("fields", {})
            summary = next(
                (value for value in fields.values() if isinstance(value, str)),
                f"Reserved week-level visual slot for {diagram.get('title', 'diagram')}."
            )
            title = diagram.get("title", f"Week Visual {index + 1}")
        else:
            title = f"Week Visual {index + 1}"
            summary = "Reserved week-level visual slot."

        gallery.append(
            {
                "id": f"{week_id}-visual-{index + 1}",
                "title": title,
                "kind": "image",
                "prompt": summary,
            }
        )

    primary_activity = content["curriculum"]["activities"][0]["title"] if content["curriculum"]["activities"] else "Class Activity"
    gallery.append(
        {
            "id": f"{week_id}-activity-gif",
            "title": f"{primary_activity} GIF",
            "kind": "gif",
            "prompt": f"Reserved animated week-level activity slot for {primary_activity}.",
        }
    )
    return gallery


def _sync_core_ideas_with_concepts(content):
    concept_items = [
        {
            "label": concept["title"],
            "description": _text_excerpt(concept.get("definition"))
        }
        for concept in content["curriculum"]["concepts"]
    ]

    for block in content["lesson"]["blocks"]:
        if block.get("type") == "concept-card-grid":
            block["items"] = concept_items
    content["lesson"]["blocks"] = [
        block for block in content["lesson"]["blocks"]
        if not (block.get("type") == "callout" and block.get("title") == "Tutor Message")
    ]


def _reorder_teacher_concepts(content):
    desired_order = [
        "AI",
        "Generative AI",
        "LLM",
        "Machine Learning",
        "Prompt and Prompt Template",
        "Tokens, Context Window, and Inference",
        "Lesson Planning with AI",
        "Assessment, Feedback, and Rubrics",
        "Differentiation",
        "Student Support and Re-Explanation",
        "Teacher Productivity and Communication",
        "Multimodal AI and Document AI",
        "RAG and Knowledge Grounding",
        "Agents, Tools, and Workflows",
        "Model Choice, Privacy, and Cost",
        "Hallucination",
        "Human-in-the-Loop and Workflow",
    ]

    concepts_by_title = {
        concept["title"]: concept for concept in content["curriculum"]["concepts"]
    }
    ordered = [concepts_by_title[title] for title in desired_order if title in concepts_by_title]
    remaining = [
        concept for concept in content["curriculum"]["concepts"]
        if concept["title"] not in desired_order
    ]
    content["curriculum"]["concepts"] = ordered + remaining


def _prune_runtime_content(content, week_id):
    content["curriculum"]["visual_gallery"] = _build_visual_gallery(week_id, content)
    content["curriculum"].pop("lecture_notes", None)
    content["curriculum"].pop("diagrams", None)
    content["curriculum"].pop("instructor_notes", None)
    content.pop("teacher_notes", None)


WEEK_CONTENT = {
    "week-01": {
        "overview": {
            "learning_objectives": [
                "Understand AI, ML, Data Science, Deep Learning, and Generative AI in simple language.",
                "Recognize where AI appears in daily life and study environments.",
                "Identify AI strengths, limitations, hallucinations, bias, and responsible AI concerns.",
                "Think critically about AI-generated outputs instead of trusting them automatically."
            ],
            "expected_outcomes": [
                "Students can explain key AI terms clearly.",
                "Students can identify common AI use cases around them.",
                "Students can spot risks such as hallucination and bias."
            ],
        },
        "lesson": {
            "id": "lecture-1",
            "week_id": "week-01",
            "title": "AI Foundations and AI Literacy",
            "estimated_minutes": 120,
            "blocks": [
                {"type": "hero", "title": "Lecture Goal", "content": "Students should understand what AI is, where it is used, what it can and cannot do, and how to think critically about AI-generated outputs."},
                {"type": "objective-list", "title": "Learning Outcomes", "items": [
                    {"label": "AI Literacy", "description": "Explain AI, ML, Data Science, Deep Learning, and Generative AI simply."},
                    {"label": "Critical Thinking", "description": "Evaluate outputs for hallucination, bias, and weakness."},
                    {"label": "Responsible AI", "description": "Connect AI use to privacy, fairness, ethics, and human judgment."}
                ]},
                {"type": "concept-card-grid", "title": "Core Ideas", "items": [
                    {"label": "AI", "description": "Software performing tasks that usually require human intelligence."},
                    {"label": "Machine Learning", "description": "Systems learning patterns from data instead of explicit rules."},
                    {"label": "Generative AI", "description": "AI creating new text, images, code, audio, or ideas."},
                    {"label": "Hallucination", "description": "A confident AI answer that is false, weak, or unsupported."}
                ]},
                {"type": "callout", "title": "Tutor Message", "content": "This lecture builds AI awareness, but the deeper goal is to help learners become skeptical, capable, and practical AI users."}
            ],
        },
        "curriculum": {
            "overview": {
                "program_title": PROGRAM_TITLE,
                "subtitle": PROGRAM_SUBTITLE,
                "learning_objectives": [
                    "Explain AI, ML, Data Science, Generative AI, and hallucination simply.",
                    "Recognize daily AI systems and where they help.",
                    "Evaluate AI risks such as bias, misinformation, and overtrust.",
                    "Practice responsible AI thinking in classroom discussions."
                ],
                "expected_outcomes": [
                    "Students become AI-literate and less passive users of AI systems.",
                    "Students begin identifying strong and weak AI outputs critically."
                ]
            },
            "concepts": [
                _concept("Artificial Intelligence", "AI is the ability of software systems to perform tasks that usually require human intelligence, such as understanding language, recognizing patterns, generating content, making predictions, and helping with decisions.", "Students need a clear, non-mythical definition before using AI tools seriously.", "A study assistant summarizes notes and suggests practice questions.", ["Chat assistants", "Recommendation systems", "Spam filters", "Image generators"], ["Thinking AI is magic", "Assuming all intelligent-looking software is AI"], ["Use plain definitions first", "Always pair capability with limitation"]),
                _concept("Machine Learning", "Machine Learning is a branch of AI where systems learn patterns from data instead of being manually programmed for every rule.", "It explains why data matters and why AI systems improve through examples.", "A recommendation engine learns from viewing patterns instead of hand-coded rules.", ["Spam detection", "Product recommendation", "Prediction models"], ["Thinking ML means human-like understanding", "Ignoring the role of training data"], ["Describe learning as pattern recognition", "Use familiar examples"]),
                _concept("Data Science", "Data Science is the process of collecting, cleaning, analyzing, visualizing, and interpreting data to make better decisions.", "Students must know that AI depends on data thinking, not just AI tools.", "A school survey is cleaned and analyzed to understand student study habits.", ["Survey analysis", "Visualization", "Pattern finding"], ["Thinking data science is only statistics", "Ignoring data cleaning"], ["Teach data as decision support", "Show messy vs clean data"]),
                _concept("Generative AI", "Generative AI creates new content such as text, images, code, audio, video, summaries, explanations, and ideas.", "This is the category students already use most often, so it must be explained precisely.", "An AI tool drafts an email, creates flashcards, or suggests project ideas.", ["Text generation", "Code generation", "Image prompts"], ["Confusing generation with truth", "Using output without checking"], ["Explain that generated does not mean verified", "Pair with fact-checking habits"]),
                _concept("Multimodal AI and Document AI", "Multimodal AI can work across more than one type of input or output, such as text, images, audio, or documents. Document AI includes tasks like OCR, form reading, layout understanding, and extracting useful information from files.", "Students need to understand that modern AI is not limited to chat text.", "A student scans a worksheet image and uses AI to extract questions, summarize the page, and identify key deadlines.", ["OCR from notes", "Image understanding", "Receipt or form extraction"], ["Assuming AI only works with typed prompts", "Trusting extracted document text without checking errors"], ["Show text, image, and document examples side by side", "Verify OCR and extracted fields"]),
                _concept("Hallucination, Bias, and Responsible AI", "A hallucination happens when AI produces information that sounds correct but is false, outdated, incomplete, or unsupported. Responsible AI means using AI safely, ethically, transparently, and critically.", "These ideas prevent blind trust and academic misuse.", "An AI gives a fake citation or a biased answer about a person or group.", ["Wrong summaries", "Invented references", "One-sided advice"], ["Believing confidence equals accuracy", "Ignoring fairness and privacy"], ["Verify claims", "Discuss ethics and academic honesty openly"])
            ],
            "lecture_notes": [
                {"title": "AI Literacy Narrative", "fields": {"summary": "Move learners from AI curiosity into critical literacy. Start with familiar tools, then discuss what AI does well, where it fails, and why human judgment remains essential."}},
                {"title": "Student-Friendly Definitions", "fields": {"definitions": [
                    "AI helps computers perform tasks that usually need human intelligence.",
                    "ML allows computers to learn patterns from data.",
                    "Data Science helps us understand data and make decisions.",
                    "Generative AI creates new content.",
                    "Hallucination means AI gives a confident but wrong answer."
                ]}}
            ],
            "diagrams": [
                {"title": "AI Capability Map", "fields": {"summary": "Future visual should compare pattern recognition, generation, prediction, and assistance."}},
                {"title": "Human Judgment Loop", "fields": {"summary": "Future visual should show AI output followed by verification, editing, and responsible use."}}
            ],
            "activities": [
                {"title": "AI around us scavenger hunt", "objective": "Recognize AI in daily life.", "instructions": ["Students list AI tools and systems they already use.", "Group results into study, communication, media, and productivity.", "Discuss where AI is visible and invisible."], "expected_outcome": "Students realize AI is already part of their routines.", "estimated_time": "15 minutes"},
                {"title": "Human vs AI guessing game", "objective": "Compare human and AI-created output.", "instructions": ["Present mixed examples of human-written and AI-written content.", "Students guess which is which.", "Discuss clues and weaknesses."], "expected_outcome": "Students learn that polished text is not automatically trustworthy.", "estimated_time": "15 minutes"},
                {"title": "AI myths vs reality discussion", "objective": "Challenge exaggerated assumptions about AI.", "instructions": ["Present common myths such as AI knows everything.", "Students debate whether each statement is true, false, or partly true.", "Connect back to limitations."], "expected_outcome": "Students gain a more balanced mental model.", "estimated_time": "15 minutes"},
                {"title": "Multimodal AI walkthrough", "objective": "Show that AI can work with text, images, and documents.", "instructions": ["Compare a text-only task, an image interpretation task, and a document extraction task.", "Ask students what changed in the input and what review is still needed.", "Discuss OCR and document AI limits."], "expected_outcome": "Students understand that AI systems increasingly work across multiple data types.", "estimated_time": "15 minutes"},
                {"title": "Spot the hallucination activity", "objective": "Identify weak or false AI output.", "instructions": ["Show an AI answer with one or more hidden factual problems.", "Students highlight what feels wrong.", "Verify with trusted sources."], "expected_outcome": "Students practice verification habits.", "estimated_time": "20 minutes"},
                {"title": "AI ethics debate", "objective": "Discuss responsible AI use.", "instructions": ["Use prompts about privacy, bias, and academic honesty.", "Students argue for safeguards and responsible boundaries.", "Summarize with practical rules."], "expected_outcome": "Students connect AI use with ethics and responsibility.", "estimated_time": "20 minutes"}
            ],
            "assignments": [
                {"title": "AI in My Life report", "fields": {
                    "problem_statement": "Create a one-page report about how AI already affects your studies, work, or daily life.",
                    "requirements": ["Include at least 10 AI tools or systems", "Explain where AI is helpful", "Identify at least two risks or concerns", "Use clear simple language"],
                    "submission_expectations": ["One-page report", "Add title and student name"],
                    "evaluation_criteria": ["Clarity", "Practical understanding", "Critical thinking", "Correct use of AI terminology"]
                }}
            ],
            "instructor_notes": [
                {"title": "Facilitation Notes", "fields": {"notes": [
                    "Keep the lecture practical and discussion-driven.",
                    "Use live examples of wrong AI output to build skepticism.",
                    "Repeat the phrase: useful does not always mean correct."
                ]}}
            ]
        },
        "activity": {
            "id": "activity-week-01",
            "week_id": "week-01",
            "type": "scenario-choice",
            "title": "Spot the Hallucination Studio",
            "instructions": "Review AI-generated claims and note which parts need verification or human judgment.",
            "items": [{"label": "Claim 1"}, {"label": "Claim 2"}, {"label": "Claim 3"}],
            "success_criteria": "Students can explain why a response may sound strong while still being weak or false."
        },
        "quiz": {
            "id": "quiz-week-01",
            "week_id": "week-01",
            "title": "AI Foundations Checkpoint",
            "passing_score": 70,
            "questions": [
                {"id": "w1-q1", "prompt": "What is the best simple definition of AI in this program?", "options": ["A robot only", "Software performing tasks that usually require human intelligence", "A spreadsheet tool", "A hardware device"], "answer_index": 1, "explanation": "AI refers to software systems doing tasks involving language, pattern recognition, prediction, or decision support."},
                {"id": "w1-q2", "prompt": "What is a hallucination?", "options": ["A perfectly cited answer", "A type of database", "A confident but false or unsupported AI answer", "A method for storing files"], "answer_index": 2, "explanation": "Hallucination means the output sounds plausible but is wrong, incomplete, or unsupported."},
                {"id": "w1-q3", "prompt": "Why is responsible AI important?", "options": ["Because AI is always correct", "Because students should think about privacy, fairness, bias, and human judgment", "Because AI replaces all human decisions", "Because it makes prompts longer"], "answer_index": 1, "explanation": "Responsible AI connects use of AI to safety, fairness, ethics, and verification."}
            ]
        },
        "reflection": {
            "prompt": "Where do you already use AI, and where do you think you should be more careful before trusting it?",
            "placeholder": "I already use AI in study tools, recommendations, and writing support. I should be more careful with facts, citations, and decisions that affect people."
        },
        "teacher_notes": [
            "Begin with familiar tools students already use so the class feels relevant immediately.",
            "Do not oversimplify hallucination as a rare mistake. Treat it as a normal risk to be managed.",
            "Keep linking AI use back to responsibility and verification."
        ]
    },
    "week-02": {
        "overview": {
            "learning_objectives": [
                "Understand how prompt quality affects AI output quality.",
                "Use role, context, constraints, examples, and output format deliberately.",
                "Practice iteration and verification when working with AI.",
                "Explain tokens, context windows, inference, and sampling settings in simple language."
            ],
            "expected_outcomes": [
                "Students can improve weak prompts into useful ones.",
                "Students can use AI more effectively for study and learning.",
                "Students can connect prompt behavior to model response settings and limits."
            ],
        },
        "lesson": {
            "id": "lecture-2",
            "week_id": "week-02",
            "title": "Prompt Engineering and AI for Learning",
            "estimated_minutes": 120,
            "blocks": [
                {"type": "hero", "title": "Lecture Goal", "content": "Students should learn how to communicate effectively with AI and use it as a study partner without blindly trusting it."},
                {"type": "objective-list", "title": "Prompt Skills", "items": [
                    {"label": "Prompt Structure", "description": "Use role, task, context, constraints, output format, and examples."},
                    {"label": "Iteration", "description": "Improve weak prompts step by step."},
                    {"label": "Verification", "description": "Check useful-looking outputs before trusting them."}
                ]},
                {"type": "concept-card-grid", "title": "Prompt Formula", "items": [
                    {"label": "Role", "description": "Who the AI should act like."},
                    {"label": "Task", "description": "What the AI should do."},
                    {"label": "Context", "description": "Important background."},
                    {"label": "Constraints", "description": "Limits on length, tone, or detail."},
                    {"label": "Output Format", "description": "How the answer should be returned."},
                    {"label": "Examples", "description": "Samples that make output more precise."}
                ]},
                {"type": "callout", "title": "Tutor Message", "content": "Prompting is not magic wording. It is structured communication with iteration and review."}
            ]
        },
        "curriculum": {
            "overview": {
                "program_title": PROGRAM_TITLE,
                "learning_objectives": [
                    "Use AI more effectively for study and writing.",
                    "Improve prompts with structure and iteration.",
                    "Compare weak and strong AI responses critically.",
                    "Understand how token limits and sampling settings shape outputs."
                ],
                "expected_outcomes": [
                    "Students can submit useful study prompts.",
                    "Students understand that verification remains necessary.",
                    "Students can explain why the same prompt may yield different outputs."
                ]
            },
            "concepts": [
                _concept("Prompt", "A prompt is an instruction given to AI.", "This is the main control surface students use in modern AI tools.", "A student asks AI to generate revision questions from notes.", ["Study prompts", "Writing prompts", "Coding prompts"], ["Being vague", "Asking for too many things at once"], ["Ask for one clear outcome", "Give context and format"]),
                _concept("Role + Task + Context + Constraints + Output Format + Examples", "A good prompt gives role, task, context, constraints, expected output format, and sometimes examples.", "This structure makes prompting repeatable instead of random.", "A learner asks an AI tutor to explain fractions to grade 8 level with practice questions.", ["Tutor prompt", "Planner prompt", "Writing support prompt"], ["Forgetting audience", "Forgetting output format"], ["Reuse the formula", "Revise one missing element at a time"]),
                _concept("Iteration", "Iteration means improving the prompt step by step.", "The first result is often a draft, not the final answer.", "A weak explanation becomes better after adding context and a required format.", ["Rewrite and retry", "Prompt chaining", "Refinement loops"], ["Expecting perfection on the first try", "Changing everything at once"], ["Improve one weakness at a time", "Compare versions"]),
                _concept("AI as a Learning Partner", "AI can act as a tutor, planner, explainer, quiz maker, and writing assistant when guided well.", "Students should use AI actively, not passively.", "A student turns notes into flashcards and quiz questions.", ["Flashcards", "Study plans", "Practice questions"], ["Copying output without understanding", "Using AI instead of thinking"], ["Use AI to support learning, not replace it", "Review and edit outputs"]),
                _concept("Verification", "Verification means checking AI output using trusted sources, logic, or human review.", "Good prompting still does not remove the need for fact-checking.", "A student checks an AI summary against lecture slides or a textbook.", ["Cross-checking facts", "Comparing with source notes", "Peer review"], ["Trusting polished text automatically", "Ignoring missing details"], ["Verify important claims", "Use trusted references"]),
                _concept("Tokens, Context Windows, and Inference", "A token is a small unit of text the model reads or generates. The context window is the amount of information the model can consider at one time. Inference is the process of generating an answer after the model receives a prompt.", "Students use AI better when they know the model has memory and output limits.", "A long research prompt may lose earlier details if it exceeds the context window.", ["Long chat history", "Prompt trimming", "Short answer vs long answer"], ["Thinking the model remembers everything forever", "Ignoring token cost and limits"], ["Keep prompts focused", "Summarize long context before continuing"]),
                _concept("Attention, Temperature, Top-p, and Top-k", "Attention is how the model weighs different parts of the input while generating an answer. Temperature controls how predictable or creative the output is. Top-p and top-k are sampling methods that limit which next-token choices the model can select from.", "These ideas explain why identical prompts can still produce more stable or more varied outputs.", "A factual study guide uses lower temperature, while a brainstorming prompt can tolerate more variation.", ["Stable summaries", "Creative writing", "Controlled generation"], ["Using high creativity settings for factual tasks", "Thinking randomness equals intelligence"], ["Use lower creativity for accuracy-focused tasks", "Teach settings through examples instead of math"]),
                _concept("AI Next-Token Generation", "Large language models generate one token at a time by predicting the most likely next token based on the prompt and prior tokens.", "This gives students a realistic mental model of how text generation works.", "When AI writes an explanation, it is repeatedly selecting the next likely piece of text rather than planning like a human.", ["Autocomplete at scale", "Sentence continuation", "Step-by-step generation"], ["Confusing fluent text with deep understanding", "Thinking the model reasons exactly like a person"], ["Teach generation as prediction plus context", "Link this idea back to verification"])
            ],
            "lecture_notes": [
                {"title": "Prompt Formula", "fields": {"template": ["Role", "Task", "Context", "Constraints", "Output Format", "Examples"]}},
                {"title": "Worked Example", "fields": {"example": "You are a friendly math tutor. Explain fractions to a grade 8 student using simple examples. Keep the answer short and include 3 practice questions."}},
                {"title": "Generation Settings Notes", "fields": {"summary": "Use lower temperature for factual tasks, explain context windows as short-term memory limits, and describe next-token generation as prediction happening one token at a time."}}
            ],
            "diagrams": [
                {"title": "Prompt Improvement Loop", "fields": {"summary": "Future visual should show prompt -> output -> review -> refined prompt -> better output."}}
            ],
            "activities": [
                {"title": "Bad prompt vs good prompt challenge", "objective": "Show that prompt quality shapes output quality.", "instructions": ["Give students weak prompts.", "Ask them to improve each using the formula.", "Compare results."], "expected_outcome": "Students see direct gains from better prompt structure.", "estimated_time": "20 minutes"},
                {"title": "Prompt improvement competition", "objective": "Practice iterative improvement.", "instructions": ["Students compete to improve a weak prompt most effectively.", "Vote on the strongest revised version.", "Discuss why it works."], "expected_outcome": "Students learn prompt quality through comparison.", "estimated_time": "15 minutes"},
                {"title": "AI tutor simulation", "objective": "Use AI as a learning partner.", "instructions": ["Students create a study prompt for a difficult concept.", "Test it.", "Revise it using feedback."], "expected_outcome": "Students produce usable AI tutor prompts.", "estimated_time": "20 minutes"},
                {"title": "AI-generated flashcards", "objective": "Turn notes into active study material.", "instructions": ["Paste a short topic summary.", "Ask AI for flashcards.", "Review and fix any weak cards."], "expected_outcome": "Students create better study aids with AI.", "estimated_time": "15 minutes"},
                {"title": "Compare weak and strong AI answers", "objective": "Evaluate quality differences.", "instructions": ["Run weak and strong prompts for the same task.", "Compare usefulness, accuracy, and structure.", "Note what changed."], "expected_outcome": "Students internalize the value of structured prompting.", "estimated_time": "15 minutes"}
            ],
            "assignments": [
                {"title": "Personal AI study assistant prompt pack", "fields": {
                    "problem_statement": "Create a prompt pack you can reuse for study, writing, revision, and planning.",
                    "requirements": ["At least five prompts", "Include role, task, context, constraints, and format", "At least one prompt must be revised after testing"],
                    "submission_expectations": ["Submit as Markdown or document", "Label each prompt clearly"],
                    "evaluation_criteria": ["Usefulness", "Clarity", "Reusability", "Quality of iteration"]
                }}
            ],
            "instructor_notes": [
                {"title": "Facilitation Notes", "fields": {"notes": [
                    "Show live weak-to-strong examples rather than only describing prompting.",
                    "Make students explain why each prompt improvement matters.",
                    "Keep verification connected to every example."
                ]}}
            ]
        },
        "activity": {
            "id": "activity-week-02",
            "week_id": "week-02",
            "type": "prompt-editor",
            "title": "Prompt Improvement Lab",
            "instructions": "Rewrite weak prompts using role, task, context, constraints, output format, and examples.",
            "items": [{"label": "Role"}, {"label": "Task"}, {"label": "Context"}, {"label": "Constraints"}, {"label": "Output Format"}],
            "success_criteria": "Produce a clearer study prompt that leads to a more useful AI answer."
        },
        "quiz": {
            "id": "quiz-week-02",
            "week_id": "week-02",
            "title": "Prompt Engineering Checkpoint",
            "passing_score": 70,
            "questions": [
                {"id": "w2-q1", "prompt": "What is a prompt?", "options": ["A file type", "An instruction given to AI", "A database rule", "A browser setting"], "answer_index": 1, "explanation": "A prompt is the instruction or input given to an AI system."},
                {"id": "w2-q2", "prompt": "Which prompt is stronger?", "options": ["Help me study", "You are a friendly tutor. Explain fractions to a grade 8 learner using simple examples and 3 practice questions.", "Do something better", "Explain anything"], "answer_index": 1, "explanation": "The stronger prompt includes role, audience, context, and output expectations."},
                {"id": "w2-q3", "prompt": "Why is verification still needed even with a strong prompt?", "options": ["Because prompts are illegal", "Because AI can still be wrong or incomplete", "Because AI ignores all details", "Because constraints remove meaning"], "answer_index": 1, "explanation": "A strong prompt improves quality but does not guarantee accuracy."},
                {"id": "w2-q4", "prompt": "What is a context window?", "options": ["The amount of information a model can consider at one time", "A browser theme", "A way to delete tokens", "A file folder"], "answer_index": 0, "explanation": "The context window is how much prompt and conversation material the model can work with at once."},
                {"id": "w2-q5", "prompt": "What does temperature mainly influence?", "options": ["How creative or predictable the output is", "Internet speed", "Database size", "Screen brightness"], "answer_index": 0, "explanation": "Temperature changes how conservative or varied the next-token choices can be."}
            ]
        },
        "reflection": {
            "prompt": "What makes a prompt more useful for learning, and what is one way you would verify the answer?",
            "placeholder": "A useful prompt gives role, task, context, and output format. I would verify key facts by checking my notes or a trusted source."
        },
        "teacher_notes": [
            "Turn prompting into an iterative workshop, not a lecture about templates.",
            "Always compare at least one weak and one strong answer live."
        ]
    },
    "week-03": {
        "overview": {
            "learning_objectives": [
                "Understand datasets, features, labels, training data, testing data, and prediction.",
                "Recognize how recommendation and classification systems work at a simple level.",
                "Explain how bias or poor data can weaken ML results.",
                "Understand regression and neural networks at a beginner-friendly level."
            ],
            "expected_outcomes": [
                "Students can identify features and labels.",
                "Students can discuss fairness and bias in simple ML terms.",
                "Students can explain the difference between classification and regression."
            ]
        },
        "lesson": {
            "id": "lecture-3",
            "week_id": "week-03",
            "title": "Data Thinking and Machine Learning Basics",
            "estimated_minutes": 120,
            "blocks": [
                {"type": "hero", "title": "Lecture Goal", "content": "Students should understand how AI systems use data, how simple predictions work, and why poor data creates poor AI results."},
                {"type": "objective-list", "title": "ML Thinking Skills", "items": [
                    {"label": "Data", "description": "Understand datasets and why examples matter."},
                    {"label": "Prediction", "description": "Explain features, labels, and outcomes."},
                    {"label": "Bias", "description": "Recognize fairness and quality issues in data."}
                ]},
                {"type": "concept-card-grid", "title": "Core ML Language", "items": [
                    {"label": "Feature", "description": "An input used by the model."},
                    {"label": "Label", "description": "The answer the model is trying to predict."},
                    {"label": "Training Data", "description": "Examples used to teach the model."},
                    {"label": "Testing Data", "description": "Examples used to check whether learning worked."}
                ]},
                {"type": "callout", "title": "Tutor Message", "content": "This lecture should make prediction systems feel understandable rather than mysterious."}
            ]
        },
        "curriculum": {
            "overview": {
                "program_title": PROGRAM_TITLE,
                "learning_objectives": [
                    "Understand basic machine learning language.",
                    "Use data thinking to explain prediction systems.",
                    "Discuss how bias and poor-quality data affect AI.",
                    "Recognize when ML systems use regression or neural-network style learning."
                ],
                "expected_outcomes": [
                    "Students can interpret a simple dataset.",
                    "Students can connect data quality to AI quality.",
                    "Students can describe simple numeric prediction and layered pattern-learning ideas."
                ]
            },
            "concepts": [
                _concept("Data and Dataset", "Data is information collected about something. A dataset is an organized collection of data.", "AI systems depend on data as raw material.", "A student survey becomes a dataset for analysis or prediction.", ["Survey rows", "Ratings", "Reviews"], ["Thinking data means only numbers", "Ignoring structure and quality"], ["Show concrete datasets", "Discuss what each row and column means"]),
                _concept("Features and Labels", "A feature is an input used by the model. A label is the answer the model is trying to predict.", "These are the most important beginner terms for understanding ML prediction.", "A recommendation model may use previous choices as features to predict the next likely choice.", ["Email words", "Attendance rate", "Purchase history"], ["Confusing inputs with outputs", "Using unreliable labels"], ["Name features clearly", "Check whether labels are trustworthy"]),
                _concept("Training Data and Testing Data", "Training data teaches the model. Testing data checks if the model learned well.", "Students need to know that learning and checking are not the same step.", "A model is trained on past examples and then tested on unseen examples.", ["Train split", "Test split", "Validation habit"], ["Testing on the same data used for training", "Assuming memorization means understanding"], ["Separate teaching from evaluation", "Explain unseen examples"]),
                _concept("Classification, Prediction, and Recommendation", "Classification sorts items into categories. Prediction estimates an outcome. Recommendation suggests likely useful items.", "These are common ML patterns students already encounter online.", "A movie app recommends films, a spam filter classifies messages, and a system predicts exam risk.", ["Spam vs not spam", "Pass/fail risk", "Suggested videos"], ["Thinking all AI tasks are the same", "Ignoring confidence and uncertainty"], ["Compare the three task types explicitly", "Use familiar applications"]),
                _concept("Accuracy, Bias, and Overfitting", "Accuracy means how often the model is right. Bias happens when data is unfair or one-sided. Overfitting happens when the model learns the training examples too narrowly.", "Students should know that performance and fairness both matter.", "A model trained on incomplete examples works poorly for underrepresented cases.", ["Unbalanced data", "Misleadingly high training performance", "Unfair recommendations"], ["Thinking high accuracy solves everything", "Ignoring fairness"], ["Discuss performance and fairness together", "Use simple examples of one-sided data"]),
                _concept("Regression in Machine Learning", "Regression is a machine learning task that predicts a number rather than a category.", "Students often hear prediction and assume everything is classification. Regression clarifies that some models estimate values like price, score, or time.", "A model predicts exam score, delivery time, or house rent from input features.", ["Price prediction", "Score prediction", "Demand forecasting"], ["Thinking regression means repeating backwards", "Treating every ML task as pass/fail"], ["Compare numeric prediction with category prediction", "Use familiar examples like marks or cost"]),
                _concept("Neural Networks", "A neural network is a machine learning system made of layers that learn patterns from data by adjusting many internal weights.", "Students need a simple bridge from basic ML to modern AI systems such as image models and large language models.", "An image classifier learns patterns such as shapes and textures through many training examples.", ["Image recognition", "Speech recognition", "Large language models"], ["Thinking neural networks copy the human brain exactly", "Assuming more layers automatically means better results"], ["Teach them as layered pattern learners", "Keep the explanation conceptual rather than mathematical"])
            ],
            "lecture_notes": [
                {"title": "Student-Friendly Definitions", "fields": {"definitions": [
                    "Data is information collected about something.",
                    "A feature is an input used by the model.",
                    "A label is the answer the model is trying to predict.",
                    "Training data teaches the model.",
                    "Testing data checks if the model learned well.",
                    "Bias happens when the data is unfair, incomplete, or one-sided.",
                    "Regression predicts a number such as marks or price.",
                    "Neural networks learn layered patterns from data."
                ]}}
            ],
            "diagrams": [
                {"title": "Simple ML Pipeline", "fields": {"summary": "Future visual should show collect data -> choose features and labels -> train -> test -> use prediction."}}
            ],
            "activities": [
                {"title": "Manual classification game", "objective": "Experience the logic of sorting examples into categories.", "instructions": ["Give a set of examples.", "Ask students to classify them using visible rules or patterns.", "Discuss why edge cases are difficult."], "expected_outcome": "Students understand basic classification thinking.", "estimated_time": "15 minutes"},
                {"title": "Train your friend like an AI", "objective": "Simulate learning from examples.", "instructions": ["One student acts as the model.", "Others provide labeled examples.", "The student predicts the next case."], "expected_outcome": "Students understand training through examples.", "estimated_time": "15 minutes"},
                {"title": "Classroom survey data collection", "objective": "Create a mini dataset.", "instructions": ["Collect survey answers from the class.", "Identify columns, features, and possible labels.", "Discuss how the data could be used."], "expected_outcome": "Students connect real data collection to AI systems.", "estimated_time": "20 minutes"},
                {"title": "Recommendation system on paper", "objective": "Understand recommendations without code.", "instructions": ["Create a simple preference table.", "Use it to suggest an item to a user.", "Explain why the recommendation was made."], "expected_outcome": "Students see recommendation as data-based reasoning.", "estimated_time": "15 minutes"},
                {"title": "Bias in dataset discussion", "objective": "Connect fairness and data quality.", "instructions": ["Present a one-sided or incomplete dataset.", "Ask what problems might result.", "Discuss safer design choices."], "expected_outcome": "Students recognize that bad data can create unfair results.", "estimated_time": "15 minutes"},
                {"title": "Regression estimate challenge", "objective": "Differentiate classification from numeric prediction.", "instructions": ["Give simple student or school examples such as marks or attendance.", "Ask which tasks require a category and which require a number.", "Discuss what features would be useful for each."], "expected_outcome": "Students can separate regression tasks from classification tasks.", "estimated_time": "15 minutes"}
            ],
            "assignments": [
                {"title": "Small dataset reflection", "fields": {
                    "problem_statement": "Collect a small dataset and explain what predictions could be made from it.",
                    "requirements": ["At least 10 rows of data", "Name possible features", "Name at least one possible label or prediction target", "Discuss one possible bias or weakness"],
                    "submission_expectations": ["Submit as table plus explanation"],
                    "evaluation_criteria": ["Clarity", "Correct use of terms", "Quality of reasoning", "Awareness of bias"]
                }}
            ],
            "instructor_notes": [
                {"title": "Facilitation Notes", "fields": {"notes": [
                    "Use paper and human examples before showing technical ML language.",
                    "Keep overfitting intuitive: memorizing the training set is not the same as generalizing well."
                ]}}
            ]
        },
        "activity": {
            "id": "activity-week-03",
            "week_id": "week-03",
            "type": "match-pairs",
            "title": "Features and Labels Workshop",
            "instructions": "Match data examples with whether they act as features, labels, or outcomes in a simple prediction task.",
            "items": [{"label": "Feature"}, {"label": "Label"}, {"label": "Training Data"}, {"label": "Testing Data"}],
            "success_criteria": "Students can correctly explain how a simple dataset supports classification or prediction."
        },
        "quiz": {
            "id": "quiz-week-03",
            "week_id": "week-03",
            "title": "Data and ML Checkpoint",
            "passing_score": 70,
            "questions": [
                {"id": "w3-q1", "prompt": "What is a feature?", "options": ["A prediction target", "An input used by the model", "A file format", "A database user"], "answer_index": 1, "explanation": "Features are the input signals used to make a prediction."},
                {"id": "w3-q2", "prompt": "What does testing data do?", "options": ["Teaches the model", "Checks whether the model learned well", "Deletes weak examples", "Stores API calls"], "answer_index": 1, "explanation": "Testing data helps measure whether the model performs well on unseen cases."},
                {"id": "w3-q3", "prompt": "Why is bias a concern?", "options": ["Because it makes models too colorful", "Because unfair or one-sided data can create unfair outputs", "Because it always improves accuracy", "Because it removes training data"], "answer_index": 1, "explanation": "Bias can make model outputs unfair, distorted, or weak for some groups or cases."},
                {"id": "w3-q4", "prompt": "What does regression predict?", "options": ["A number or continuous value", "Only categories", "Only file names", "Only passwords"], "answer_index": 0, "explanation": "Regression predicts values such as marks, cost, or time."}
            ]
        },
        "reflection": {
            "prompt": "Choose one small dataset idea and explain what features, labels, and risks it might include.",
            "placeholder": "A study habits dataset could use attendance and revision hours as features, exam outcome as the label, and may be biased if only one type of student is represented."
        },
        "teacher_notes": [
            "Use many concrete examples because dataset language can feel abstract at first.",
            "Bias should be taught as a real design problem, not just a theoretical warning."
        ]
    },
    "week-04": {
        "overview": {
            "learning_objectives": [
                "Use computational thinking to break problems into steps.",
                "Understand variables, conditions, loops, functions, and lists.",
                "Connect Python basics to automation and simple AI-enabled logic.",
                "Understand local model use, open-source model workflows, and simple tooling such as Ollama."
            ],
            "expected_outcomes": [
                "Students can explain and write simple Python logic.",
                "Students can extend a rule-based chatbot or simple automation flow.",
                "Students can explain what it means to run an open-source model locally."
            ]
        },
        "lesson": {
            "id": "lecture-4",
            "week_id": "week-04",
            "title": "Python, Automation, and Computational Thinking",
            "estimated_minutes": 120,
            "blocks": [
                {"type": "hero", "title": "Lecture Goal", "content": "Students should learn basic coding and logical thinking so they can understand how AI apps and simple automation workflows are built."},
                {"type": "objective-list", "title": "Computational Thinking Skills", "items": [
                    {"label": "Decomposition", "description": "Break a problem into smaller steps."},
                    {"label": "Python Basics", "description": "Use variables, conditions, loops, functions, and lists."},
                    {"label": "Automation", "description": "Connect logic to simple software actions and chat flows."}
                ]},
                {"type": "concept-card-grid", "title": "Python Basics", "items": [
                    {"label": "Variable", "description": "Stores information."},
                    {"label": "Condition", "description": "Lets a program make decisions."},
                    {"label": "Loop", "description": "Repeats an action."},
                    {"label": "Function", "description": "Reusable code for a repeated task."}
                ]},
                {"type": "callout", "title": "Tutor Message", "content": "The goal is not advanced software engineering. The goal is enough coding logic to understand AI apps and automation workflows."}
            ]
        },
        "curriculum": {
            "overview": {
                "program_title": PROGRAM_TITLE,
                "learning_objectives": [
                    "Use computational thinking and Python basics.",
                    "Connect simple code with rule-based automation.",
                    "Build confidence for future AI workflows and lightweight apps.",
                    "Introduce practical local-model workflows without changing the app structure."
                ],
                "expected_outcomes": [
                    "Students can complete simple Python exercises.",
                    "Students can improve a basic chatbot or automation idea.",
                    "Students can compare local and cloud model usage at a high level."
                ]
            },
            "concepts": [
                _concept("Computational Thinking", "Computational thinking means breaking a problem into smaller steps.", "It is the mindset behind both programming and workflow design.", "A study scheduling problem becomes inputs, decisions, reminders, and outputs.", ["Decomposition", "Step planning", "Repeatable logic"], ["Trying to solve everything at once", "Skipping step order"], ["Write the process first", "Use plain language before code"]),
                _concept("Variables and Conditions", "A variable stores information. A condition helps a program make decisions.", "These are the foundations of automation and simple app logic.", "A chatbot stores the user choice and chooses a response using a condition.", ["Marks", "User choice", "If/else rules"], ["Treating stored values and decisions as the same thing", "Writing unclear decision paths"], ["Use real examples like names, choices, and scores", "Trace the logic slowly"]),
                _concept("Loops and Functions", "A loop repeats an action. A function is reusable code.", "Students need these ideas to understand how programs avoid repetition and structure logic cleanly.", "A weekly revision reminder repeats for several tasks, while a function formats messages consistently.", ["Repeat tasks", "Reusable greeting function", "Simple helpers"], ["Repeating code manually", "Ignoring when a task repeats"], ["Show repetition visually", "Turn repeated actions into reusable blocks"]),
                _concept("Lists and Simple App Logic", "Lists store multiple items and help programs manage collections.", "Many beginner apps and workflows depend on keeping track of items, questions, or responses.", "A quiz app stores questions in a list and shows them one by one.", ["Task lists", "Question lists", "Response options"], ["Treating lists like single values", "Hardcoding every step separately"], ["Use small practical examples", "Connect lists to real student tasks"]),
                _concept("Automation and Rule-Based Chatbots", "Automation means letting software perform repetitive tasks. A rule-based chatbot replies using fixed rules.", "This bridges programming basics with how students can build simple AI-enabled systems.", "A study helper bot responds differently based on selected subjects or deadlines.", ["FAQ bot", "Reminder bot", "Simple calculator"], ["Calling any rule-based chatbot true AI", "Ignoring edge cases"], ["Explain the difference between rule-based and learning-based systems", "Keep examples small and useful"]),
                _concept("Open-Source Models, Ollama, and Local Inference", "Open-source models are AI models whose weights or code can be used more openly than closed frontier systems. Ollama is a tool that helps run supported models locally on your own machine. Local inference means the model generates output on your device instead of a remote cloud service.", "Students should know there are practical ways to explore AI systems beyond browser chat apps.", "A student runs a small local model with Ollama to test prompts privately on a laptop.", ["Local chatbot", "Offline experimentation", "Private note summarization"], ["Assuming local models are always equal to frontier models", "Ignoring hardware limits"], ["Compare privacy, cost, speed, and quality", "Start with small models and realistic expectations"])
            ],
            "lecture_notes": [
                {"title": "Student-Friendly Definitions", "fields": {"definitions": [
                    "Computational thinking means breaking a problem into smaller steps.",
                    "A variable stores information.",
                    "A condition helps a program make decisions.",
                    "A loop repeats an action.",
                    "A function is reusable code.",
                    "Automation means letting software perform repetitive tasks.",
                    "Open-source models can often be run locally.",
                    "Ollama is a practical tool for running supported models on a local machine."
                ]}}
            ],
            "diagrams": [
                {"title": "Mini App Logic Flow", "fields": {"summary": "Future visual should show input -> condition -> action -> output for a basic chatbot or quiz app."}}
            ],
            "activities": [
                {"title": "Human robot instruction game", "objective": "Practice precise instructions.", "instructions": ["One student acts as a robot.", "Another gives step-by-step instructions for a task.", "The class identifies missing or ambiguous steps."], "expected_outcome": "Students see why exact logic matters.", "estimated_time": "15 minutes"},
                {"title": "Build a simple calculator", "objective": "Connect variables, input, and output.", "instructions": ["Define two values.", "Perform a simple operation.", "Print the result."], "expected_outcome": "Students see a basic Python program flow.", "estimated_time": "15 minutes"},
                {"title": "Build a quiz app", "objective": "Use lists, conditions, and output.", "instructions": ["Store a few questions.", "Check answers.", "Show the score."], "expected_outcome": "Students connect logic with interactive behavior.", "estimated_time": "20 minutes"},
                {"title": "Build a rule-based chatbot", "objective": "Apply decision logic.", "instructions": ["Create prompt options.", "Use conditions to choose replies.", "Test several paths."], "expected_outcome": "Students build a basic conversational flow.", "estimated_time": "20 minutes"},
                {"title": "Automate a study schedule", "objective": "Turn a repetitive task into simple logic.", "instructions": ["List tasks.", "Assign days or priorities.", "Describe or code a simple automation pattern."], "expected_outcome": "Students connect automation to study life.", "estimated_time": "15 minutes"},
                {"title": "Run an open-source model locally", "objective": "Understand practical local AI usage.", "instructions": ["Introduce Ollama as a local model runner.", "Compare what changes when the model runs on-device instead of in the cloud.", "Discuss privacy, hardware limits, and where local models are useful."], "expected_outcome": "Students understand local inference as a practical option for lightweight AI workflows.", "estimated_time": "20 minutes"}
            ],
            "assignments": [
                {"title": "Improve the chatbot", "fields": {
                    "problem_statement": "Extend the basic chatbot by adding at least five more responses or branches.",
                    "requirements": ["Add at least five new responses", "Use conditions clearly", "Make the bot useful for study or school questions"],
                    "submission_expectations": ["Submit code or pseudocode plus short explanation"],
                    "evaluation_criteria": ["Logic quality", "Clarity", "Usefulness", "Correct use of Python basics"]
                }}
            ],
            "instructor_notes": [
                {"title": "Facilitation Notes", "fields": {"notes": [
                    "Keep Python examples short and confidence-building.",
                    "Always connect code back to real workflows and AI-enabled systems."
                ]}}
            ]
        },
        "activity": {
            "id": "activity-week-04",
            "week_id": "week-04",
            "type": "flow-builder",
            "title": "Rule-Based Chatbot Builder",
            "instructions": "Use variables, conditions, and responses to sketch a small chatbot or automation logic flow.",
            "items": [{"label": "Input"}, {"label": "Condition"}, {"label": "Response"}, {"label": "Loop"}, {"label": "Function"}],
            "success_criteria": "Students can explain how the chatbot or automation works step by step."
        },
        "quiz": {
            "id": "quiz-week-04",
            "week_id": "week-04",
            "title": "Python and Automation Checkpoint",
            "passing_score": 70,
            "questions": [
                {"id": "w4-q1", "prompt": "What does a variable do?", "options": ["Deletes files", "Stores information", "Finds embeddings", "Connects APIs"], "answer_index": 1, "explanation": "A variable stores a value or piece of information."},
                {"id": "w4-q2", "prompt": "What is a condition used for?", "options": ["To repeat forever", "To make a decision in code", "To color the screen", "To compress data"], "answer_index": 1, "explanation": "Conditions allow a program to choose what happens next."},
                {"id": "w4-q3", "prompt": "What is automation?", "options": ["A random response", "Letting software perform repetitive tasks", "A kind of database", "A network cable"], "answer_index": 1, "explanation": "Automation means software carries out repeatable tasks with less manual work."},
                {"id": "w4-q4", "prompt": "What does it mean to run a model locally?", "options": ["The model generates output on your own device instead of a remote service", "The model only works in one classroom", "The model stops using tokens", "The model becomes a spreadsheet"], "answer_index": 0, "explanation": "Local inference means the computation happens on your own machine."}
            ]
        },
        "reflection": {
            "prompt": "Describe one repetitive student task you could automate using simple logic or Python.",
            "placeholder": "I could automate a study schedule by storing tasks in a list, checking deadlines, and printing a daily plan."
        },
        "teacher_notes": [
            "Students should leave feeling capable, not intimidated.",
            "A working tiny chatbot is more valuable than a long lecture about syntax."
        ]
    },
    "week-05": {
        "overview": {
            "learning_objectives": [
                "Understand how RAG grounds AI in trusted knowledge.",
                "Understand retrieval, semantic search, embeddings, vector databases, and knowledge bases.",
                "Understand MCP as a standard way for AI apps to connect with tools, resources, prompts, files, APIs, and external systems.",
                "Compare RAG with fine-tuning and compare agents with chatbots."
            ],
            "expected_outcomes": [
                "Students can explain RAG in steps.",
                "Students can explain where MCP is useful in AI-powered systems.",
                "Students can justify when to use retrieval, local models, or tool-driven agents."
            ]
        },
        "lesson": {
            "id": "lecture-5",
            "week_id": "week-05",
            "title": "RAG, MCP, and AI-Powered Systems",
            "estimated_minutes": 120,
            "blocks": [
                {"type": "hero", "title": "Lecture Goal", "content": "Students should understand how modern AI systems connect with external knowledge, tools, files, databases, and applications."},
                {"type": "objective-list", "title": "System Design Concepts", "items": [
                    {"label": "RAG", "description": "Ground AI answers in trusted knowledge."},
                    {"label": "Semantic Search", "description": "Retrieve meaning-based matches, not just exact words."},
                    {"label": "MCP", "description": "Connect AI apps to tools, resources, and prompts through a shared protocol."}
                ]},
                {"type": "concept-card-grid", "title": "AI System Components", "items": [
                    {"label": "Knowledge Base", "description": "Trusted information source for retrieval."},
                    {"label": "Vector Database", "description": "Stores meaning-based representations for search."},
                    {"label": "Tools", "description": "Actions the AI can perform."},
                    {"label": "Resources", "description": "Data or files the AI can access."}
                ]},
                {"type": "callout", "title": "Tutor Message", "content": "This lecture moves beyond using AI tools and into understanding how AI-powered systems are connected and grounded."}
            ]
        },
        "curriculum": {
            "overview": {
                "program_title": PROGRAM_TITLE,
                "learning_objectives": [
                    "Explain RAG, semantic search, embeddings, and knowledge grounding simply.",
                    "Explain MCP as a connector standard for AI tools and systems.",
                    "Design a school-style AI assistant with knowledge, tools, and safety rules.",
                    "Understand how model choice, agents, and retrieval strategies affect system behavior."
                ],
                "expected_outcomes": [
                    "Students can diagram a simple AI-powered system.",
                    "Students can separate normal generation from grounded generation.",
                    "Students can compare RAG, fine-tuning, chatbots, and agents at a high level."
                ]
            },
            "concepts": [
                _concept("Retrieval and Semantic Search", "Retrieval means finding useful information before answering. Semantic search finds meaning, not just exact words.", "This helps students understand how AI systems can be more accurate when grounded in documents.", "A school assistant retrieves the best FAQ section before generating an answer.", ["FAQ search", "Document retrieval", "Meaning-based matching"], ["Thinking retrieval means simple keyword search only", "Assuming search alone is enough"], ["Explain relevance before generation", "Contrast exact-word search with meaning-based search"]),
                _concept("Embeddings and Vector Databases", "Embeddings turn text into numbers so computers can compare meaning. A vector database stores searchable meaning-based representations.", "These are the building blocks behind semantic retrieval systems.", "A set of school policies is converted into embeddings so questions can find the most relevant passages.", ["Document chunks", "Similarity search", "Meaning vectors"], ["Treating embeddings as readable text", "Ignoring that vector search is still only as good as the source material"], ["Teach these conceptually, not mathematically", "Use analogies like 'meaning fingerprints'"]),
                _concept("RAG", "Retrieval-Augmented Generation is a method where an AI system first retrieves relevant information from a trusted knowledge source and then uses that information to generate a more accurate answer.", "RAG is a practical pattern that helps reduce unsupported answers.", "A school FAQ bot retrieves policy text and then answers a student question using that material.", ["Knowledge-grounded Q&A", "Document assistant", "Research helper"], ["Thinking RAG guarantees truth", "Skipping the quality of the knowledge base"], ["Explain the 5-step flow clearly", "Stress source quality and review"]),
                _concept("Chunking, Reranking, Citations, and Freshness", "Chunking means splitting source documents into smaller searchable pieces. Reranking means re-ordering retrieved results to keep the most useful ones on top. Citations show where an answer came from. Freshness means keeping the knowledge source updated so retrieval stays useful.", "These are the practical details that make real RAG systems more trustworthy.", "A class assistant chunks lecture notes, reranks matches, cites the matching file section, and updates its source set after each new class.", ["Document chunks", "Top-result refinement", "Source links", "Updated class notes"], ["Using chunks that are too large or too small", "Returning answers without source traces", "Ignoring outdated knowledge files"], ["Tune chunk size for the source type", "Show citations in answers", "Keep the knowledge base updated"]),
                _concept("RAG vs Fine-Tuning", "RAG improves answers by retrieving external information at question time. Fine-tuning changes the model itself by training it further on a specific dataset or style.", "Students should know that not every knowledge problem requires retraining a model.", "A school assistant usually benefits from RAG over fine-tuning because policies change and should stay editable in documents.", ["Fresh document updates", "Style adaptation", "Knowledge grounding"], ["Thinking fine-tuning is the default answer to every problem", "Using RAG without maintaining source quality"], ["Use RAG for changing knowledge", "Use fine-tuning when behavior or style must change consistently"]),
                _concept("MCP", "Model Context Protocol is an open protocol that standardizes how AI applications connect with external data sources, tools, prompts, and resources.", "MCP introduces students to modern AI system connectivity without requiring them to build a complex integration stack.", "An AI client connects to an MCP server that exposes file resources, reusable prompts, and actions like search or scheduling.", ["Tools", "Resources", "Prompts"], ["Thinking MCP is only one tool", "Confusing protocol with a single product"], ["Teach MCP as a standard connector idea", "Use school assistant examples"]),
                _concept("AI Tools, Resources, APIs, and Agents", "AI agents can reason, use tools, and complete multi-step tasks. APIs connect software systems. Tools perform actions, resources provide readable context, and prompts give reusable instructions.", "This ties together system design thinking for AI-enabled builders.", "A school assistant uses a knowledge base, a timetable API, and a reminder tool to answer student questions.", ["School assistant", "Research helper", "Task assistant"], ["Treating an agent like a normal chatbot", "Ignoring safety rules for tools"], ["Always include user roles and safety rules", "Mark what the system can read vs what it can do"]),
                _concept("Agents vs Chatbots", "A chatbot mainly responds to messages. An AI agent can plan steps, use tools, retrieve resources, and continue work toward a goal.", "Students need this distinction before they hear modern AI systems described as agents.", "A chatbot answers a question, while an agent may search documents, check a timetable, and then send a structured answer.", ["FAQ bot", "Research assistant", "Task workflow agent"], ["Calling every chatbot an agent", "Giving agents tool access without safety checks"], ["Define the goal, tools, and review points clearly", "Use human approval for sensitive actions"]),
                _concept("Multimodal and Document AI Workflows", "Multimodal AI workflows combine text with images, screenshots, PDFs, diagrams, audio, or scanned documents. Document AI uses OCR and layout understanding to turn files into structured information that an AI system can reason over.", "Many real school and workplace systems must handle files, screenshots, and forms rather than plain text only.", "A class assistant reads a PDF timetable, extracts dates from a scanned notice, and answers questions using those files as input.", ["PDF Q&A", "OCR from forms", "Image-plus-text reasoning"], ["Assuming document extraction is always perfect", "Ignoring layout errors or OCR mistakes"], ["Keep a human check for extracted fields", "Use multimodal input only when it improves the task"]),
                _concept("Frontier Models, Open-Source Models, Parameters, MoE, and AI Cost", "Frontier models are leading high-capability models trained at very large scale. Open-source models are more openly available to run or adapt. Parameters are the learned internal weights of a model. Mixture of Experts, or MoE, is an architecture where only some expert parts of the model are activated for a given task. AI cost includes tokens, hardware, retrieval infrastructure, and human review time.", "These ideas help students talk about model scale, cost, openness, and system choice more realistically.", "A classroom team compares using a hosted frontier model for quality versus a smaller local open-source model for privacy and cost.", ["Hosted premium models", "Local open models", "Sparse expert routing"], ["Thinking parameter count alone determines usefulness", "Assuming bigger always means better for every task"], ["Compare capability, cost, privacy, and hardware needs together", "Treat MoE as an efficiency design idea, not magic"])
            ],
            "lecture_notes": [
                {"title": "RAG in 5 Steps", "fields": {"steps": [
                    "User asks a question.",
                    "System searches a trusted knowledge source.",
                    "Relevant information is retrieved.",
                    "AI uses that information to generate an answer.",
                    "The answer can include references or citations."
                ]}},
                {"title": "MCP in Simple Terms", "fields": {"summary": "MCP lets AI clients connect to MCP servers that expose tools, resources, and prompts in a structured way."}},
                {"title": "Model Choice Notes", "fields": {"summary": "Use RAG for changing knowledge, fine-tuning for behavior or style shifts, and compare frontier versus open-source models using cost, privacy, and quality."}}
            ],
            "diagrams": [
                {"title": "RAG Flow", "fields": {"summary": "Future visual should show user -> retrieval -> trusted documents -> generation -> grounded answer."}},
                {"title": "MCP Connection Model", "fields": {"summary": "Future visual should show AI client connecting to tools, resources, and prompt templates through an MCP server."}}
            ],
            "activities": [
                {"title": "Paper-based RAG simulation", "objective": "Experience grounded answering without code.", "instructions": ["Create a small trusted knowledge sheet.", "Ask a question.", "Retrieve the most relevant section before answering."], "expected_outcome": "Students understand how grounding differs from memory-only answers.", "estimated_time": "20 minutes"},
                {"title": "Design a RAG for the class file system", "objective": "Apply retrieval ideas to a realistic school document setup.", "instructions": ["List the folders and files a class assistant should search, such as lecture notes, policies, assignments, and schedules.", "Decide how files would be chunked and embedded.", "Choose how retrieved chunks would be reranked and how citations would appear in the answer.", "Sketch how the system would stay fresh when new class files arrive."], "expected_outcome": "Students can design a filesystem-based RAG workflow with chunking, retrieval quality, source citation, and update logic.", "estimated_time": "25 minutes"},
                {"title": "Mini knowledge base creation", "objective": "Design source material for RAG.", "instructions": ["Students assemble a small school or study knowledge base.", "Organize sections clearly.", "Prepare example questions."], "expected_outcome": "Students connect source quality to answer quality.", "estimated_time": "20 minutes"},
                {"title": "Grounded vs ungrounded answer comparison", "objective": "Compare answer quality.", "instructions": ["Answer one question normally.", "Answer it again using the knowledge base.", "Compare reliability."], "expected_outcome": "Students see the value of retrieval and grounding.", "estimated_time": "15 minutes"},
                {"title": "MCP-style tool list design", "objective": "Think like a system designer.", "instructions": ["Design a school assistant.", "List tools it can use.", "List resources it can read.", "List prompts it should reuse."], "expected_outcome": "Students understand MCP through practical system design.", "estimated_time": "20 minutes"},
                {"title": "Document AI reasoning lab", "objective": "Understand multimodal and OCR-based system behavior.", "instructions": ["Use a scanned notice, form, or timetable as the source document.", "List what OCR could extract correctly and what may need human checking.", "Discuss where a multimodal model helps beyond text-only retrieval."], "expected_outcome": "Students understand the strengths and weaknesses of document AI workflows.", "estimated_time": "20 minutes"}
            ],
            "assignments": [
                {"title": "Design an AI school assistant", "fields": {
                    "problem_statement": "Design an AI school assistant that uses one knowledge base, three tools, two user roles, and safety rules.",
                    "requirements": ["One knowledge base", "Three tools", "Two user roles", "Safety rules", "Simple system diagram", "Model choice note explaining whether the design uses a frontier or open-source model"],
                    "submission_expectations": ["Submit as document or slide"],
                    "evaluation_criteria": ["Clarity of system design", "Correct use of RAG and MCP ideas", "Practicality", "Safety awareness", "Reasoning about model choice and cost"]
                }}
            ],
            "instructor_notes": [
                {"title": "Facilitation Notes", "fields": {"notes": [
                    "Keep the explanations conceptual and system-oriented.",
                    "Students do not need to implement a vector database; they need to understand why grounding helps.",
                    "Use MCP as a structured connectivity idea, not a brand-heavy topic."
                ]}}
            ]
        },
        "activity": {
            "id": "activity-week-05",
            "week_id": "week-05",
            "type": "flow-builder",
            "title": "RAG and MCP System Design Lab",
            "instructions": "Map the flow between user question, knowledge retrieval, answer generation, and tools/resources exposed to the AI system.",
            "items": [{"label": "User Question"}, {"label": "Knowledge Base"}, {"label": "Retrieval"}, {"label": "Generation"}, {"label": "Tool"}, {"label": "Resource"}],
            "success_criteria": "Students can explain where RAG helps and where MCP adds structured access to external systems."
        },
        "quiz": {
            "id": "quiz-week-05",
            "week_id": "week-05",
            "title": "RAG and MCP Checkpoint",
            "passing_score": 70,
            "questions": [
                {"id": "w5-q1", "prompt": "What does RAG do first?", "options": ["Generates random text", "Retrieves relevant information from a trusted knowledge source", "Deletes old prompts", "Builds a browser"], "answer_index": 1, "explanation": "RAG starts by retrieving relevant material before generation."},
                {"id": "w5-q2", "prompt": "What is semantic search?", "options": ["Exact-word matching only", "A way of finding meaning-based matches", "A file compression method", "A database backup tool"], "answer_index": 1, "explanation": "Semantic search focuses on meaning rather than only exact words."},
                {"id": "w5-q3", "prompt": "What can MCP servers expose to AI clients?", "options": ["Only images", "Tools, resources, and prompts", "Only hardware", "Only passwords"], "answer_index": 1, "explanation": "MCP exposes structured tools, resources, and prompts to AI clients."},
                {"id": "w5-q4", "prompt": "When is RAG usually a better fit than fine-tuning?", "options": ["When knowledge changes often and should come from documents", "When you want to ignore source material", "When you want zero tools", "When you want no review"], "answer_index": 0, "explanation": "RAG is often the better fit for changing or source-grounded knowledge."},
                {"id": "w5-q5", "prompt": "What is the key difference between a chatbot and an agent?", "options": ["A chatbot mainly responds, while an agent can plan and use tools", "Agents always speak louder", "Chatbots use no text", "Agents cannot access context"], "answer_index": 0, "explanation": "Agents go beyond direct chatting by planning steps and using tools or resources."}
            ]
        },
        "reflection": {
            "prompt": "In simple words, explain how RAG and MCP could help build a safer or more useful AI assistant.",
            "placeholder": "RAG helps the assistant answer using trusted documents, while MCP helps it connect to tools, files, and prompts in a structured way."
        },
        "teacher_notes": [
            "Teach system design through school-oriented examples to keep RAG and MCP concrete.",
            "Repeat that grounding improves reliability but does not remove the need for review."
        ]
    },
    "week-06": {
        "overview": {
            "learning_objectives": [
                "Combine prompting, data thinking, Python logic, RAG, MCP, and responsible AI into one practical solution.",
                "Design and present an AI-enabled project with clear user value and safety thinking.",
                "Reflect on what students can now build and evaluate with AI.",
                "Choose models and workflows with awareness of cost, parameters, openness, and tool use."
            ],
            "expected_outcomes": [
                "Students produce a clear capstone workflow or prototype.",
                "Students justify design choices and safety considerations.",
                "Students can explain why one model or architecture choice fits their capstone better than another."
            ]
        },
        "lesson": {
            "id": "lecture-6",
            "week_id": "week-06",
            "title": "Capstone Development and AI Showcase",
            "estimated_minutes": 140,
            "blocks": [
                {"type": "hero", "title": "Lecture Goal", "content": "Students should apply everything they learned by designing and presenting an AI-enabled solution."},
                {"type": "objective-list", "title": "Capstone Requirements", "items": [
                    {"label": "Problem Statement", "description": "Describe the problem and user clearly."},
                    {"label": "AI Workflow", "description": "Show prompts, data, knowledge, tools, and outputs."},
                    {"label": "Safety", "description": "Include ethics, review, and responsible use."}
                ]},
                {"type": "concept-card-grid", "title": "Capstone Structure", "items": [
                    {"label": "Problem", "description": "What issue does the solution address?"},
                    {"label": "User Persona", "description": "Who benefits from the system?"},
                    {"label": "AI Features", "description": "What AI capabilities are used?"},
                    {"label": "RAG / MCP Idea", "description": "How does the system use knowledge and tools?"}
                ]},
                {"type": "callout", "title": "Tutor Message", "content": "The capstone is about practical AI enablement, not flashy complexity. Clarity and usefulness matter most."}
            ]
        },
        "curriculum": {
            "overview": {
                "program_title": PROGRAM_TITLE,
                "learning_objectives": [
                    "Apply everything from AI foundations to workflows and systems design.",
                    "Build and present an AI-enabled solution clearly.",
                    "Reflect on future improvements and responsible deployment.",
                    "Explain model-choice and deployment tradeoffs in plain language."
                ],
                "expected_outcomes": [
                    "Students can present a practical AI-enabled project.",
                    "Students can justify prompts, data, tools, safety rules, and model choice."
                ]
            },
            "concepts": [
                _concept("Problem Statement and User Persona", "A problem statement explains the issue being solved. A user persona describes who the system is for.", "Without a clear user problem, the project becomes a tool demo rather than a solution.", "An AI study assistant is designed specifically for students who need revision support from lecture notes.", ["Study assistant", "FAQ bot", "Career guide"], ["Describing a tool instead of a problem", "Ignoring the target user"], ["Start with need before technology", "Keep the user visible in every design choice"]),
                _concept("AI Workflow", "An AI workflow is the sequence of prompts, data, tools, outputs, and review steps that make the solution useful.", "This helps students think beyond single prompts and toward system behavior.", "A research helper gathers notes, summarizes them, asks questions, and checks claims before sharing results.", ["Prompt chain", "Task flow", "Review loop"], ["Skipping review steps", "Leaving outputs vague"], ["Show inputs and outputs clearly", "Mark human review points"]),
                _concept("RAG and MCP in a Capstone", "RAG connects the system with trusted knowledge. MCP connects the system with structured tools, prompts, and resources.", "These ideas help students move from AI use to AI-enabled system design.", "A school FAQ bot uses a document set for answers and tools for schedules or announcements.", ["Knowledge base", "Prompt templates", "Tool access"], ["Adding RAG or MCP as buzzwords only", "Not explaining why they help"], ["Use them only where they genuinely improve the design", "Keep the explanation practical"]),
                _concept("Model Choice, Frontier vs Open-Source, and Parameters", "Model choice means deciding which model best fits the task. Frontier models often offer higher capability through hosted services, while open-source models may offer more control or local use. Parameters are the learned weights inside the model and are one indicator of scale, but not the only indicator of usefulness.", "Students should justify why their capstone uses one model type or another.", "A research helper uses a hosted frontier model for stronger reasoning, while a private note summarizer uses a smaller local open-source model.", ["Hosted premium model", "Local private model", "Capability vs control tradeoff"], ["Treating parameter count as the only decision factor", "Ignoring privacy, latency, or cost"], ["Choose models by task, cost, privacy, and quality", "Explain the tradeoff in plain language"]),
                _concept("Cost, Inference, and Deployment Tradeoffs", "Inference is the act of running the model to generate output. Every inference call can have cost, speed, and hardware implications. Deployment tradeoffs include cloud versus local execution, large versus small models, and whether retrieval or tools are needed.", "Capstone teams should learn to design solutions that are realistic to run.", "A class project chooses a smaller model plus RAG because it is cheaper than using a large frontier model for every question.", ["Token usage", "Cloud cost", "Local hardware tradeoff"], ["Designing only for ideal quality", "Ignoring usage cost over time"], ["Estimate likely usage early", "Use the lightest model that still meets the need"]),
                _concept("Agents, MoE, and System Scale", "An AI agent can pursue a goal with tools and memory. Mixture of Experts, or MoE, is a model design where only some expert parts of the model are activated for each task, helping large systems scale more efficiently.", "Students do not need deep math here, but they should recognize that modern AI systems combine architecture choices with workflow design.", "A project may use a multi-step agent workflow on top of a model that is itself optimized through expert routing.", ["Tool-using agent", "Expert routing", "Scalable model design"], ["Thinking MoE is the same as having multiple chatbots", "Using agent language without defining goals and tool boundaries"], ["Teach MoE as selective expert activation", "Keep agent design grounded in task flow"]),
                _concept("Safety, Ethics, and Testing", "A responsible project includes safety rules, testing, ethics, human review, and future improvements.", "Students should learn to evaluate AI solutions, not just build them.", "A school-facing assistant avoids private data, uses trusted knowledge, and requires human approval for sensitive outputs.", ["Testing checklist", "Human review", "Ethics note"], ["Assuming a working demo is automatically safe", "Ignoring privacy and fairness"], ["Include clear safeguards", "Test edge cases and weak outputs"]),
                _concept("Presentation and Reflection", "A good presentation explains the problem, workflow, AI features, data or knowledge source, safety rules, and next steps.", "Students should leave able to communicate their AI thinking clearly.", "A capstone showcase includes demo screenshots, prompt examples, diagram, and lessons learned.", ["Workflow diagram", "Prompt examples", "Future improvements"], ["Overfocusing on style and ignoring logic", "Skipping reflection"], ["Use a structured presentation template", "Explain what would improve in the next version"])
            ],
            "lecture_notes": [
                {"title": "Capstone Options", "fields": {"options": [
                    "AI Study Assistant",
                    "AI School FAQ Bot",
                    "AI Career Guide",
                    "AI Research Helper",
                    "AI Productivity Assistant",
                    "AI Community Problem Solver"
                ]}},
                {"title": "Required Capstone Sections", "fields": {"sections": [
                    "Problem statement",
                    "Target users",
                    "AI features",
                    "Prompt examples",
                    "Data or knowledge source",
                    "RAG idea",
                    "MCP/tool idea",
                    "Safety and ethics considerations",
                    "Demo or prototype",
                    "Final presentation"
                ]}}
            ],
            "diagrams": [
                {"title": "Capstone Workflow Canvas", "fields": {"summary": "Future visual should show problem -> user -> input -> AI step -> knowledge/tool support -> review -> output."}}
            ],
            "activities": [
                {"title": "Capstone planning workshop", "objective": "Turn project ideas into structured plans.", "instructions": ["Choose a capstone option.", "Define the user and problem.", "Map prompts, knowledge, tools, and outputs."], "expected_outcome": "Students produce a clear capstone plan.", "estimated_time": "25 minutes"},
                {"title": "Peer review", "objective": "Improve projects through feedback.", "instructions": ["Pairs review each other's idea.", "Check clarity, usefulness, and safety.", "Suggest one improvement."], "expected_outcome": "Students refine their design before presentation.", "estimated_time": "20 minutes"},
                {"title": "Demo practice", "objective": "Prepare for final presentation.", "instructions": ["Students rehearse their explanation.", "Receive feedback on clarity and timing.", "Refine the presentation flow."], "expected_outcome": "Students present more clearly and confidently.", "estimated_time": "20 minutes"},
                {"title": "Final showcase", "objective": "Present the AI-enabled solution.", "instructions": ["Present the project.", "Explain prompts, AI features, and safety rules.", "Answer audience questions."], "expected_outcome": "Students demonstrate integrated AI understanding.", "estimated_time": "30 minutes"},
                {"title": "Feedback session", "objective": "Reflect on learning and improvement.", "instructions": ["Discuss what worked.", "Discuss what would improve next.", "Capture next-step learning goals."], "expected_outcome": "Students leave with reflection and direction.", "estimated_time": "15 minutes"}
            ],
            "assignments": [
                {"title": "Final project submission", "fields": {
                    "problem_statement": "Submit the final AI-enabled project and presentation.",
                    "requirements": [
                        "Problem statement",
                        "Target users",
                        "AI features",
                        "Prompt examples",
                        "Data or knowledge source",
                        "RAG idea",
                        "MCP/tool idea",
                        "Safety and ethics considerations",
                        "Demo or prototype",
                    "Presentation",
                    "Model choice and cost note"
                ],
                    "submission_expectations": ["Submit final project pack and presentation"],
                    "evaluation_criteria": ["Clarity", "Usefulness", "Correct AI concepts", "Safety thinking", "Presentation quality", "Model-choice reasoning"]
                }}
            ],
            "instructor_notes": [
                {"title": "Facilitation Notes", "fields": {"notes": [
                    "Push students toward practical usefulness rather than unnecessary complexity.",
                    "Review whether they can justify prompts, knowledge, tools, and safety decisions clearly."
                ]}}
            ]
        },
        "activity": {
            "id": "activity-week-06",
            "week_id": "week-06",
            "type": "submission-board",
            "title": "Capstone Design Canvas",
            "instructions": "Map the problem, users, prompts, knowledge, tools, safety rules, and presentation story for the final project.",
            "items": [{"label": "Problem Statement"}, {"label": "Target Users"}, {"label": "AI Features"}, {"label": "Prompt Examples"}, {"label": "Knowledge Source"}, {"label": "RAG Idea"}, {"label": "MCP/Tool Idea"}, {"label": "Safety Rules"}],
            "success_criteria": "Students can explain how the full solution works and why it is safe and useful."
        },
        "quiz": {
            "id": "quiz-week-06",
            "week_id": "week-06",
            "title": "Capstone Readiness Checkpoint",
            "passing_score": 70,
            "questions": [
                {"id": "w6-q1", "prompt": "What should every capstone include first?", "options": ["A random AI tool", "A clear problem statement and target users", "A long Python program", "A logo"], "answer_index": 1, "explanation": "The project should begin with a clear user problem and purpose."},
                {"id": "w6-q2", "prompt": "Why include RAG or MCP ideas in a capstone?", "options": ["To sound technical only", "To explain how knowledge grounding or tool access improves the system", "To replace safety thinking", "To avoid prompts"], "answer_index": 1, "explanation": "RAG and MCP should be included when they make the system more useful or grounded."},
                {"id": "w6-q3", "prompt": "Why are safety and ethics considerations required?", "options": ["Because they make slides look longer", "Because useful AI systems still need privacy, fairness, review, and accountability", "Because AI is always unsafe", "Because projects need no testing"], "answer_index": 1, "explanation": "Responsible AI thinking is part of practical system design."},
                {"id": "w6-q4", "prompt": "What should guide model choice in a capstone?", "options": ["Only parameter count", "Task fit, cost, privacy, and quality needs", "Random selection", "The brightest logo"], "answer_index": 1, "explanation": "A practical capstone chooses models based on task needs, constraints, and tradeoffs."}
            ]
        },
        "reflection": {
            "prompt": "What is the strongest part of your capstone idea, and what is one improvement you would make next?",
            "placeholder": "The strongest part of my capstone is that it solves a real student problem. The next improvement would be adding a better knowledge source and clearer safety rules."
        },
        "teacher_notes": [
            "Encourage practical AI enablement over ambitious but unclear system ideas.",
            "Ask students to justify every major design choice in plain language."
        ]
    },
    "teacher-workshop-01": {
        "overview": {
            "learning_objectives": [
                "Explain common AI terms in plain teacher-friendly language.",
                "Use AI practically for lesson planning, assessment, differentiation, feedback, classroom activities, student support, and teacher productivity.",
                "Show live classroom-ready demos with reusable prompt patterns and clear expected outputs.",
                "Apply responsible AI habits including verification, privacy protection, hallucination awareness, bias checks, and human review."
            ],
            "expected_outcomes": [
                "Teachers can explain commonly used AI terms without technical jargon.",
                "Teachers leave with practical prompts, demo flows, and classroom-ready examples they can adapt immediately.",
                "Teachers can identify when AI output should be edited, checked, or rejected before classroom use."
            ]
        },
        "lesson": {
            "id": "teacher-workshop-lesson-01",
            "week_id": "teacher-workshop-01",
            "title": "AI for Teachers: Practical Classroom Planning Workshop",
            "estimated_minutes": 360,
            "blocks": [
                {
                    "type": "hero",
                    "title": "Workshop Goal",
                    "content": "This section shows teachers practical ways to use AI in everyday teaching work, with live demos, reusable prompts, and strong human review habits."
                },
                {
                    "type": "concept-card-grid",
                    "title": "Common Teacher AI Terms",
                    "items": [
                        {"label": "AI", "description": "Tools that can recognize patterns, assist decisions, or generate useful drafts."},
                        {"label": "Generative AI", "description": "AI that creates new text, summaries, worksheets, activities, or feedback drafts."},
                        {"label": "LLM", "description": "A large language model that predicts and generates text from the prompt you give it."},
                        {"label": "Prompt", "description": "The instruction you give the AI to shape the response."}
                    ]
                },
                {
                    "type": "objective-list",
                    "title": "Practical Focus",
                    "items": [
                        {"label": "Teacher-first use", "description": "Use AI to save time on planning, assessment drafting, differentiation, student support, and classroom preparation."},
                        {"label": "Demo-led learning", "description": "Open each demo to see what will be done, what output to expect, and what teachers can reuse."},
                        {"label": "Human review", "description": "Check accuracy, tone, fairness, alignment, and privacy before classroom use."},
                        {"label": "Routine productivity", "description": "Use AI for repetitive work such as summaries, messages, question banks, and first drafts."}
                    ]
                },
                {
                    "type": "table",
                    "title": "What Teachers Can Use AI For",
                    "items": [
                        {"Task": "Lesson planning", "What AI Helps With": "Draft objectives, structure lessons, suggest starters and exit tickets", "Teacher Review": "Check accuracy, pacing, and curriculum fit"},
                        {"Task": "Assessment", "What AI Helps With": "Generate MCQs, short questions, answer keys, and rubrics", "Teacher Review": "Verify correctness and fairness"},
                        {"Task": "Differentiation", "What AI Helps With": "Rewrite for support, core, and extension levels", "Teacher Review": "Keep the same learning goal"},
                        {"Task": "Classroom activities", "What AI Helps With": "Turn a lecture topic into discussion, group work, debate, card sort, or station activity", "Teacher Review": "Check feasibility and concept alignment"},
                        {"Task": "Student support", "What AI Helps With": "Re-explain concepts, simplify language, generate examples, and create revision materials", "Teacher Review": "Check clarity, correctness, and age appropriateness"},
                        {"Task": "Feedback and admin", "What AI Helps With": "Draft comments, summarize notes, and prepare communication", "Teacher Review": "Check tone, privacy, and specific evidence"},
                        {"Task": "Responsible AI use", "What AI Helps With": "Remind teachers to verify claims and protect privacy", "Teacher Review": "Never skip human judgment on sensitive outputs"}
                    ]
                },
                {
                    "type": "callout",
                    "title": "Tutor Message",
                    "content": "Keep the teacher section grounded in routine work: planning, quizzes, worksheets, differentiation, feedback, and admin productivity."
                }
            ]
        },
        "curriculum": {
            "overview": {
                "program_title": "AI for Teachers Workshop",
                "subtitle": "A practical teacher enablement section focused on real classroom use of AI.",
                "workshop_title": "AI for Teachers: Practical Classroom Planning Workshop",
                "target_audience": [
                    "School teachers with non-technical backgrounds",
                    "Teachers who want practical classroom uses instead of technical AI theory",
                    "Teachers who need responsible, review-driven AI habits"
                ],
                "workshop_goals": [
                    "Demystify common AI terms in plain language.",
                    "Show classroom use cases that save time without lowering teaching quality.",
                    "Give teachers reusable prompts and visible demo flows for real tasks.",
                    "Build strong habits around privacy, verification, bias checks, and human review."
                ],
                "expected_outcomes": [
                    "Teachers can use AI to draft and adapt classroom materials faster.",
                    "Teachers can identify risks and know where review is required.",
                    "Teachers can reuse the demo patterns inside their own teaching routine."
                ]
            },
            "concepts": [
                _concept(
                    "AI",
                    "AI is software that helps with tasks such as pattern recognition, prediction, summarization, and content generation.",
                    "Teachers hear the term often, but they need a practical definition instead of a technical one.",
                    "A teacher uses AI to draft a lesson plan, summarize notes, or suggest questions for class discussion.",
                    ["Planning support", "Question generation", "Summaries", "Draft feedback"],
                    ["Thinking AI understands the class context automatically", "Treating AI output as final truth"],
                    ["Use AI for drafting and idea generation", "Always adapt the result to your students"]
                ),
                _concept(
                    "Generative AI",
                    "Generative AI creates new content such as explanations, worksheets, quiz questions, rubrics, feedback drafts, and classroom activities.",
                    "This is the kind of AI most teachers will use directly in their routine work.",
                    "A teacher asks for a worksheet, an exit ticket, or a simplified explanation of a topic.",
                    ["Lesson plan drafts", "Quiz generation", "Worksheet rewriting", "Parent message drafts"],
                    ["Assuming generated content is automatically correct", "Using generic output without editing"],
                    ["Treat outputs as first drafts", "Check whether the content matches the actual objective"]
                ),
                _concept(
                    "LLM",
                    "LLM stands for large language model. It is the system behind many AI chat tools that predicts and generates text from the prompt you provide.",
                    "Teachers do not need the technical internals, but they should know why wording and context matter.",
                    "A teacher gives an LLM a subject, grade level, and objective, and the model generates a structured teaching draft.",
                    ["Chat-based lesson drafting", "Text rewriting", "Rubric generation"],
                    ["Using vague prompts", "Expecting the LLM to know hidden classroom context"],
                    ["Provide role, topic, grade level, and output format", "Iterate when the first output is weak"]
                ),
                _concept(
                    "Lesson Planning with AI",
                    "AI can help teachers draft learning objectives, starter tasks, explanations, guided practice, class activities, and exit tickets from one teaching topic.",
                    "Lesson planning is one of the fastest practical wins for teachers because it saves time without removing professional judgment.",
                    "A teacher starts with a topic and asks AI to propose a lesson structure, then edits the draft for pacing and classroom reality.",
                    ["Lesson outline drafting", "Starter tasks", "Exit tickets", "Alternative class versions"],
                    ["Using the first draft without checking fit", "Letting the tool choose the pedagogy without teacher review"],
                    ["Use AI for first drafts", "Always align the lesson back to your real objective and class needs"]
                ),
                _concept(
                    "Machine Learning",
                    "Machine learning is a branch of AI where systems learn patterns from data instead of being manually programmed for every rule.",
                    "Teachers hear this term often, and it helps them understand why AI tools reflect the data they were trained on.",
                    "A recommendation system or auto-grading support tool works by learning patterns from previous examples.",
                    ["Recommendation systems", "Pattern detection", "Prediction support"],
                    ["Thinking machine learning means human understanding", "Ignoring the role of training data"],
                    ["Explain it as pattern learning from examples", "Connect tool behavior back to its data source"]
                ),
                _concept(
                    "Prompt and Prompt Template",
                    "A prompt is the instruction you give to AI. A prompt template is a reusable pattern you can use again with a new topic, grade, or task.",
                    "Prompt quality strongly affects whether the output is useful or generic.",
                    "A teacher keeps one prompt template for lesson plans and another for rubrics or differentiated worksheets.",
                    ["Role-based prompts", "Structured output prompts", "Reusable teacher templates"],
                    ["Asking with too little context", "Not specifying grade level or output structure"],
                    ["Use templates for repeat tasks", "Ask for bullets, tables, levels, or checklists when needed"]
                ),
                _concept(
                    "Assessment, Feedback, and Rubrics",
                    "AI can generate quiz questions, short answers, answer keys, rubric drafts, and first-pass feedback comments.",
                    "Assessment work is highly practical for teachers, but it also has to be reviewed carefully because mistakes here directly affect learning and fairness.",
                    "A teacher drafts a quick formative quiz and a rubric with AI, then checks each answer key and rewrites the feedback comments into a more human tone.",
                    ["MCQs", "Short questions", "Rubrics", "Feedback comment banks"],
                    ["Trusting auto-generated answer keys", "Using generic feedback that does not match student evidence"],
                    ["Verify every key", "Use AI to draft feedback, then personalize it with real evidence"]
                ),
                _concept(
                    "Tokens, Context Window, and Inference",
                    "Tokens are small units of text the model reads and generates. The context window is how much information the model can consider at one time. Inference is the act of generating the answer.",
                    "These ideas help teachers understand why long prompts, pasted notes, and long chats sometimes degrade output quality.",
                    "A teacher pastes a long worksheet, rubric, and lesson history into one prompt and notices the tool misses earlier details because the context becomes crowded.",
                    ["Long lesson prompts", "Summarizing large notes", "Multi-step classroom planning"],
                    ["Assuming the model remembers everything in a long thread", "Pasting too much context without structure"],
                    ["Keep prompts focused", "Summarize long material before asking for the next step"]
                ),
                _concept(
                    "Hallucination",
                    "A hallucination happens when AI gives an answer that sounds correct but is false, unsupported, incomplete, or made up.",
                    "Teachers need this term because polished wording can hide serious mistakes.",
                    "An AI tool invents an answer key, a reference, or a scientific fact that looks believable.",
                    ["Wrong answer keys", "Invented examples", "Misleading summaries"],
                    ["Trusting fluent wording", "Skipping fact checks because the output looks professional"],
                    ["Verify important claims", "Check answer keys and examples before using them with students"]
                ),
                _concept(
                    "Differentiation",
                    "Differentiation means adapting the same learning goal for students who need support, core practice, or extension challenge.",
                    "AI is useful here because it can quickly create multiple versions of the same material.",
                    "A teacher asks for the same explanation at three levels: simplified, on-level, and extension.",
                    ["Tiered worksheets", "Reading-level rewrites", "Support and challenge versions"],
                    ["Lowering rigor too much", "Creating versions that no longer align to the original objective"],
                    ["Compare all versions side by side", "Keep the same core learning target"]
                ),
                _concept(
                    "Student Support and Re-Explanation",
                    "AI can help teachers rewrite difficult explanations, generate additional examples, simplify instructions, and create revision support for students who need another path into the same concept.",
                    "Teachers often need multiple ways to explain the same thing, especially in mixed-ability classrooms.",
                    "A teacher asks AI to explain the same topic in simpler language, with a real-life example and two revision questions for students who are still confused.",
                    ["Simplified explanations", "Extra examples", "Revision questions", "Support handouts"],
                    ["Oversimplifying the content too much", "Giving students AI-generated explanations without checking the wording"],
                    ["Keep the same core concept", "Check that support material is clear without becoming inaccurate"]
                ),
                _concept(
                    "Multimodal AI and Document AI",
                    "Multimodal AI can work with more than plain text, such as images, PDFs, screenshots, worksheets, and scanned documents. Document AI includes OCR and layout understanding.",
                    "Teachers increasingly work with handouts, slides, photos of student work, and scanned resources, not just typed prompts.",
                    "A teacher uploads a worksheet or notice and asks AI to extract questions, summarize instructions, or rewrite the content for a lower reading level.",
                    ["Worksheet extraction", "Slide summarization", "OCR from scanned class materials"],
                    ["Assuming document extraction is always perfect", "Trusting OCR text without checking errors"],
                    ["Use multimodal tools when the source is visual", "Always check extracted text before reusing it"]
                ),
                _concept(
                    "Teacher Productivity and Communication",
                    "AI can summarize meeting notes, draft parent communication, organize action points, and produce first drafts for repetitive admin work.",
                    "This matters because teachers spend large amounts of time on routine writing that still needs professional tone and privacy care.",
                    "A teacher summarizes anonymized student feedback, drafts a calm parent message, or turns meeting notes into next-step actions.",
                    ["Meeting summaries", "Parent message drafts", "Action lists", "Note cleanup"],
                    ["Pasting sensitive information into general tools", "Sending AI-written messages without checking tone and facts"],
                    ["Use placeholders for sensitive details", "Review every outward-facing message before sending"]
                ),
                _concept(
                    "RAG and Knowledge Grounding",
                    "RAG, or retrieval-augmented generation, means the AI first pulls relevant information from trusted material and then generates its answer using that material.",
                    "Teachers should know this because grounded AI is safer for school policies, syllabi, lesson notes, and curriculum-aligned answers.",
                    "A school assistant answers questions using the school handbook or curriculum documents instead of guessing from general internet-style knowledge.",
                    ["School policy Q&A", "Curriculum-grounded assistant", "Lesson-note-based support"],
                    ["Thinking RAG removes the need for review", "Using weak or outdated source documents"],
                    ["Use trusted source material", "Check whether the answer actually matches the retrieved source"]
                ),
                _concept(
                    "Agents, Tools, and Workflows",
                    "A chatbot mainly answers a prompt. An AI workflow links multiple steps together. An agent can use tools, resources, or actions to complete a broader goal.",
                    "Teachers do not need heavy technical detail, but they should understand why a tool that chains planning, quiz generation, and review feels more useful than a single prompt.",
                    "A teacher workflow goes from topic to lesson plan to activity to quiz to review checklist instead of treating each step separately.",
                    ["Planning chains", "Teacher workflows", "Multi-step classroom preparation"],
                    ["Calling every chatbot an agent", "Skipping review just because the workflow feels automated"],
                    ["Use workflows for repeat tasks", "Keep human approval at the end of every important chain"]
                ),
                _concept(
                    "Model Choice, Privacy, and Cost",
                    "Different AI tools and models vary in quality, speed, privacy, cost, and control. Some are strong cloud tools, while others are smaller or more private.",
                    "Teachers need this concept to choose practical tools instead of assuming every AI system is equally safe or equally capable.",
                    "A teacher may use a powerful cloud tool for lesson drafting but avoid putting sensitive student data into it because privacy matters more than convenience.",
                    ["Cloud AI tools", "Private-use constraints", "Capability vs privacy tradeoffs"],
                    ["Choosing tools only by speed or polish", "Ignoring privacy and school policy"],
                    ["Choose tools by task, privacy, and review needs", "Avoid sharing sensitive student information unless policy clearly allows it"]
                ),
                _concept(
                    "Human-in-the-Loop and Workflow",
                    "Human-in-the-loop means the teacher stays in control by reviewing, editing, and approving AI output before use. A workflow is the repeatable sequence of steps that links planning, activities, assessment, and review.",
                    "This is how teachers use AI effectively without becoming overdependent on it.",
                    "A teacher uses one repeatable flow: topic to lesson plan to activity to quiz to final review.",
                    ["Review checkpoints", "Planning workflow", "Draft then approve pattern"],
                    ["Skipping review because AI saves time", "Using one-off prompts without a repeatable process"],
                    ["Build reusable workflows", "Insert clear review points before anything reaches students"]
                )
            ],
            "diagrams": [
                {"title": "Teacher AI Workflow", "fields": {"summary": "Future visual should show topic to lesson plan to activity to quiz to review checklist with teacher approval gates."}},
                {"title": "Responsible Review Loop", "fields": {"summary": "Future visual should show AI draft to teacher verification to classroom adaptation to final use."}}
            ],
            "activities": [
                {
                    "title": "Live Demo: Photosynthesis Teaching Workflow",
                    "objective": "Show one complete AI-assisted teaching workflow from topic to lesson plan to activity to assessment to review.",
                    "instructions": [
                        "Use the prefilled topic, Photosynthesis, to run the full demo live.",
                        "Show how the AI produces a first draft, then improve it with teacher guidance.",
                        "Explain each stage: what is happening now, what the audience is seeing, and what comes next."
                    ],
                    "expected_outcome": "Teachers experience one lively end-to-end demo that clearly shows AI drafting, teacher review, and classroom-ready output.",
                    "what_we_will_do": [
                        "Start with one topic and generate a lesson plan draft.",
                        "Turn the same topic into a classroom activity and a short assessment.",
                        "Add a support version for struggling learners.",
                        "Review and polish the full workflow before classroom use."
                    ],
                    "what_you_will_see": [
                        "How a single prompt can create a first draft quickly.",
                        "How teacher intervention improves clarity, structure, and practicality.",
                        "How one workflow can support planning, activity design, assessment, and differentiation together."
                    ],
                    "what_teachers_can_do": [
                        "Reuse the same workflow for future topics.",
                        "Turn one topic into multiple classroom assets in minutes.",
                        "Keep control by reviewing every important stage before use."
                    ],
                    "live_demo_flow": [
                        "Topic and classroom context",
                        "AI first draft",
                        "Teacher improvement prompt",
                        "Activity and assessment expansion",
                        "Differentiation support version",
                        "Teacher review and final approval"
                    ],
                    "sample_prompt": "Act as an experienced Grade 7 science teacher. Create a lesson plan on photosynthesis. Include learning objective, starter, explanation, one interactive classroom activity, 4 quick assessment questions, one support version for struggling learners, and a final teacher review checklist.",
                    "sample_output": [
                        "A first-pass teaching workflow with planning, activity, assessment, and support materials.",
                        "A draft that becomes stronger after teacher review, refinement, and approval."
                    ],
                    "review_points": [
                        "Check subject accuracy.",
                        "Check whether the activity is realistic for your class size and time.",
                        "Check that the assessment matches the objective.",
                        "Check that the support version still teaches the same core concept."
                    ],
                    "demo_config": {
                        "demo_kind": "workflow",
                        "subject_options": ["Science"],
                        "grade_options": ["Grade 7"],
                        "topic_examples": ["Photosynthesis"],
                        "teacher_goal": "Show one lively classroom-ready AI workflow from start to finish"
                    }
                }
            ],
            "assignments": [
                {
                    "title": "Common AI Terms for Teachers",
                    "fields": {
                        "plain_language_meanings": [
                            "AI: software that helps with tasks like drafting, predicting, recognizing patterns, or organizing information.",
                            "Generative AI: AI that creates new text, worksheets, activities, summaries, or feedback drafts.",
                            "LLM: the language model behind many AI chat tools.",
                            "Prompt: the instruction you give the AI.",
                            "Prompt template: a reusable prompt pattern for repeat tasks.",
                            "Hallucination: an answer that sounds strong but is wrong or unsupported.",
                            "Human-in-the-loop: the teacher checks and approves the result before use.",
                            "Workflow: a repeatable sequence such as topic to lesson to activity to quiz to review."
                        ]
                    }
                },
                {
                    "title": "Prompt Templates for Teachers",
                    "fields": {
                        "lesson_planning": [
                            "Act as an experienced [subject] teacher. Create a lesson plan for [grade level] on [topic]. Include learning objective, starter, explanation, guided practice, class activity, formative check, and homework.",
                            "Rewrite this lesson plan for a class with mixed ability levels. Add support scaffolds and one extension challenge."
                        ],
                        "assessment": [
                            "Create 5 MCQs and 3 short-answer questions for [topic] at [grade level]. Include answer key, difficulty note, and one common misconception each question checks.",
                            "Generate an exit ticket with 3 questions that checks whether students met this objective: [objective]."
                        ],
                        "rubrics_and_feedback": [
                            "Create a rubric for [assignment] with 4 criteria and 4 performance levels. Use teacher-friendly language and keep criteria observable.",
                            "Draft feedback comments for a student who shows [strength] but needs to improve [area]. Keep the tone constructive and specific."
                        ],
                        "differentiation": [
                            "Explain [topic] at three levels: support, on-level, and extension. Keep the same core learning goal.",
                            "Rewrite this worksheet for students who need simpler vocabulary and shorter instructions: [paste content]."
                        ],
                        "productivity": [
                            "Summarize these anonymized student comments into key themes, strengths, concerns, and suggested next steps: [paste comments].",
                            "Draft a professional parent message about [issue] in a calm and respectful tone. Leave placeholders where I should add verified details."
                        ]
                    }
                },
                {
                    "title": "Responsible AI Guidance",
                    "fields": {
                        "core_rules": [
                            "Do not paste sensitive student data unless school policy clearly allows it.",
                            "Use anonymized examples whenever possible.",
                            "Treat AI output as a draft, not as a final professional decision.",
                            "Check factual claims, answer keys, dates, references, and curriculum alignment before classroom use.",
                            "Review tone, fairness, and inclusivity in any student-facing or parent-facing text."
                        ],
                        "academic_integrity": [
                            "Explain to students when AI support is allowed and when independent work is expected.",
                            "Use AI to support learning design, not to outsource teacher judgment or student thinking."
                        ]
                    }
                },
                {
                    "title": "Risks and Limitations",
                    "fields": {
                        "hallucinations": [
                            "AI may invent facts, references, quotations, examples, or answer keys.",
                            "Confident wording does not guarantee educational accuracy."
                        ],
                        "bias_and_fairness": [
                            "AI can produce stereotypes or one-sided assumptions.",
                            "Examples, names, and cultural references may not always be inclusive or appropriate."
                        ],
                        "privacy": [
                            "Many AI tools should not receive personally identifiable student information.",
                            "Even summaries and feedback prompts can expose sensitive information if copied carelessly."
                        ],
                        "pedagogical_limits": [
                            "AI may suggest activities that are unrealistic for your timetable or class context.",
                            "Generated content may be too generic, too easy, or misaligned with your curriculum."
                        ]
                    }
                },
                {
                    "title": "Human Review Checkpoints",
                    "fields": {
                        "before_using_a_lesson": [
                            "Check subject accuracy and age appropriateness.",
                            "Confirm classroom feasibility.",
                            "Make sure the lesson actually matches your objective."
                        ],
                        "before_using_assessment": [
                            "Verify every answer key and distractor.",
                            "Check that the wording is fair and unambiguous.",
                            "Remove any items that reward guessing over understanding."
                        ],
                        "before_sharing_feedback_or_messages": [
                            "Review tone, sensitivity, and school policy alignment.",
                            "Replace generic language with specific evidence you can stand behind.",
                            "Confirm no private or unverified claims are included."
                        ]
                    }
                }
            ],
            "instructor_notes": [
                {
                    "title": "Facilitation Notes",
                    "fields": {
                        "notes": [
                            "Use teacher examples from multiple subjects so the workshop feels widely applicable.",
                            "Avoid drifting into technical AI explanations unless they support a classroom decision.",
                            "Pause after every demo to ask: what would you keep, what would you edit, what would you reject?",
                            "Model privacy-safe prompting and anonymization throughout the day."
                        ]
                    }
                }
            ]
        },
        "activity": {
            "id": "teacher-workshop-activity-01",
            "week_id": "teacher-workshop-01",
            "type": "workflow-builder",
            "title": "Teacher Demo Studio",
            "instructions": "Run one live prefilled teaching demo and narrate each stage from AI draft to teacher-approved classroom output.",
            "items": [
                {"label": "Photosynthesis Live Demo"}
            ],
            "success_criteria": "Teachers can follow one complete live demo, understand each stage, and see clearly where teacher review improves the result."
        },
        "quiz": {
            "id": "teacher-workshop-quiz-01",
            "week_id": "teacher-workshop-01",
            "title": "Teacher Workshop Checkpoint",
            "passing_score": 70,
            "questions": [
                {
                    "id": "tw1-q1",
                    "prompt": "What is the healthiest way for teachers to think about AI in this workshop?",
                    "options": [
                        "As a replacement for teacher judgment",
                        "As a drafting and workflow assistant that still needs review",
                        "As a tool that is always factually correct",
                        "As a system that should receive all student data"
                    ],
                    "answer_index": 1,
                    "explanation": "The workshop treats AI as a practical assistant, while teachers remain responsible for quality, safety, and final decisions."
                },
                {
                    "id": "tw1-q2",
                    "prompt": "Which action is most important before using AI-generated quiz questions with students?",
                    "options": [
                        "Share them immediately to save time",
                        "Verify answer keys, wording, and alignment to the learning objective",
                        "Translate them into another language first",
                        "Ask the AI to confirm its own accuracy"
                    ],
                    "answer_index": 1,
                    "explanation": "Teachers should review assessment quality and correctness before classroom use."
                },
                {
                    "id": "tw1-q3",
                    "prompt": "Why should teachers avoid pasting sensitive student information into general AI tools?",
                    "options": [
                        "Because AI tools cannot read text",
                        "Because privacy, policy, and confidentiality risks still apply",
                        "Because AI only works with images",
                        "Because it makes prompts shorter"
                    ],
                    "answer_index": 1,
                    "explanation": "Education work often includes sensitive information, so privacy and policy rules must guide tool use."
                },
                {
                    "id": "tw1-q4",
                    "prompt": "Which example best shows a teacher workflow rather than a one-off prompt?",
                    "options": [
                        "Ask for one definition only",
                        "Topic to lesson plan to activity to quiz to review checklist",
                        "Copy the first AI answer into class slides",
                        "Use AI only to write a title"
                    ],
                    "answer_index": 1,
                    "explanation": "A workflow connects multiple useful steps and makes review points explicit."
                }
            ]
        },
        "reflection": {
            "prompt": "What is one teaching task where AI could save you time, and what review steps would you keep before using the result?",
            "placeholder": "AI could help me draft a lesson plan for my next topic, but I would still check accuracy, classroom timing, student level, and whether the activity fits my class."
        },
        "teacher_notes": [
            "Keep every demo teacher-centered and practical.",
            "Repeat that fast drafting is useful only when paired with careful review."
        ]
    }
}


def get_manifest():
    return [deepcopy(CURRICULUM_MAP[key]) for key in CURRICULUM_MAP]


def transform_week(week_id: str):
    if week_id not in WEEK_CONTENT:
        raise FileNotFoundError(f"Unknown week: {week_id}")

    meta = deepcopy(CURRICULUM_MAP[week_id])
    content = deepcopy(WEEK_CONTENT[week_id])
    if meta.get("track") == "teacher":
        _reorder_teacher_concepts(content)
    content["curriculum"]["concepts"] = _attach_media_slots(content["curriculum"]["concepts"])
    _sync_core_ideas_with_concepts(content)
    _prune_runtime_content(content, week_id)
    content["id"] = week_id
    content["title"] = meta["title"]
    content["sequence"] = meta["sequence"]
    content["short_title"] = meta["short_title"]
    content["theme_color"] = meta["theme_color"]
    content["estimated_minutes"] = meta["estimated_minutes"]
    content["focus"] = meta["focus"]
    content["signature_activity"] = meta["signature_activity"]
    content["track"] = meta.get("track", "student")
    content["delivery_label"] = meta.get("delivery_label", "Week")
    content["sequence_label"] = meta.get("sequence_label")
    content["audience"] = meta.get("audience")
    return content
