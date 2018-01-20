import { combineReducers} from 'redux';
import UpdateData from './updateData';

const rootReducer = combineReducers({
    tickerData : UpdateData
});


export default rootReducer;