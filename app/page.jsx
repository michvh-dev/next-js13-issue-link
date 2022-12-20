import * as React from "react";

const GalleryCategoryPage = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return <p>Home</p>;
};

export default GalleryCategoryPage;
