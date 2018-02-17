import { combineReducers } from 'redux';
import AuthenticationReducer from './AuthenticationReducer';

const rootReducer = combineReducers({
  authenticated: AuthenticationReducer
});

export default rootReducer;
