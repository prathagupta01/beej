BEEJ-Farming-Advisory-System/
│
├── frontend/                             # 🌐 Frontend (HTML, CSS, JS)
│   ├── index.html                        # Homepage (intro, nav, voice assistant)
│   ├── advisory.html                     # Advisory chat/voice interaction page
│   ├── detection.html                    # Leaf disease detection UI
│   ├── about.html                        # About the system
│   ├── assets/
│   │   ├── css/
│   │   │   ├── style.css                 # Main stylesheet
│   │   │   ├── advisory.css              # Advisory page design
│   │   │   └── detection.css             # Leaf detection UI design
│   │   ├── js/
│   │   │   ├── main.js                   # General frontend scripts
│   │   │   ├── advisory.js               # Voice → text → advisory logic (frontend)
│   │   │   ├── detection.js              # Handles image upload & detection
│   │   │   └── speech.js                 # Speech recognition (Web Speech API)
│   │   └── images/                       # Logos, icons, backgrounds, etc.
│   └── components/                       # Optional HTML partials (header/footer)
│
├── backend/                              # 🧠 Backend (Node.js + Express + MongoDB)
│   ├── server.js                         # Entry point of backend server
│   ├── config/
│   │   └── db.js                         # MongoDB connection
│   ├── routes/
│   │   ├── advisoryRoutes.js             # Routes for advisory Q&A
│   │   ├── aiRoutes.js                   # Routes for AI module communication
│   │   ├── voiceRoutes.js                # Routes for speech-to-text handling
│   │   └── userRoutes.js                 # (optional) user management routes
│   ├── controllers/
│   │   ├── advisoryController.js         # Logic to fetch responses from DB
│   │   ├── aiController.js               # Sends image/text to AI service
│   │   ├── voiceController.js            # Handles speech recognition processing
│   │   └── userController.js             # (optional) handles user data
│   ├── models/
│   │   ├── Advisory.js                   # Schema for storing Q&A pairs
│   │   ├── User.js                       # Schema for user info
│   │   └── Logs.js                       # Logs for AI/advisory interactions
│   ├── middleware/
│   │   ├── errorMiddleware.js            # Error handling
│   │   └── asyncHandler.js               # Wrapper for async functions
│   ├── utils/
│   │   ├── speechToText.js               # Converts audio input → text (Google API, etc.)
│   │   ├── textToSpeech.js               # Converts advisory text → audio
│   │   └── aiServiceConnector.js         # Handles AI model communication
│   └── package.json                      # Backend dependencies (Express, Mongoose, etc.)
│
├── ai_module/                            # 🤖 AI microservice (separate from backend)
│   ├── leaf_detection/
│   │   ├── model.py                      # Trained model (CNN, etc.)
│   │   ├── predict.py                    # API endpoint to handle image prediction
│   │   └── requirements.txt              # Python dependencies
│   ├── voice_processing/
│   │   ├── transcribe.py                 # Converts audio → text
│   │   └── speak.py                      # Converts text → audio
│   └── app.py                            # Flask/FastAPI entry point
│
├── database/
│   ├── advisoryData.json                 # Sample advisory Q&A data
│   └── seeds.js                          # Script to seed MongoDB with initial data
│
├── .env                                  # Environment variables (API keys, DB URL)
├── .gitignore
├── README.md                             # Project documentation
└── package.json                          # Root dependencies if using monorepo style
