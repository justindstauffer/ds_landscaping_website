import React from 'react'
import Video from "./video"
import PDF from "../../Assets/EMPLOYEE-APPLICATION-2018.pdf"

function info() {
    return (
        <div className="text-center pt-5 m-3">
            <h1>Interested in joining the DS Landscape Team?</h1>
            <h3>Here is how to apply:</h3>
            <h5>Watch this video in its entirety, following all instructions.</h5>
            <h6>At the end of the video please download the application PDF file, print and submit a completed copy.</h6>
            <div className="container" >
                <Video />
            </div>
            <h1>
                <a href={PDF}>Download Application</a>
            </h1>
        </div>
    )
}

export default info
