import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
    onSubmit: null,
};

function TodoForm(props) {
    const { onSubmit}=props;
    const { value, setValue}=useState('');
    return (
        <div>
            <input type="text" value={value} />
            
        </div>
    );
}

export default TodoForm;