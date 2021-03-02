import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,   
};
TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const { onSubmit} = props;
    const [value, setValue]= useState('');
    const [valuemsv, setValuemsv] = useState('');

    function handleValueChange(e) {
       console.log(e.target.value);
       
       setValue(e.target.value); 
       localStorage.setItem('name', setValue);
        
        
    }
    function handleValuemsvChange(e) {
        console.log(e.target.value);
        setValuemsv(e.target.value);
        
    } 
   

    function handleSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return;

        const formValues = {
            name: value,
            msv: valuemsv,
        };
       
        onSubmit(formValues);
        
        // Reset form
        setValue('');
        
    } 

    return (
        <div>
            <form >
                <p>Thêm mới sinh viên</p>
                <label>Nhập tên sv: </label>
                <input type="text" value={value} onChange={handleValueChange} /> 
                 <label>Nhập Mã sv: </label>
                <input type="text" value={valuemsv} onChange={handleValuemsvChange} /> 
                
                <input type="submit" onClick={handleSubmit} placeholder='lưu' />
            </form>
        </div>
    );
}

export default TodoForm;