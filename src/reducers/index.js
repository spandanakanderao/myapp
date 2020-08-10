import { combineReducers } from 'redux';
import { SET_DATA, UPDATE_DATA } from '../actions';
 
const initialState = {
    listData : [],
    selectedData: ''
};

function getList(state = initialState, action) {
    switch(action.type) {
        case SET_DATA:
            return {
                ...state,
                getlistData: action.listData
            }
        case UPDATE_DATA:
            let updateData = action.updateData;
            console.log(action);
            let listData = [...state.getlistData];
            listData[updateData.id - 1] = updateData;
            let modifiedData = { ...state, listData };
            console.log('test::::', modifiedData.listData);
            return {
                ...state,
                modifiedData: modifiedData.listData
            }
            default:
                return state;
    }
}

export const listData = state => state.getList.getlistData;
export const updatedData = state => state.getList.modifiedData;

const rootReducer = combineReducers({
    getList,
})

export default rootReducer;