import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Freelance Exchange</h1>
      <ul style={styles.navLinks}>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/login">Вход</Link></li>
        <li><Link to="/register">Регистрация</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '24px',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
  },
  navLink: {
    marginLeft: '15px',
    textDecoration: 'none',
    color: '#fff',
  },
};

export default Navbar;
