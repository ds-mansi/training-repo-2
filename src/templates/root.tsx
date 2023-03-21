import * as React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
// import Banner from "../components/commons/banner";
import Breadcrumb from "../components/layouts/Breadcrumb";
import "../index.css";
// import "../main.css";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import {
  apikey_for_entity,
  baseuRL,
  stagingBaseurl,
  AnalyticsEnableDebugging,
  AnalyticsEnableTrackingCookie,
  favicon,
} from "../../sites-global/global";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import Banner from "../components/locationDetail/banner";
import PageLayout from "../components/layouts/PageLayout";
// import Logo from "../images/logo.svg";
// import bannerImage from "../images/app-bg.png";
var currentUrl = "";
export const config: TemplateConfig = {
  stream: {
    $id: "ce_root",
    filter: {
      savedFilterIds: ["dm_stores-directory"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "description",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildrenCount",
      // "c_globalData.c_headerLinks1",
      // "c_globalData.c_footerLinks",
      // "c_globalData.facebookPageUrl",
      // "c_globalData.twitterHandle",
      // "c_globalData.instagramHandle",
      // "c_globalData.address",
      // "c_globalData.c_phoneNumber",
      // "c_globalData.c_companyrn",
      // "c_globalData.c_tikTok",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  currentUrl = document.slug.toString() + ".html";
  return document.slug.toString() + ".html";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {

  let metaDescription = document._site ? document._site : "Find your nearest Club-mate Restro and which services are available." + document.name;
  let metaTitle = `Club-mate Restro stores in ${document.name} | Find a Local Store`;
  // let canonicalURL = document._site.c_metaTags.canonicalURL ? document._site.c_metaTags.canonicalURL + document.dm_directoryParents[1].name.toLowerCase() +"/"+  document.slug + ".html"
  // : stagingBaseUrl +  document.slug + ".html"
  //let ogmetaImage = document._site.c_ogmetaTags.oGImage[0].url ? document._site.c_ogmetaTags.oGImage[0].url : "https://cdn.vodafone.co.uk/en/assets/images/large/IMG_10480.jpg"

  return {
    title: metaTitle,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${metaDescription}`,
        },
      },
      
      // {
      //   type: "meta",
      //   attributes: {
      //     name: "title",
      //     content: `${metaTitle}`,
      //   },
      // },
      {
        type: "meta",
        attributes: {
          name: "author",
          content: " Club Mate",
        },
      },
      
      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex, nofollow",
        },
      },
      
      {
        type: "link",
        attributes: {
          rel: "canonical",
          // href: ` ${canonicalURL}`,
        },
      },
      ///og tags
      
      {
        type: "meta",
        attributes: {
          property: "og:url",
          // content: `${canonicalURL}`,
        },
      },
      
      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${metaDescription}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${metaTitle}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "og:image",
          // content: `${ogmetaImage}`
        },
      },
      
      /// twitter tag
     

      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:title",
          content: `${metaTitle}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:url",
          // content: `${canonicalURL}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:image",
          content: `https://www.vodafone.co.uk/cs/groups/configfiles/documents/document/favicon.ico`
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${metaDescription}`,
        },
      },
    ],
  };
};

const Root: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const { description, dm_directoryParents, _site, dm_directoryChildren } =
    document;

  const { name, slug, c_globalData } = document;

  return (
    <>
      <Header _site={_site} />
      <PageLayout
            _sites={_site} 
          />
      <BreadCrumbs
        name={name}
        parents={dm_directoryParents}
        baseUrl={relativePrefixToRoot}
        address={{}}
      ></BreadCrumbs>
      <div className="header-title ">
        {/* <Herobanner c_bannerTitle={_site.c_bannerTitle}></Herobanner> */}
      </div>
      {/* <Banner
        Name={name ? name : ""}
        TagLine={""}
        BackgroundImage={bannerImage}
        CtaButton={""}
        text={"Regions"}
        template={"country"}
      /> */}

      <div className="directory-root py-5 lg:py-[60px]">
        <div className="container">
          <div
            className="flex flex-wrap -mx-4"
            style={{ justifyContent: "center"}}
          >
            {dm_directoryChildren.map((child: any) => {
              return (
                <>
                  <div
                    className="rootbtn w-1/2 md:w-1/3 lg:w-1/4 px-4"
                    style={{ justifyContent: "center" ,margin:"10px" }}
                  >
                    <a
                      href={slug + "/" + child.slug + ".html"}
                      key={child.slug}
                      className="store-css"
                    >
                      {child.name} {child.dm_directoryChildrenCount}
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Footer
            links={_site}
            icons={_site?.c_footerIcons}
            head={_site?.c_footerLinks}
          />
    </>
  );
};

export default Root;
