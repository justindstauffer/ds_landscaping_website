import React from 'react'
import BGImage from '../../Images/companyPhoto.jpg'
import Image from '../../Images/ds-logo.png'
import HeaderImage from './headerImage'

const header = () => {
    return (
        <div style={{
            margin: '0',
            paddingTop: '3.5rem',
        }}>
            <HeaderImage />
            {/* <div className="col-md-12 text-center bg-light myHeader"
                style={{
                    height: '400px',
                    backgroundImage: `url(${BGImage})`,
                    backgroundSize: 'cover',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0',
                }}>
                <div>
                    <img className="bg-light" style={{
                        maxHeight: '200px',
                        padding: '1rem',
                        // background: 'rgba(248, 249, 250)',
                        borderRadius: '4rem',
                        boxShadow: '0px 0px 10px 3px #f8f9fa'
                    }} src={Image} alt="DS Logo" />
                </div>

                <button className='btn text-dark p-2 font-weight-bold'
                    style={{
                        background: '#E5C595',
                        boxShadow: '0px 0px 10px 5px #000'
                    }}>407-671-4800</button>
            </div> */}
            
        </div>
    )
}

export default header
