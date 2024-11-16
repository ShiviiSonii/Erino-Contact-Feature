# Contact Management - Mini Feature of a CRM

## Project Description

A **Contact Management** feature for a CRM system that allows users to:

- Add, view, update, and delete contact information.
- Maintain an organized and up-to-date contact list.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-link>
cd <project-directory>
```

### 2. Install Dependencies

#### Backend:

```bash
cd backend
npm install
npm start
```

#### Frontend:

```bash
cd frontend
npm install
npm run dev
```

### 3. Configure the ENV FILE FOR Database:

Ensure you configure the following environment variables in your `.env` file:

- `PORT`
- `MONGODB_URI`

---

## Technical Decisions

- **Frontend:** Built with **ReactJS** and **Material UI** for a responsive and user-friendly interface.
- **Backend:** Implemented with **NodeJS** and **Express** to handle RESTful API endpoints.
- **Database:** **MongoDB** used for storing contacts with CRUD operations.

---

## Challenges and Solutions

- **Pagination & Sorting:** Implemented using Material UI components for easy contact management.
- **Form Validation:** Ensured data validation using React state hooks.
- **CORS Issues:** Resolved using the `cors` package in the backend to handle cross-origin requests.
- **Error Handling:** Handled errors gracefully with appropriate error messages and status codes.
- **Custom Hooks:** Created custom hooks like `useCreateContact`, `useFetchContact`, etc., to improve code reusability.
- **Modular Components:** Designed reusable and modular components to ensure maintainability and scalability of the app.

---

## Screenshots

Here are some screenshots of the application:

![Screenshot 1](https://github.com/user-attachments/assets/36202143-9ad4-4753-83a7-9f00252326e6)
![Screenshot 2](https://github.com/user-attachments/assets/dd479c90-06d9-43c3-863d-b38c2b46e21e)
![Screenshot 3](https://github.com/user-attachments/assets/33f2617a-6988-45ff-98f5-0ea671c5fad4)
![Screenshot 4](https://github.com/user-attachments/assets/5e714b39-81a5-4228-8fbb-420c791bbcaa)
![Screenshot 5](https://github.com/user-attachments/assets/8a95f1e0-4894-4ada-a8fd-2aab15883e7b)

---
