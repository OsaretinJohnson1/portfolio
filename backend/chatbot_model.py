from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

questions = [
    "What is your portfolio about?",
    "What technologies do you use?",
    "How can I contact you?",
    "How do I reach you?",
    "What's the best way to contact you?",
    "How can I get in touch with you?",
    "What is your experience with AI and Machine Learning?",
    "Can you explain your projects in more detail?",
    "How did you build this portfolio?",
    "How do you handle challenges or bugs in your projects?",
    "Do you offer freelance or contract work?",
    "What is your experience with frontend development?",
    "What sets your portfolio apart from others?",
    "What are your career goals as a software engineer?",
    "Hello",
    "Hi",
    "What do you think is the future of AI in software engineering?",
    "What motivates you as a software engineer?",
    "What are some challenges you faced while learning AI/ML?",
    "What excites you about AI and Machine Learning?"
]

answers = {
    "What is your portfolio about?": "This portfolio showcases my projects, skills, and experiences as a software engineer with a focus on AI, Machine Learning, and web app development.",
    "What technologies do you use?": "I primarily use React, Next.js, C#, ASP.NET, Python, JavaScript, and SQL, among other technologies.",
    "How can I contact you?": "You can contact me via email or through LinkedIn.",
    "How do I reach you?": "You can contact me via email or through LinkedIn.",
    "What's the best way to contact you?": "You can contact me via email or through LinkedIn.",
    "How can I get in touch with you?": "You can contact me via email or through LinkedIn.",
    "What is your experience with AI and Machine Learning?": "I am currently pursuing two certificates in AI and Machine Learning, focusing on developing machine learning models for classification, regression, and deep learning tasks. I&#39;m also gaining experience with popular frameworks like TensorFlow and PyTorch.",
    "Can you explain your projects in more detail?": "Sure! You can find detailed descriptions of each project in the portfolio section. Each project includes the technologies used, challenges faced, and the final outcome.",
    "How did you build this portfolio?": "This portfolio was built using Next.js, React, and Tailwind CSS for the frontend. It&#39;s hosted on Vercel, with Python used for backend services.",
    "How do you handle challenges or bugs in your projects?": "I approach challenges by analyzing the problem, researching potential solutions, and using debugging tools to troubleshoot. I make sure to test my solutions thoroughly and refine them based on the results.",
    "Do you offer freelance or contract work?": "Yes, I am available for freelance and contract opportunities. Feel free to reach out to me through email with your project details.",
    "What is your experience with frontend development?": "I have experience building responsive web applications using React, Next.js, and Tailwind CSS. I am also skilled in integrating APIs and ensuring cross-browser compatibility.",
    "What sets your portfolio apart from others?": "My portfolio highlights my focus on combining AI and Machine Learning with software engineering practices. I also ensure each project showcases my problem-solving skills, creativity, and technical abilities.",
    "What are your career goals as a software engineer?": "I aim to continue growing my skills in AI and Machine Learning while contributing to impactful projects. I am excited to collaborate with teams that prioritize innovation and problem-solving.",
     "Hello": "Hi there! I am Osaretin's digital twin, here to represent and assist her. Think of me as her personal shadow in the digital world, ready to answer your questions and showcase her skills!",
    "Hi": "Hi there! I am Osaretin's digital twin, here to represent and assist her. Think of me as her personal shadow in the digital world, ready to answer your questions and showcase her skills!",
    "What do you think is the future of AI in software engineering?": "AI is becoming integral to software development, from automating code generation to enhancing testing and deployment. I believe we will see more AI-driven tools that empower developers.",
    "What motivates you as a software engineer?": "The thrill of solving complex problems and seeing my solutions come to life motivates me every day.",
    "What are some challenges you faced while learning AI/ML?": "Understanding the math behind algorithms was initially challenging. I tackled it by breaking concepts into smaller parts and revisiting fundamentals.",
    "What excites you about AI and Machine Learning?": "The ability to create intelligent systems that can adapt and learn excites me. AI has potential to improve lives is truly inspiring."
}

# Training process (TF-IDF)
vectorizer = TfidfVectorizer().fit(questions)
X = vectorizer.transform(questions)

def get_response(user_input):
    # Vectorize the user input and compute cosine similarity
    user_input_vec = vectorizer.transform([user_input])
    similarity = cosine_similarity(user_input_vec, X).flatten()
    best_match_idx = np.argmax(similarity)

    if similarity[best_match_idx] > 0.5:
        matched_question = questions[best_match_idx]
        return answers[matched_question]
    else:
        return "Sorry, I don't understand the question. Please try again."
