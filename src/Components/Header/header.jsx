import Button from '../Utilities/Button/button';
import './style.css';

export default function Header() {
  return (
    <div className='header-container'>
      <div className="header">
        <div className="site-logo">
          <img src='assets/logo.svg' alt='logo' />
          <label>Gusto Meal</label>
        </div>
        <ul className="header-menu">
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Recipies</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <Button text='Subscribe Now' url='#' />
      </div>
    </div>
  )
}