import axios from 'axios';

const getOrders = async () => axios.get(`${process.env.BACKEND_ROOT}/`).then(({ data }) => data);

export default getOrders;
