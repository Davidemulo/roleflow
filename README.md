# RoleFlow

A dynamic role-based dashboard built with React + TypeScript demonstrating authentication, protected routes, and conditional rendering.

---

## Features

- Fake authentication system (username + role)
- Role-based access control:
  - Admin
  - Editor
  - Viewer
- Protected routes using React Router
- Conditional rendering based on user roles
- Global auth state using Context API
- Logout functionality
- useState, useEffect, useContext, useRef hooks
- Clean routing structure with 404 page

---

## Routes

- `/login` → Login page
- `/dashboard` → Role-based dashboard
- `/profile` → User profile (protected)
- `/settings` → Admin-only page
- `*` → 404 Not Found

---

## Authentication Flow

1. User logs in with username and selected role
2. User data is stored in Context API
3. Protected routes check authentication state
4. Admin-only routes restrict access based on role
5. Logout clears user state and redirects to login

---

## Tech Stack

- React
- TypeScript
- React Router DOM
- Context API
- Vite

---

## Setup Instructions

```bash
npm install
npm run dev
```

---

## Demo Roles

You can test using:

- Admin → full access
- Editor → content access
- Viewer → read-only access

---

## Author

Built as a learning project for mastering authentication, routing, and role-based UI in React.
