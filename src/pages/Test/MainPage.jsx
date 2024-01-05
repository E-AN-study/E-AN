import React from "react";
import { Helmet } from "react-helmet";
import MainLogo from "../../components/main/MainLogo";
import SortButton from "../../components/main/SortButton";

function MainPage() {
  return (
    <>
      <Helmet>
        <title>E.AN</title>
      </Helmet>
      <MainLogo />
      <SortButton />
    </>
  );
}

export default MainPage;
