import React from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
function NavBar() {
  const navigate = useNavigate();

  return (
    <div className='navBar_div'>
      <img onClick={()=>navigate('/')} src='https://assets.stickpng.com/thumbs/5842fe0ea6515b1e0ad75b3c.png' alt='logo' />
      <h1 onClick={()=>navigate('/messi')} className='name_players'>Messi</h1>
      <h1 onClick={()=>navigate('/ronaldo')} className='name_players'>Ronaldo</h1>
      <h1 onClick={()=>navigate('/neymar')} className='name_players'>Neymar</h1>
    </div>
  );
}

export default NavBar;
