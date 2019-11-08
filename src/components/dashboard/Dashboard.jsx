import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import House from '../House/House';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houseList: []
        }
    }
    componentDidMount() {
        axios
            .get('/api/houses')
            .then(result => {
                this.setState({
                    houseList: result
                })
            })
    }
    
    
    render() {
        const display = this.state.houseList.map(house => (
            <House houseDis={house}/>
        ))
        return (
            <div>
                {display}
                <Link to='/wizard'>
                    <button>Add New Property</button>
                </Link>
            </div>
        );
    }
}

export default Dashboard;