import React, { useEffect, useState } from 'react';
import MyItem from '../MyItem/MyItem';
import './MyItems.css'

const MyItems = () => {
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/myItems")
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [])
    return (
        <div className='inn-margin container'>
            <h2 className='text-center text-success'>My Items</h2>
            <div className='grid mt-5'>
                {
                    myItems.map(myItem => <MyItem
                        key={myItem._id}
                        myItem={myItem}
                    ></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;