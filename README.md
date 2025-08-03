dating-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── api/
│   │   ├── auth.js
│   │   ├── profile.js
│   │   └── match.js
│   │
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── Poppins-Regular.ttf
│   │   └── images/
│   │       ├── default-avatar.png
│   │       ├── hero-bg.jpg
│   │       ├── section-bg.jpg
│   │       ├── testimonial-bg.jpg
│   │       └── avatars/                        # ← 新增：真實男女頭像
│   │           ├── male1.jpg
│   │           ├── male2.jpg
│   │           ├── female1.jpg
│   │           └── female2.jpg
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
│   │       ├── ProfileCard.jsx               # ← 修改：依性別顯示不同預設頭像
│   │       └── ProfileForm.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
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
├── tailwind.config.js  
├── postcss.config.js
├── vite.config.js
└── package.json
