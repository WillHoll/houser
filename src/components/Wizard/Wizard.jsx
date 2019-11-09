import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import {cancelAll} from './../../ducks/reducer'
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';

class Wizard extends Component {




    render() {
        const {cancelAll} = this.props
        return (
            <div>
                <Route path={'/wizard/step1'} component={Step1}/>
                <Route path={'/wizard/step2'} component={Step2}/>
                <Route path={'/wizard/step3'} component={Step3}/>
                <Link to='/'>
                    <button onClick={() => cancelAll()}>Cancel</button>
                </Link>
            </div>
        );
    }
}

export default connect(null, {cancelAll})(Wizard);
