
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