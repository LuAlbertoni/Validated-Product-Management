# Validated product management

API that unites the [authentication system](https://github.com/lualbertoni/Auth-Express-MongoDB) with product management, using token generation and validation through the JSON Web Tokens library.

## Setup
#### STEP 1

 ```sh
  git clone https://github.com/lualbertoni/Validated-Product-Management.git
   ```

#### STEP 2

 ```sh
  npm install
   ```

#### STEP 3
###### Edit the file ".env"
  ```sh
  PORT = portExpress
  MONGODB_URL = yourMongoConnectionString
  SECRET_KEY = yourSecretKeyToTokenGeneration
  TOKEN_EXPIRATION = tokenExpirationTime (followed by "d" for days, "h" for hours, "m" for minutes, and "s" for seconds)
  ```

* ##### Starting the server
###### (Make sure to run this in the root directory)
  ```sh
  npm start
  ```

## API Documentation

## POST /auth/register
Registers user.

| Param    | Description |
|----------|-------------|
| username | Username    |
| password | Password    |

## POST /auth/login
Signs in user and receive session token.

| Body Param    | Description |
|----------|-------------|
| username | Username    |
| password | Password    |

## GET /product/list
Receive the name, price and id of all registered products.

## POST /product/add
Sign products

| Body Param    | Description |
|----------|-------------|
| name| Product Name    |
| price | Product Price    |

###### (Don't forget to send the returned token during login if you are using Postman or similar)

## POST /product/remove

| Body Param    | Description |
|----------|-------------|
| id| Product ID |

###### (Don't forget to send the returned token during login if you are using Postman or similar)