# 🐶 be-openai - Dog Breed Comparison Server

This is a simple Express server that uses the OpenAI API (GPT-4) to compare two dog breeds and provide detailed comparisons on their strengths and weaknesses.

---

## 📌 Features
- Compare two dog breeds using AI-powered descriptions.
- Provides clear, structured, and bolded comparisons for better readability.
- Simple REST API setup with `Express`.

---

## 📥 Installation

### 🔍 Cloning the Repository
To get started, you need to clone this repository to your local machine. Open your terminal and run:

git clone https://github.com/Batista0523/OpenAI-backend-server.git

cd be-openai
npm install

## The following packages will be installed:

express - Fast, minimalist web framework for Node.js
cors - Middleware for enabling Cross-Origin Resource Sharing
dotenv - Loads environment variables from a .env file
openai - Official OpenAI Node.js client
nodemon (Development Dependency) - Automatically restarts the server on code changes


# 🔑 Getting Your OpenAI API Key
Go to OpenAI API and sign up or log in.
Click on "Create new secret key".
Copy the generated API key.
Create a .env file in the root directory of your project and add your OpenAI key:
env
OPENAI_KEY=your_openai_api_key


# Running the Server
Development Mode (with Nodemon)
To start the server with automatic restarts on code changes, use:
nodemon index.js


# 🌐 API Endpoints
📍 Compare Dog Breeds
URL: /compare
Method: POST
Description: Compare two dog breeds and get a detailed comparison with strengths and weaknesses.

Request Body Example:
json

{
  "breed1": "Labrador Retriever",
  "breed2": "Golden Retriever"
}

Successful Response Example:
{
  "comparison": "Detailed comparison between Labrador Retriever and Golden Retriever..."
}

# server lives at 
 [Server] (https://openai-backend-server.onrender.com)