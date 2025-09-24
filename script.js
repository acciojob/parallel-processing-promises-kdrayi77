const imageUrls = [
  // Replace these with valid image URLs (or use some invalid ones to test error handling)
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/200',
  'https://invalid.url/image.jpg' // this will trigger an error
];

// Helper function to download an image
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;

    img.onload = () => resolve(img); // image loaded successfully
    img.onerror = () => reject(`Failed to load image: ${url}`); // loading failed
  });
}

// Main function to download all images
function downloadImages(urls) {
  const loadingDiv = document.getElementById('loading');
  const outputDiv = document.getElementById('output');
  const errorDiv = document.getElementById('error');

  // Clear previous content
  outputDiv.innerHTML = '';
  errorDiv.textContent = '';

  // Show loading spinner
  loadingDiv.style.display = 'block';

  // Download all images in parallel
  const downloadPromises = urls.map(downloadImage);

  Promise.all(downloadPromises)
    .then(images => {
      // Hide loading spinner
      loadingDiv.style.display = 'none';

      // Display all images
      images.forEach(img => {
        outputDiv.appendChild(img);
      });
    })
    .catch(error => {
      // Hide loading spinner
      loadingDiv.style.display = 'none';

      // Show error message
      errorDiv.textContent = error;
    });
}

// Optional: call the function on page load or bind it to a button
document.getElementById('startBtn').addEventListener('click', () => {
  downloadImages(imageUrls);
});
