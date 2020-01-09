import React from 'react'
import { Table } from 'reactstrap';

const homeSection1 = () => {
    return (
        <div className="bg-light">
            <div className="row bg-light" style={{
                margin: '0',
                paddingBottom: '1rem'
            }}>

                <div className='col-md-6 bg-light p-3' style={{
                    margin: '0',
                }}>
                    <h1>What We Do</h1>
                    <p className="pb-2">DS Landscape & Maintenance, Inc. has been serving Central Florida since 1991.
                        Providing complete residential and commercial landscaping solutions for property
                        owners and managers. Customizing design and installation to create immaculate properties.
                     Contact us today for a free quote on your next landscaping project!</p>
                    <button className='btn text-dark p-2 font-weight-bold'
                        style={{
                            background: '#F70079',
                            boxShadow: '0px 0px 0px 4px #006738'
                        }}>407-671-4800</button>
                </div>

                <div className='col-md-6 bg-light pt-3' style={{
                    margin: '0',
                }}>
                    <h1>Where We Service</h1>
                    <div className="p-1">
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <td>Orlando</td>
                                    <td>Maitland</td>
                                    <td>Winter Park</td>
                                </tr>
                                <tr>
                                    <td>Oviedo</td>
                                    <td>Apopka</td>
                                    <td>Sanford</td>
                                </tr>
                                <tr>
                                    <td>Metro West</td>
                                    <td>Kissimmee</td>
                                    <td>Geneva</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            <hr style={{margin: '0', paddingBottom: '2rem'}} />
        </div>
    )
}

export default homeSection1
