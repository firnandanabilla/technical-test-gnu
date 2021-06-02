import {rootType} from '../type'


const initialState = {
    listData: [],
    imageData: false,
    loading: true,
    dataPost: {
        title: "",
        location: "",
        participant: "",
        note: "",
        date: "",
        file: null
    }
}
const crudReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case rootType.GET_DATA_LIST: {
            const {listData} = action.payload;
            return {
                ...state,
                listData,
                loading: false
            }
        }
        case rootType.POST_DATA: {
            const {
                dataPost
            } = action.payload;
            return {
                ...state,
                dataPost,
                loading: false
            }
        }
        default:
            return {...state}
    }
}

export default crudReducer