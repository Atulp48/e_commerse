import { Box, Button, styled } from "@mui/material";
import { ShoppingCart } from '@mui/icons-material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAc";
import { useState } from "react";



const LftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px 20px',
    border: 'none',
    width: '80%'
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 25px;
    height: 50px;
    color: #FFF;
`;

const ActionItem = ({ product }) => {

    const nevigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = product;
    const [quantity, setQuantity] = useState(1);

    const addToCartItems = () => {
        dispatch(addToCart(id,quantity))
        nevigate("/cart")
    }
    return (
        <LftContainer>
            <Box style={{ padding: '15px 20px' }}>
                <Image src={product.detailUrl} alt="img" /></Box>
            <StyledButton variant="contained" style={{ marginRight: 15, background: 'skyblue' }}>buy now<ShoppingBagIcon /></StyledButton>
            <StyledButton variant="contained" onClick={addToCartItems} style={{ background: 'skyblue' }}>add to cart <ShoppingCart /></StyledButton>
        </LftContainer>
    )
}
export default ActionItem;