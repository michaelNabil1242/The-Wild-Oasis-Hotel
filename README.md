# The Wild Oasis

A React application for managing bookings, cabins, and guests at a wilderness retreat. Built with Vite, Supabase, and modern React tooling.

## 🎯 Features

- User authentication (login, signup, update profile)
- Cabin management (create, edit, delete)
- Booking system with check-in/check-out functionality
- Dashboard with charts and statistics
- Responsive UI built with styled-components
- File upload support and client-side state management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (or LTS)
- npm (comes with Node.js)

### Installation

```bash
# clone the repository
git clone <repo-url>
cd the-wild-oasis

# install dependencies
npm install
```

### Environment

This project uses Supabase for backend services. Create a `.env` file at the root with the following variables:

```
VITE_SUPABASE_URL=[https://supabase.com/dashboard/project/kayzjwnvzupfvvuyqxnm]
```

### Running the App

```bash
# start development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
npm run preview
```

## 🛠️ Project Structure

```
src/
  components/     # reusable UI components
  features/       # feature-specific logic and hooks
  pages/          # route-level components
  services/       # API wrappers (Supabase etc.)
  styles/         # global style definitions
  utils/          # helper functions
```

## 🧩 Technologies

- React 18
- Vite 4
- Supabase
- TanStack React Query
- styled-components
- ESLint

## ✨ Contributing

Feel free to open issues or pull requests. Please follow the existing code style and run `npm run lint` before committing.

## 📄 License

This project is licensed under the MIT License.
