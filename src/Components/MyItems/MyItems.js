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

    const handleItemDelete = id => {
        const proceed = window.confirm('Are you sure baby?');
        if (proceed) {
            const url = `http://localhost:5000/myItems/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = myItems.filter(myItem => myItem._id !== id);
                    setMyItems(remaining);
                })
        }
    }
    return (
        <div className='inn-margin container'>
            <h2 className='text-center text-success'>My Items</h2>
            <div className='grid mt-5'>
                {
                    myItems.map(myItem => <MyItem
                        key={myItem._id}
                        myItem={myItem}
                        handleItemDelete={handleItemDelete}
                    ></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;