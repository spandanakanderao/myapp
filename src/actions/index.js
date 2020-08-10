export const SET_DATA = 'SET_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';
export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const SET_UPDATE_DATA = 'SET_UPDATE_DATA'

export const onDataSuccess = (listData) => {
    return {
        type: SET_DATA,
        listData
    }
}

export const onDataUpdate = (updateData) => {
    return {
        type: UPDATE_DATA,
        updateData
    }
}

export const fetchData = () => {
    return {
        type: FETCH_USER_DATA
    }
}

export const setUpdateData = () => {
    return {
        type: SET_UPDATE_DATA
    }
}