import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {updateStep2} from './../../../ducks/reducer';

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houseImg: ''
        }
    }

    componentDidMount() {
        this.setState({
            houseImg: this.props.houseImg
        })
    }

    imgHandle(input) {
        this.setState({
            houseImg: input
        })
    }

    render() {
        const { houseImg } = this.state
        const { updateStep2 } = this.props

        return (
            <div>
                <div>
                    <p>House image</p>
                    <input className='img-input' value={houseImg} type="text" onChange={e => this.imgHandle(e.target.value)} />
                </div>
                <nav>
                    <Link to='/wizard/step1'>
                        <button onClick={() => updateStep2(houseImg)}>&lt;&lt;Previous Step</button>
                    </Link>
                    <Link to='/wizard/step3'>
                        <button onClick={() => updateStep2(houseImg)} >Next Step&gt;&gt;</button>
                    </Link>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    const {houseImg} = reduxState
    return {
        houseImg
    }
}

export default connect(mapStateToProps, {updateStep2})(Step2);