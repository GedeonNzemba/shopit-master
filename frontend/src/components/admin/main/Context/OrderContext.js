import {createContext, useContext, useState} from 'react'

export const orderContext = createContext({
    orders: null
})

const ORDER = {order: 3};

export function TotalOrder({children}) {
    const [allOrders, setAllOrder ] = useState(ORDER);
    return  <orderContext.Provider value={{allOrders}}>{children}</orderContext.Provider>
}

export function useOrderContext() {
    const {orders} = useContext(orderContext);

    return {orders};
}