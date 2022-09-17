import React, { useState } from "react";
import { Block } from "baseui/block";

import CityInput from "../components/CityInput";
import Logo from "../components/Logo";
import Submit from "../components/Submit";
import { styled } from "baseui";

const Layout = styled(Block, {});

export default function Index() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [data, setData] = useState(null);

  console.log({ recievedData: data });

  const onCitySelected = async (lat, lng) => {
    // Call the API
    setLat(lat);
    setLng(lng);
  };

  return (
    <Layout>
      <Logo />
      <CityInput onCitySelected={onCitySelected} />
      <Submit lat={lat} lng={lng} onComplete={setData} />
      <hr />
    </Layout>
  );
}
