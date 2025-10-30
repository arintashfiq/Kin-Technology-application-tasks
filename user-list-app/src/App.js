import React from 'react';
import UserList from './UserList';
import './App.css';

/**
 * Main App Component - Renders the UserList component
 */
function App() {
  return (
    <div className="App">
      <UserList /> {/* Main user list component */}
    </div>
  );
}

export default App;
