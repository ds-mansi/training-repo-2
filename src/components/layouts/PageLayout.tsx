import * as React from "react";
import Footer from "./ooter";
import Nav from "./Nav";
import Banner from "../locationDetail/banner";
// import "../index.css";

type Props = {
    title?: string;
    _sites?: any;
    cta:any;
    // global:any;
    children?: React.ReactNode;
};
  
  const PageLayout = ({
    title,
    _sites,
    cta,
    // global,
    children,
  }: Props) => {  console.log(_sites,"mns")
    return (
        <>
        <div className="bannerimg flex items-center justify-center">
             <img src={_sites.url}/>
            <div className="absolute text-center" style={{color:"white"}}>
              <p className="herotxt">Real good food</p>
              <p className="bannertxt">Feels like Home, Tastes like a Paradise</p>
          </div>
          
          <div className="bannercta absolute text-center" > 
            <a href={cta.link}>{cta.label}</a>   
          </div>
          </div>  
      
        </>
    );
  };

export default PageLayout;
  