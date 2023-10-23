# Keycloak User Data Display

A repository to display Keycloak user information, including access token, ID token and User Info, on an intuitive and easy-to-understand HTML page.

## Demo

In summary, here's how the project works.

![Demo](demo.gif)

## Parameters

You need to fill the params below:

- `url`: The URL of the Keycloak server.
- `realm`: The name of the realm in Keycloak.
- `clientId`: The unique identifier assingned to the client in Keycloak for authentication.
- `redirectUri`: The URI redirect where your user will be redirected after login.

Exemplo config file:

```javascript
var keycloak = {
    url : 'http://127.0.0.1:8080', // Set your keycloak base url
    realm: 'sandbox', // Set your realm
    clientId: 'sandbox_client', // Set your clientId
    redirectUri: 'http://127.0.0.1:8000/index.html' // Set your URI redirection after login
};
```

## Requirements

- Docker
- Docker Compose

## Docker Images

- Docker image for the Keycloak: [Quay.io - Keycloak Image](https://quay.io/repository/keycloak/keycloak)
- Docker image for the Nginx : [DockerHub - Nginx Image](https://hub.docker.com/_/nginx)

## How to Run

To run the project, follow these steps:

1. Clone this repository.
2. Navigate to the project directory and go to the keycloak folder.
3. Run the command `docker-compose up`.
4. Open the browser and go to [http://127.0.0.1:8000/index.html](http://127.0.0.1:8000/index.html).

## License

This project is licensed under the [MIT License](LICENSE).
