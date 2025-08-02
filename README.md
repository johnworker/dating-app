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
│   │       └── section-bg.jpg
│   │       └── testimonial-bg.jpg   # 見證區背景（可選）
│   │
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Hero.jsx
│   │   │
│   │   ├── Home/                     # 新增首頁專用元件
│   │   │   ├── FlowSection.jsx      # 使用流程
│   │   │   ├── TestimonialSection.jsx # 使用者見證
│   │   │   └── RecommendationSection.jsx # 熱門推薦
│   │   │
│   │   ├── Common/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   └── Spinner.jsx
│   │   │
│   │   └── Profile/
│   │       ├── ProfileCard.jsx
│   │       └── ProfileForm.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useFetch.js
│   │
│   ├── pages/
│   │   ├── Home.jsx                 # 改寫：只呼叫 Hero + 三個區塊
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
