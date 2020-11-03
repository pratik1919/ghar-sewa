import React, { Component } from 'react';


class DisplayList extends Component {
    state = {
        contactData: {
            user: []
        }
    }
    

    fetchData() {
        let url = "https://script.googleusercontent.com/macros/echo?user_content_key=1yqlC9jI-LD21SywMbEizDAkg7IXmMKsYXa2EZXaKrY8Z4DN7IJG6R95BaE2VRHmHmnI2fDjqPWtE37xn2S-tEZ8ctAd0EF9m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLagc8KD9TcVt78DlyBgskHNdtrfuBrwcdok0QDZ5zLVzz5lvQGowCfmgfErkRP7vXHCERkbxhUO&lib=Mn88Qfe_vKXmi_jjLH1mckkMTO9OX0aMl";
        fetch(url)
            .then(d => d.json())
            .then(d => {
                this.setState({contactData: 
                    {user: d.user}
                });
            });
    }

    render() { 
        this.fetchData();
        return <React.Fragment>
            <h1 id="title">List of contacts <small className="badge badge-secondary">Plumber</small></h1>
            <table id="worker-table" className="table table-hover table-bordered">
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
                        <th>
                            Service Type
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.contactData.user.map((worker, index) =>
                            <tr key={index}>
                                <td>{worker.name}</td>
                                <td>{worker.serviceLocation}</td>
                                <td>{worker.phone}</td>
                                <td>{worker.serviceCategory}</td>
                            </tr>
                    )}
                </tbody>
            </table> 
            
            
        </React.Fragment>;
    }
}
 
export default DisplayList;