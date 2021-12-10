import React from 'react'
import { useSelector } from 'react-redux'
import store from '../redux/store/store'
import Grid from '@mui/material/Grid';
import CartItem from './CartItem.js'
import Container from '@mui/material/Container';
import { emptyCart } from '../redux/cartActions'
import {useDispatch} from 'react-redux'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'




const selectCart = state => state.cart

const Cart = () => {
    const dispatch = useDispatch()
    const handleEmptyCart = () => {
        store.dispatch(emptyCart())
    }

   const cart = useSelector(selectCart)
    console.log(cart)

    const itemsCount = cart.products.reduce((count, {quantity}) => count + quantity, 0) 
    const cartTotalAmount = cart.products.reduce((totalAmount, {price,quantity}) => totalAmount + quantity * price, 0)
    console.log(cartTotalAmount)
    return (
        <Container>
               
        
        <Grid container justifyContent='center' spacing={4}>
            {cart.products && cart.products.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                   <CartItem item={item} />
                   
                    </Grid>
                    ))}


        </Grid>
        <div>
            <Typography variant='h4'>
                Subtotal: £{cartTotalAmount}
            </Typography>
            <div>
                <Button  size='large' variant='contained' type='button' color='secondary' onClick={() => handleEmptyCart()}>Empty Cart</Button>
                <Button  component={Link} to='checkout' size='large' variant='contained' type='button' color='primary'>Checkout</Button>

            </div>
        </div>
     
        
        </Container>
        
    )
}

export default Cart


