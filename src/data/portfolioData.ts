import { StudentProfile, SkillCategory, Project, HackathonEntry, EducationEntry, LearningTopic } from '../types/portfolio';

export const defaultProfile: StudentProfile = {
  name: '[YOUR NAME]',
  roleHeadline: 'B.Tech Student | Aspiring AI Engineer | Python & Web Development Enthusiast',
  currentStatus: 'B.Tech 1st Semester Student',
  semester: 'Currently in 1st Semester',
  branch: '[BRANCH NAME]',
  college: '[COLLEGE NAME]',
  location: '[CITY, STATE]',
  linkedinUrl: '[LINKEDIN URL]',
  githubUrl: '[GITHUB URL]',
  email: '[EMAIL ADDRESS]',
  heroIntro: 'I’m a first-semester B.Tech student passionate about Python, web development, and Generative AI. I enjoy learning by building practical projects and participating in hackathons and ideathons. I’m currently exploring the foundations of AI and working toward becoming an AI engineer.',
  aboutIntro: 'I am a first-semester B.Tech student currently building my foundational knowledge in software development, computational thinking, and emerging AI technologies. Rather than relying solely on theoretical study, I enjoy actively participating in hackathons and ideathons to solve real-world problems under constraints, collaborate with peers, and learn through practical experimentation.',
  learningPhilosophy: 'I believe in learning by building. My current focus is strengthening my programming fundamentals, understanding AI concepts, and gradually building more meaningful projects.',
  goalStatement: 'My goal is to grow from a beginner-level student into a skilled AI engineer by strengthening my programming fundamentals, learning machine learning and Generative AI, building practical projects, contributing to open-source projects, and gaining real-world experience through internships and hackathons.'
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    description: 'Core computational logic and algorithmic syntax',
    skills: [
      {
        name: 'Python',
        level: 'Foundational',
        description: 'Variables, loops, functions, conditionals, and standard library basics'
      }
    ]
  },
  {
    title: 'Web Development',
    description: 'Foundations for structuring and styling interfaces',
    skills: [
      {
        name: 'HTML',
        level: 'Semantic Structure',
        description: 'Clean document outlines, accessibility tags, and form controls'
      },
      {
        name: 'CSS',
        level: 'Layouts & Styling',
        description: 'Box model, Flexbox basics, color contrast, and responsive viewports'
      },
      {
        name: 'JavaScript',
        level: 'Basic Scripting',
        description: 'DOM interaction, events, conditional statements, and functions'
      },
      {
        name: 'Basic Web Development',
        level: 'Integration',
        description: 'Connecting markup, styles, and basic interactive behavior'
      }
    ]
  },
  {
    title: 'AI / GenAI',
    description: 'Early exploration of intelligent systems and modern language models',
    skills: [
      {
        name: 'Generative AI — Beginner',
        level: 'Exploratory',
        description: 'Understanding LLM capabilities, tokens, and creative workflows'
      },
      {
        name: 'AI Fundamentals',
        level: 'Conceptual',
        description: 'Core terminology: machine learning paradigms, supervised vs unsupervised'
      },
      {
        name: 'Prompt Engineering — Beginner',
        level: 'Applied',
        description: 'Structuring clear system instructions, context windows, and zero-shot guidance'
      }
    ]
  },
  {
    title: 'Tools & Platforms',
    description: 'Developer workspace and version control practices',
    skills: [
      {
        name: 'Git',
        level: 'Version Control',
        description: 'Repository initialization, commits, branching, and status checking'
      },
      {
        name: 'GitHub',
        level: 'Collaboration',
        description: 'Managing remote repositories, README documentation, and project tracking'
      },
      {
        name: 'VS Code',
        level: 'Primary IDE',
        description: 'Extensions, syntax highlighting, integrated terminal, and code formatting'
      }
    ]
  }
];

export const projectsList: Project[] = [
  {
    id: 'voter-eligibility',
    title: 'Voter Eligibility Checker',
    description: 'A beginner-friendly Python project that determines whether a person is eligible to vote based on their age and predefined eligibility conditions.',
    technologies: ['Python'],
    category: 'Python / Beginner Project',
    githubUrl: '[GITHUB PROJECT URL]',
    liveDemoUrl: '[LIVE DEMO URL]',
    demoType: 'voter',
    keyLearnings: [
      'Input validation & type casting (str to int)',
      'Conditional branching with if-elif-else statements',
      'Handling boundary age thresholds and feedback messages'
    ],
    codeSnippet: `# Voter Eligibility Checker
# Practicing conditional logic and user input in Python

def check_voting_eligibility():
    print("=== National Voter Eligibility System ===")
    try:
        name = input("Enter your full name: ").strip()
        age = int(input("Enter your age (years): "))
        
        MINIMUM_VOTING_AGE = 18

        if age < 0 or age > 120:
            print("Invalid age entered. Please enter a realistic age.")
            return

        if age >= MINIMUM_VOTING_AGE:
            print(f"Eligible: Hello {name}, you are {age} years old and eligible to vote.")
        else:
            years_left = MINIMUM_VOTING_AGE - age
            print(f"Not Eligible: Hello {name}, you are {age} years old.")
            print(f"You will be eligible to vote in {years_left} year(s).")
            
    except ValueError:
        print("Error: Age must be a valid whole number.")

if __name__ == "__main__":
    check_voting_eligibility()`
  },
  {
    id: 'calculator',
    title: 'Calculator',
    description: 'A simple calculator application developed to practice programming fundamentals, user input handling, arithmetic operations, and basic application logic.',
    technologies: ['Python'],
    category: 'Python / Beginner Project',
    githubUrl: '[GITHUB PROJECT URL]',
    liveDemoUrl: '[LIVE DEMO URL]',
    demoType: 'calculator',
    keyLearnings: [
      'Arithmetic operators (+, -, *, /, %, **)',
      'Error prevention for division by zero',
      'Modular function definitions for clean architecture'
    ],
    codeSnippet: `# Simple Arithmetic Calculator
# Demonstrating functions, math operators, and error handling

def add(x, y): return x + y
def subtract(x, y): return x - y
def multiply(x, y): return x * y
def divide(x, y):
    if y == 0:
        return "Error: Division by zero is undefined."
    return x / y

def run_calculator():
    print("Select Operation:")
    print("1. Add (+)")
    print("2. Subtract (-)")
    print("3. Multiply (*)")
    print("4. Divide (/)")

    choice = input("Enter choice (1/2/3/4): ")
    
    if choice in ['1', '2', '3', '4']:
        try:
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))

            if choice == '1':
                print(f"Result: {num1} + {num2} = {add(num1, num2)}")
            elif choice == '2':
                print(f"Result: {num1} - {num2} = {subtract(num1, num2)}")
            elif choice == '3':
                print(f"Result: {num1} * {num2} = {multiply(num1, num2)}")
            elif choice == '4':
                print(f"Result: {num1} / {num2} = {divide(num1, num2)}")
        except ValueError:
            print("Invalid input! Please enter numerical values.")
    else:
        print("Invalid choice selected.")

if __name__ == "__main__":
    run_calculator()`
  },
  {
    id: 'atm-system',
    title: 'ATM Management System',
    description: 'A beginner-level ATM management project designed to practice programming logic, user interaction, conditional statements, and basic transaction operations.',
    technologies: ['Python'],
    category: 'Python / Beginner Project',
    githubUrl: '[GITHUB PROJECT URL]',
    liveDemoUrl: '[LIVE DEMO URL]',
    demoType: 'atm',
    keyLearnings: [
      'State tracking (maintaining account balance across loops)',
      'Interactive while loop navigation menu',
      'Transaction limits and withdrawal balance checks'
    ],
    codeSnippet: `# ATM Management System
# Practicing state management, loop controls, and financial transactions

class SimpleATM:
    def __init__(self, initial_balance=500.0, pin=1234):
        self.balance = initial_balance
        self.pin = pin

    def authenticate(self, entered_pin):
        return entered_pin == self.pin

    def check_balance(self):
        return f"Current Balance: $\\x7bself.balance:.2f\\x7d"

    def deposit(self, amount):
        if amount <= 0:
            return "Deposit amount must be positive."
        self.balance += amount
        return f"Successfully deposited $\\x7bamount:.2f\\x7d. New Balance: $\\x7bself.balance:.2f\\x7d"

    def withdraw(self, amount):
        if amount <= 0:
            return "Withdrawal amount must be greater than zero."
        if amount > self.balance:
            return "Declined: Insufficient funds."
        self.balance -= amount
        return f"Dispensed $\\x7bamount:.2f\\x7d. Remaining Balance: $\\x7bself.balance:.2f\\x7d"

# Execution loop allows multiple transactions until exit.`
  },
  {
    id: 'grade-calculator',
    title: 'Student Grade Calculator',
    description: 'A Python-based project that calculates student grades based on marks and predefined grading conditions. This project demonstrates the use of conditional logic and basic data processing.',
    technologies: ['Python'],
    category: 'Python / Beginner Project',
    githubUrl: '[GITHUB PROJECT URL]',
    liveDemoUrl: '[LIVE DEMO URL]',
    demoType: 'grade',
    keyLearnings: [
      'Multi-tier grade thresholds (A, B, C, D, F)',
      'Subject array aggregation and average computation',
      'Formatting formatted academic reports'
    ],
    codeSnippet: `# Student Grade Calculator
# Demonstrating data aggregation, score averaging, and conditional grading

def calculate_grade(percentage):
    if percentage >= 90:
        return 'A (Outstanding)'
    elif percentage >= 80:
        return 'B (Very Good)'
    elif percentage >= 70:
        return 'C (Good)'
    elif percentage >= 60:
        return 'D (Satisfactory)'
    elif percentage >= 40:
        return 'E (Pass)'
    else:
        return 'F (Needs Improvement)'

def process_student_results():
    subjects = ["Programming (Python)", "Mathematics I", "Physics", "Basics of Web Dev"]
    marks = []

    print("=== Academic Score Processor ===")
    for subject in subjects:
        while True:
            try:
                score = float(input(f"Enter marks for \\x7bsubject\\x7d (0-100): "))
                if 0 <= score <= 100:
                    marks.append(score)
                    break
                print("Marks must be between 0 and 100.")
            except ValueError:
                print("Please enter a valid number.")

    total = sum(marks)
    percentage = total / len(subjects)
    grade = calculate_grade(percentage)

    print("\\n--- Result Summary ---")
    print(f"Total Marks: \\x7btotal\\x7d/\\x7blen(subjects)*100\\x7d")
    print(f"Percentage: \\x7bpercentage:.2f\\x7d%")
    print(f"Assigned Grade: \\x7bgrade\\x7d")

if __name__ == "__main__":
    process_student_results()`
  }
];

export const hackathonEntries: HackathonEntry[] = [
  {
    id: 'hack-1',
    type: 'Hackathon',
    eventName: '[EVENT NAME]',
    role: '[ROLE]',
    year: '[YEAR]',
    description: '[WHAT I BUILT / WHAT I LEARNED]',
    focus: 'Problem Solving & Team Collaboration'
  },
  {
    id: 'hack-2',
    type: 'Ideathon',
    eventName: '[EVENT NAME]',
    role: '[ROLE]',
    year: '[YEAR]',
    description: '[WHAT I BUILT / WHAT I LEARNED]',
    focus: 'Solution Ideation & Rapid Prototyping'
  },
  {
    id: 'hack-3',
    type: 'Hackathon',
    eventName: '[EVENT NAME]',
    role: '[ROLE]',
    year: '[YEAR]',
    description: '[WHAT I BUILT / WHAT I LEARNED]',
    focus: 'Practical Code Implementation'
  }
];

export const educationHistory: EducationEntry[] = [
  {
    degree: 'B.Tech — [BRANCH NAME]',
    institution: '[COLLEGE NAME]',
    period: '2026 – 2030 (Expected)',
    location: '[CITY, STATE]',
    status: 'Currently in 1st Semester',
    focusAreas: [
      'Programming for Problem Solving (Python)',
      'Engineering Mathematics',
      'Basic Electrical & Electronics',
      'Algorithmic Thinking & Foundations'
    ]
  },
  {
    degree: 'Higher Secondary Education (12th Grade)',
    institution: '[HIGH SCHOOL / INSTITUTION NAME]',
    period: 'Completed',
    location: '[CITY, STATE]',
    status: 'Pre-University / High School',
    focusAreas: [
      'Physics, Chemistry, Mathematics (PCM)',
      'Foundational Computer Science Basics'
    ]
  }
];

export const learningTopics: LearningTopic[] = [
  {
    title: 'Python Programming',
    category: 'Core Language',
    description: 'Deepening understanding of object-oriented structures, list comprehensions, and data handling standard libraries.'
  },
  {
    title: 'Web Development',
    category: 'Interface & DOM',
    description: 'Mastering responsive layouts using clean CSS, semantic markup, and vanilla JavaScript DOM operations.'
  },
  {
    title: 'Generative AI',
    category: 'Intelligent Systems',
    description: 'Understanding LLM architectures, API interactions, tokenization, embeddings, and context retrieval.'
  },
  {
    title: 'Prompt Engineering',
    category: 'Interaction Design',
    description: 'Experimenting with few-shot prompting, structured JSON schema outputs, and chain-of-thought instructions.'
  },
  {
    title: 'AI Fundamentals',
    category: 'Theory & Concepts',
    description: 'Grasping foundational concepts in linear algebra, probability, loss functions, and dataset curation.'
  },
  {
    title: 'Git & GitHub',
    category: 'Developer Workflow',
    description: 'Practicing branch workflows, clean commit messages, resolving merge conflicts, and publishing open repos.'
  },
  {
    title: 'Problem Solving',
    category: 'Computational Logic',
    description: 'Daily algorithmic exercises focusing on array manipulations, string algorithms, and condition logic.'
  }
];
