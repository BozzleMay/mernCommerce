import React from 'react'
import {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Product from './Product.js'
import Container from '@mui/material/Container';

const Products = () => {
    const [productData, setProductData] = useState([])

    useEffect(() => {
      apiGet()
      return () => {
       
      }
    }, [])
  
    const apiGet = () => {
      fetch("http://localhost:8080/products")
        .then(async response => {
        try {
        const data = await response.json()
        console.log(data)
        setProductData(data)
        } catch (error) {
          console.error(error)
        }
      }
        )
    }
    return (
        <Container>
               
        
        <Grid container justifyContent='center' spacing={4}>
            {productData && productData.map((product) => (
                <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
                   <Product product={product} />
                   
                    </Grid>
                    ))}


        </Grid>
      
            
        </Container>
    )
}

export default Products
