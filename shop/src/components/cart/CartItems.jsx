import { Box, styled, Typography, Button } from "@mui/material"
import { addEllipsis } from "../../utils/cm-utils";
import ButtonGr from "./ButtonG";
import { removeFromCart } from "../../redux/actions/cartAc";
import { useDispatch } from "react-redux";

const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    border-radius: 10px;
    display: flex;
    background:#fff;
`;
const LeftComponent = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Price = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;
const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
`;

const PrintPrice = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;

const CartItem = ({ item }) => {

    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    return (
        <Component>
            <LeftComponent>
                <img src={item.url} alt="img" style={{ height: 120, width: 120 }} />
                <ButtonGr />
            </LeftComponent>
            <Box style={{ margin: "20px" }}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Rajan electronics limited
                </SmallText>
                <Typography style={{ margin: "20px 0" }}>
                    <Price style={{ fontSize: 24 }}>₹{item.price.cost}</Price>&nbsp;&nbsp;&nbsp;
                    <PrintPrice style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></PrintPrice>&nbsp;&nbsp;&nbsp;
                    <Discount style={{ color: '#388E3C' }}>{item.price.discount} off</Discount>
                </Typography>
                <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
            </Box>
        </Component>
    )
}
export default CartItem