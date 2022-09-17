import * as React from "react";

import Autocomplete from "react-google-autocomplete";

const CityInput = ({ onCitySelected }) => {
  return (
    <Autocomplete
      style={{
        display: "flex",
        width: "100%",
        border: "1px solid red",
        padding: "16px",
        margin: "16px 0",
      }}
      onPlaceSelected={(place) => {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();

        onCitySelected(lat, lng);
      }}
      types={["(cities)"]}
    />
  );
};

export default CityInput;
