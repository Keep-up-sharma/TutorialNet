
# TutorialNet
# Multilingual Tutorial Content Management System (CMS)

## Demo
A demo is available here(https://tutorialnetdemo.000webhostapp.com/)
## Overview
This repository contains the code for a Multilingual Tutorial Content Management System (CMS). The CMS is designed to manage, generate, and present tutorials in a user-friendly manner, addressing issues related to global accessibility of educational tutorials.

## Features
- **User Roles**: The CMS supports two user roles - Admin and Moderator. Moderators can add, edit, and delete all tutorials, while Users can access and view tutorials in their preferred language (and add and edit their own).
- **Database Structure**: The CMS features a robust database structure that efficiently stores tutorial content, including slides and images.
- **Multilingual Support**: The CMS is capable of handling multilingual content effectively, making learning resources accessible to a global audience.
- **Engaging Content**: The use of slides and images makes the tutorials more engaging and easier to understand.

## Goal
The goal of this project is to develop a CMS that provides an engaging and accessible learning platform for users worldwide. By leveraging PHP and various web development technologies, we aim to create a system that is robust, user-friendly, and capable of handling multilingual content effectively.

## Contributing
We welcome contributions!

## Setup

### Frontend Configuration:

#### 1. Clone the Frontend Repository:

```bash
git clone https://github.com/Keep-up-sharma/TutorialNet.git
cd TutorialNet
```

#### 2. Install Dependencies:

```bash
npm install
```

#### 3. Configure Backend URL:

Open the file `src/main.js` and find the line that starts with `app.config.globalProperties.host`. Replace the URL inside the single quotes with your backend URL:

```javascript
app.config.globalProperties.host = 'http://localhost/TutoriaNetBackend/TutorialNetBackend';
```

#### 4. Run Development Server:

```bash
npm run dev
```

This starts the development server, and you can view your application at `http://localhost:PORT`.

#### 5. Build for Production:

```bash
npm run build
```

This command generates a `dist` folder containing the optimized production build.

### Backend Configuration:

#### 1. Clone the Backend Repository:

```bash
git clone https://github.com/Keep-up-sharma/TutorialNetBackend.git
cd TutorialNetBackend
```

#### 2. Configure Frontend URL:

Open the file `config.php` and find the line with `define('CLIENT_URL', 'http://your-frontend-url');`. Replace the URL inside the single quotes with your frontend URL:

```php
define('CLIENT_URL', 'http://your-frontend-url');
```

#### 3. Configure Apache:

Make sure your Apache server is set up to serve the backend. Confirm that the `DocumentRoot` points to the backend's public directory.

#### 4. Start Apache:

Start or restart your Apache server.

### Importing Database via phpMyAdmin:

#### 1. Access phpMyAdmin:

Navigate to `http://localhost/phpmyadmin` in your web browser.

#### 2. Log in:

Log in to phpMyAdmin with your credentials.

#### 3. Create Database:

Create a new database for your TutorialNet application if not already created.

#### 4. Import SQL File:

- Go to the "Import" tab.
- Click "Choose File" and select `TutorialNetBackend/database/tutorials.sql`.
- Click "Go" to execute the import.

#### 5. Verification:

Check that the `tutorials` table and other required tables are present in your database.

### Creating MySQL User and Editing Database Configuration:

#### 1. Access MySQL:

Log in to your MySQL server using a MySQL client or the command line.

#### 2. Create User:

Replace 'new_user' and 'password' with your desired username and password:

```sql
CREATE USER 'new_user'@'localhost' IDENTIFIED BY 'password';
```

#### 3. Grant Privileges:

Grant privileges on the `tutorials` database:

```sql
GRANT ALL PRIVILEGES ON tutorials.* TO 'new_user'@'localhost';
```

#### 4. Flush Privileges:

Flush privileges to apply the changes:

```sql
FLUSH PRIVILEGES;
```

#### 5. Edit `db_connect.php`:

Open the `db_connect.php` file in the backend directory.

#### 6. Update Database Configuration:

Update the database configuration with the MySQL user credentials:

```php
define('DB_DSN', 'mysql:host=localhost;dbname=tutorials;charset=utf8');
define('DB_USER', 'new_user');
define('DB_PASS', 'password');
```

#### 7. Save Changes:

Save the changes to the `db_connect.php` file.

### Running the Application:

#### Frontend:

To run the frontend in development mode:

```bash
npm run dev
```

Access the application at `http://localhost:PORT`.

#### Backend:

Ensure your Apache server is running to serve the backend.

### Troubleshooting:

- **Frontend Issues:**
  - Check the browser console for error messages.
  - Verify the backend URL in `src/main.js`.

- **Backend Issues:**
  - Check Apache error logs for backend server issues.