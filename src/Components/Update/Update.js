import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Update.css'

const Update = () => {
    const { inventoryId } = useParams();
    const [Items, setItems] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));

    }, [])

    const handleFruitsUpdate = (e) => {
        const quantity = e.target.quantity.value
        const updateFruits = { quantity }

        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFruits)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('Quantity update successfully!!!');
                e.target.reset();
            })
    }
    return (
        <div>
            <div className="row">
                <div className="col-lg-6 update">
                    <Card className='update-container'>
                        <div>
                            <Card.Img variant="white img-fluid" src={Items.img} />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-success'>*{Items.name}*</Card.Title>
                            <h6><span className='fw-bold'>Price:</span> ${Items.price}</h6>
                            <p>{Items.description}</p>
                            <div className='line'>
                                <p><span className='fw-bold'>Quantity/In-Stock:</span><span className='text-danger fw-bold'> {Items.quantity} KG</span></p>
                                <p><span className='fw-bold'>Color:</span> {Items.Color}</p>
                                <p><span className='fw-bold'>SupplierName:</span> {Items.supplierName}</p>
                                <p><span className='fw-bold'>Gender:</span> {Items.gender}</p>
                                <p><span className='fw-bold'>Email: </span> {Items.email}</p>
                                <p><span className='fw-bold'>Phone: </span> {Items.phone}</p>
                                <p><span className='fw-bold'>Address: </span> {Items.address}</p>
                                <p><span className='fw-bold'>Date: </span>{Items.registered}</p>
                                <p><span className='fw-bold'>Time: </span>{Items.Time}</p>
                            </div>
                        </Card.Body>
                        <button className='border-0 p-2 btn-dark'>Delivered</button>
                    </Card>
                </div>


                <div className='col-lg-6 update mt-3'>
                    <h3 className='text-success'>Restock The Items Bro/Baby</h3>
                    <h4 className='text-success'>Name: {Items.name}</h4>
                    <form onSubmit={handleFruitsUpdate} className='d-flex flex-column'>
                        <label className='fw-bold' htmlFor="quantity">Stock*</label>
                        <input type="number" name="quantity" id="" required /> <br />
                        <input className='border-0 btn-dark' type="submit" value="increase" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Update;