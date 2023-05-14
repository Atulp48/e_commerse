import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../constants/data";

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px !important',
    overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))
const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;


const Navbar = () => {
    return (
        <Box style={{ background:'white' }}>
        <Component>{
            navData.map(data => (
                <Box>
                    <img src={data.url} alt="img" style={{ width: 64 }} />
                    <Text>{data.text}</Text>
                </Box>

            ))
        }
        </Component>
        </Box>
    )
}
export default Navbar;