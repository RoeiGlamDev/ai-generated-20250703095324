// Video component class
class VideoComponent {
  constructor(video) {
    this.video = video;
    this.element = document.createElement('li');
    this.element.innerHTML = `
      <a href="#" data-video-id="${video.id}">
        <img src="${video.thumbnail}" alt="${video.title}">
        <h3>${video.title}</h3>
      </a>
    `;
  }

  render() {
    return this.element;
  }
}

// Export video component class
export default VideoComponent;