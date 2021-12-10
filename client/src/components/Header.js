import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux'
import store from '../redux/store/store'
import  ShoppingCart from '@mui/icons-material/ShoppingCart'
import {Link} from 'react-router-dom'


const selectCart = state => state.cart

const Header = () => {
    const cart = useSelector(selectCart)
    const itemsCount = cart.products.reduce((count, {quantity}) => count + quantity, 0) 
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
         
          <Typography component={Link} to='/' variant="h6"  sx={{ flexGrow: 1 }}>
            Bozzles Shop
          </Typography>
          <Button color="inherit">Login</Button>
          <IconButton component={Link} to='/cart' aria-label='show cart times' color='inherit'>
                            <Badge badgeContent={itemsCount} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
            
        </div>
    )
}

export default Header
