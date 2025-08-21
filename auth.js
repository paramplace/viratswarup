// This is a simplified example. For production, consider more robust security.
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        let db;
        const request = indexedDB.open('userDB', 1);

        request.onerror = function(event) {
            console.error("Database error: " + event.target.errorCode);
        };

        request.onupgradeneeded = function(event) {
            db = event.target.result;
            const objectStore = db.createObjectStore("users", { keyPath: "username" });
            // For a real application, hash passwords before storing.
            objectStore.createIndex("password", "password", { unique: false });
        };

        request.onsuccess = function(event) {
            db = event.target.result;
        };

        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const transaction = db.transaction(["users"]);
            const objectStore = transaction.objectStore("users");
            const request = objectStore.get(username);

            request.onerror = function(event) {
                console.error("Transaction error.");
            };

            request.onsuccess = function(event) {
                if (request.result) {
                    if (request.result.password === password) {
                        alert("Login successful!");
                        // Redirect to the feed page
                        window.location.href = 'feed.html';
                    } else {
                        alert("Incorrect password.");
                    }
                } else {
                    // For simplicity, we are auto-registering the user if not found
                    const addUserTransaction = db.transaction(["users"], "readwrite");
                    const userStore = addUserTransaction.objectStore("users");
                    userStore.add({ username: username, password: password });
                    alert("User registered and logged in!");
                    window.location.href = 'feed.html';
                }
            };
        });
    }
});
