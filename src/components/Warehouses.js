import React, { useState } from "react";

function Warehouses(props) {

    return (
        <div>
            <h1>All Locations</h1>
            <h2>Select a location to see the stores current inventory.</h2>
            <div class="site-nav">
                <a href="/items" class="back-to-warehouses">See Combined Inventory</a>
                <a href="/addItem" class="addItem">Add Item</a> 
            </div>
            <div class="card col-md-4">
                <h3>name:</h3>
                <h4>Location:</h4>
                <img class="item-img" src={`${process.env.PUBLIC_URL}/assets/warehouse1.png`}  />
                <div>
                    <a href="/warehouses/{{id}}">See Warehouse</a>
                </div>
            </div>
            <div class="card col-md-4">
                <h3>name:</h3>
                <h4>Location:</h4>
                <img class="item-img" src={`${process.env.PUBLIC_URL}/assets/warehouse2.png`} />
                <div>
                    <a href="/warehouses/{{id}}">See Warehouse</a>
                </div>
            </div>
            <div class="card col-md-4">
                <h3>name:</h3>
                <h4>Location:</h4>
                <img class="item-img" src={`${process.env.PUBLIC_URL}/assets/warehouse3.jpg`} />
                <div>
                    <a href="/warehouses/{{id}}">See Warehouse</a>
                </div>
            </div>
        </div>
    );
}

export default Warehouses;