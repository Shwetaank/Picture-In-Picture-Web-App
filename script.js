const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Function to prompt user to select media stream and play the video
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Handle error
    console.error("Error selecting media stream:", error);
  }
}

// Event listener for the button to start Picture-in-Picture mode
button.addEventListener('click', async () => {
  // Disable button while Picture-in-Picture mode starts
  button.disabled = true;

  // Start Picture-in-Picture mode
  await videoElement.requestPictureInPicture();

  // Re-enable button
  button.disabled = false;
});

// Select media stream when the page loads
selectMediaStream();
