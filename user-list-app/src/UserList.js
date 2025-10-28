import React, { useState, useEffect } from 'react';
import './UserList.css'; // Optional styling

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                
                if (!response.ok) {
                    throw new Error(`Failed to fetch users: ${response.status}`);
                }
                
                const userData = await response.json();
                setUsers(userData);
                
            } catch (err) {
                setError(err.message);
                console.error('Error fetching users:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []); // Empty dependency array means this runs once on mount

    // Loading state
    if (loading) {
        return (
            <div className="user-list loading">
                <div className="spinner"></div>
                <p>Loading users...</p>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="user-list error">
                <h2>Error</h2>
                <p>{error}</p>
                <button onClick={() => window.location.reload()}>Try Again</button>
            </div>
        );
    }

    // Success state
    return (
        <div className="user-list">
            <h1>User List</h1>
            <div className="users-container">
                {users.map(user => (
                    <div key={user.id} className="user-card">
                        <h3>{user.name}</h3>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Website:</strong> {user.website}</p>
                        <div className="address">
                            <strong>Address:</strong>
                            <p>{user.address.street}, {user.address.city}, {user.address.zipcode}</p>
                        </div>
                        <p><strong>Company:</strong> {user.company.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;