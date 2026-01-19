import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: '#333', 
      color: '#fff', 
      padding: '10px', 
      display: 'flex', 
      justifyContent: 'center', // Use 'space-between' or 'center'
      listStyle: 'none' 
    }}>
      <Link style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }} to="/">Home</Link>
      <Link style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }} to="/about">About</Link>
      <Link style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }} to="/services">Services</Link>
      <Link style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;