import React, { Component } from 'react';

class DisplayList extends Component {
    state = {
        contactData: {
            plumber: [
                {
                    name: 'ram',
                    serviceLocation: 'Chabahil',
                    contact: '984187653'
                }
            ]
        }
    }
    render() { 
        return <React.Fragment>
            <h1>List of contacts</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Service Location
                        </th>
                        <th>
                            Contacts
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.contactData.plumber.map(plumber =>
                            <tr>
                                <td>{plumber.name}</td>
                                <td>{plumber.serviceLocation}</td>
                                <td>{plumber.contact}</td>
                            </tr>
                    )}
                </tbody>
            </table>
        </React.Fragment>;
    }
}
 
export default DisplayList;