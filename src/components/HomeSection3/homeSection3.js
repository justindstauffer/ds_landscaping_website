import React from 'react'
import BBBLogo from '../HomeSection3/bbbLogo'
import CCLogo from '../HomeSection3/ccLogo'
import RecycleLogo from '../HomeSection3/recycleLogo'

function homeSection3() {
    return (
        <div className="bg-light p-4">


            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <div style={{ width: '200px' }}><RecycleLogo /></div>
                <div style={{ width: '200px' }}><BBBLogo /></div>
                <div style={{ width: '200px' }}><CCLogo /></div>
            </div>

        </div>
    )
}

export default homeSection3
