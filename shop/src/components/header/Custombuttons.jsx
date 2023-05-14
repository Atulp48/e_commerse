import { Box, Button, Typography, styled,Badge } from "@mui/material";
import LoginDialog from "../login/LoginDialog";
import { useState, useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom"
import {useSelector} from 'react-redux'

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    alignItems: 'center',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: 'black',
        fontSize: 12,
        alignItems: 'center',

        [theme.breakpoints.down('md')]: {
            display: 'block',
            marginTop: 10,
            color: 'black',
        }
    }
}));

const Container= styled(Link)(({ theme }) => ({
   display:'flex',
   textDecoration:'none',
   color:'inherit',
   [theme.breakpoints.down('md')]: {
    display: 'block'
}
}));


const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 400,
    borderRadius: 30,
    padding: '20px 25px',
    height: 20,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));


const CustomButtons = () => {

    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);
    const {cartItems}=useSelector(state=>state.cart); 

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>

            }
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>

            <Container to='/cart' style={{ display: 'flex' }}>
            <Badge badgeContent={cartItems?.length} color="secondary">
                <ShoppingCartIcon />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}
export default CustomButtons;