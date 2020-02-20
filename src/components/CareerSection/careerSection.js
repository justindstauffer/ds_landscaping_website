import React from "react"

function careerSection() {
  return (
    <div>
      <h1>Are you interested in joining our team?</h1>
      <h3>Head over to our career page for more information!</h3>
      <button
        className="btn text-dark p-2 font-weight-bold mx-auto"
        style={{
          background: "#F70079",
          boxShadow: "0px 0px 0px 4px #006738",
          borderRadius: "1rem",
          fontSize: "1.5rem",
        }}
      >
        Careers
      </button>
    </div>
  )
}

export default careerSection
