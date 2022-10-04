import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {formData, pageListReducer} from '../reducer';
const enhancer = compose(applyMiddleware(thunk, logger));
const rootReducer = combineReducers({
  pageList: pageListReducer,
  formdata: formData,
});
const configureStore = () => {
  return createStore(rootReducer, enhancer);
};
export default configureStore;
