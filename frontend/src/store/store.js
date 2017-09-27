import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';


export default function configureStore(initialState) {
    return createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(thunk, reduxImmutableStateInvariant()),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ));
}