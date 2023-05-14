import { Typography, Box,styled,Table, TableBody, TableRow, TableCell} from "@mui/material";
import { LocalOffer } from "@mui/icons-material";

const SmallTxt = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`
const StyledLof = styled(LocalOffer)`
    margin-right: 10px;
    color:skyblue;
    font-size: 20px;
`;
const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border:none;
    }
`

const ProductDetail = ({ product }) => {
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
            </Typography>
            <Typography>
                <Box style={{ fontSize: 24 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box style={{ color: '#388E3C' }}>{product.price.discount} off</Box>
            </Typography>
            <Typography>available offeres</Typography>
            <SmallTxt>

           
            <Typography><StyledLof/>get upto 5% off on  axis bank credit card</Typography>
            <Typography><StyledLof/>get upto  10% off on  first purchage</Typography>
            <Typography><StyledLof/>get upto 20% off on emi service</Typography>
            <Typography><StyledLof/>5 rupees cashback on  buy two items</Typography>
            <Typography><StyledLof/> pay with upi and gain benifit</Typography>
            </SmallTxt>

            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹23</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>Rajan Electronics Limited</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>customer best choice</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>

        </>

    )
}
export default ProductDetail;