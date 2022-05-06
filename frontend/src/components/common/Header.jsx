import React from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import ImgLogo from "../../assets/img/logo.svg";
import listicon from "../../assets/img/listicon.svg";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      {/* <nav class="navbar">
        <div onClick={() => dispatch(push("/"))} class="logo">
          <img src={ImgLogo} alt="" />
          <div class="logotext">
            Ethiopian <br />
            Visitors
          </div>
        </div>

        <div  class="menus">
          <p>HOME</p>
          <p>WONDERS IN EUROPE</p>
          <p>TOURIST ATTRACTIONS</p>
          <p onClick={() => dispatch(push("/favourites"))}>FAVOURITES</p>

          <img src={ImgMenuicon} alt="" />
        </div>
      </nav> */}

      <nav>
        <div class="logo">
          <img src={ImgLogo} alt="" />
        </div>
        <div class="navbar">
          <p>
            <a href="/" id="nic">
              HOME
            </a>
          </p>
          <p>WONDERS IN EUROPE</p>
          <p>TOURIST ATTRACTION</p>
          <p onClick={() => dispatch(push("/favourites"))}>
            <a>FAVORITE</a>
          </p>
        </div>
        <div class="list">
          <img src={listicon} alt="" id="listicon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
