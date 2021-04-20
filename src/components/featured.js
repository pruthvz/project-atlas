import React from "react";
import YouTube from "react-youtube";
import ScrollToTop from "./subcomponents/ScrollToTop";

class featured extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    const featureVideos = [
      {
        vidId: "04L0BbAcCpQ",
      },
      {
        vidId: "dLYMzNmILQA",
      },
      {
        vidId: "U29j5NiSMVQ",
      },
      {
        vidId: "pUgWfqWZWmM",
      },
    ];

    var randomVideo =
      featureVideos[Math.floor(Math.random() * featureVideos.length)];

    return (
      <div>
        <ScrollToTop />
        <header className="featured">
          <div className="overlay"></div>
          <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <h1 className="display-1">Featuring</h1>
                <h6>
                  Useful YouTube videos that can help you with your projects!
                </h6>

                <h6 className="small">
                  YouTube videos, rendered randomly, feel free to add on.
                </h6>
              </div>
            </div>
          </div>
        </header>
        <div className="videoPlayer">
          <div className="embed-responsive embed-responsive-21by9">
            <YouTube
              videoId={randomVideo.vidId}
              opts={opts}
              onReady={this._onReady}
            />
          </div>
          <div className="alert alert-success mt-5" role="alert">
            Subscribe to these amazing content creators!
          </div>
        </div>
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default featured;
