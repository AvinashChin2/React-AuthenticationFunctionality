import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="navbar-container">
    <div className="nav-content">
      <li className="nav-menu-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-menu-item">
        <Link to="/about">About</Link>
      </li>
    </div>
  </div>
)
export default Header
