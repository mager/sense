import * as React from "react";

import { FormControl } from "baseui/form-control";
import { Input as Component } from "baseui/input";

const Input = () => {
  return (
    <FormControl label={() => "Enter your city"}>
      <Component />
    </FormControl>
  );
};

export default Input;
