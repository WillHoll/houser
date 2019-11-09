import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateStep1 } from './../../../ducks/reducer';

class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    componentDidMount() {
        const {name, address, city ,state, zipcode} = this.props
        this.setState({
            name: name,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode
        })
    }

    nameHandle(input) {
        this.setState({
            name: input
        })
    }

    addressHandle(input) {
        this.setState({
            address: input
        })
    }

    cityHandle(input) {
        this.setState({
            city: input
        })
    }

    stateHandle(input) {
        this.setState({
            state: input
        })
    }

    zipHandle(input) {
        this.setState({
            zipcode: input
        })
    }

    render() {
        let { name, address, city, state, zipcode} = this.state
        const {updateStep1} = this.props
        return (
            <div>
                <div>
                    <p>House name:</p>
                    <input className='name-input' value={name}  type="text" onChange={e => this.nameHandle(e.target.value)} />
                </div>
                <div>
                    <p>Address:</p>
                    <input className='address-input' value={address} type="text" onChange={e => this.addressHandle(e.target.value) } />
                </div>
                <div>
                    <p>City:</p>
                    <input className='city-input' value={city} type="text" onChange={e => city = this.cityHandle(e.target.value) } />
                </div>
                <div>
                    <p>State:</p>
                    <input className='state-input' value={state} type="text" onChange={e => this.stateHandle(e.target.value) } />
                </div>
                <div>
                    <p>Zipcode:</p>
                    <input className='zipcode-input' value={zipcode} type="number" onChange={e => this.zipHandle(e.target.value) } />
                </div>
                <nav>
                    <Link to='/wizard/step2'>
                        <button onClick={() => updateStep1(name, address, city, state, zipcode)}>Next Step&gt;&gt;</button>
                    </Link>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    const {name, address, city, state, zipcode} = reduxState
    return {
        name,
        address,
        city,
        state,
        zipcode
    }
}

export default connect(mapStateToProps, {updateStep1})(Step1);