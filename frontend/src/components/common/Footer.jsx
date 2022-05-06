import React from "react";

const Footer = ({ img }) => {
  return (
    // <footer>
    //   <div class="row">
    //     <div class="logo">
    //       <img src={img} alt="" />
    //     </div>
    //     <div>
    //       <p class="copyright">@2021 TripAdvisor LLC All right reserved.</p>
    //       <ul class="footermenus">
    //         <li>Privacy Policy</li>
    //         <li>Terms of Use</li>
    //         <li>Sitemap</li>
    //       </ul>
    //     </div>
    //   </div>
    //   <hr />
    //   <p class="footertext">
    //     This is the version of our website addressed to speakers of English in
    //     India. If you are a resident of another country or region, please select
    //     the appropriate versio of Tripadvisor for your country or region in the
    //     drop-down menu. more
    //   </p>
    // </footer>
    <>
      <footer class="footer">
        <div class="pairs">
          <div class="links">
            <p id="quicklink">Quick Links</p>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/">Things to do</a>
            </p>
            <p>
              <a href="/preview">Tourist Attraction</a>
            </p>
            <p>
              <a href="/favorite">Favorite</a>
            </p>
          </div>
          <div class="address">
            <p id="addr">Address</p>
            <p>14.1 Ellis Bridge ST.</p>
            <p>Auckland 3500,Ethiopia</p>
            <p>+159090,9090</p>
            <p>contactus@ethiopia.com</p>
          </div>
        </div>
        <div class="subscribe">
          <p>Subscribe to our newletter</p>
          <div class="submit">
            <input
              type="email"
              placeholder="your email"
              name="email"
              id="email"
            />
            <button>v</button>
          </div>
        </div>
      </footer>
      <hr />
      <div class="copyright">
        <p>Techie.io©All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
