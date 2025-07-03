// Video player component class
class VideoPlayerComponent {
  constructor(video) {
    this.video = video;
    this.element = document.createElement('video');
    this.element.width = 640;
    this.element.height = 480;
    this.element.controls = true;
    this.element.src = video.url;
  }

  render() {
    return this.element;
  }
}

// Export video player component class
export default VideoPlayerComponent;