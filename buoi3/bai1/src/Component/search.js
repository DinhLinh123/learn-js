import React, { Component } from "react";

export default function search() {
    return (
        <div className="search">
            <input type="text" className="col-lg-3"  id="search" placeholder="Tìm kiếm..."></input>
          
          <input type="button" className="col-lg-1"  id="button" value="Tìm kiếm"></input>
          
        </div>
    );
};
