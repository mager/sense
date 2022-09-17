import * as React from "react";
import { Block } from "baseui/block";

import Input from "../components/Input";
import Logo from "../components/Logo";
import Submit from "../components/Submit";
import { styled } from "baseui";

const Layout = styled(Block, {});

export default function Home() {
  return (
    <Layout>
      <Logo />
      <Input />
      <Submit />
    </Layout>
  );
}
