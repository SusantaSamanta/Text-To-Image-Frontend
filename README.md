# Text To Image (VisionBrush)

An AI-powered text-to-image generation web app. Describe what you want in plain text and VisionBrush turns it into an image. Users can manage credits, browse a public community gallery, and keep a personal gallery of their creations.

## Live Demo

| Service | URL |
| --- | --- |
| Frontend | https://text-to-image-frontend-b7ah.onrender.com |
| Backend API | https://text-to-image-backend-x154.onrender.com |

> The backend runs on Render's free tier, so the first request may take a few seconds to wake up.

## Features

- **AI image generation** from text prompts
- **User authentication** (sign up, login, logout, email verification)
- **Credit system** with a credits/pricing modal
- **Community gallery** of public images
- **Personal profile** with account details, stats, and generated images
- **Responsive UI** for mobile, tablet, and desktop
- **Custom 404 page** with SPA routing
- **Toast notifications** for user feedback

## Tech Stack

**Frontend**

- React 19
- Vite 7
- Tailwind CSS 4
- React Router 7
- Framer Motion
- Axios
- React Icons
- React Toastify

**Backend**

- Node.js / Express
- MongoDB
- REST API (hosted separately)

**DevOps**

- Docker (multi-stage build)
- Nginx (static hosting + SPA fallback)
- Render (deployment)

## Project Structure

```
Text-To-Image-Frontend/
├── public/                  # Static files served as-is
├── src/
│   ├── assets/              # Images and static data
│   ├── components/          # Reusable UI components
│   ├── context/             # React context (AppContext)
│   ├── pages/               # Route pages
│   ├── routes/              # Protected route wrapper
│   ├── style/               # Component CSS
│   ├── utils/               # API helpers
│   ├── App.jsx              # Routes and app shell
│   ├── main.jsx             # App entry point
│   └── index.css            # Tailwind entry
├── Dockerfile
├── nginx.conf
├── vite.config.js
├── package.json
└── README.md
```

## Routes

| Path | Page | Access |
| --- | --- | --- |
| `/` | Home | Public |
| `/community` | Community gallery | Public |
| `/verify-email` | Email verification | Public |
| `/generate` | AI image generation | Logged in |
| `/profile` | User profile and gallery | Logged in |
| `*` | 404 Not Found | Public |

## Getting Started

### Prerequisites

- Node.js 20+ (Docker image uses Node 22)
- npm
- A running backend API

### Installation

```bash
git clone <your-repository-url>
cd Text-To-Image-Frontend
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_BACKEND_URL=https://text-to-image-backend-x154.onrender.com
```

Vite only exposes variables prefixed with `VITE_`, and they are **inlined at build time**, not read at runtime.

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## Docker

The project uses a multi-stage Docker build: Node builds the static files, then Nginx serves them.

### Build the Image

`VITE_BACKEND_URL` must be passed as a build argument because Vite bakes it into the bundle:

```bash
docker build \
  --build-arg VITE_BACKEND_URL=https://text-to-image-backend-x154.onrender.com \
  -t text-to-image-frontend .
```

### Run the Container

```bash
docker run --name text-to-img-frontend-container -p 5173:80 text-to-image-frontend
```

Open `http://localhost:5173`.

### Nginx and SPA Routing

`nginx.conf` uses:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

This serves `index.html` for unknown paths, so client-side routes (including the 404 page) work on direct visits and refreshes.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build the production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Notes

- The frontend sends requests with `withCredentials = true`, so the backend must allow the frontend origin via CORS and allow credentials.
- Authentication relies on backend cookies; make sure cookies work across the deployed frontend and backend domains.
- The backend lives in a separate repository/service and is not included here.

## License

This project is for learning and demonstration purposes.
