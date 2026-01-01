import { useEffect, useState } from 'react';
import Button from '../../components/ui/button';


export default function NavBar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
      const close = ()=> setOpen(false);
      window.addEventListener('click', close);
      return ()=> { window.removeEventListener('click', close)};
    }, [])

    return (
      <>
        <div className='navigation'>
          <nav className='nav-list' onClick={(e)=> e.stopPropagation()}>
            <div>
              <i className="bi bi-code"></i>
              <h1>LuckCode</h1>
            </div>
            <ul className={`${!open ? "hidden-left" : "left-0"}`}>
              <li><a className='link active' href="#">Home</a></li>
              <li><a className='link' href="#services">Services</a></li>
              <li><a className='link' href="#project">Projects</a></li>
              <li><a className='link' href="#about">About</a></li>
              <li><a className='link' href="#contact">Contact</a></li>
            </ul>
            <button onClick={()=> setOpen(!open)} className='menu-btn'>
              <i className={`bi ${ open ? "bi-x" : "bi-list"}`}></i>
            </button>
          </nav>
        </div>
      </>
    );
  } 