import { createStore } from "vuex"
import product from "./module/product"
const store = createStore({
    modules: {
        product: product
    }
})

export default store