
## Documentation

### Frontend Configuration:

1. **Clone the Frontend Repository:**
   ```bash
   git clone https://github.com/Keep-up-sharma/TutorialNet.git
   cd TutorialNet
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Backend URL:**
   Open `src/main.js` and set the `app.config.globalProperties.host` to your backend URL.
   ```javascript
   app.config.globalProperties.host = 'http://localhost/TutoriaNetBackend/TutorialNetBackend';
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```

   This will start the development server, and you can access the application at `http://localhost:PORT`.

5. **Build for Production:**
   ```bash
   npm run build
   ```

   This command generates a `dist` folder that contains the optimized production build.

### Backend Configuration:

1. **Clone the Backend Repository:**
   ```bash
   git clone https://github.com/Keep-up-sharma/TutorialNetBackend.git
   cd TutorialNetBackend
   ```

2. **Configure Frontend URL:**
   Open `config.php` and add your frontend URL to the allowed origins.
   ```php
   define('CLIENT_URL', 'http://your-frontend-url');
   ```

3. **Configure Apache:**
   Ensure that your Apache server is configured to serve the backend. Make sure the `DocumentRoot` points to the backend's public directory.

4. **Start Apache:**
   Start or restart your Apache server.

## Importing Database via phpMyAdmin:

1. **Access phpMyAdmin:**
   - Open your web browser and navigate to `http://localhost/phpmyadmin` (or the URL where your phpMyAdmin is hosted).

2. **Log in:**
   - Log in to phpMyAdmin with your credentials.

3. **Create Database:**
   - Create a new database for your TutorialNet application if not already created.

4. **Select Database:**
   - Click on the newly created database in the left sidebar to select it.

5. **Import SQL File:**
   - Navigate to the "Import" tab in the top menu.

6. **Choose File:**
   - Click on the "Choose File" button and select the `tutorials.sql` file from your TutorialNetBackend repository (`TutorialNetBackend/database/tutorials.sql`).

7. **Execute Import:**
   - Click the "Go" button to execute the import. phpMyAdmin will now import the SQL file and set up the necessary tables.

8. **Verification:**
   - Verify that the `tutorials` table and other required tables are now present in your database.

## Creating MySQL User and Editing Database Configuration:

1. **Access MySQL:**
   - Log in to your MySQL server using a MySQL client or the command line.

2. **Create User:**
   - Run the following SQL command to create a new user. Replace 'new_user' and 'password' with your desired username and password.
     ```sql
     CREATE USER 'new_user'@'localhost' IDENTIFIED BY 'password';
     ```

3. **Grant Privileges:**
   - Grant the necessary privileges to the user. For TutorialNet, the user should have privileges on the `tutorials` database.
     ```sql
     GRANT ALL PRIVILEGES ON tutorials.* TO 'new_user'@'localhost';
     ```

4. **Flush Privileges:**
   - After granting privileges, flush the privileges to apply the changes.
     ```sql
     FLUSH PRIVILEGES;
     ```

5. **Edit `db_connect.php`:**
   - Open the `db_connect.php` file located in the backend directory.

6. **Update Database Configuration:**
   - Update the database configuration in `db_connect.php` with the newly created MySQL user credentials.
     ```php
     define('DB_DSN', 'mysql:host=localhost;dbname=tutorials;charset=utf8');
     define('DB_USER', 'new_user');
     define('DB_PASS', 'password');
     ```

7. **Save Changes:**
   - Save the changes to the `db_connect.php` file.


### Running the Application:

1. **Frontend:**
   - To run the frontend in development mode:
     ```bash
     npm run dev
     ```
   - Access the application at `http://localhost:PORT`.

2. **Backend:**
   - Ensure your Apache server is running to serve the backend.

### Troubleshooting:

- **Frontend Issues:**
  - If you encounter issues, check the console for error messages.
  - Verify that the backend URL in `src/main.js` is correct.

- **Backend Issues:**
  - Check Apache error logs for any issues with the backend server.