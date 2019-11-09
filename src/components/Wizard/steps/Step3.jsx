import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateStep3 } from './../../../ducks/reducer';

class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mortgage: 0,
            rent: 0
        }
    }

    componentDidMount() {
        const {mortgage, rent} = this.props
        this.setState({
            mortgage: mortgage,
            rent: rent
        })
    }
    completeHandle(body) {
        axios
            .post('/api/house', body)
            .then(res => {
                this.props.history.push('/')
            })
    }

    render() {
        console.log(this.props)
        const { mortgage, rent } = this.state
        const { updateStep3 } = this.props
        return (
            <div>
                <div>
                    <p>Monthly Mortgage Amount</p>
                    <input className='mortgage-input' value={mortgage} type="number" onChange={e => this.setState({ mortgage: e.target.value })} />
                </div>
                <div>
                    <p>Desired Monthly Rent</p>
                    <input className='rent-input' value={rent} type="number" onChange={e => this.setState({ rent: e.target.value })} />
                </div>
                <nav>
                    <Link to='/wizard/step2'>
                        <button onClick={() => updateStep3(mortgage, rent)}>&lt;&lt;Previous Step</button>
                    </Link>
                    <button onClick={() => this.completeHandle()}>Complete</button>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    const {mortgage, rent} = reduxState
    return {
        mortgage,
        rent
    }
}

export default connect(mapStateToProps, {updateStep3})(Step3);