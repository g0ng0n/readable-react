export const ADD_CATEGORY = 'ADD_RECIPE';
export const REMOVE_CATEGORY= 'REMOVE_FROM_CALENDAR';
export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_CATEGORIES = 'GET_CATEGORIES';

export function addCategory ({ category }) {
    return {
        type: ADD_CATEGORY,
        category
    }
}

export function removeCategory ({ categoryName }){
    return {
        type: REMOVE_CATEGORY,
        categoryName
    }
}

export function getCategory ({ categoryName }){
    return {
        type: GET_CATEGORY,
        categoryName
    }
}

export function getCategories ({categories }){
    return {
        type: GET_CATEGORIES,
        categories
    }
}