import React from 'react';
import InformationProducts from './informationProducts';

function table_products() {

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                <th>Quản lý Sản phẩm</th>
                </tr>
            </thead>
            <thead>
                <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Mô tả</th>
                <th>Thực hiện</th>
                </tr>
            </thead>
           <InformationProducts
            />
        </table>
    );
}

export default table_products;