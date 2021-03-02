import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onsubmit: PropTypes.func,
};

PostFilterForm.defaultProps= {
    onsubmit: null, 
};

function PostFilterForm(props) {
    const {onsubmit} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef= useRef(null);

    function handleSearchTermChange(e) {
        const value = e.target.value;
        setSearchTerm(value);

        if(!onsubmit) return;

        if( typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        };

        typingTimeoutRef.current = setTimeout(() => {
            const formValues= {
                searchTerm: value,
            };
            
            onsubmit(formValues);

        }, 500);
        
    }
    return (
        <div>
             <form>
                 <input type="text"
                 value= {searchTerm}
                 onChange={handleSearchTermChange}
                 placeholder="Tìm kiếm" />
                 </form>   
        </div>
    );
}

export default PostFilterForm;