# Intro

The goal of this sample to is get started with REST from client side.

We will get as starting point an application that displays a list of harcoded items.


- Initial implementation of the service was:

```javascript
const data = [
    {
        "car_id": 1,
        "name": "ABX",
        "brand": "Tokiota",
        "year_release": "1999"
    },
    {
        "car_id": 2,
        "name": "AZE",
        "brand": "Tokiota",
        "year_release": "1995"
    },
];

export const getAllCars = () => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            const cars = data.map((i) => i);
            resolve(cars);
        }, 500);
    });
}

export const getCarById = (id) => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            const car = data.map((i) => i)
                .find((c) => c.car_id === id);
            resolve(car);
        }, 500);
    });
}

export const addCar = (car) => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            car['car_id'] = (data.length + 1);
            data.push(car);
            resolve('ok');
        }, 500);
    }); 
};
```


# Implementations

- There are two implementation one usint `axios` and another using `fetch` located under the folder *axios implementation* and *fetch implementation*. Access to any of them to run it.

- Let's install the needed dependencies.

```bash
npm install
```

- And start the application to check that everything is working as expected.

```bash
npm start
```

- Start server:

* On server folder as root in bash terminal

```bash
npm install
```

* Run server

```bash
npm start
```

* Check that server is running by pasting this url on browser:_http://localhost:3050/api/cars_


- Hints:

  - Start implementation with _getAllCars()_, follow with _getCarById(id)_, and for last _addCar(car)_.
  - _getAllCars() url_: 'http://localhost:3050/api/cars'.
  - _getAllCarById(2) url_: 'http://localhost:3050/api/cars/2'.
  - _addCar url_: 'http://localhost:3050/api/cars'. `POST` http verb.