
const initialState = {
    posts : [
        {
            id: '213',
            title: 'sarasa',
            body: 'sasas',
        },
        {
            id: '123123',
            title: 'asdasd',
            body: 'asdasd',
        },
        {
            id: '1sss23123',
            title: 'asdasd',
            body: 'asdasd',
        }
    ],
    name: 'Manny'
}

export default (state = initialState, action) => {

    switch (action.type){
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.body],
            }
        case 'REMOVE_NOTE':
            return {
                ...state,
                notes: state.notes.filter(note => note !== action.body),
            }
        case 'GET_NOTES':
            return {
                ...state
            }
        default:
            return state;
    }
}