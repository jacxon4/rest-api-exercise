import axios from 'axios';
const baseUrl = 'http://localhost:3050';
const carsUrl = `${baseUrl}/api/cars`;

export const getAllCars = () => axios.get(`${carsUrl}`).then(({data})=> data);
export const getCarById = (id) => axios.get(`${carsUrl}/${id}`).then(({data})=> data);
export const addCar = (car) => axios.post(`${carsUrl}`,car);