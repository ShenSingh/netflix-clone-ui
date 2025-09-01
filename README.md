# Netflix Clone UI

A fully responsive Netflix clone built with React.js that replicates the Netflix user interface and experience. This project features user authentication, movie browsing, video streaming, and a personalized watchlist.

## 🚀 Features

- **User Authentication**: Secure login/signup with Firebase Authentication
- **Responsive Design**: Fully responsive interface that works on all devices
- **Movie Browsing**: Browse movies and TV shows by categories
- **Video Player**: Built-in video player for streaming content
- **Personal Watchlist**: Add/remove movies from your personal list
- **Dynamic Content**: Real-time content loading and management
- **Netflix-like UI**: Pixel-perfect recreation of Netflix's interface

## 📱 Screenshots

### Home Page
![Home Page](public/screenshot/Screenshot%202025-09-02%20at%2001.47.23.png)

### Movie Browser
![Movie Browser](public/screenshot/Screenshot%202025-09-02%20at%2001.47.49.png)

### TV Shows
![TV Shows](public/screenshot/Screenshot%202025-09-02%20at%2001.48.07.png)

### SignIn
![My List](public/screenshot/Screenshot%202025-09-02%20at%2001.48.22.png)

### SignUp
![Video Player](public/screenshot/Screenshot%202025-09-02%20at%2001.48.39.png)

## 🛠️ Technologies Used

- **Frontend**: React 18.3.1
- **Routing**: React Router DOM 6.26.1
- **State Management**: Redux Toolkit 2.2.7 & React Redux 9.1.2
- **Styling**: Styled Components 6.1.12 & CSS3
- **Authentication**: Firebase 10.13.0
- **HTTP Client**: Axios 1.7.5
- **Icons**: React Icons 5.3.0
- **Testing**: Jest & React Testing Library

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/netflix-clone-ui.git
   cd netflix-clone-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore Database
   - Copy your Firebase config and update `src/utils/firebase-config.js`

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── BackgroundImage.jsx
│   ├── Card.jsx
│   ├── CardSlider.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── NavBar.jsx
│   └── Slider.jsx
├── pages/              # Main application pages
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Netflix.jsx
│   ├── Movies.jsx
│   ├── Tv-show.jsx
│   ├── MyList.jsx
│   └── Player.jsx
├── store/              # Redux store configuration
│   └── index.js
├── utils/              # Utility functions and configs
│   ├── constants.js
│   └── firebase-config.js
├── assets/             # Static assets (images, videos)
└── App.jsx             # Main application component
```

## 🚦 Routes

- `/` - Home page with featured content
- `/login` - User login page
- `/signup` - User registration page
- `/movies` - Movies catalog
- `/tv` - TV shows catalog
- `/mylist` - Personal watchlist
- `/player` - Video player page

## 🔐 Firebase Configuration

This project uses Firebase for:
- **Authentication**: User login/signup
- **Database**: Storing user data and preferences

Make sure to set up your Firebase project and update the configuration in `src/utils/firebase-config.js`.

## 🌟 Key Features Implementation

### Authentication Flow
- Secure user registration and login
- Protected routes for authenticated users
- Persistent user sessions

### Content Management
- Dynamic content loading
- Category-based browsing
- Search functionality
- Personalized recommendations

### User Experience
- Smooth animations and transitions
- Responsive design for all screen sizes
- Netflix-like hover effects and interactions

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Netflix for the original design inspiration
- The Movie Database (TMDb) for movie data
- Firebase for backend services
- React community for excellent documentation and resources

## 📞 Contact

Your Name - [gayashan9090@gmail.com](mailto:gayashan9090@gmail.com)

Project Link: [https://github.com/ShenSingh/netflix-clone-ui](https://github.com/ShenSingh/netflix-clone-ui)

---

⭐ Star this repo if you find it helpful!
