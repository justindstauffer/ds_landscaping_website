import React from "react"

import Video from "../../Assets/DS-hiring-video.mp4"

function video() {
  return (
    <div>
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0,
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src={Video}
          frameBorder="0"
        />
      </div>
    </div>
  )
}

export default video
