import React, { useState, useEffect } from 'react';
import './UserList.css';

/**
 * UserList Component - Fetches and displays user data from API
 */
const UserList = () => {
    const [users, setUsers] = useState([]); // Store user data
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Store error messages

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true); // Start loading
                setError(null); // Clear previous errors
                
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                
                if (!response.ok) {
                    throw new Error(`Failed to fetch users: ${response.status}`); // Handle HTTP errors
                }
                
                const userData = await response.json();
                setUsers(userData); // Update users state
                
            } catch (err) {
                setError(err.message); // Set error state
                console.error('Error fetching users:', err);
            } finally {
                setLoading(false); // End loading regardless of outcome
            }
        };

        fetchUsers();
    }, []); // Run once on component mount

    if (loading) {
        return (
            <div className="user-list loading">
                <div className="spinner"></div> {/* Loading spinner */}
                <p>Loading users...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="user-list error">
                <h2>Error</h2>
                <p>{error}</p>
                <button onClick={() => window.location.reload()}>Try Again</button> {/* Retry button */}
            </div>
        );
    }

    return (
        <div className="user-list">
            <h1>User List</h1>
            <div className="users-container">
                {users.map(user => (
                    <div key={user.id} className="user-card"> {/* Unique key for each user */}
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
