import axios from "axios"



export const checkUserLogin = async () => {
    try {
        const { data } = await axios.get(
            'api/user/check-login',
        )
        console.log(data.message);
        return data;
    } catch (error) {
        if(data.success === false){
            console.log('User Not Login (',data.message,')');
        }
        return {success: false}
    } 
} 