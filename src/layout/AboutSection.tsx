import React from "react";
import withTransition from "../utils/withTransition";
import NavBar from "../components/NavBar";

type AboutSectionProps = {};

const AboutSection = (props: AboutSectionProps) => {
  return (
    <>
      <NavBar theme="dark" />
      <h1>About Section</h1>;
    </>
  );
};

export default withTransition(AboutSection);
