import React from 'react'
import list from '../../assets/img/list.svg'
import logo from '../../assets/img/europian-logo.svg'

function Header() {
  return (
    <>
    <nav>
      <div class="logo">
        <img src={logo} alt="" />
      </div>
      <div class="navbar">
        <p>
          <a href="/" id='nic'
            >HOME</a
          >
        </p>
        <p>WONDERS IN EUROPE</p>
        <p>TOURIST ATTRACTION</p>
        <p>
          <a href="/favorite" 
            >FAVORITE</a
          >
        </p>
      </div>
      <div class="list">
        <img src={list} alt="" id="listicon" />
      </div>
    </nav>
    </>
  )
}

export default Header