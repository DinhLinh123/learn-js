import React from 'react';
import {connect} from 'react-redux';
import { increaseNumber } from '../redux/actions';

function RdxB(props) {
    console.log({props})
    return (
        <div style= {{ width: '50%', textAlign: 'center'}}>
            <p> Rdux B</p>
            <p>Number: {props.number}</p>
            <button onClick= {() => props.onIncrease()}>ấn</button>
        </div>
    );
}

const mapstateToProps= state =>({
    number: state.reducer1.number
});
const mapDispatchToProps = dispatch => ({
    onIncrease: () => dispatch(increaseNumber())
});


export default connect (mapstateToProps, mapDispatchToProps)(RdxB);