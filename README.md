Project: Enigma - A Modern Client-Side Website
Description
Enigma is a fully functional, all-feature website template built exclusively with HTML, JavaScript, and CSS. It is designed to be a modern, self-contained web application that runs entirely on the client-side, requiring no backend server.
The project features a sleek, dark red color theme optimized for a great visual experience. Its layout is fully responsive, ensuring perfect viewing and functionality on both desktop and mobile devices. Key features include a persistent login system using IndexedDB and image post functionality on a feed page powered by the Cloudinary API.
Key Features
Pure Client-Side: No backend required. Built with only HTML, CSS, and vanilla JavaScript.
Stunning Dark Red Theme: A visually appealing and optimized dark red and black color scheme.
Fully Responsive Design: Adapts seamlessly to all screen sizes, from large desktops to small mobile phones.
Consistent UI/UX: A shared header, footer, and navigation system are dynamically loaded across all pages for a unified user experience.
Mobile-First Navigation: Includes a top navigation bar for desktops and a convenient five-button bottom navigation bar for mobile users.
Persistent Login with IndexedDB: A welcome/login page that uses the browser's IndexedDB to store user credentials, providing a persistent session on the client's machine.
Image Uploads with Cloudinary: The "Feed" page allows users to upload images directly to a Cloudinary account, demonstrating powerful API integration.
Dynamic "Back" Button: A functional back button to easily navigate to the previous page in the browser's history.
Comprehensive Page Structure: Includes a variety of pre-built pages for different functionalities like Profile, Settings, About, and more.
Settings Page: Includes stubs for features like a dark mode toggle and a change password form.
Pages Included
Welcome/Login: The landing page with a login form using IndexedDB.
Home: The main content page after login.
Agnosia: A content page.
Enigma: A content page.
Emulate: A content page.
Feed: An interactive page where users can post messages and upload images via Cloudinary.
Profile: A page for users to view and edit their profile information.
Settings: A page to manage application settings like dark mode or changing a password.
Latest Update: A page for news or updates.
About: A page with information about the project.
Share: A page with options to share the website.
Contact: A contact information page.

Tech Stack
Frontend: HTML5, CSS3, JavaScript (ES6+)
Storage: IndexedDB API (for client-side user data)
Image Hosting: Cloudinary API (for image uploads)
File Structure
code
Code
/
|-- index.html              # Welcome/Login page
|-- agnosia.html
|-- enigma.html
|-- emulate.html
|-- feed.html
|-- profile.html
|-- settings.html
|-- latest-update.html
|-- about.html
|-- share.html
|-- contact.html
|
|-- css/
|   |-- style.css           # All styles for the website
|
|-- js/
|   |-- main.js             # Loads header/footer, back button logic
|   |-- auth.js             # Handles IndexedDB login and registration
|   |-- cloudinary.js       # Handles image upload to Cloudinary
|
|-- partials/
|   |-- header.html         # Reusable header and navigation
|   |-- footer.html         # Reusable footer
|
|-- README.md               # This file
