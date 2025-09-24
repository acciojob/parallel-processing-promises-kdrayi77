// const imageUrls = [
//   'https://via.placeholder.com/150',
//   'https://via.placeholder.com/200',
//   'https://invalid.url/image.jpg' // this one will fail
// ];

// function downloadImage(url) {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.src = url;
//     img.onload = () => resolve(img);
//     img.onerror = () => reject(`Failed to load image: ${url}`);
//   });
// }

// function downloadImages(urls) {
//   const loadingDiv = document.getElementById('loading');
//   const outputDiv = document.getElementById('output');
//   const errorDiv = document.getElementById('error');

//   outputDiv.innerHTML = '';
//   errorDiv.textContent = '';
//   loadingDiv.style.display = 'block';

//   Promise.all(urls.map(downloadImage))
//     .then(images => {
//       loadingDiv.style.display = 'none';
//       images.forEach(img => outputDiv.appendChild(img));
//     })
//     .catch(error => {
//       loadingDiv.style.display = 'none';
//       errorDiv.textContent = error;
//     });
// }

// document.getElementById('download-images-button').addEventListener('click', () => {
//   downloadImages(imageUrls);
// });
