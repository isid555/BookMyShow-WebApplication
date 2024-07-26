import { axiosInstance } from ".";



export const bookShow = async (payload) => {
    try{
        const response = await axiosInstance.post('/api/bookings/book-show', payload);
        console.log(response.data);
        return response.data;
    }catch(err){
        return err.response
    }
}

export const getAllBookings = async () => {
    try{
        const response = await axiosInstance.get('/api/bookings/get-all-bookings');
        return response.data;
    }catch(err){
        return err.response;
    }
}