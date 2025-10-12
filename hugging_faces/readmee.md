BEEJ-Farming-Advisory-System/
│
├── frontend/                            # 🌐 Frontend (HTML, CSS, JS)
│   ├── index.html
│   ├── advisory.html
│   ├── detection.html
│   ├── about.html
│   ├── assets/
│   │   ├── css/
│   │   │   ├── style.css
│   │   │   ├── advisory.css
│   │   │   └── detection.css
│   │   ├── js/
│   │   │   ├── main.js
│   │   │   ├── advisory.js
│   │   │   ├── detection.js
│   │   │   └── speech.js
│   │   └── images/
│   └── components/
│
├── backend/                             # 🧠 Node.js + Express + SQL + Hugging Face
│   ├── server.js                        # Entry point
│   ├── config/
│   │   ├── db.js                        # MySQL / PostgreSQL connection setup
│   │   └── env.js                       # Environment variables
│   ├── routes/
│   │   ├── advisoryRoutes.js
│   │   ├── aiRoutes.js
│   │   ├── voiceRoutes.js
│   │   └── userRoutes.js
│   ├── controllers/
│   │   ├── advisoryController.js
│   │   ├── aiController.js              # Connects to Hugging Face API for image/text
│   │   ├── voiceController.js           # Uses Hugging Face Speech models
│   │   └── userController.js
│   ├── models/
│   │   ├── advisoryModel.sql            # SQL table schema (Q&A data)
│   │   ├── userModel.sql
│   │   └── logsModel.sql
│   ├── utils/
│   │   ├── huggingfaceClient.js         # Handles all Hugging Face API calls
│   │   ├── speechToText.js              # (optional helper using HF ASR)
│   │   ├── textToSpeech.js              # Convert text → audio
│   │   └── errorHandler.js
│   └── package.json
│
├── database/
│   ├── beach.sql                        # SQL dump for all tables
│   └── seedData.sql                     # Sample Q&A data insertions
│
├── .env                                 # API keys and DB connection
├── .gitignore
└── README.md
