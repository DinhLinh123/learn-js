import React from 'react';
import PropTypes from 'prop-types';
import './HobbyList.css';

HobbyList.propTypes = {
    HobbyList: PropTypes.array,
    activeId: PropTypes.number,
    onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps= {
    HobbyList: [],
    activeId: null,
    onHobbyClick: null,
};

function HobbyList(props) {
    const {HobbyList, activeId, onHobbyClick} = props;

    const handleClick = (hobby) => {
        if (onHobbyClick) {
            onHobbyClick(hobby);
        }

    }
    return (
        <div>
            <ul className="hobby-list">
                {HobbyList.map(hobby => (
                    <li key={hobby.id}
                    className= {hobby.id === activeId ? 'active' : ''}
                    onClick= {() => handleClick(hobby)}
                    >
                        {hobby.title}</li>
                ))}
            </ul>
            
        </div>
    );
}

export default HobbyList;