
## Project Structure
### Under src folder
```
app
├── auth
├── guards
├── not-found
├── pages
│   ├── rooms
│   │   ├── left
│   │   ├── right
│   └── shared
│       ├── list-errors
│       ├── pager
│       └── search
└── providers
    ├── components
    ├── interceptors
    ├── models
    └── services
```
### auth
It contains all of the page and behavior I use to authenticate user.

### guards
It contains all of the guards I use to protect different routes in my applications.

### shared
The Shared is where any shared components. The SharedModule can be imported in any other module when those items will be re-used, it's like pagination, wizard and search components.

### pages
The pages is where any views and route components.

### providers
The providers is where any re-use components, services and models. What the different between shared is customize module for this product, and it might be used in other feature, but it's hard to use in other product.

### interceptors
Angular 6+ introduced a long-awaited feature for handling http requests   the HttpInterceptor interface. This allows us to catch and modify the requests and responses before API calls. The interceptors folder is a collection of interceptors what I use.

### Summary
Considering this feature is not complicated, so mostly I created feature by Angular Component, not Angular Module which contain all component can be reused.It's better way to create module for reusing components and long term maintenance.

---

### UI Flow
##### prototype for designer
* Step 1. display search input field

<img src="https://i.imgur.com/hXPjeJ3.png" width="400">

* Step 2. select destination
  1. display drop-down list
  2. drop-down list including best trip, area, property
  3. input field should have autocomplete enabled

<img src="https://i.imgur.com/75bxjUs.png" width="400">

* Step 3.select date
  1. display calnedar for helping user choosing easily.-- 
  2. start date should be greater than today 

<img src="https://i.imgur.com/FdkVuhV.png" width="400">

* Step 4. select the number of people and rooms
  1. button for adding and removing adults, rooms and children
  2. display the input filed of children's age when the number of children greater than 0
 
<img src="https://i.imgur.com/9XnmHkF.png" width="400">

