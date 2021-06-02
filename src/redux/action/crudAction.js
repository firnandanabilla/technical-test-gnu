import {rootType} from '../type'
import axios from "axios";

const url = 'http://localhost:1616/data';

const crudAction = {
    getData: () => async (dispatch) => {
        try {
            const dataFetch = (await axios.get(url)).data;
            console.log('>>>> GET DATA >>>>')
            console.log(dataFetch)
            const payload = {listData: dataFetch};
            dispatch({type: rootType.GET_DATA_LIST, payload});
            // return payload;
        } catch (e) {
            console.log(e);
            const payload = {listData: []};
            dispatch({type: rootType.GET_DATA_LIST, payload});
            // return payload;
        }
    },
    submitData: ({dataPost}) => async (dispatch) => {
        try {
            let variables = {
                // nama: dataItem.nama,
                // email: dataItem.email,
                // noHp: dataItem.noHp,
                title: dataPost.title,
                location: dataPost.location,
                participant: dataPost.participant,
                note: dataPost.note,
                date: dataPost.date,
                file: dataPost.file
            };
            const postData = (await axios.post(url, variables)).data;
            dispatch({type: rootType.POST_DATA});
            console.log('>>>>> POST DATA >>>>>')
            console.log(postData)
            // return {
            //     isError: false,
            //     id: dataTab.id
            // };
        } catch (e) {
            console.log(e);
            return {isError: true, message: e.toString()};
        }
    },

}

export default crudAction;