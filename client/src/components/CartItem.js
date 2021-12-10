import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {addToCart, removeFromCart, emptyCart } from '../redux/cartActions'
import {useDispatch} from 'react-redux'
import store from '../redux/store/store'

const CartItem = ({item}) => {
    const dispatch = useDispatch()

    const handleClick = () => {
       store.dispatch(addToCart(item))
        console.log('button clicked')
    }
    const removeItem = (id) => {
        store.dispatch(removeFromCart(id))
         console.log('remove button clicked')
     }

    return (
        <div>
             <Card >
      
      <Typography variant="body2" color="text.secondary">
          {item.name}
    </Typography>
       
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {/* {item.description} */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Price: 
        {item.price}
        
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Quantity: 
        {item.quantity}
        
        </Typography>
        <IconButton >
            <AddShoppingCartIcon />
        </IconButton>
        <IconButton onClick={() => removeItem(item.id)}>
            <AddShoppingCartIcon />
        </IconButton>
      </CardContent>

    
    
    </Card>
            
        </div>
    )
}

export default CartItem
