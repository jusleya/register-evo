# RegisterEvo

## Solution

This project was developed as part of the **Front-end technical challenge for ABC Fitness**.

The goal of the challenge was to build a **user registration application**, focusing on form validation, data persistence, and navigation between pages, using Angular as the main framework.

The application is a **client-side Angular app**, where users can:
- Fill out a registration form
- Validate required fields and email format
- Persist user data using `localStorage`
- View the saved user information on a separate page after submission

---

## Requirements Covered

The project fulfills all the required points from the challenge:

- ✅ Application structured using **Angular (version 2+)**
- ✅ HTML structure created for all pages
- ✅ External CSS files used (no inline styles)
- ✅ Email validation implemented using JavaScript / Angular forms
- ✅ Data persistence using **localStorage**
- ✅ Navigation to a new page displaying stored user data after saving

## Technologies Used

- **Angular** (standalone components)
- **TypeScript**
- **HTML5**
- **CSS3**
- **Angular Router**
- **Vitest** for unit testing

## Running the Project

### Install dependencies

```bash
npm install
```

### Run application

```bash
npm start
```

### Run tests

```bash
npm test
```


## Project Structure

The project is organized as follows:

```
src
├── app
│ ├── components
│ │ └── header
│ ├── pages
│ │ ├── register
│ │ └── information
│ ├── services
│ │ └── localStorage.service.ts
│ └── app.routes.ts
├── assets
│ └── img
```

### Folder Description

- **components/header**  
  Reusable header component used across pages.

- **pages/register**  
  User registration page containing:
  - Form fields (name, email, password)
  - Validation logic
  - Submit handling

- **pages/information**  
  Page responsible for displaying the user data stored in `localStorage`.

- **services**  
  Contains the `StorageService`, responsible for handling `localStorage` operations.

- **assets**  
  Static assets such as global styles and other resources.

## Application Flow

1. User fills out the registration form.
2. Form validation ensures:
   - Required fields are filled
   - Email follows a valid pattern
   - Password has a minimum length
3. On successful submission:
   - User data is saved to `localStorage`
   - The application navigates to the information page
4. The information page reads data from `localStorage` and displays it.
5. The user can return to the registration page, clearing stored data.

## Application Flow
Although not explicitly required in the challenge scope, some additional improvements were implemented to ensure better code quality, usability, and user experience:

- Unit tests were added to validate the main application flows, including form submission, data persistence, and navigation behavior.
- Accessibility best practices were considered, such as the correct use of semantic HTML elements, proper association between labels and inputs, and meaningful alt attributes for images.
- A complete navigation flow was implemented by adding a “Back” button on the information page, which clears the `localStorage` data and allows the user to restart the registration process from the beginning.
