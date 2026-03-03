import React from "react";

const Product = async ({ params }: { params: { product: string } }) => {
  const { product } = await params;
  return <div>{product}</div>;
};

export default Product;
