import * as React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
// import Banner from "../components/banner";
// import favicon from "../images/vodafone-favicon.ico";
import Breadcrumb from "../components/layouts/Breadcrumb";
// import { AnalyticsEnableTrackingCookie,  AnalyticsEnableDebugging} from "../types/constants";
// import GetDirection from "../components/GetDirection";
// import { stagingBaseurl } from "../constants";

//import bannerImage from "../images/app-bg.png";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import "../index.css";
// import "../main.css";
//import favicon from "../images/favicon-live.png";
// import favicon from "../images/vodafone-favIcon.ico";

import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import { Link } from "@yext/pages/components";
import { JsonLd } from "react-schemaorg";
import { AnalyticsEnableDebugging, AnalyticsEnableTrackingCookie, favicon, stagingBaseurl } from "../../sites-global/global";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import Banner from "../components/locationDetail/banner";
// import Herobanner from "../components/commons/Herobanner";
//import Logo from "../images/logo.svg";

var currentUrl = "";

export const config: TemplateConfig = {
  stream: {
    $id: "ce_region",
    filter: {
      savedFilterIds: ["dm_stores-directory_address_region"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "description",
      "slug",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.id",
      "dm_directoryParents.dm_directoryChildrenCount",
      "dm_directoryChildren.dm_directoryChildrenCount",
      "dm_directoryChildren.dm_directoryChildren.name",
      "dm_directoryChildren.dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildren.id",
      // "c_globalData.c_headerLinks1",
      // "c_globalData.c_footerLinks",
      // "c_globalData.facebookPageUrl",
      // "c_globalData.twitterHandle",
      // "c_globalData.instagramHandle",
      // "c_globalData.address",
      // "c_globalData.c_phoneNumber",
      // "c_globalData.c_companyrn",
      // "c_globalData.c_tikTok",
      //seo section
      // "c_canonical",
      // "c_metaDescription",
      // "c_metaTitle",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  let url = "";
  document.dm_directoryParents.map((i: any) => {
    if (i.meta.entityType.id == 'Vodafone_country') {
      url += i.slug + ".html";
    }
  });
  url += document.slug.toString();

  return url + ".html";
};


export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {

  let metaDescription = document._site ? document._site : "Find your nearest Club-mate Restro and which services are available." + document.name;
  let metaTitle = `Club-mate Restro in ${document.name} | Find a Local Store`;
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

const State: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    name,
    description,
    c_globalData,
    dm_directoryParents,
    dm_directoryChildren,
    c_addressRegionDisplayName,
    //seo section
    c_canonical,
    c_metaDescription,
    c_metaTitle,
    _site,
    __meta,
  } = document;

  var sortedChildren = dm_directoryChildren.sort(function (a: any, b: any) {
    var a = a.name;
    var b = b.name;
    return a < b ? -1 : a > b ? 1 : 0;
  });

  let slugString = "/";
  document.dm_directoryParents.forEach((e: any) => {
    slugString = e.slug + "/";
  });
  const childrenDivs =
    dm_directoryChildren &&
    dm_directoryChildren.map((entity: any) => {
      let url: any = "";

      url = document.slug.toString();
      let url1: any = "";
      url1 = url.replace(/(\b\S.+\b)(?=.*\1)/g, "").trim();
      if (entity.dm_directoryChildrenCount == 1) {
        if (
          entity.dm_directoryChildren &&
          entity.dm_directoryChildren[0].id
        ) {
          return (
            <div className="w-1/2 storelocation-category md:w-1/3 lg:w-1/4 px-4">
              <Link
                key={entity.slug}
                href={"/" + entity.dm_directoryChildren[0].id }
                className="hover:text-red"
                eventName={entity.name}
              >
                {entity.name} ({entity.dm_directoryChildrenCount})
              </Link>
            </div>
          );
        }
         else {
          let name: any = entity.dm_directoryChildren[0].name.toLowerCase();
          let string: any = name.toString();
          let removeSpecialCharacters = string.replace(
            /[&\/\\#^+()$~%.'":*?<>{}!@]/g,
            ""
          );
          let result: any = removeSpecialCharacters.replaceAll("  ", "-");
          let finalString: any = result.replaceAll(" ", "-");
          url = `${entity.dm_directoryChildren[0].id}-${finalString}.html`;
          return (
            <div className="w-1/2 storelocation-category md:w-1/3 lg:w-1/4 px-4">
              <Link key={entity.slug} href={"/" + url} className="hover:text-red" rel="noopener noreferrer" eventName={`LocationName`}>
                {entity.name} ({entity.dm_directoryChildrenCount})
              </Link>
            </div>
          );
        }
      } 
      else {
        return (
          <div className="w-1/2 storelocation-category md:w-1/3 lg:w-1/4 px-4">
            <Link
              key={entity.slug}
              href={entity.slug + ".html"}
              className="hover:text-red"
              rel="noopener noreferrer" eventName={`name`}
            >
              {entity.name} ({entity.dm_directoryChildrenCount})
            </Link>
          </div>
        );
      }
    });
    let templateData = { document: document, __meta: __meta };
    let breadcrumbScheme: any = [];
  let currentIndex: any = 0;
  dm_directoryParents &&
    dm_directoryParents.map((i: any, index: any) => {
      currentIndex = index;
      if (index != 0) {
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id": `${stagingBaseurl}${i.slug}.html`,
            name: i.name,
          },
        });
      }
    });
  breadcrumbScheme.push({
    "@type": "ListItem",
    position: currentIndex + 1,
    item: {
      "@id": `${stagingBaseurl}${dm_directoryParents[1].slug}/${document.slug.toString()}.html`,
      name: document.name,
    },
  });
  return (
    <>
     {/* <Header></Header>
      */}
       <JsonLd<Organization>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Vodafone UK",
          "url": "https://www.vodafone.co.uk/",
          "logo": favicon,
          "sameAs": [
            "https://www.twitter.com/VodafoneUK",
            "https://www.facebook.com/vodafoneUK"
          ],
        }}
      />

      <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbScheme,
        }}
      />
      <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging}
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        <AnalyticsScopeProvider name={""}>
        <Header _site={_site}/>
        <Banner/>
      {/* <Header personal={_site.c_personal} bussiness={_site.c_business} findAStore={_site.c_findAStore} networkStatusChecker={_site.c_networkStatusChecker}></Header> */}
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
        Name={document.dm_directoryParents[1].name}
        TagLine={""}
        BackgroundImage={bannerImage}
        CtaButton={""}
        text={name}
        template={"state"}
      /> */}

      <h1 className="sec_heading mt-12" style={{ textAlign: "center" }}>
        Cities in {name}, {document.dm_directoryParents[1].name}{" "}
      </h1>
      <div className="directory-country nearby-sec">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-[15px]">
            <div className="w-full text-center"></div>
            {childrenDivs}
          </div>
        </div>
      </div>
     {/* <Footer></Footer> */}
     {/* <Footer midfooter={_site.c_midfooter} buyingonline={_site.c_buyingOnline} buyingonlineCTAs={_site.c_buyingOnlinecta} latestPhone={_site.c_latestPhones} latestPhonesCTAs={_site.c_latestPhonescta}
     helpSupport={_site.c_helpSupport} helpSupportcta={_site.c_helpSupportcta} vodafoneUK={_site.c_vodafoneUK} vodafoneUKCta={_site.c_vodafoneUKCta} c_cPIChanges={_site.c_cPIChanges}
     c_cPIChangesDescription1={_site.c_cPIChangesDescription1} vodafoneDetails={_site.c_vodafoneDetails}
     ></Footer> */}
     <Footer links={_site}/>
     </AnalyticsScopeProvider>
      </AnalyticsProvider>
      {/* <Footer
        data={c_globalData[0].c_footerLinks}
        address={c_globalData[0].address}
        c_companyrn={c_globalData[0].c_companyrn}
        c_phoneNumber={c_globalData[0].c_phoneNumber}
        facebookPageUrl={c_globalData[0].facebookPageUrl}
        instagramHandle={c_globalData[0].instagramHandle}
        twitterHandle={c_globalData[0].twitterHandle}
        c_tikTok={c_globalData[0].c_tikTok}
      /> */}
    </>
  );
};

export default State;
