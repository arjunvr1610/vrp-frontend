import axios from 'axios';

const reducer = (state = null, action) => {
    if (action.type === 'UPLOAD') {
        console.log(action.payload)
        let file = action.payload;
        let formData = new FormData();
        formData.append('input file', file);
            axios({
                url: '/some/uri',
                method: 'POST',
                headers: {
                    authorization: 'your token'
                },
                data: formData
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