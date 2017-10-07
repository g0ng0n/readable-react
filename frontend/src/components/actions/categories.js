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

export function removeCategory ({ categoryId }){
    return {
        type: REMOVE_CATEGORY,
        category
    }
}

export function getCategory ({ categoryId }){
    return {
        type: GET_CATEGORY,
        categoryId
    }
}

export function getCategories ({ }){
    return {
        type: GET_CATEGORIES
    }
}