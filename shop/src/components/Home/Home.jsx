import { Box, styled } from "@mui/material";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions.js";
import Slide from "./Slide";
import MidSlide from './MidSlide';
import MidSection from "./MidSection";


const Component = styled(Box)`
padding:10px;
background:#F2F2F2;
`

const Home = () => {
    const { products } = useSelector(state => state.getProducts);
    console.log(products);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            <Navbar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Great Offers" timer={true} />
                <Slide products={products} title="Best Discount" timer={false} />
                <MidSection/>
                <Slide products={products} title="Grocery" timer={false} />
            </Component>
        </>
    )
}
export default Home;