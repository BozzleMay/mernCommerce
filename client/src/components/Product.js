import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {addToCart, removeFromCart, emptyCart } from '../redux/cartActions'
import { useDispatch} from 'react-redux'
import store from '../redux/store/store'

const Product = ({product}) => {
 

    const handleClick = () => {
       store.dispatch(addToCart(product))
        console.log('button clicked')
    }


    console.log(product)
    return (
        <div>
             <Card >
      
      <Typography variant="body2" color="text.secondary">
          {product.name}
    </Typography>
       
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.price}
        </Typography>
        <IconButton onClick={() => handleClick(product)}>
            <AddShoppingCartIcon />
        </IconButton>
      </CardContent>

    
    
    </Card>
            
        </div>
    )
}

export default Product
