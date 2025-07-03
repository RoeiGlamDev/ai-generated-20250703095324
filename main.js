// Get video list element
const videoList = document.getElementById('video-list');

// Sample video data
const videos = [
  {
    id: 1,
    title: 'Video 1',
    thumbnail: 'https://via.placeholder.com/150',
    url: 'https://example.com/video1.mp4'
  },
  {
    id: 2,
    title: 'Video 2',
    thumbnail: 'https://via.placeholder.com/150',
    url: 'https://example.com/video2.mp4'
  },
  {
    id: 3,
    title: 'Video 3',
    thumbnail: 'https://via.placeholder.com/150',
    url: 'https://example.com/video3.mp4'
  }
];

// Function to generate video list
function generateVideoList() {
  const videoListHtml = videos.map(video => {
    return `
      <li>
        <a href="#" data-video-id="${video.id}">
          <img src="${video.thumbnail}" alt="${video.title}">
          <h3>${video.title}</h3>
        </a>
      </li>
    `;
  }).join('');
  videoList.innerHTML = videoListHtml;
}

// Function to handle video selection
function handleVideoSelection(event) {
  if (event.target.tagName === 'A') {
    const videoId = event.target.getAttribute('data-video-id');
    const selectedVideo = videos.find(video => video.id === parseInt(videoId));
    if (selectedVideo) {
      const videoPlayer = document.getElementById('video-player');
      videoPlayer.src = selectedVideo.url;
      videoPlayer.play();
    }
  }
}

// Add event listener to video list
videoList.addEventListener('click', handleVideoSelection);

// Generate video list on page load
generateVideoList();

// Add fade-in animation to video list
videoList.classList.add('fade-in');