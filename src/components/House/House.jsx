import React, { Component } from 'react';

class House extends Component {
    render() {
        const { id, name, address, city, state, zip, img, mortgage, rent } = this.props.houseDis
        return (
            <div className='house-view'>
                <img src={img} alt={name} />
                <div className="property-name">Property Name: {name}</div>
                <div className="address">Address: {address}</div>
                <div className="city">City: {city}</div>
                <div className="state">State: {state}</div>
                <div className="zip">Zip: {zip}</div>
                <div className="mortgage">Mortgage: ${mortgage}</div>
                <div className="rent">Rent: ${rent}</div>
                <button onClick={() => this.props.deleteFn(id)}>Delete</button>
            </div>
        );
    }
}

export default House;