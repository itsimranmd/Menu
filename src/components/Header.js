import React, {useState,useEffect} from "react";
import { withRouter,Link } from 'react-router-dom';
import Hamburger from './Hamburger';

const Header = ({history}) => {

  const [state, setState]=useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });

  // const [disabled, setDisabled]=useState(false);

  useEffect(()=>{
    history.listen(()=>{
      setState({clicked: false, menuName:"Menu"});
    })
  });

  const handleMenu=()=>{
    // disableMenu();
    if(state.initial === false){
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close'
      });
    }
    else if(state.clicked === true){
      setState({
        clicked: false,
        menuName: 'Menu'
      })
    }
    else if(state.clicked === false){
      setState({
        clicked: true,
        menuName: 'Close'
      })
    }
  }

  // const disableMenu = () =>{
  //   setDisabled(!disabled);
  //   setTimeout(()=>{
  //     setDisabled(false)
  //   }, 1000);
  // }

  return <header>
    <div className="container">
      <div className="wrapper">
        <div className="inner-header">
          <div className="logo">
            <Link to="/">HMBRG.</Link>
          </div>
          <div className="menu">
            <button  onClick={handleMenu}>
              Menu
            </button>
          </div>
        </div>
      </div>
    </div>
    <Hamburger state={state}/>
  </header>;
};

export default withRouter(Header);
