import * as React from "react";
import Cta from "./cta";
import logo from "../../images/club.png";


type props = {
  data:any;
 };

const Header = (props:any) => {
  console.log(props)
    React.useEffect(()=>{
      document.body.setAttribute("id","body");  
    })
  const linkDoms = props._site.c_headerlinks.map((link:any) => (
      <a className="navbar-item" href={link.link} >
        <span style={{fontSize:"25px",marginLeft:"15%",marginTop:"10px"}}>{link.label}</span>
      </a>
  ));
// console.log(linkDoms,"linkdoms")

  const toggle=()=>{
    (document.getElementById("body") as HTMLInputElement).classList.toggle('');
  };

  return (
    <>
    
        <div id="header" className="header-nav" style={{backgroundColor:"#f1d7b1"}}>
          <div className="headerLogo" style={{display:"flex",alignItems:"center"}}>
                    <a className="logo" href="/" >
                      <div >
                      <img src={props._site.c_footerLogo.url} style={{display: "inline-block",float: "left",height:"100px"}}/> 
                      </div>
                    </a>
                    <h5 className="text-4xl font-normal leading-normal mt-0 mb-2 text-indigo-800" style={{color:"#e30814",float:"left"}}>
                        Club Mate
                  </h5>
                    <div style={{margin:"auto"}}>
                      <nav className="navbar" style={{color:"black",padding:"19px 0px 19px 0px"}}>
                        {linkDoms}
                      </nav>
                 </div> 
                 
              </div>
                
                 
             </div>
    </>
  );
};

export default Header;
