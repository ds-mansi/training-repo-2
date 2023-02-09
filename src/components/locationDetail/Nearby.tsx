import * as React from "react";
import ApiCall from "../../Apis/ApiCall";
import Address from "../commons/Address";
import GetDirection from "../commons/GetDirection";
import OpenClose from "../commons/openClose"
import timesvg from "../../images/watch-icn.svg"
import mapimage from "../../images/map.svg";
import Phonesvg from "../../images/phone.svg"
import { Addresssvg, mobilesvg, View_Store } from "../../../sites-global/global";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "@yext/pages/components";

export default function Nearby(props: any) {
  console.log("object",props)
  const [neabyData, setnearbyData] = React.useState(props?.externalApiData?.response);
  const metersToMiles = (meters: number) => {
    
    const miles = meters * 0.000621371;
    return miles.toFixed(2);
  }
  console.log("neabyData",neabyData)
  return (

    <>
      {/* <Splide
        id="splide-nearby"
        options={{
          rewind: false,
          type: "slide",
          perPage: 3,
          perMove: 1,
          arrows: false,
          drag: false,
          pagination: false,
          lazyLoad: "nearby",
          breakpoints: {
            1279: {
              perPage: 1,
              drag: true,
              pagination: true,
              arrows: false,
              type: "splide",
            },
          },
        }}
      > */}
        {neabyData?.entities?.map((location: any, index: Number) => {

          // let url = "";
          // var name: any = location.name?.toLowerCase();
          // var region: any = location.address.region?.toLowerCase();
          // var initialregion: any = region.toString();
          // var finalregion: any = initialregion.replaceAll(" ", "-");
          // var city: any = location.address.city?.toLowerCase();
          // var initialrcity: any = city.toString();
          // var finalcity: any = initialrcity.replaceAll(" ", "-");
          // var string: any = name.toString();
          // let result1: any = string.replaceAll(" ", "-");
          // if (!location.slug) {
          //   url = `/${location.id}-${result1}.html`;
          // } else {
          //   url = `/${location.slug.toString()}.html`;
          // }
      
          if (index > 0) {
            return (
              <>
                {/* <SplideSlide key={index}> */}
                  <div className="nearby-card">
                    <div className="location-name-miles icon-row">
                      <h2><Link className="inline-block notHighlight" href={`/${location.id}`}
                        data-ya-track={`${location.name}`}
                        eventName={`${location.name}`}
                        rel="noopener noreferrer">{location.name}</Link></h2>

                    </div>
                    <div className="icon-row content-col">
                      <Address address={location.address} />
                    </div>
                    <div className="icon-row closeing-div">
                    {location.hours?
                    <div className="flex open-now-string items-center " data-id={`main-shop-${location.id}`} >
                      <OpenClose timezone={location.timezone} hours={location.hours} deliveryHours={location.hours}></OpenClose>
                    </div>:
                    <div className="closeddot notHighlight red-dot">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
           <circle id="Ellipse_5" data-name="Ellipse 5" cx="4" cy="4" r="4" fill="#ad1e1f"/>
         </svg>
                   <div className="hours-info text-lg font-second-main-font closeddot"> 
                   Closed
                   </div>
                   </div>
                    }
                    </div> 
                    <div className="button-bx">
                      <Link className="btn" href={`/${location.id}`}
                       data-ya-track={`viewstore-${location.name}`}
                       eventName={`viewstore-${location.name}`}
                       rel="noopener noreferrer">
                        {/* <div dangerouslySetInnerHTML={{__html: View_Store}}/> */}
                        STORE DETAILS</Link>
                      <GetDirection buttonText={props.c_getDirectionsCTAText?props.c_getDirectionsCTAText:"Get directions"} address={location.address} latitude={location.displayCoordinate ? location.displayCoordinate.latitude : location.yextDisplayCoordinate.latitude} longitude={location.displayCoordinate ? location.displayCoordinate.longitude : location.yextDisplayCoordinate.longitude} />
                      
                    </div>
                  </div>
                {/* </SplideSlide> */}
              </>

            )
          }
        }

        )
        }
      {/* </Splide> */}
    </>
  )
}
