import React from "react";

function Warehouses(props) {
    return (
        <div>
            <h1>All Warehouses</h1>
            <h2>There are ___ warehouses.</h2>

            <div class="site-nav">
                <a href="/items" class="back-to-warehouses">See All Inventory</a>
                <a href="/addItem" class="addItem">Add Item</a> 
            </div>
        </div>
    );
}

export default Warehouses;