document.addEventListener("DOMContentLoaded", function () {
  // Array of image URLs
  const imageUrls = [
    "./imageB.jpg",
    "./imageC.jpg",
    "./imageD.jpg",
    // Add more image URLs as needed
  ];

  // Get the element where you want to change the background image
  const backgroundElement = document.getElementById("bg-img");

  // Function to change the background image
  function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    console.log({ randomIndex });
    const imageUrl = imageUrls[randomIndex];
    backgroundElement.src = `${imageUrl}`;
  }

  // Change background image initially
  changeBackgroundImage();

  setInterval(changeBackgroundImage, 3 * 1000);
});
