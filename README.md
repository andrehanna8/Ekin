# Ekin: A Full Stack E-Commerce Clone of Nike

<a href="https://www.clonenike.com/">
  <img src="https://www.icegif.com/wp-content/uploads/nike-icegif-1.gif" alt="Ekin Logo" style="max-width: 150px;" />
</a>


Ekin is a full stack e-commerce clone of the popular website Nike. It is designed to provide a seamless shopping experience, allowing users to browse and search for  products easily. Ekin is built using Ruby on Rails for the backend and React for the frontend, ensuring a fast and responsive user interface. You can access the live site at [clonenike.com](https://www.clonenike.com/), or explore the codebase in the [GitHub repository](https://github.com/andrehanna8/ekin-auth).

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Technologies Used](#technologies-used)
4. [Contributing](#contributing)
5. [License](#license)

## Features

- **User Authentication**: Secure user registration and login functionality, ensuring user data privacy.
- **Product Browsing**: Browse through an extensive catalog of products, with filtering and sorting options for a more personalized shopping experience.
- **Shopping Cart**: Add items to your shopping cart and manage quantities with ease.
- **Product Reviews**: Share your thoughts on a product by leaving a review and rating.

## Installation

To get started with Ekin locally, follow these steps:

1. Clone the repository:

```git clone https://github.com/andrehanna8/ekin-auth.git```


2. Install the required dependencies:

```cd ekin-auth```
```bundle install```
```npm install``` 

3. Set up the database:

```rails db:create```
```rails db:migrate```
```rails db:seed```

4. Start the Rails server:

```rails s```

5. Open a new terminal window and start the React development server:

 ```cd frontend```
```npm install```
```npm start```


6. Visit [http://localhost:3000](http://localhost:3000) in your browser to explore the app locally.

## Technologies Used

- Backend: Ruby on Rails
- Frontend: React, Redux, JavaScript, HTML5, CSS3
- Database: PostgreSQL
- Image Hosting: Amazon S3
- Deployment: Render
