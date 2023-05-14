import { AppBar, Toolbar, styled, Box, Typography,Drawer,List,ListItem, IconButton } from '@mui/material';
import Search from './Search';
import CustomButtons from './Custombuttons';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { useState } from 'react';


const StyledHeader = styled(AppBar)`
   background: #8361FF;
    height: 55px;
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;

const SubHeading = styled(Typography)`
    font-size: 6px;
    font-style: italic;
`
const CustombuttonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
})); 


const Header = () => {
    const logoURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbShqey11n-jU8P0ckkAZg6W5_vdDzVmoP4csVEc8MH0PTW4iH5-TJOzsJq4XXW1_wlIA&usqp=CAU'
  
    const [open, setOpen] = useState(false);

  
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const list = () => (
        <Box style={{ width: 200 }} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    )
    
    return (
        <StyledHeader>
            <Toolbar>

                <MenuButton color="inherit" onClick={handleOpen}>
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Component to='/'>
                    <img src={logoURL} alt="logo" style={{ width: 45, borderRadius: 10 }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>shopping
                            <Box component="span" style={{ color: 'yellow' }}>Now</Box>
                        </SubHeading>
                    </Box>
                </Component>
                <Search />
                <CustombuttonWrapper>
                    <CustomButtons />
                </CustombuttonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}
export default Header