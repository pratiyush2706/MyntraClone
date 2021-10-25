import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import "./renderProduct.css";

export const RenderProduct = ({ product }) => {
  return (
    <Grid
      key={product.productId}
      item
      sm={12}
      md={4}
      lg={2}
      className="productContainer"
    >
      <img
        src={product.images[0].src}
        alt={product.additionalInfo}
        className="image"
      />
      <Typography variant="h6" className="brand">
        {product.brand}
      </Typography>
      <Typography variant="body1" className="additionalInfo">
        {product.additionalInfo}
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="body1" className="discountedPrice">
          {product.price}
        </Typography>
        <Typography variant="body1" className="strike">
          {product.mrp}
        </Typography>
        <Typography variant="body1" className="discountedPercentage">
          ({product.effectiveDiscountPercentageAfterTax}% off)
        </Typography>
      </Box>
    </Grid>
  );
};
