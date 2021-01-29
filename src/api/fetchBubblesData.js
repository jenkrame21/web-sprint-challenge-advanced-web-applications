import axiosWithAuth from '../helpers/axiosWithAuth';

export const fetchBubblesData = () => {
    return axiosWithAuth()
        .get('/colors')
        .then((res) => {
            // Bubble data appears on server side
            // console.log("Success Get BubblesPage:", res.data);
            // Bubble data appears on client side
            return res;
        })
        .catch((err) => {
            console.log("Error Get BubblesPage:", err.message);
        })
};