import * as React from "react";
import OpenClose from "../commons/openClose";
import Defaultimage from "../../images/luxurystore.jpg";
import { Link } from "@material-ui/core";

export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};

type Banner = {
  name?: string;
  address?: Address;
  hours?: any;
  CtaLink: any;
  timezone: any;
  clickcollect?: object;
  c_bannerImage?: any;
  c_locatorBannerAdditionalText?: string;
  CTAButton: string;
  children?: React.ReactNode;
};

const renderPrettyAddress = (address?: Address) => {
  return (
    <>
      {address && (
        <span>
          {address.line1} in {address.city}, {address.region}
        </span>
      )}
    </>
  );
};

const Banner = (props: Banner) => {
  const {
    name,
    address,
    clickcollect,
    CtaLink,
    c_bannerImage,
    c_locatorBannerAdditionalText,
    CTAButton,
    children,
  } = props;
  // console.log("object1111", props.CtaLink);
  return (
    <>
      <div className="hero-section relative">
        <img
          className="hero-image"
          src={c_bannerImage ? c_bannerImage : Defaultimage}
          alt="banner"
          width="1"
          height="1"
        />
        <div
          className="absolute text-center"
          style={{
            marginLeft: "30%",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <p className="herotxt">Real good food</p>
          <p className="bannertxt">Feels like Home, Tastes like a Paradise</p>

          <button>
            <a className="bannercta" href={props.CtaLink}>
              {props.CTAButton}
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
