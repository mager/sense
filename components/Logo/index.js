import * as React from "react";
import { Block } from "baseui/block";
import { HeadingXXLarge } from "baseui/typography";
import { styled } from "baseui";

const Layout = styled(Block, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const LogoText = styled(HeadingXXLarge, ({ $theme }) => ({
  fontFamily: "Pacifico",
  fontSize: $theme.sizing.scale1600,
}));

const Logo = () => {
  return (
    <Layout>
      <LogoText>sense</LogoText>
    </Layout>
  );
};

export default Logo;
