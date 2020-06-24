//import SHOP_DATA from '../../pages/shop/shop.data';
import ShopActionTypes from './shop.types';

const inintialState = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
};

const shopReducer = (state = inintialState, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }

        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }

        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        case ShopActionTypes.UPDATE_COLLECTIONS:
            console.log(state);
            return {
                ...state,
                collections: action.payload
            }
        default: return state;
    }
}

export default shopReducer;