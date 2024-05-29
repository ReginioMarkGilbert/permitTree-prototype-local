import React, { useState } from 'react';
import './styles/UpdateForm.css';

const UpdateForm = ({
    newName, setNewName,
    newAddress, setNewAddress,
    newPhone, setNewPhone,
    newBrand, setNewBrand,
    newModel, setNewModel,
    newSerialNumber, setNewSerialNumber,
    newDateOfAcquisition, setNewDateOfAcquisition,
    newPowerOutput, setNewPowerOutput,
    handleUpdateSubmit,
    setShowUpdateForm
}) => {
    const [store, setStore] = useState('');

    const handleSelect = (event) => {
        setStore(event.target.value);
    };

    return (
        <div className="update-form-popup">
            <form onSubmit={handleUpdateSubmit} className="update-form">
                <div className="form-section-update_form">
                    <h4 id='applicant-details-text' className='form-title'>Applicant Details</h4>
                    <label htmlFor="newName">Name</label>
                    <input
                        type="text"
                        id="newName"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        // required
                    />
                    <label htmlFor="newAddress">Address</label>
                    <input
                        type="text"
                        id="newAddress"
                        value={newAddress}
                        onChange={(e) => setNewAddress(e.target.value)}
                        // required
                    />
                    <label htmlFor="newPhone">Phone Number</label>
                    <input
                        type="tel"
                        id="newPhone"
                        value={newPhone}
                        onChange={(e) => setNewPhone(e.target.value)}
                        // required
                    />
                </div>
                <div className="form-section">
                    <h4 className='form-title'>Chainsaw Details</h4>
                    <label htmlFor="newBrand">Brand</label>
                    <input
                        type="text"
                        id="newBrand"
                        value={newBrand}
                        onChange={(e) => setNewBrand(e.target.value)}
                        // required
                    />
                    <label htmlFor="newModel">Model</label>
                    <input
                        type="text"
                        id="newModel"
                        value={newModel}
                        onChange={(e) => setNewModel(e.target.value)}
                        // required
                    />
                    <label htmlFor="newSerialNumber">Serial No.</label>
                    <input
                        type="text"
                        id="newSerialNumber"
                        value={newSerialNumber}
                        onChange={(e) => setNewSerialNumber(e.target.value)}
                        // required
                    />
                    <label htmlFor="newDateOfAcquisition">Date of Acquisition</label>
                    <input
                        type="date"
                        id="newDateOfAcquisition"
                        value={newDateOfAcquisition}
                        onChange={(e) => setNewDateOfAcquisition(e.target.value)}
                        // required
                    />
                    <label htmlFor="newPowerOutput">Power Output (kW/bhp)</label>
                    <input
                        type="text"
                        id="newPowerOutput"
                        value={newPowerOutput}
                        onChange={(e) => setNewPowerOutput(e.target.value)}
                        // required
                    />
                </div>

                <div className="form-buttons">
                    <button type="submit">Update</button>
                    <button type="button" onClick={() => setShowUpdateForm(false)}>Cancel</button>
                </div>
                <div className="store-selection__container">
                    <h3 className="store-selection__title">Select a Store</h3>
                    <select className="store-selection__select" value={store} onChange={handleSelect}>
                        <option value="">Select...</option>
                        <option value="store1">Store 1</option>
                        <option value="store2">Store 2</option>
                        <option value="store3">Store 3</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default UpdateForm;

