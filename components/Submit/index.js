import * as React from "react";
import { Button, SIZE } from "baseui/button";
import { styled } from "baseui";

const SubmitButton = styled(Button, {
  width: "100%",
});

const Submit = () => {
  return (
    <SubmitButton size={SIZE.large} onClick={() => alert("click")}>
      Submit
    </SubmitButton>
  );
};

export default Submit;
