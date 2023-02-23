import * as React from "react";
import { CardComponent } from "@yext/search-ui-react";
import { Location } from "../../types/search/locations";
import GetDirection from "../commons/GetDirection";
import redmapimage from "../../images/red-map.svg";
import timesvg from "../../images/watch-icn.svg";
import Address from "../commons/Address";
import OpenClose from "../commons/openClose";
import { StaticData } from "../../../sites-global/staticData";
import { Link } from "@yext/pages/components";
import Hours from "../commons/hours";
import phone from "../../images/phone.svg";
import { useState } from "react";

const metersToMiles = (meters: number) => {
  const miles = meters * 0.000621371;
  return miles.toFixed(2);
};
let array = [];

const LocationCard: CardComponent<Location> = ({ result }) => {
  const [timeStatus, setTimeStatus] = useState("");
  const onOpenHide = () => {
    if (timeStatus == "") {
      setTimeStatus("active");
      $('.daylist').show();
    } else {
      setTimeStatus("");
      $('.daylist').hide();
    }
  };

  let url = "";
  const [hoursopen, setHoursopen] = React.useState(false);

  function opentime(e: any) {
    //console.log(e.target);
    var closethis = e.target.closest(".lp-param-results");
    if (
      closethis
        .querySelector(".storelocation-openCloseTime")
        .classList.contains("hidden")
    ) {
      closethis
        .querySelector(".storelocation-openCloseTime")
        .classList.remove("hidden");
      setHoursopen(true);
    } else {
      closethis
        .querySelector(".storelocation-openCloseTime")
        .classList.add("hidden");
      setHoursopen(false);
    }
  }

  const { address, hours, additionalHoursText, timezone } = result.rawData;
  var name: any = result.rawData.name?.toLowerCase();
  var mainPhone: any = result.rawData.mainPhone;
  var country: any = result.rawData.address.countryCode?.toLowerCase();
  var region: any = result.rawData.address.region
    ?.toLowerCase()
    .replaceAll(" ", "-");
  var initialregion: any = region.toString();
  var finalregion: any = initialregion.replaceAll(" ", "-");
  var city: any = result.rawData.address.city?.toLowerCase();
  var initialrcity: any = city.toString();
  var finalcity: any = initialrcity.replaceAll(" ", "-");
  var string: any = name.toString();
  let result1: any = string.replaceAll(" ", "-");
  var link =country + "/" + region + "/" + city +
    "/" +
    result.rawData.slug?.toString() +
    ".html";
  console.log(link, "link");
  if (!result.rawData.slug) {
    url = `/${link}.html`;
  } else {
    url = `/${link}`;
  }
  //  console.log("url",url)
  // const services = c_restroServices.services.map((link:any) => (

  //   <ul>
  //     <li>{link.label}</li></ul>

  // ));

  return (
    <div
      className={`location result-list-inner-${result.id} result`}
      id={`result-${result.id}`}
      key={`result-${result.rawData.id}`}
    >
      <div className="result-inner ">
        <div className="center-column">
          <div className="lp-param-results lp-subparam-hours">
            <div className="location-name-miles icon-row">
              <div className="icon text-black relative">
                {" "}
                <img
                  className=" "
                  src={redmapimage}
                  width="20"
                  height="20"
                  alt={""}
                />
                <span className="map-count"></span>
              </div>
              <h2>
                <Link
                  className="inline-block notHighlight"
                  data-ya-track={`viewDetail -${result.rawData.name}`}
                  eventName={`viewDetail -${result.rawData.name}`}
                  rel="noopener noreferrer"
                  href={`/${link}`}
                >
                  {result.rawData.name}
                </Link>
              </h2>
              {typeof result.distance != "undefined" ? (
                <div className="distance">
                  {metersToMiles(result.distance)}{" "}
                  <span>{StaticData.miles}</span>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="icon-row content-col address-with-availablity notHighlight">
              <Address address={address} />
              {result.rawData.hours ? (
                <>
                  <div className="mt-2">
                    <h6>Opening Hours</h6>
                    {result.rawData.hours?.reopenDate ? (
                      <>
                        <div className="icon">
                          {" "}
                          <img
                            className=" "
                            src={timesvg}
                            width="20"
                            height="20"
                            alt=""
                          />{" "}
                        </div>
                        <div
                          className={timeStatus + "onhighLight "}
                          data-id={`main-shop-${result.rawData.id}`}
                          onClick={onOpenHide}
                        >
                          {StaticData.tempClosed}
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                        className={timeStatus + "onhighLight "}
                         href="javascript:void(0);"
                          onClick={onOpenHide} >
                          <OpenClose
                            timezone={result.rawData.timezone}
                            hours={result.rawData.hours}
                            deliveryHours={result.rawData.hours}
                           
                          >
                            
                            </OpenClose>
                            <svg
                            className="mt-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="9.585"
                            height="4.793"
                            viewBox="0 0 9.585 4.793"
                          >
                            <path
                              id="hrd-drop"
                              d="M9,13.5l4.793,4.793L18.585,13.5Z"
                              transform="translate(-9 -13.5)"
                              fill="#00363f"
                            ></path>
                          </svg>
                        </Link>
                        <div className={timeStatus + " daylist"}>
                          <Hours
                            key={result.rawData.id}
                            hours={result.rawData.hours}
                            additionalHoursText={additionalHoursText}
                          />
                        </div>
                      </>
                    )}

                      <div className={timeStatus + " daylist"}>
                      {hoursopen ? (
                        typeof result.rawData.hours === "undefined" ? (
                          ""
                        ) : (
                          
                          <Hours
                            key={result.rawData.name}
                            additionalHoursText={
                              result.rawData.additionalHoursText
                            }
                            hours={result.rawData.hours}
                            c_specific_day={result.rawData.c_specific_day}
                          />
                          
                        )
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="closeddot notHighlight red-dot">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                  >
                    <circle
                      id="Ellipse_5"
                      data-name="Ellipse 5"
                      cx="4"
                      cy="4"
                      r="4"
                      fill="#ad1e1f"
                    />
                  </svg>
                  <div className="hours-info text-lg font-second-main-font closeddot">
                    Closed
                  </div>
                </div>
              )}
            </div>

            <div className="button-bx">
              <Link
                type="button"
                href={`/${link}`}
                className=" btn notHighlight "
                data-ya-track={`viewStore -${result.rawData.name}`}
                eventName={`viewStore -${result.rawData.name}`}
                rel="noopener noreferrer"
              >
                {/* <div dangerouslySetInnerHTML={{__html: View_Store}}/> */}
                {StaticData.StoreDetailbtn}
              </Link>
              {result.rawData.displayCoordinate ? (
                <GetDirection
                  buttonText={StaticData.getDirection}
                  address={address}
                  latitude={result.rawData.displayCoordinate?.latitude}
                  longitude={result.rawData.displayCoordinate?.longitude}
                />
              ) : (
                <GetDirection
                  buttonText={StaticData.getDirection}
                  address={address}
                  latitude={result.rawData.yextDisplayCoordinate?.latitude}
                  longitude={result.rawData.yextDisplayCoordinate?.longitude}
                />
              )}
            </div>
            <div>
              {/* <div
                style={{
                  marginLeft: "21px",
                  fontSize: "20px",
                  padding: "9px",
                  marginTop: "7px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#f1d7b1",
                    padding: "5px",
                    border: "1px solid black",
                  }}
                >
                  <a href="/">Services</a>
                </button>
              </div> */}
              {/* <div style={{ display: "flex", marginLeft: "29px", gap: "20px" }}>
                {result.rawData.c_restroServices?.services.map((item: any) => {
                  return (
                    <>
                      <ul className="hover:underline hover:font-bold ">
                        <li>{item.label}</li>
                      </ul>
                    </>
                  );
                })}
              </div> */}
            </div>
            <div className="flex ml-7 mt-2">
              <img src={phone} style={{ height: "30px" }} />
              <div style={{ fontSize: "18px" }}>{mainPhone}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
