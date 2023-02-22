import * as React from "react";

const Footer = (props: any) => {
  console.log(props.links);
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle("");
  };

  const About = props.links?.c_footerLinks?.about?.map((link: any) => (
    <a className="navbar-item" href={link.link}>
      <span>{link.label}</span>
      <br />
    </a>
  ));
  const contactUs = props.links?.c_footerLinks?.contactUs?.map((link: any) => (
    <a className="navbar-item" href={link.link}>
      <span>{link.label}</span>
      <br />
    </a>
  ));
  const menus = props.links?.c_footerLinks?.menus?.map((link: any) => (
    <a className="navbar-item" href={link.link}>
      <span>{link.label}</span>
      <br />
    </a>
  ));
  // const iconsCTA=props?._site?.c_footerIcons?.icon?.map((link:any) => (

  //    <a className="navbar-item" >
  //      <span>{link.url}</span><br />
  //    </a>
  // ));
  // console.log(iconsCTA,"abcv")
  console.log("siconsfor footer", props.links.c_footerIcons);
  const iconForFooter = props.links.c_footerIcons?.map((item: any) => {
    // console.log("siconsfor footer",item)
    return (
      <>
        <a href={item.cTA.link} style={{ marginRight: "10px" }}>
          <img
            src={item.icon.url}
            style={{ height: "30px", marginTop: "25px" }}
          />
        </a>
      </>
    );
  });
  console.log("nssss", iconForFooter);
  return (
    <>
      <footer
        className="footer"
        style={{ backgroundColor: "#f1d7b1", width: "100%", display: "flex" }}
      >
        <br />
        <div
          className="container"
          style={{ display: "flex", marginTop: "50px", marginBottom: "60px" }}
        >
          <a className="logo" href="/">
            <img
              style={{ height: "109px" }}
              src={props.links.c_footerLogo.url}
            />
          </a>

          <div className="footer_links" style={{ display: "flex" }}>
            <div className="column" style={{ marginLeft: "20px" }}>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#2e247a",
                }}
              >
                About
              </h2>

              <li
                style={{
                  display: "block",
                  textDecoration: "none",
                  marginTop: "25%",
                }}
              >
                {About}{" "}
              </li>
            </div>
            <div className="column" style={{ marginLeft: "200px" }}>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#2e247a",
                }}
              >
                Contact Us
              </h2>
              <li
                style={{
                  display: "block",
                  textDecoration: "none",
                  marginTop: "15%",
                }}
              >
                {" "}
                <a>{contactUs}</a>
              </li>
            </div>
            <div className="column" style={{ marginLeft: "200px" }}>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#2e247a",
                }}
              >
                Menu
              </h2>
              <li
                style={{
                  display: "block",
                  textDecoration: "none",
                  marginTop: "25%",
                }}
              >
                <a>{menus}</a>
              </li>
            </div>
            <div style={{ marginLeft: "140px" }}>
              <h3 style={{ fontWeight: "bold", color: "#2e247a" }}>
                You can follow us on
              </h3>

              <div className="footer-icon"> {iconForFooter}</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
