import React from 'react'
import RequestAQuote from '../RequestAQuote/requestAQuote'


function homeSection2() {
    return (
        <div className="row bg-light" style={{
            margin: '0',
            padding: '0'
        }}>
                <div className="col-md-6 mx-auto" style={{
                    background: '#006738',
                    margin: '0',
                    padding: '0',
                    borderRadius: '3rem'
                }}>
                    <RequestAQuote />
                </div>
        </div>
    )
}

export default homeSection2
