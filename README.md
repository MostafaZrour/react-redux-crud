
# React Redux CRUD - User Management

This repository contains a small **CRUD (Create, Read, Update, Delete)** application for managing users. It demonstrates the use of **React** and **Redux** to handle state efficiently and perform basic operations.

## Repository Information

- **Repository Name**: react-redux-crud
- **GitHub Link**: [https://github.com/MostafaZrour/react-redux-crud.git](https://github.com/MostafaZrour/react-redux-crud.git)

## Features

- Add new users with a form.
- View a list of users.
- Edit user information.
- Delete users from the list.
- State management powered by **Redux**.

## Prerequisites

Before running this project, ensure you have the following installed:
- Node.js (>= 14.x)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MostafaZrour/react-redux-crud.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-redux-crud
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Adding a User
1. Open the "Add User" form.
2. Fill in user details and click "Add".

### Viewing Users
- The main page lists all users.

### Editing a User
1. Click the "Edit" button next to a user.
2. Update the information and save changes.

### Deleting a User
- Click the "Delete" button next to a user to remove them from the list.

## Project Structure

```
react-redux-crud/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │     Add.js            # Component for adding a new user via a form.
│   │     Layout.js         # Main layout component to structure the application.
│   │     List.js           # Component for displaying the list of users and providing edit/delete actions.
│   │     PizzaBox.jsx      # Component representing individual pizza items or orders.
│   │     Products.jsx      # Component for displaying and managing products fetched from the API.
│   │     Update.js         # Component for updating an existing user with prefilled data.
│   ├── products/           # Redux files for managing products
│   │     ActionTypes.jsx   # Contains action type constants for product-related actions.
│   │     ProductAction.jsx # Redux action creators for handling products.
│   │     ProductReducer.jsx# Handles state changes related to products in the Redux store.
│   ├── reducers/           # Redux reducers
│   │     PizzaReducer.jsx  # Reducer for managing pizza-related state (e.g., orders, inventory).
│   │     UserReducer.jsx   # Reducer for managing user-related state (e.g., CRUD operations).
│   ├── store.js            # Redux store configuration
│   ├── App.js              # Main application component
│   └── index.js            # Entry point
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation


```

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Redux**: Library for state management.
- **React-Redux**: Integration of Redux with React.
- **CSS**: Styling (or replace with your preferred styling framework).

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any questions or feedback, contact:
- **Mostafa Zrour**
- GitHub: [MostafaZrour](https://github.com/MostafaZrour)
