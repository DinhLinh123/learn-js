import React from "react";

export default function save() {
    return (
        <div className="save">
            <div className="nut">
                <input type="submit" className="btn btn-info" value="Lưu"></input>
            </div>
            <div className="nut">
                <a href="#" className="btn btn-info" role="button">Làm mới</a>
            </div>
            <div className="nut">
                <a href="/" className="btn btn-danger" role="button">Trở lại</a>
            </div>
        </div>
    );
};