import React, { useEffect, useState } from 'react';
import { get } from '../../utils/makeRequests';
import { Grid } from '@mui/material';
import './homepage.css';
import { Products } from './Products';
import { Filters } from './Filters';

export const Homepage = () => {

  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function getApiData() {
      try {
        const apiData = await get('/products');
        const { data = {}} = apiData || {};
        const { products = []} = data || {};
        setProducts(products);
        setAllProducts(products);
        const allBrands = products.map(product => {
          return {
            brand: product.brand,
            isSelected: false,
        }
      });
      setBrands(allBrands);

      } catch(err) {
        alert("Something Went Wrong! Please Refresh");
      }
    }
    getApiData();
  }, []);

  const onSelect = (index) => {
    const filteredBrands = [...brands];
    filteredBrands[index].isSelected = !brands[index].isSelected;
    setBrands(filteredBrands);
  }

  useEffect(() => {
    // For filtering products based on brands
    const selectedBrands = brands.filter(brand => brand.isSelected).map(brand => brand.brand);
    if (!selectedBrands.length > 0) {
      setProducts(allProducts);
      return;
    }
    const selectedProducts = allProducts.filter(product => selectedBrands.includes(product.brand));
    setProducts(selectedProducts);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brands]);

  return (
    <div>
      {
        products.length === 0 ? (
          <div>
            Loading....
            </div>
        ) : (
         <>
         <Grid container spacing={5} className="container">
           <Grid item sm={0} md={2} lg={2}>
           <Filters brands={brands} onSelect={onSelect} />
           </Grid>
           <Grid item sm={12} md={10} lg={10}>
             <Products products={products} />
           </Grid>
         </Grid>
         </>
        )
      }
      
    </div>
  )
}
