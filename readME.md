### ***# What is Middleware?***

-Middleware functions are the functions that access to the request and response object (req, res) in request-response cycle.\
-Express.js Middleware are different types of functions that are invoked by the Express.js routing layer before the final request handler. \
-As the name specified, Middleware appears in the middle between an initial request and final intended route. \
-In stack, middleware functions are always invoked in the order in which they are added.\
-Middleware is commonly used to perform tasks like body parsing for URL-encoded or JSON requests, cookie parsing for basic cookie handling, or even building JavaScript modules on the fly.\
-A middleware function can perform the following tasks:
* It can execute any code.
* It can make changes to the request and the response objects.
* It can end the request-response cycle.
* It can call the next middleware * function in the stack.