import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducers';

const configureStore = (preLoadedState = {}) => {
    return createStore(rootReducer, preLoadedState);
};

export default configureStore