import React from "react";

import Team from "../../container/Team/Team";
import Basic from "../../components/Basic/Basic";
import Table from "../../container/Table/Table";
import Footer from './../../container/Footer/Footer';
import Happy from './../../container/Happy/Happy';
import Customers from './../../container/Customers/Customers';
import Swiper from "swiper";

function MenuPage() {
  return (
    <div className="aboutPage bg_black">
      <Basic pageName={"Menu"} url={"main"} />
      <Swiper />
      {/* <Team />
      <Happy />
      <Customers />
      <Table />
      <Footer />  */}
    </div>
  );
}

export default MenuPage;
