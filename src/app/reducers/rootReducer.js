import { combineReducers } from 'redux';
import resourceReducer from '../../features/resource/resourceReducer';

const rootReducer = combineReducers({
  resources: resourceReducer,
});

export default rootReducer;
