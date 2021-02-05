import React, {Component} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Quản lý công việc</h1>
         
        <div className="col-lg-4 bt">
          <button  className="qlcv"> Thêm công việc</button>
          
        </div>
        <br></br>
        <div className=" nhap" >
          <div className="col-lg-6" style={{ backgroundColor: "orange"}}>
          <input type="text" placeholder="Nhập từ khóa" value=""></input>
          </div>
          <div className="col-lg-6">
            <input type="button" name="sapxep" value="Sắp xếp"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
