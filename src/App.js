import React, { useState } from 'react';
import HomePage from './components/HomePage';
import AdminPage from './components/AdminPage';
import ApplicationForm from './components/ApplicationForm';
import MessageBox from './components/MessageBox';
import StatusPage from './components/StatusPage';
import Header from './components/Header';
import StoreSelectionPage from './components/StoreSelectionPage'; // Import the new component
import './App.css';

const App = () => {
    const [page, setPage] = useState('home');
    const [applicationId, setApplicationId] = useState(null);
    const [selectedStore, setSelectedStore] = useState('');

    const handleAdminView = () => setPage('admin'); // Add handler for Admin View

    const handleApply = () => setPage('storeSelection');
    const handleStoreSelection = (store) => {
        setSelectedStore(store);
        setPage('form');
    };
    const handleSubmit = (id) => {
        setApplicationId(id);
        setPage('message');
    };
    const handleViewStatus = () => setPage('status');
    const handleHome = () => setPage('home');

    return (
        <div>
            <Header />
            {page === 'home' && <HomePage onApply={handleApply} onViewStatus={handleViewStatus} onAdminView={handleAdminView} />}
            {page === 'admin' && <AdminPage onHome={handleHome} />}
            {page === 'storeSelection' && <StoreSelectionPage onContinue={handleStoreSelection} />}
            {page === 'form' && <ApplicationForm onSubmit={handleSubmit} selectedStore={selectedStore} />}
            {page === 'message' && <MessageBox onViewStatus={handleViewStatus} />}
            {page === 'status' && <StatusPage applicationId={applicationId} onHome={handleHome} />}
        </div>
    );
};

export default App;
