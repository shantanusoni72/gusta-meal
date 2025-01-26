import Button from '../Utilities/Button/button';
import './style.css';

export default function Hero() {
  return (
    <div className='hero-container'>
      <div className="hero">
        <div className="hero-text">
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button text='Find for more' url='#' />
        </div>
        <div className="hero-image">
            <img src='assets/hero.png' alt='' />
        </div>
      </div>
    </div>
  )
}
