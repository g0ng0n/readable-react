
const initialState = {
    categories: [
        {
            name: 'react',
            path: 'react'
        },
        {
            name: 'redux',
            path: 'redux'
        },
        {
            name: 'udacity',
            path: 'udacity'
        }
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
            return Object.assign({}, state, {
                categories: action.category
            });
        default:
            return state;
    }
}