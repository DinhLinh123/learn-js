import React from 'react';
import '../App.css';
import List from '../Component/list';
import Search from '../Component/search';
import { Link } from 'react-router-dom';
import Bang from '../Component/bang';

export default function Manage() {
    return(
        <div className="Manage">
            <div className="container">
            <h1>Quản lý lớp</h1>
            <Link to="/Form"><p>+Thêm mới</p></Link>
            <Search></Search>
            <List></List>
            <Bang></Bang>
            </div>
        </div>
    );
    
}