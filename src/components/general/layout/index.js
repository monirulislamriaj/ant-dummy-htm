import Head from "next/head";

import NavBar from "../navbar";
import Footer from "../footer";
import PopNotification from "../pop-notification";

const Layout = ({ children, title }) => {
  return (
    <div className="container">
      <Head>
        <title>{title || "BDTICKETS - The best online ticketing portal"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="/bootstrap/bootstrap-grid.min.css" />
    </Head>
      {/* <PopNotification
        text={
          "Bangladesh Jamaat-e-Islami calls countrywide hartal. All tickes are prospond"
        }
        showMoreButton={true}
      /> */}
      {/* <NavBar /> */}

      <main>{children}</main>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
