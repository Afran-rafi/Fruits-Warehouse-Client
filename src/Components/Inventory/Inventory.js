import React, { useEffect, useState } from 'react';
import InItems from '../InItems/InItems';
import './Inventory.css'

const Inventory = () => {
    const [Items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='container'>
            <div className='in-margin container'>
                <h2 className='text-center text-success'>Inventory Items</h2>
                <div className='grid mt-5'>
                    {
                        Items.map(item => <InItems
                            key={item._id}
                            item={item} >
                        </InItems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventory;