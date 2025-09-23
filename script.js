const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// Returns a promise that resolves when an image is loaded, rejects on error
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;

    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image at ${url}`));
  });
}

// Main function to download all images in parallel using Promise.all
function downloadImages() {
  // Clear previous results and errors
  output.innerHTML = "";
  errorDiv.textContent = "";

  // Show loading spinner
  loading.style.display = "block";

  const imageUrls = images.map(image => image.url);

  // Map each URL to a download promise
  const downloadPromises = imageUrls.map(downloadImage);

  Promise.all(downloadPromises)
    .then((downloadedImages) => {
      // Hide loading spinner
      loading.style.display = "none";

      // Append each downloaded image to the output div
      downloadedImages.forEach(img => output.appendChild(img));
    })
    .catch((err) => {
      // Hide loading spinner
      loading.style.display = "none";

      // Show error message
      errorDiv.textContent = err.message;
    });
}

// Attach event listener to the button
btn.addEventListener("click", downloadImages);
