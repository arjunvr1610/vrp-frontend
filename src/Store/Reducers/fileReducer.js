import axios from 'axios';

const initialState = {
    fileData: {},
    fileUploadStatus: false
}

const reducer = (state = initialState, action) => {
    if (action.type === 'UPLOAD') {
        axios({
            url: '/some/uri',
            method: 'POST',
            headers: {
                authorization: 'your token'
            },
            data: action.payload
        }).then((res) => {
            // response handling
            // return ({
            //     fileData: {},
            //     fileUploadStatus: true
            // });
        }, (err) => {
            console.log(err)
            // return ({
            //     fileData: {},
            //     fileUploadStatus: true
            // });
        })
        return ({
            fileData: {},
            fileUploadStatus: true
        });
    }
    else {
        return state
    }
}

export default reducer