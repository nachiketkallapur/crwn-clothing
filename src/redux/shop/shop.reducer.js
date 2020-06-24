//import SHOP_DATA from '../../pages/shop/shop.data';
import ShopActionTypes from './shop.types';

const inintialState = {
    collections: null
};

const shopReducer = (state = inintialState, action) =>{
    switch(action.type) {
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