var keycloak = {
    url : 'http://127.0.0.1:8080', // Set your keycloak base url
    realm: 'sandbox', // Set your realm
    clientId: 'sandbox_client', // Set your clientId
    redirectUriEncoder: 'http%3A%2F%2F127.0.0.1%3A5500%2Findex.html', //You can use this site for encoder your url -> https://www.urlencoder.org
    redirectUri: 'http://127.0.0.1:5500/index.html'
  };