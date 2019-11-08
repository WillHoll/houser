import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: null
        }
    }

    render() {
        return (
            <div>
                <input className='name-input' placeholder='name' type="text" onChange={e => this.setState({ name: e.target.value })} />
                <input className='address-input' placeholder='address' type="text" onChange={e => this.setState({ address: e.target.value })} />
                <input className='city-input' placeholder='city' type="text" onChange={e => this.setState({ city: e.target.value })} />
                <input className='state-input' placeholder='state' type="text" onChange={e => this.setState({ state: e.target.value })} />
                <input className='zipcode-input' placeholder='zipcode' type="number" onChange={e => this.setState({ zipcode: e.target.value })} />
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
            </div>
        );
    }
}

export default Wizard;