import axios from "axios"



export const checkUserLogin = async () => {
    try {
        const { data } = await axios.get('api/user/check-login',);
        if (data.success) {
            // console.log('User (', data.user, ')');
            return data;
        }
    } catch (error) {
        // console.log('User Not Login......!');
        return { success: false }
    }
}



// export const checkImageLoading = async ({ imageLoading, setImageLoading }) => {  //this can check if user is already process image to block multiple images simultaneously
//     try {
//         const { data } = await axios.get('/api/image/processing',);
//         if (data.success) {
//             // const localLoading = JSON.parse(localStorage.getItem("imageLoading"));
//             // console.log( data.processImg);
//             setImageLoading(data.processImg);
//             // console.log(imageLoading);

//             // localStorage.setItem('imageLoading', JSON.stringify(data.processImg));
//             // console.log(JSON.parse(localStorage.getItem("imageLoading")));

//         } else {
//             console.log('not get loading status');
//         }
//     } catch (error) {
//         console.log('loading error', error);

//     }

// }




export const loadUserChats = async () => {
    try {
        const { data } = await axios.get('/api/image/load-user-chats');
        if (data.success) {
            // console.log(data.chatData);
            return data.chatData;
        }
        else {
            return [];
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}




export const reqForDeletingImg = async (_id,) => {
    console.log('deleted...!', _id);
    try {
        const { data } = await axios.post('/api/image/image-delete',
            { imageId: _id },
            { Headers: { 'Content-Type': 'application/json' } },
        )
        if (data.success) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log('delete error', error);
        return false;
    }
}





