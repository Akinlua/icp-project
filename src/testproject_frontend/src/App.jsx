import { useState } from 'react';
import { testproject_backend } from 'declarations/testproject_backend';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    const msg = await testproject_backend.registerUser(name, email, password);
    setMessage(msg);
    setName('');
    setEmail('');
    setPassword('');
  }

  async function handleShowUsers() {
    const registeredUsers = await testproject_backend.getUsers();
    setUsers(registeredUsers);
  }

  return (
    <main>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>

      <section id="message">{message}</section>

      <button onClick={handleShowUsers} style={{ marginTop: '20px' }}>
        Show All Registered Users
      </button>

      <ul style={{ marginTop: '20px' }}>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Name:</strong> {user[0]}, <strong>Email:</strong> {user[1]}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
