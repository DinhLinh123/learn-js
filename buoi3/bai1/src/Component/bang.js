import React, {Component} from 'react';

class rows extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
        <table className="table table-striped table-inverse table-responsive">
            <thead className="thead-inverse">
                <tr>
                    <th >id</th>
                    <th >Tên Lớp</th>
                    <th >Tên Chuyên ngành</th>
                    <th >Niên khóa</th>
                    <th >Hệ đại học</th>
                    <th >Hoạt động</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope=" row "></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <div className="list-group">
                            <a href="#" class="btn btn-info" role="button">Sửa</a>
                            <button type="button" class="btn btn-danger">Xóa</button>
                            </div>
                        </td>
                    </tr>
                    
                </tbody>
        </table>
        </div>
        </div>
        );
    }
    
}
export default rows;