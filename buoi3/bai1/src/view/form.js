import { checkPropTypes } from 'prop-types';
import React, { useState } from 'react';
// import PropTypes from 'prop-types';


TodoForm.prototype ={
    
    onSubmit: checkPropTypes.func,
};

TodoForm.defaultProps={
    onSubmit: null,
}




function TodoForm(props) {
    const { onSubmit }=props;
    const [lop, setLop] = useState('');
    const [cn, setCn] = useState('');
    const [nk, setNk] = useState('');
    const [hdh, setHdh] = useState('');

    function handleValueChange(e) {
        console.log(e.target.value);
        setLop(e.target.value);    
    }
    function handlecn(e) {
        console.log(e.target.value);
        setCn(e.target.value);    
    }
    function handlenk(e) {
        console.log(e.target.value);
        setNk(e.target.value);    
    }
    function handlehdh(e) {
        console.log(e.target.value);
        setHdh(e.target.value);    
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return;

        const formaValues={
            title1: lop,
            title2: cn,
            title3: nk,
            title4: hdh
        };
        setLop(formaValues);
        
    }
    return(
        <form >
            <div>
                <div className="container">
                    <h1>Thêm mới lớp </h1> 
                    <label>Tên lớp: </label>
                    <input type="text"
                     value={lop}
                     onChange={handleValueChange}   
                        ></input>  
                    <hr></hr>
                    <label>Tên chuyên ngành: </label>
                    <input type="text" value={cn}
                    onChange={handlecn}  ></input>  
                    <hr></hr>
                    <label>Niên khóa: </label>
                    <input type="text" value={nk}  
                    onChange={handlenk} ></input>  
                    <hr></hr>
                    <label>Hệ đại học: </label>
                    <input type="text" value={hdh}  
                    onChange={handlehdh}></input>  
                    <hr></hr>
                    
                            <div className="save">
                                <div className="nut">
                                    <input type="submit" className="btn btn-info" value="Lưu" onSubmit={handleSubmit} ></input>
                                </div>
                                <div className="nut">
                                    <a href="#" className="btn btn-info" role="button">Làm mới</a>
                                </div>
                                <div className="nut">
                                    <a href="/" className="btn btn-danger" role="button">Trở lại</a>
                                </div>
                            </div>

                
                </div>

            </div>
        </form>
    );
    
}
export default TodoForm;