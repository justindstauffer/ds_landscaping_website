import React from "react"
import RequestAQuote from "../RequestAQuote/requestAQuote"
import { Link } from "gatsby"

function homeSection2() {
  return (
    <div
      className="row bg-light"
      style={{
        margin: "0",
        padding: "0",
      }}
    >
      <div className="col-md-6 mx-auto" style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="p-3">
          <h1>Are you interested in joining our team?</h1>
          <h3>Head over to our career page for more information!</h3>
          <h2><Link to="/careers/">Careers</Link></h2>
        </div>
      </div>
      <div
        className="col-md-6 mx-auto"
        style={{
          background: "#006738",
          margin: "0",
          padding: "0",
          borderRadius: "3rem",
        }}
      >
        <RequestAQuote />
      </div>
    </div>
  )
}

export default homeSection2
