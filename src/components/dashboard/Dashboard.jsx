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
        this.deleteData = this.deleteData.bind(this)
    }
componentDidMount() {
    this.getdata()
}

    getdata() {
        axios
            .get('/api/houses')
            .then(result => {
                this.setState({
                    houseList: result.data
                })
            })
    }

    deleteData(id) {
        axios
            .delete(`/api/house/${id}`)
            .then( res => {
                this.componentDidMount()
            })
    }
    
    
    render() {
        const display = this.state.houseList.map(house => (
            <div key={house.id}>
                <House deleteFn={this.deleteData} houseDis={house}/>
            </div>
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
