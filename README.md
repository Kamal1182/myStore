# MyStore

This project is a MEAN Stack web app uses a Mongo Atlas Database connection and Express js for online real data.

The interface built using angular material

The project do all CRUD operations in frontend data

It gets (Read) all products from the database throug the link [products](thttp://localhost:4200/products)

It creats a service for products order and show it throug the link [cart](thttp://localhost:4200/cart)

In the cart page the user still able to modify the order which is done through the cart servive

The confirmatin form is created using angular formconatrol, validation are applied to the form
which finally send the user to the confirmation page under [con](thttp://localhost:4200/cart/confirm)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## Development server

Run `npm install`. 
Run `npm run watch` which runs both commands `ng serve` anf `nodemon src/server/index.js`
wait untill both the front and backend running
Navigate to `http://localhost:4200/`for frontend.
the backend is running on `http://localhost:3000/`
Then login using username: admin and password: 87654321 to login

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get the code navigate to (https://github.com/Kamal1182/myStore.git) page.
