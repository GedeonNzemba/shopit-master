import axios from 'axios';


import {
    ALL_PRODUCTS_REQUEST,
    ALL_PUREBRED_PRODUCTS_REQUEST,
    ALL_PUREBRED_PRODUCTS_SUCCESS,
    ALL_PUREBRED_PRODUCTS_FAIL,

    ALL_POULTRY_PRODUCTS_REQUEST,
    ALL_POULTRY_PRODUCTS_SUCCESS,
    ALL_POULTRY_PRODUCTS_FAIL,

    ALL_FRESH_EGGS_PRODUCTS_REQUEST,
    ALL_FRESH_EGGS_PRODUCTS_SUCCESS,
    ALL_FRESH_EGGS_PRODUCTS_FAIL,

    ALL_MAMMALS_PRODUCTS_REQUEST,
    ALL_MAMMALS_PRODUCTS_SUCCESS,
    ALL_MAMMALS_PRODUCTS_FAIL,

    ALL_LIVESTOCK_PRODUCTS_REQUEST,
    ALL_LIVESTOCK_PRODUCTS_SUCCESS,
    ALL_LIVESTOCK_PRODUCTS_FAIL,

    ALL_OTHERS_PRODUCTS_REQUEST,
    ALL_OTHERS_PRODUCTS_SUCCESS,
    ALL_OTHERS_PRODUCTS_FAIL,

    ALL_PIGSTY_PRODUCTS_REQUEST,
    ALL_PIGSTY_PRODUCTS_SUCCESS,
    ALL_PIGSTY_PRODUCTS_FAIL,

    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    ADMIN_PRODUCTS_REQUEST,
    ADMIN_PRODUCTS_SUCCESS,
    ADMIN_PRODUCTS_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_RESET,
    DELETE_REVIEW_FAIL,
    CLEAR_ERRORS

} from '../constants/productConstants'

//category
// export const getProductsCategoryFR = (keyword = '', currentPage = 1, price,  name, rating = 0, size, color) => async (dispatch) => {
//     let pageTitle = document.title;
//     const livestock = 'Food | Livestock - Locataire';
//     const poultry = 'Poultry - Locataire';
//     const pigsty = 'Pigsty - Locataire';
//     const mammals = 'Mammals - Locataire';
//     const park = 'Park - Locataire';
//     const eggs = 'Fresh Eggs - Locataire';


//     try {

//         dispatch({ type: ALL_PRODUCTS_REQUEST })

//         let link = `/api/v1/products?${pageTitle === livestock ? 'category=Livestock' : pageTitle === poultry ? 'category=Poultry' : pageTitle === pigsty ? 'category=Pigsty' : pageTitle === mammals ? 'category=Mammals' : pageTitle === park ? 'category=Park' : pageTitle === eggs ? 'category=Eggs' : null}&keyword=${keyword}&page=${currentPage}${pageTitle === livestock ? '&' : '&'}ratings[gte]=${rating}`

       
//         if (name) {
//             link = `/api/v1/products?${pageTitle === livestock ? 'category=Livestock' : pageTitle === poultry ? 'category=Poultry' : pageTitle === pigsty ? 'category=Pigsty' : pageTitle === mammals ? 'category=Mammals' : pageTitle === park ? 'category=Park' : pageTitle === eggs ? 'category=Eggs' : null}&keyword=${keyword}&page=${currentPage}${pageTitle === livestock ? '&' : '&'}french.name=${name}&ratings[gte]=${rating}`
//         }


//         if (size) {
//             link = `/api/v1/products?${pageTitle === livestock ? 'category=Livestock' : pageTitle === poultry ? 'category=Poultry' : pageTitle === pigsty ? 'category=Pigsty' : pageTitle === mammals ? 'category=Mammals' : pageTitle === park ? 'category=Park' : pageTitle === eggs ? 'category=Eggs' : null}&keyword=${keyword}&page=${currentPage}${pageTitle === livestock ? '&' : '&'}ratings[gte]=${rating}&size=${size}`
//         }

//         if (color) {
//             link = `/api/v1/products?${pageTitle === livestock ? 'category=Livestock' : pageTitle === poultry ? 'category=Poultry' : pageTitle === pigsty ? 'category=Pigsty' : pageTitle === mammals ? 'category=Mammals' : pageTitle === park ? 'category=Park' : pageTitle === eggs ? 'category=Eggs' : null}&keyword=${keyword}&page=${currentPage}${pageTitle === livestock ? '&' : '&'}ratings[gte]=${rating}&color=${color}`
//         }

//         const { data } = await axios.get(link)

//         dispatch({
//             type: ALL_PRODUCTS_SUCCESS,
//             payload: data
//         })

//     } catch (error) {
//         dispatch({
//             type: ALL_PRODUCTS_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }
// export const getProductsCategory = (keyword = '', currentPage = 1, price,  name, rating = 0, size, color) => async (dispatch) => {
//     let pageTitle = document.title;
//     const livestock = 'Food | Livestock - Locataire';
//     const poultry = 'Poultry - Locataire';
//     const pigsty = 'Pigsty - Locataire';
//     const mammals = 'Mammals - Locataire';
//     const park = 'Park - Locataire';
//     const eggs = 'Fresh Eggs - Locataire';


//     try {

//         dispatch({ type: ALL_PRODUCTS_REQUEST })

//         let link = `/api/v1/products?${pageTitle === livestock ? 'category=Livestock' : pageTitle === poultry ? 'category=Poultry' : pageTitle === pigsty ? 'category=Pigsty' : pageTitle === mammals ? 'category=Mammals' : pageTitle === park ? 'category=Park' : pageTitle === eggs ? 'category=Eggs' : null}&keyword=${keyword}&page=${currentPage}${pageTitle === livestock ? '&' : `&price[lte]=${price[0]}&price[gte]=${price[1]}&`}ratings[gte]=${rating}`

       
//         if (name) {
//             link = `/api/v1/products?${pageTitle === livestock ? 'category=Livestock' : pageTitle === poultry ? 'category=Poultry' : pageTitle === pigsty ? 'category=Pigsty' : pageTitle === mammals ? 'category=Mammals' : pageTitle === park ? 'category=Park' : pageTitle === eggs ? 'category=Eggs' : null}&keyword=${keyword}&page=${currentPage}${pageTitle === livestock ? '&' : `&price[lte]=${price[1]}&price[gte]=${price[0]}&`}name=${name}&ratings[gte]=${rating}`
//         }


//         if (size) {
//             link = `/api/v1/products?${pageTitle === livestock ? 'category=Livestock' : pageTitle === poultry ? 'category=Poultry' : pageTitle === pigsty ? 'category=Pigsty' : pageTitle === mammals ? 'category=Mammals' : pageTitle === park ? 'category=Park' : pageTitle === eggs ? 'category=Eggs' : null}&keyword=${keyword}&page=${currentPage}${pageTitle === livestock ? '&' : `&price[lte]=${price[1]}&price[gte]=${price[0]}&`}ratings[gte]=${rating}&size=${size}`
//         }

//         if (color) {
//             link = `/api/v1/products?${pageTitle === livestock ? 'category=Livestock' : pageTitle === poultry ? 'category=Poultry' : pageTitle === pigsty ? 'category=Pigsty' : pageTitle === mammals ? 'category=Mammals' : pageTitle === park ? 'category=Park' : pageTitle === eggs ? 'category=Eggs' : null}&keyword=${keyword}&page=${currentPage}${pageTitle === livestock ? '&' : `&price[lte]=${price[1]}&price[gte]=${price[0]}&`}ratings[gte]=${rating}&color=${color}`
//         }

//         const { data } = await axios.get(link)

//         dispatch({
//             type: ALL_PRODUCTS_SUCCESS,
//             payload: data
//         })

//     } catch (error) {
//         dispatch({
//             type: ALL_PRODUCTS_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }

export const getRandomProducts = (keyword = '', currentPage = 1, price, name, rating = 0, size, color) => async (dispatch) => {

    try {

        dispatch({ type: ALL_PRODUCTS_REQUEST })

        let link = `/api/v1/sales/products`

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getProducts = (keyword = '', currentPage = 1, price, name, rating = 0, size, color) => async (dispatch) => {

    try {

        dispatch({ type: ALL_PRODUCTS_REQUEST })

        let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}`

        if (name) {
            link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&category=${name}&ratings[gte]=${rating}`
        }


        if (size) {
            link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&size=${size}`
        }

        if (color) {
            link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&color=${color}`
        }

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getPurebredFR = (keyword = '', currentPage = 1, price, name, rating = 0, size, color) => async (dispatch) => {

    try {

        dispatch({ type: ALL_PUREBRED_PRODUCTS_REQUEST })

        let link = `/api/v1/category/purebred?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}`

        if (name) {
            link = `/api/v1/category/purebred?keyword=${keyword}&page=${currentPage}&french.name=${name}&ratings[gte]=${rating}`
        }

        if (size) {
            link = `/api/v1/category/purebred?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&size=${size}`
        }

        if (color) {
            link = `/api/v1/category/purebred?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&color=${color}`
        }
        

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_PUREBRED_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PUREBRED_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

// ############################################################################################################
export const getProductsCategory_PigstyFR = (keyword = '', currentPage = 1, price, name, rating = 0, size, color) => async (dispatch) => {

    try {

        dispatch({ type: ALL_PIGSTY_PRODUCTS_REQUEST })

        let link = `/api/v1/category/pigsty?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`

        if (name) {
            link = `/api/v1/category/pigsty?keyword=${keyword}&page=${currentPage}&french.name=${name}&ratings[gte]=${rating}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }

        if (size) {
            link = `/api/v1/category/pigsty?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.size=${size}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }

        if (color) {
            link = `/api/v1/category/pigsty?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.color=${color}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }
        

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_PIGSTY_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PIGSTY_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getProductsCategory_Pigsty = (keyword = '', currentPage = 1, price, name, rating = 0, size, color) => async (dispatch) => {

    try {

        dispatch({ type: ALL_PIGSTY_PRODUCTS_REQUEST })

        let link = `/api/v1/category/pigsty?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&price[lte]=${price[1]}&price[gte]=${price[0]}`

        if (name) {
            link = `/api/v1/category/pigsty?keyword=${keyword}&page=${currentPage}&name=${name}&ratings[gte]=${rating}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }

        if (size) {
            link = `/api/v1/category/pigsty?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&size=${size}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }

        if (color) {
            link = `/api/v1/category/pigsty?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&color=${color}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }
        

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_PIGSTY_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PIGSTY_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getProductsCategory_OthersFR = (keyword = '', currentPage = 1, price, name, rating = 0, size, color) => async (dispatch) => {

    try {

        dispatch({ type: ALL_OTHERS_PRODUCTS_REQUEST })

        let link = `/api/v1/category/parkanimals?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`

        if (name) {
            link = `/api/v1/category/parkanimals?keyword=${keyword}&page=${currentPage}&french.name=${name}&ratings[gte]=${rating}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }

        if (size) {
            link = `/api/v1/category/parkanimals?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.size=${size}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }

        if (color) {
            link = `/api/v1/category/parkanimals?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.color=${color}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }
        

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_OTHERS_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_OTHERS_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getProductsCategory_Others = (keyword = '', currentPage = 1, price, name, rating = 0, size, color) => async (dispatch) => {

    try {

        dispatch({ type: ALL_OTHERS_PRODUCTS_REQUEST })

        let link = `/api/v1/category/parkanimals?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&price[lte]=${price[1]}&price[gte]=${price[0]}`

        if (name) {
            link = `/api/v1/category/parkanimals?keyword=${keyword}&page=${currentPage}&name=${name}&ratings[gte]=${rating}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }

        if (size) {
            link = `/api/v1/category/parkanimals?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&size=${size}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }

        if (color) {
            link = `/api/v1/category/parkanimals?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&color=${color}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }
        

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_OTHERS_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_OTHERS_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getProductsCategory_MammalsFR = (keyword = '', currentPage = 1, price, name, rating = 0, size, color) => async (dispatch) => {

    try {

        dispatch({ type: ALL_MAMMALS_PRODUCTS_REQUEST })

        let link = `/api/v1/category/mammals?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`

        if (name) {
            link = `/api/v1/category/mammals?keyword=${keyword}&page=${currentPage}&french.name=${name}&ratings[gte]=${rating}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }

        if (size) {
            link = `/api/v1/category/mammals?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.size=${size}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }

        if (color) {
            link = `/api/v1/category/mammals?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.color=${color}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }
        

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_MAMMALS_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_MAMMALS_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getProductsCategory_Mammals = (keyword = '', currentPage = 1, price, name, rating = 0, size, color) => async (dispatch) => {

    try {

        dispatch({ type: ALL_MAMMALS_PRODUCTS_REQUEST })

        let link = `/api/v1/category/mammals?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&price[lte]=${price[1]}&price[gte]=${price[0]}`

        if (name) {
            link = `/api/v1/category/mammals?keyword=${keyword}&page=${currentPage}&name=${name}&ratings[gte]=${rating}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }

        if (size) {
            link = `/api/v1/category/mammals?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&size=${size}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }

        if (color) {
            link = `/api/v1/category/mammals?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&color=${color}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }
        

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_MAMMALS_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_MAMMALS_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getProductsCategory_LivestockFR = (keyword = '', currentPage = 1, price, name, rating = 0, size, color) => async (dispatch) => {

    try {

        dispatch({ type: ALL_LIVESTOCK_PRODUCTS_REQUEST })

        let link = `/api/v1/category/livestock?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`

        if (name) {
            link = `/api/v1/category/livestock?keyword=${keyword}&page=${currentPage}&french.name=${name}&ratings[gte]=${rating}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }

        if (size) {
            link = `/api/v1/category/livestock?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.size=${size}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }

        if (color) {
            link = `/api/v1/category/livestock?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.color=${color}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }
        

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_LIVESTOCK_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_LIVESTOCK_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getProductsCategory_Livestock = (keyword = '', currentPage = 1, price, name, rating = 0, size, color) => async (dispatch) => {

    try {

        dispatch({ type: ALL_LIVESTOCK_PRODUCTS_REQUEST })

        let link = `/api/v1/category/livestock?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&price[lte]=${price[1]}&price[gte]=${price[0]}`

        if (name) {
            link = `/api/v1/category/livestock?keyword=${keyword}&page=${currentPage}&name=${name}&ratings[gte]=${rating}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }

        if (size) {
            link = `/api/v1/category/livestock?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&size=${size}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }

        if (color) {
            link = `/api/v1/category/livestock?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&color=${color}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }
        

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_LIVESTOCK_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_LIVESTOCK_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getProductsCategory_EggsFR = (keyword = '', currentPage = 1, price, name, rating = 0, size, color) => async (dispatch) => {

    try {

        dispatch({ type: ALL_FRESH_EGGS_PRODUCTS_REQUEST })

        let link = `/api/v1/category/fresheggs?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`

        if (name) {
            link = `/api/v1/category/fresheggs?keyword=${keyword}&page=${currentPage}&french.name=${name}&ratings[gte]=${rating}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }

        if (size) {
            link = `/api/v1/category/fresheggs?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.size=${size}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }

        if (color) {
            link = `/api/v1/category/fresheggs?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.color=${color}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }
        

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_FRESH_EGGS_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_FRESH_EGGS_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getProductsCategory_Eggs = (keyword = '', currentPage = 1, price, name, rating = 0, size, color) => async (dispatch) => {

    try {

        dispatch({ type: ALL_FRESH_EGGS_PRODUCTS_REQUEST })

        let link = `/api/v1/category/fresheggs?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&price[lte]=${price[1]}&price[gte]=${price[0]}`

        if (name) {
            link = `/api/v1/category/fresheggs?keyword=${keyword}&page=${currentPage}&name=${name}&ratings[gte]=${rating}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }

        if (size) {
            link = `/api/v1/category/fresheggs?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&size=${size}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }

        if (color) {
            link = `/api/v1/category/fresheggs?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&color=${color}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }
        

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_FRESH_EGGS_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_FRESH_EGGS_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getProductsCategory_PoultryFR = (keyword = '', currentPage = 1, price, name, rating = 0, size, color) => async (dispatch) => {

    try {

        dispatch({ type: ALL_POULTRY_PRODUCTS_REQUEST })

        let link = `/api/v1/category/poultry?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`

        if (name) {
            link = `/api/v1/category/poultry?keyword=${keyword}&page=${currentPage}&french.name=${name}&ratings[gte]=${rating}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }

        if (size) {
            link = `/api/v1/category/poultry?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.size=${size}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }

        if (color) {
            link = `/api/v1/category/poultry?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&french.color=${color}&french.price[lte]=${price[1]}&french.price[gte]=${price[0]}`
        }
        

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_POULTRY_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_POULTRY_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getProductsCategory_Poultry = (keyword = '', currentPage = 1, price, name, rating = 0, size, color) => async (dispatch) => {

    try {

        dispatch({ type: ALL_POULTRY_PRODUCTS_REQUEST })

        let link = `/api/v1/category/poultry?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&price[lte]=${price[1]}&price[gte]=${price[0]}`

        if (name) {
            link = `/api/v1/category/poultry?keyword=${keyword}&page=${currentPage}&name=${name}&ratings[gte]=${rating}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }

        if (size) {
            link = `/api/v1/category/poultry?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&size=${size}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }

        if (color) {
            link = `/api/v1/category/poultry?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&color=${color}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        }
        

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_POULTRY_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_POULTRY_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
// ############################################################################################################

export const getPurebred = (keyword = '', currentPage = 1, price, name, rating = 0, size, color) => async (dispatch) => {

    try {

        dispatch({ type: ALL_PUREBRED_PRODUCTS_REQUEST })

        let link = `/api/v1/category/purebred?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}`

        if (name) {
            link = `/api/v1/category/purebred?keyword=${keyword}&page=${currentPage}&name=${name}&ratings[gte]=${rating}`
        }

        if (size) {
            link = `/api/v1/category/purebred?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&size=${size}`
        }

        if (color) {
            link = `/api/v1/category/purebred?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}&color=${color}`
        }
        

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_PUREBRED_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PUREBRED_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}


export const newProduct = (productData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_PRODUCT_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/admin/product/new`, productData, config)

        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete product (Admin)
export const deleteProduct = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_PRODUCT_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/product/${id}`)

        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update Product (ADMIN)
export const updateProduct = (id, productData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_PRODUCT_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/admin/product/${id}`, productData, config)

        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/product/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newReview = (reviewData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_REVIEW_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/review`, reviewData, config)

        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.response.data.message
        })
    }
}


export const getAdminProducts = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_PRODUCTS_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/products`)

        dispatch({
            type: ADMIN_PRODUCTS_SUCCESS,
            payload: data.products
        })

    } catch (error) {

        dispatch({
            type: ADMIN_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}



// Get product reviews
export const getProductReviews = (id) => async (dispatch) => {
    try {

        dispatch({ type: GET_REVIEWS_REQUEST })

        const { data } = await axios.get(`/api/v1/reviews?id=${id}`)

        dispatch({
            type: GET_REVIEWS_SUCCESS,
            payload: data.reviews
        })

    } catch (error) {

        dispatch({
            type: GET_REVIEWS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete product review
export const deleteReview = (id, productId) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_REVIEW_REQUEST })

        const { data } = await axios.delete(`/api/v1/reviews?id=${id}&productId=${productId}`)

        dispatch({
            type: DELETE_REVIEW_SUCCESS,
            payload: data.success
        })

    } catch (error) {

        console.log(error.response);

        dispatch({
            type: DELETE_REVIEW_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}