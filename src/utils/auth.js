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



export const checkImageLoading = async ({ imageLoading, setImageLoading }) => {
    try {
        const { data } = await axios.get('/api/image/processing',);
        if (data.success) {
            // const localLoading = JSON.parse(localStorage.getItem("imageLoading"));
            // console.log(localLoading, data.processImg);
                setImageLoading(data.processImg);
                localStorage.setItem('imageLoading', JSON.stringify(data.processImg));
        } else {
            console.log('not get loading status');
        }
    } catch (error) {
        console.log('loading error', error);
        
    }

}