import React, { useRef } from 'react';
import './AddFruits.css'

const AddFruits = () => {
    const imgRef = useRef('')
    const nameRef = useRef('')
    const priceRef = useRef('')
    const quantityRef = useRef('')
    const supplierRef = useRef('')

    const handleAddFruits = (e) => {
        e.preventDefault();
        const img = imgRef.current.value
        const name = nameRef.current.value
        const price = priceRef.current.value
        const quantity = quantityRef.current.value
        const supplier = supplierRef.current.value

        const addFruits = { img, name, price, quantity, supplier };

        fetch('http://localhost:5000/inventory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addFruits)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Fruits added successfully!!!');
                e.target.reset();
            })
    }
    return (
        <div className='fruits d-flex justify-content-center'>
            {/* <h3 className='text-center mt-3 text-success'>Add Fruits Dear</h3> */}
            <form onSubmit={handleAddFruits} className='fruits-container mt-5 p-3 shadow'>
                <div className='d-flex justify-content-center flex-column line mt-4'>
                    <label className='fw-bold' htmlFor="img">Image URL</label><br />
                    <input ref={imgRef} type="text" name="img" id="1" required />
                </div>
                <div className='d-flex justify-content-center flex-column line mt-4'>
                    <label className='fw-bold' htmlFor="">Name</label><br />
                    <input ref={nameRef} type="text" name="name" id="2" required />
                </div>
                <div className='d-flex justify-content-center flex-column line mt-4'>
                    <label className='fw-bold' htmlFor="">Price</label><br />
                    <input ref={priceRef} type="number" name="number" id="2" required />
                </div>
                <div className='d-flex justify-content-center flex-column line mt-4'>
                    <label className='fw-bold' htmlFor="">Quantity</label><br />
                    <input ref={quantityRef} type="number" name="quantity" id="2" required />
                </div>
                <div className='d-flex justify-content-center flex-column line mt-4'>
                    <label className='fw-bold' htmlFor="">SupplierName</label><br />
                    <input ref={supplierRef} type="text" name="supplierName" id="2" required />
                </div> <br />
                <div className='d-flex justify-content-center'>
                    <input className='login-btn' type="submit" value="Add Fruits" />
                </div>
            </form>
        </div>
    );
};

export default AddFruits;