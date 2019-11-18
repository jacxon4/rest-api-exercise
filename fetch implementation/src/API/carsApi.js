const baseUrl = 'http://localhost:3050';
const carsUrl = `${baseUrl}/api/cars`;

const getRequestConfig = (method, body) => {
    const returnObject = {
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        method,
    };
    if (body !== null) {
        returnObject.body = JSON.stringify(body);
    }

    return returnObject;
};
const handleErrors = error => {
    console.log(error) ;
};

const handleFetch = (endpoint, method, body=null) => {
    return fetch(endpoint, getRequestConfig(method, body))
        .then(response => response.json())
        .catch(handleErrors);
};

export const getAllCars = () => handleFetch(`${carsUrl}`,'GET');
export const getCarById = id => handleFetch(`${carsUrl}/${id}`,'GET');
export const addCar = car => handleFetch(`${carsUrl}`,'POST',car);

