import * as React from "react";
import { Button, SIZE } from "baseui/button";
import { styled } from "baseui";

const SubmitButton = styled(Button, {
  width: "100%",
});

const Submit = ({ lat, lng, onComplete }) => {
  console.log("we are in the submit button component");
  console.log(lat);
  console.log(lng);
  return (
    <SubmitButton
      size={SIZE.large}
      onClick={async () => {
        try {
          const response = await fetch(`/api/forecast?lat=${lat}&lng=${lng}`, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          onComplete(data);
        } catch (err) {
          console.log(err);
        }
      }}
    >
      Submit
    </SubmitButton>
  );
};

export default Submit;
