import axios from 'axios';

const reducer = async(state = null, action) => {
    if (action.type === 'UPLOAD') {
        console.log(action.payload)
        let file = new Uint8Array(await action.payload.arrayBuffer())
        console.log('file = ', file);
        axios({
            url: '/some/uri',
            method: 'POST',
            headers: {
                authorization: 'your token'
            },
            data: file
        }).then((res) => {
            // response
        }, (err) => {
            console.log(err)
        })
    }
    else {
        return state
    }
}

export default reducer