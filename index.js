const jwt = require('jsonwebtoken');
const {v4: uuidv4} = require('uuid');
 
function getLoginUrl(customerId, storeHash, storeUrl, clientId, clientSecret) {
   const dateCreated = Math. round((new Date()). getTime() / 1000);
   const  payload = {
       "iss": clientId,
       "iat": dateCreated,
       "jti": uuidv4(),
       "operation": "customer_login",
       "store_hash": storeHash,
       "customer_id": customerId,
       "redirect_to": storeUrl,

// iss	string	Indicates the token’s issuer. This is your application’s Client ID.
// iat	integer	Time when the token was generated. This is a numeric value indicating the number of seconds since the Unix epoch.
// jti	string	A unique request ID (ex. uuid).
// operation	string	Must contain the string "customer_login".
// store_hash	string	Store hash identifying the store you are logging into.
// customer_id	integer	ID of the customer you are logging in.
// redirect_to	string	Optional field containing a relative path for the shopper’s destination after login. Will default to /account.php.
// request_ip	string	Optional field containing the expected IP address for the request. If provided, BigCommerce will check that it matches the browser trying to log in.

   }
   let token = jwt.sign(payload, clientSecret, {algorithm:'HS256'});

   
   return `${storeUrl}/login/token/${token}`;
};
 
const clientId = "";
const clientSecret = "";
const customerId = ""; 
const storeHash = "";
const storeUrl = "";
 
const loginUrl = getLoginUrl(customerId, storeHash, storeUrl, clientId, clientSecret);
console.log(loginUrl);