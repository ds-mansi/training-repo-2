import * as React from "react";
import Footer from "./ooter";
import Nav from "./Nav";
import Banner from "../locationDetail/banner";
// import "../index.css";

type Props = {
  title?: string;
  _sites?: any;
  // global:any;
  children?: React.ReactNode;
};

const PageLayout = ({
  title,
  _sites,
  // global,
  children,
}: Props) => {
  // console.log(_sites, "mns");
  return (
    <>
      <div className="bannerimg flex items-center justify-center">
        <img src={_sites?.c_banner?.banner?.url} />
        <div className="absolute text-center" style={{ color: "white" }}>

          <p className="herotxt">{_sites?.c_banner?.bannerHeading}</p>
          <p className="bannertxt">{_sites?.c_banner?.bannerDesc}</p>
        </div>

        <div className="bannercta absolute text-center">
          <a href={_sites?.c_banner?.bannerCta?.link}>{_sites?.c_banner?.bannerCta?.label}</a>
        </div>
      </div>
    </>
  );
};

export default PageLayout;
