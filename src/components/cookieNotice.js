import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Cross from '../images/crossIcon.svg'
import { Link } from 'gatsby'
import Cookies from 'js-cookie'

const CookieNoticeStyle = styled.div`
  background: #ffffff;
  border: 1px solid #d4d9e1;
  box-sizing: border-box;
  box-shadow: 0 1px 2px rgba(90, 90, 90, 0.06);
  border-radius: 90px;
  text-align: left;
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);

  z-index: 3000;
  padding: 8px 18px 10px;
  white-space: nowrap;

  @media (max-width: 435px) {
    bottom: 0;
    border-radius: unset;
    white-space: normal;
    width: 100%;
  }
  
  a {
    color: #447AFB;
    transition: color 0.2s;
  }
  
  a:hover {
    color: #2c4e9c;
  }
`

const CookieNotice = () => {
  const OASIS_APP_PRIVACY_ACCEPTED_DATE = 'oasis_app_privacy_accepted_date'
  const [show, setShow] = useState(false)

  useEffect(() => {
    const acceptedDate = Cookies.get(OASIS_APP_PRIVACY_ACCEPTED_DATE)
    if (!acceptedDate) {
      setShow(true)
    }
  }, [])

  const handleClose = () => {
    Cookies.set(OASIS_APP_PRIVACY_ACCEPTED_DATE, new Date().toISOString(), {
      expires: 365,
    })
    setShow(false)
  }

  return (
    <CookieNoticeStyle style={{ display: show ? 'block' : 'none' }}>
      <div style={{display: "flex", alignItems:"center"}}>
        <span style={{fontSize:"14px", color:"#231536", letterSpacing:"0.045em"}}>
          By using this website you agree to our{' '}
          <Link to="/privacy">
            cookie policy
          </Link>
        </span>
        <div style={{width: "10px"}} />
        <Cross
          onClick={handleClose}
          style={{ cursor: 'pointer', flexShrink: 0 }}
        />
      </div>
    </CookieNoticeStyle>
  )
}

export default CookieNotice
