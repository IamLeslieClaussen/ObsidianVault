Routing is the process of determining how an application responds to a client request to a particular endpoint, which is a URL and a specific request method(GET, POST..etc)


Root URL:
This is the starting point of a website or web application typically represented by a "/"

eg
http://example.com (the root of the entire website)
localhost:3000/ (in local development)

Root URL (/)
├── /about
├── /users
  │   └── /users/profile
└── /products
    └── /products/details


# Types of URL Patterns
## file based extension ( /resource.html)
 - URL can include file extensions to indicate the type of resource being requested.
 -  Examples
     - https://www.example.com/about.html
     - https://www.example.com/about.html/logo.jpeg
     - https://www.example.com/scripts/main.js

##  Resource based URL
- Eliminate the need to map the url to physical file.
- We map the url to a [[request handler]]
- eg
   - https://www.example.com/about


## Route Parameter
- This adds a parameter after the ('/') for more specificity
   - eg
     - http://www.example.com/Product/101 ---> (Product is the resource, the 101 is a parameter)


## Query Parameters 
 - Query parameters are used to pass data to the server in the URL
 - They are appended to the URL after a question mark (?).
 - Key-value pairs are separated by ampersands (?).
   - eg
   - https://www.example.com/search?q=keyword&page=2
   - https://www.example.com/products?category=electronics&sort=price`









## Route methods:
1.  .get()  --> retrieves data
2. .post() --> submits data
3. .put() --> updates data
4. .delete() --> deletes data


### Key Concepts of Routing
- Determines how requests are directed.