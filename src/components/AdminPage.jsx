import React, { useState, useEffect } from 'react';
import './styles/AdminPage.css';
import UpdateForm from './UpdateForm';
import backHome from '../assets/back_home.svg';

const AdminPage = ({ onHome }) => {
    const [applications, setApplications] = useState([]);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [selectedApplication, setSelectedApplication] = useState(null);

    const [newName, setNewName] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [newBrand, setNewBrand] = useState('');
    const [newModel, setNewModel] = useState('');
    const [newSerialNumber, setNewSerialNumber] = useState('');
    const [newDateOfAcquisition, setNewDateOfAcquisition] = useState('');
    const [newPowerOutput, setNewPowerOutput] = useState('');

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/getApplications');
            if (response.ok) {
                const data = await response.json();
                setApplications(data);
            } else {
                console.error('Failed to fetch applications', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleUpdateClick = (application) => {
        setSelectedApplication(application);
        setNewName(application.name);
        setNewAddress(application.address);
        setNewPhone(application.phone);
        setNewBrand(application.brand);
        setNewModel(application.model);
        setNewSerialNumber(application.serialNumber);
        setNewDateOfAcquisition(application.dateOfAcquisition);
        setNewPowerOutput(application.powerOutput);
        setShowUpdateForm(true);
    };

    const handleUpdateSubmit = async (event) => {
        event.preventDefault();

        const updatedApplication = {
            name: newName,
            address: newAddress,
            phone: newPhone,
            brand: newBrand,
            model: newModel,
            serialNumber: newSerialNumber,
            dateOfAcquisition: newDateOfAcquisition,
            powerOutput: newPowerOutput
        };

        try {
            const response = await fetch(`http://localhost:3000/api/updateApplication/${selectedApplication._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedApplication),
            });

            if (response.ok) {
                await fetchApplications();
                setShowUpdateForm(false);
                setSelectedApplication(null);
            } else {
                console.error('Failed to update application', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDeleteClick = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/api/deleteApplication/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                await fetchApplications();
            } else {
                console.error('Failed to delete application', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleStatusChange = async (id, newStatus) => {
        try {
            const response = await fetch(`http://localhost:3000/api/updateApplication/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (response.ok) {
                await fetchApplications();
            } else {
                console.error('Failed to update status', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="admin-page">
            <div className="home-button" onClick={onHome}>
                <img src={backHome} alt="Home" />
            </div>
            <h2>Admin Dashboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Application Type</th>
                        <th>Application ID</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((application) => (
                        <tr key={application._id}>
                            <td>Chainsaw Application</td>
                            <td>{application._id}</td>
                            <td>
                                <select
                                    className={`status-dropdown ${application.status.toLowerCase().replace(' ', '-')}`}
                                    value={application.status}
                                    onChange={(e) => handleStatusChange(application._id, e.target.value)}
                                >
                                    <option value="For Review">For Review</option>
                                    <option value="Accepted">Accepted</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </td>
                            <td>
                                <button className='update_button' onClick={() => handleUpdateClick(application)}>Update Form</button>
                                <button className='delete_button' onClick={() => handleDeleteClick(application._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showUpdateForm && (
                <UpdateForm
                    newName={newName}
                    setNewName={setNewName}
                    newAddress={newAddress}
                    setNewAddress={setNewAddress}
                    newPhone={newPhone}
                    setNewPhone={setNewPhone}
                    newBrand={newBrand}
                    setNewBrand={setNewBrand}
                    newModel={newModel}
                    setNewModel={setNewModel}
                    newSerialNumber={newSerialNumber}
                    setNewSerialNumber={setNewSerialNumber}
                    newDateOfAcquisition={newDateOfAcquisition}
                    setNewDateOfAcquisition={setNewDateOfAcquisition}
                    newPowerOutput={newPowerOutput}
                    setNewPowerOutput={setNewPowerOutput}
                    handleUpdateSubmit={handleUpdateSubmit}
                    setShowUpdateForm={setShowUpdateForm}
                />
            )}
        </div>
    );
};

export default AdminPage;