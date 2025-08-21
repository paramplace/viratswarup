// This is a basic implementation. Refer to Cloudinary's documentation for more advanced options. [12]
document.addEventListener("DOMContentLoaded", function() {
    const imageUpload = document.getElementById('image-upload');
    if (imageUpload) {
        const cloudName = 'YOUR_CLOUD_NAME'; // Replace with your Cloudinary cloud name
        const uploadPreset = 'YOUR_UPLOAD_PRESET'; // Replace with your unsigned upload preset

        imageUpload.addEventListener('change', function(event) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', uploadPreset);

            fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Image uploaded successfully:', data);
                // You can now display the uploaded image or store its URL
                const imageUrl = data.secure_url;
                // Example: display the uploaded image
                const feedPosts = document.getElementById('feed-posts');
                const newPost = document.createElement('div');
                newPost.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image" style="max-width: 100%;">`;
                feedPosts.prepend(newPost);
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });
        });
    }
});
