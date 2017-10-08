
const initialState = {
    categories: [

    ],
    name: 'Manny'
};

export default (state = initialState, action) => {

    switch (action.type){
        case 'ADD_CATEGORY':
            return {
                ...state,
                categories: [...state.categories, action.category],
            };
        case 'REMOVE_NOTE':
            return {
                ...state,
                categories: state.categories.filter(category => category !== action.categoryName),
            };
        case 'GET_CATEGORY':
            return Object.assign({}, state, {
                category: action.category
            });

        case 'GET_CATEGORIES':
            console.log("GET_CATEGORIES " + JSON.stringify(action.data));
        return { ...state,
            categories: action.data.categories
            };
        default:
            return state;
    }
}