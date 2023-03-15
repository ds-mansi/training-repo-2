import * as React from "react";
import { regionNames } from "../../../sites-global/global";
import mapimage from "../../images/map.svg";

const Address = (props: any) => {
    const { address } = props;
    var gmaps = "https://www.google.com/maps/dir/?api=1&destination=";
    var gmapsAddress = gmaps.concat(address.line1, ' ', address.city, ' ', address.region, ' ', address.postalCode);
    var gmapsLink = gmapsAddress.concat('"');

  return (
    <>
      <div className="address notHighlight flex ">
        {/* <a href={gmapsLink} target="_blank" className="hover:underline"> */}
        <img src={mapimage} style={{height:"25px",marginRight:"10px"}}/>
        <div>
            <div >{address.line1}</div>
            {address.line2 && (<div><span className="notHighlight">{address.line2}</span></div>)}
            <div ><span className="notHighlight">{address.city}, {address.region}</span> </div>
            {<div ><span className="notHighlight">{address.postalCode}, {regionNames.of(address.countryCode)}</span></div>}
            </div>
        {/* </a> */}
      </div>
    </>
  );
};

export default Address;
