import { products } from "./constants/data.js"
import product from "./model/product-schema.js"

const DefaulData = async () => {
    try {
        await product.insertMany(products)
        console.log("database  inserted successfully");
    } catch (error) {
        console.log('error while inserting data', error.message)
    }
}
export default DefaulData;