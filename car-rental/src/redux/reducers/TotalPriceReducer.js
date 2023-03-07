


export const TotalPriceReducer = (preState = {
    totalDay: 1,
    totalPrice: 0,
    totalAllPrice: 0,

}, action) => {
    let { type } = action
    let newState = { ...preState }

    switch (type) {
        case "gettotalDay":
            let { totalDay } = action
            newState.totalDay = totalDay
            return newState


        case "gettotalPrice":
            let { dayPrice } = action
            newState.totalPrice = dayPrice * newState.totalDay
            return newState

        case "gettotalAllPrice":
            let { insurancePrice, depositPrice } = action
            // console.log(insurancePrice, depositPrice)
            newState.totalAllPrice = insurancePrice * 1 + depositPrice * 1 + newState.totalPrice * 1
            return newState

        default:
            return preState
    }
}