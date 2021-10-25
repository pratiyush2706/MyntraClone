import React from "react";
import { Checkbox, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Filters = ({ brands, onSelect }) => {
  return (
    <div>
      <Typography variant="h6" className="title">
        FILTERS
      </Typography>

      <Grid>
        <Typography margin='20px 12px' fontWeight='500' fontSize='14px' variant="h6" className="filter">
          BRAND
        </Typography>

        {brands.map((brand, index) => (
          <Box key={`${brand.brand}_${index}`} display='flex' alignItems='center'>
            <Checkbox
              checked={brand.isSelected}
              onChange={() => onSelect(index)}
              inputProps={{ "aria-label": "controlled" }}
              className='checkbox'
            />
            <Typography variant="body2" className='brand'>{brand.brand}</Typography>
          </Box>
        ))}
      </Grid>
    </div>
  );
};
