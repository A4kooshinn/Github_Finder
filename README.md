# 🔍 GitHub Finder

A clean and responsive React.js application that allows users to search for GitHub profiles by username. It displays key profile details such as avatar, name, bio, followers, following, and public repositories using the GitHub Users API.

---

## 🚀 Live Demo

👉 [github-finder.vercel.app](https://github-finnder.vercel.app)

---

## 📸 Screenshot

![GitHub Finder Screenshot](./public/image.png)

---

## 🛠️ Built With

- **React.js** – Functional components and hooks (`useState`, `useEffect`)
- **Tailwind CSS** – For rapid and modern UI styling
- **GitHub API** – Public users endpoint
- **Vite** – Fast build and development environment
- **Vercel** – For seamless deployment

---

## 📦 Features

- 🔍 Search any GitHub username
- 🧑 View avatar, name, and login
- 📄 View bio and public repository count
- 👥 See number of followers and following
- 🚨 Error handling and loading indicators

---

## 🧱 Folder Structure

````plaintext
Github_Finder/
├── public/
│   ├── image.png
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── UserCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
---

## ⚙️ How to Run Locally

```bash
# Clone the repository
git clone https://github.com/A4kooshinn/Github_Finder.git

# Move into the project directory
cd Github_Finder

# Install dependencies
npm install

# Start the development server
npm run dev
````

## 🌐 GitHub REST API

- Endpoint: [`https://api.github.com/users/{username}`](https://api.github.com/users/a4koshin)
- Example: Try [`https://api.github.com/users/octocat`](https://api.github.com/users/a4koshin)

## 👤 Author

**Abdirahman Kooshin**  
🔗 [GitHub Profile](https://github.com/A4koshin)

Would you like me to save this file in your repo or offer it as a downloadable `.md` file?
