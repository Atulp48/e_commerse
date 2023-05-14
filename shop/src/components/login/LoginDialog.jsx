import { Dialog, Box, TextField, Button, Typography, styled } from '@mui/material';
import { useState, useContext } from 'react';
import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';


const Component = styled(Box)`
    height: 85vh;
    width: 100vh;
    padding: 0;
    padding-top: 0;
`;
const Image = styled(Box)`
    background: #FB9797 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 25%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 18px;
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    justify-content:center;
    & > div, & > button, & > p {
        margin-top: 15px;
    }
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const loginInitialValues = {
    username: '',
    password: ''
}


const LoginDialog = ({ open, setOpen }) => {
    const [account, toggleAccount] = useState(accountInitialValues.login)
    const [signup, SetSignup] = useState(signupInitialValues);
    const { setAccount } = useContext(DataContext);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);


    const handleclose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup)
    }

    const onInputChange = (e) => {
        SetSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup)

    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleclose();
        setAccount(signup.firstname);

    }
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        console.log(response);
        if (response.status === 200) {
            handleclose();
            setAccount(response.data.data.firstname);
        }
        else {
            setError(true);
        }
    }

    return (
        <Dialog open={open} onClose={handleclose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{ marginTop: 10 }}>{account.subHeading}</Typography>
                    </Image>
                    {account.view === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label="enter Username" />

                            { error && <Error>Please enter valid username/password</Error> }

                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label="enter password" />

                            <Text>I have read carefully your policy</Text>
                            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <CreateAccount onClick={() => toggleSignup()}>new user sign up</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label="enter  first name" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label="enter last name" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label="enter username" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label="enter email" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="enter password" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label="enter phone" />
                            <LoginButton onClick={() => signupUser()} >submit</LoginButton>
                        </Wrapper>
                    }

                </Box>
            </Component>
        </Dialog>)
}
export default LoginDialog;