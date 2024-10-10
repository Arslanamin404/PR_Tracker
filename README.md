# PR Tracker

## Project Overview
The **PR Tracker** is a web application designed to help users track their personal records for exercises. It allows users to add, delete, and search for specific records, which include exercise name, weight lifted, and the date of the record. The application also utilizes `redux-persist` to persist data between sessions.

## Features
- **Add New Record**: Users can add new records for their exercises.
- **Delete Record**: Users can delete existing records.
- **Search Functionality**: Users can search for records based on the exercise name or other criteria.
- **State Persistence**: The app uses `redux-persist` to store records even after closing the browser.

## Tech Stack
- **React**: For building the user interface.
- **React Router**: For routing to records page.
- **Redux Toolkit**: For managing application state.
- **Redux Persist**: To persist the state in local storage.
- **@reduxjs/toolkit**: For creating slices and handling actions.

## State Management

This project uses Redux Toolkit for state management. The key slice in the project is `recordSlice`, which manages the following:

- **records**: An array that holds all exercise records.
- **searchQuery**: A string to filter the records.

### Reducers

- **addRecord**: Adds a new record with fields like `exercise`, `weight`, and `date`.
- **deleteRecord**: Removes a record based on the provided `id`.
- **setSearchQuery**: Updates the search query for filtering records.

## Persisting State

The project uses `redux-persist` to save the state (exercise records) in the browser's local storage, ensuring that the data is not lost on refresh.

## Available Scripts

- `npm start`: Starts the development server.
- `npm test`: Launches the test runner.
- `npm build`: Builds the app for production.
# PR_Tracker
