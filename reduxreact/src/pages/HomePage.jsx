import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch} from 'react-redux';
import HobbyList from '../components/Home/HobbyList';

import { addNewHobby, setActiveHobby } from '../actions/hobby';

HomePage.propTypes = {
    
};

const randomNumber = () => {
    return 1000 + Math.trunc((Math.random()*9000));
}

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    const dispatch = useDispatch();

    console.log('HOBBY list : ', hobbyList);

    const handleAddHobbyClick = () => {
        // Random a hobby object: id + title
        const newId = randomNumber();
        const newHobby= {
           id: newId,
            title: `linh ${newId}`
        }

        // Dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);

    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);

    }
    return (
        <div>
            <h1>REDUX HOOKS - HOME PAGE</h1>

            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList 
            HobbyList = {hobbyList}
            activeId={activeId}
            onHobbyClick = {handleHobbyClick}></HobbyList>
        </div>
    );
}

export default HomePage;