import React, {useEffect,useRef} from "react";
import { Link } from "react-router-dom";

const Hamburger = ({state}) => {
  let menu = useRef(null);
useEffect(()=>{
if(state.clicked === false){
menu.style.display = "none";
}
else if(state.clicked === true || (state.clicked ===true && state.initial === null)){
menu.style.display = "block";
}
})

  return (
    <div ref={el => (menu =el) }className="hamburger-menu">
      <div className="menu-secondary-background-color"></div>
      <div className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link to="/opportunities">Oppurtunity</Link>
                  </li>
                  <li>
                    <Link to="/solutions">Solutions</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact us</Link>
                  </li>
                </ul>
              </nav>
              <div className="info">
                <h3>Our Promise</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mauris purus, sagittis at odio a, fringilla pharetra neque.
                  Donec a diam velit. Duis sit amet sem eget turpis cursus
                  facilisis. Nunc iaculis facilisis ante, id sagittis lacus
                  volutpat in. Duis enim erat, ultricies gravida sem et, varius
                  lacinia sem. Aliquam erat volutpat. Quisque tincidunt
                  elementum diam nec convallis. Mauris dictum rhoncus accumsan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
