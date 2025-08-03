dating-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── api/
│   │   ├── auth.js
│   │   ├── profile.js
│   │   └── match.js             # ← 已含 fetchMatches & postMatch
│   │
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── Poppins-Regular.ttf
│   │   └── images/
│   │       ├── default-avatar.png
│   │       ├── hero-bg.jpg
│   │       ├── section-bg.jpg
│   │       ├── testimonial-bg.jpg
│   │       └── avatars/                        # ← 3 男＋3 女
│   │           ├── male1.jpg
│   │           ├── male2.jpg
│   │           ├── male3.jpg
│   │           ├── female1.jpg
│   │           ├── female2.jpg
│   │           └── female3.jpg
│   │
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Hero.jsx
│   │   │
│   │   ├── Home/
│   │   │   ├── FlowSection.jsx
│   │   │   ├── TestimonialSection.jsx
│   │   │   └── RecommendationSection.jsx
│   │   │
│   │   ├── Common/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   └── Spinner.jsx
│   │   │
│   │   └── Profile/
│   │       ├── ProfileCard.jsx               # ← 隨機挑 3 男／3 女
│   │       └── ProfileForm.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js                        # ← 回傳 isAuthenticated
│   │   └── useFetch.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   │   └── Matches.jsx
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   └── PrivateRoute.jsx
│   │
│   ├── store/
│   │   ├── authStore.js
│   │   ├── profileStore.js
│   │   └── matchStore.js
│   │
│   ├── utils/
│   │   ├── apiClient.js
│   │   └── jwt.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── tailwind.config.js   # ← 已定義 fade-in-up、背景
├── postcss.config.js
├── vite.config.js
└── package.json
