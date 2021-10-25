import { Grid } from "@mui/material";
import React from "react";
import { RenderProduct } from "../../../components/RenderProduct";
import './products.css';

export const Products = ({ products }) => {
  return (
    <Grid container spacing={8}>
      {products.map((product) => (
        <RenderProduct key={product.productId} product={product} />
      ))}
    </Grid>
  );
};
