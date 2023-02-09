import * as React from "react";

const Footer = (props:any) => {
   console.log(props.links)
     React.useEffect(()=>{
       document.body.setAttribute("id","body");
     })
const toggle=()=>{
      (document.getElementById("body") as HTMLInputElement).classList.toggle('');
    };

const About=props.links?.c_footerLinks?.about?.map((link:any) => (
   <a className="navbar-item" href={link.link}> 
     <span>{link.label}</span><br /></a>
  
));
const contactUs=props.links?.c_footerLinks?.contactUs?.map((link:any) => (
   <a className="navbar-item" href={link.link} >
     <span>{link.label}</span><br />
   </a>
));
const menus=props.links?.c_footerLinks?.menus?.map((link:any) => (
   <a className="navbar-item" href={link.link} >
     <span>{link.label}</span><br />
   </a>
));
   return (
      <>
         <footer className="footer" style={{backgroundColor:"#f1d7b1", width:"100%", display:"flex"}}>
            <br/>
            <div className="container" style={{display:"flex",marginTop:"50px",marginBottom:"60px"}}>
                  <a className="logo" href="/">
                    <img style={{height:"109px"}} src={props.links.c_footerLogo.url}/> 
                  </a>
            
               <div className="footer_links" style={{display:"flex"}}>
                  <div className="column" style={{marginLeft:"20px"}}>
                  <h2 style={{fontSize:"50px"}}>About</h2>
                  
                     <li style={{display:"block",textDecoration:"none",marginTop:"25%"}}>{About} </li> 
                  </div>
                  <div className="column" style={{marginLeft:"200px"}}>
                  <h2 style={{fontSize:"50px"}}>Contact Us</h2>
                    <li style={{display:"block",textDecoration:"none",marginTop:"15%"}}> <a>{contactUs}</a></li>
                  </div>
                  <div className="column" style={{marginLeft:"200px"}}>
                     <h2 style={{fontSize:"50px"}}>Menu</h2>
                     <li style={{display:"block",textDecoration:"none",marginTop:"25%"}}><a>{menus}</a></li>
                  </div>
                  </div>
               </div>
         </footer>
      </>
   );
};

export default Footer;
