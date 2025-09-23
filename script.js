const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// downloadImage returns a Promise that resolves with an <img> element or rejects with an Error
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image at ${url}`));
  });
}

function downloadImages() {
  output.innerHTML = "";
  errorDiv.textContent = "";
  loading.style.display = "block";

  const imageUrls = images.map(image => image.url);

  Promise.all(imageUrls.map(downloadImage))
    .then(images => {
      loading.style.display = "none";
      images.forEach(img => output.appendChild(img));
    })
    .catch(err => {
      loading.style.display = "none";
      errorDiv.textContent = err.message; // safe: reading message only
    });
}

// Safe beforeEach hook - no mutation of error.message
beforeEach(() => {
  try {
    // Your setup code here, for example:
    // clear the output or reset something if needed
  } catch (err) {
    console.error('Error in beforeEach:', err);
    throw err; // Rethrow original error, do not mutate .message
  }
});

// Attach event listener on DOM ready or test setup
btn.addEventListener("click", downloadImages);
