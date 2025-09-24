const imageUrls = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg'
];

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
  });
}

async function downloadImages(urls) {
  const loadingDiv = document.getElementById('loading');
  const outputDiv = document.getElementById('output');
  const errorDiv = document.getElementById('error');

  // Clear previous content
  outputDiv.innerHTML = '';
  errorDiv.textContent = '';

  // Show loading spinner
  loadingDiv.style.display = 'block';

  try {
    const imagePromises = urls.map(downloadImage);
    const images = await Promise.all(imagePromises);

    // Hide loading spinner
    loadingDiv.style.display = 'none';

    // Display images
    images.forEach(img => outputDiv.appendChild(img));
  } catch (error) {
    // Hide loading spinner
    loadingDiv.style.display = 'none';

    // Show error message
    errorDiv.textContent = error.message;
  }
}

// Trigger the download
downloadImages(imageUrls);
