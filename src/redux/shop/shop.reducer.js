import SHOP_DATA from '../../pages/shop/shop.data';

const inintialState = {
    collections: SHOP_DATA
};

const shopReducer = (state = inintialState, action) =>{
    switch(action.type) {
        default: return state;
    }
}

export default shopReducer;