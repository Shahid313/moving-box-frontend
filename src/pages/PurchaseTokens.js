import React, {useState, useEffect} from 'react';
import {
  Link,
  useNavigate
} from "react-router-dom";
import axios from 'axios';

import '../css/PurchaseTokens.css';
import black_logo from '../assets/logo-moving-box-black.png';
import white_logo from '../assets/logo-moving-box-white.png';

function PurchaseTokens() {
  const [showHamburger, setShowHumburger] = useState(false)
  const [tokens, setTokens] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getTokens()
  },[])


  const getTokens = () => {
    axios.get('http://localhost:5000/apis/tokens/get').then((response) => {
      setTokens(response.data.data)
    })
  }

  const logoutUser = (e) => {
    e.preventDefault()
    localStorage.removeItem('userInfo')
    navigate('/')
  }

  return (
    <div className='CompanyDataBody'>
        <div className='Nav'>
            <div className='top__nav'>
              <div className='logo__and__contact__info'>
              <img src={black_logo} alt='logo'/>

              <div className='contact__info'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#03a9f4" style={{height:18, width:18}}>
                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
              </svg>

              <h4>(+39) 02 8410567</h4>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#03a9f4" style={{height:19, width:19}}>
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              </div>
              </div>

            <div onClick={() => setShowHumburger(!showHamburger)} className='hamburger'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#03a9f4" style={{height:30, width:30}}>
            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
            </svg>
            </div>

            </div>


            <div className='bottom__nav'>
              <ul>
                <li><Link to='/company/data'>Comapany data</Link></li>
                <li><Link to='/invoices'>Invoices</Link></li>
                <li><Link to='/maintenance/history'>Maintenance history</Link></li>
                <li><Link to='/tokens/purchase'>Purchase Tokens</Link></li>
                <button onClick={(e) => logoutUser(e)} className='logout__btn'>Logout</button>
              </ul>
            </div>

            <div className={showHamburger ? 'mobile__nav': 'mobile__nav__not__shown'}>
              <ul className={showHamburger ? 'monile__navigation__links__shown': 'monile__navigation__links_not_shown'}>
                <li><Link href='/company/data'>Comapany data</Link></li>
                <li><Link href='/invoices'>Invoices</Link></li>
                <li><Link href='/maintenance/history'>Maintenance history</Link></li>
                <li><Link href='/tokens/purchase'>Purchase Tokens</Link></li>
                <button style={{backgroundColor:'white', color:'#03a9f4'}} onClick={(e) => logoutUser(e)} className='logout__btn'>Logout</button>
              </ul>
            </div>
        </div>

        {/* table starts */}

    <div className="tokens__generator__wrapper">
    <h2 className='data__title'>Purchase of maintenance tokens</h2>

    <p className='token__quantity'>Token Quantity:</p>
    <div className='tokens'>
        <select>
            {tokens.map((token,index) => (
              <option index={index}>{token.quantity} Token(s) - {token.price}</option>
            ))}
        </select>
        <button className='confirm__btn'>He confirms</button>
    </div>
    
    </div>

        {/* table ends */}

      <div className='footer'>
          <img src={white_logo} alt='logo'/>
          <p className='copy__right'>Copyright 2007-2023 Moving-Box srl All Rights Reserved</p>
          <p className='decree'>Compactable Mobile Shelving Units Automation in compliance with occupational safety and health | Italian Act. Legislative Decree 81/2008</p>
      </div>

    </div>
  );
}

export default PurchaseTokens;