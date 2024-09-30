import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Echo-Chat",
  description = "This is the Chat App called Echo-Chat",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
