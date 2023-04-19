# <a  href="https://www.clonenike.com/" target="_blank" > Ekin </a>: A Full Stack E-Commerce Clone of Nike

<a href="https://www.clonenike.com/">
  <img src="https://www.icegif.com/wp-content/uploads/nike-icegif-1.gif" alt="Ekin Logo" style="width: 175px;" />
</a>


Ekin is a full stack e-commerce clone of the popular website Nike. It is designed to provide a seamless shopping experience, allowing users to browse and search for  products easily. Ekin is built using Ruby on Rails for the backend and React for the frontend, ensuring a fast and responsive user interface. You can access the live site at [clonenike.com](https://www.clonenike.com/), or explore the codebase in the [GitHub repository](https://github.com/andrehanna8/ekin-auth) Also check out the [Ekin wiki!](https://github.com/andrehanna8/ekin-auth/wiki).

## User Flow
https://user-images.githubusercontent.com/34076045/232656263-6f4d46d3-5f78-422d-baa4-bf3ffe8cdffd.mp4

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Technologies Used](#technologies-used)

## Features

- **User Authentication**: Secure user registration and login functionality, ensuring user data privacy.
- **Product Browsing**: Browse through an extensive catalog of products, with filtering and sorting options for a more personalized shopping experience.
- **Shopping Cart**: Add items to your shopping cart and manage quantities with ease.
- **Product Reviews**: Share your thoughts on a product by leaving a review and rating.

## Features Walkthrough 
 
## Name: User Authentication
### Feature: Secure user registration and login functionality, ensuring user data privacy.

**Explanation:**

This code is implementing a secure user registration and login system in a Ruby on Rails application. It utilizes the ActiveRecord ORM for database communication and the Bcrypt gem for password hashing and authentication.

```
class User < ApplicationRecord
  before_validation :ensure_session_token

  validates :username, 
    uniqueness: true, 
    length: { in: 3..30 }, 
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  
    validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }

  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true
  validates :first_name, :last_name, length: { in: 1..255 }
  
  has_secure_password

  def self.find_by_credentials(credential, password)
    if credential.match?(URI::MailTo::EMAIL_REGEXP)
      field_to_query = :email
    else
      field_to_query = :username
    end
    
    user = User.find_by(field_to_query => credential)
    
    if user && user.authenticate(password)
      return user
    else
      return nil
    end
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end
  private
  
  def generate_unique_session_token
    loop do
      session_token = SecureRandom::urlsafe_base64
      return session_token unless User.exists?(session_token: session_token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
```

**User Model:**

The `User` class inherits from `ApplicationRecord` and represents a user in the database. It contains validations, associations, and methods related to user authentication.

- The `before_validation` callback ensures a session token is generated before saving the user to the database.
- Various validations are applied to the `username`, `email`, `session_token`, `password`, `first_name`, and `last_name` attributes to ensure data integrity.
- The `has_secure_password` method is provided by the Bcrypt gem and adds methods to authenticate users, secure password hashing, and password validations.
- The `find_by_credentials` class method is used to find a user by either their email or username and authenticate their password.
- The `reset_session_token!` method resets a user's session token and saves it to the database.
- The `generate_unique_session_token` and `ensure_session_token` methods are used to generate and set a unique session token for a user.

```
class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['firstName', 'lastName', 'password']
  def create
    @user = User.new(user_params)
    if @user.save 
      login!(@user)
      render :show
    else 
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
    
  end

  private

def user_params
  params.require(:user).permit(:email, :username, :first_name, :last_name, :password)
end

end
```

**User's Controller:**

The `Api::UsersController` class inherits from `ApplicationController` and is responsible for handling user-related API requests.

- The `wrap_parameters` method is used to wrap the parameters passed in the API request for easier access.
- The `create` action is responsible for creating a new user with the provided parameters, and logging them in if the user is successfully created. If there are errors in the provided data, it returns an error message and an unprocessable_entity status.
- The `user_params` private method is used to whitelist the parameters allowed in the API request for creating a user.

**Technologies utilized:**

- Ruby on Rails: A popular web application framework built on the Ruby programming language. It employs the MVC (Model-View-Controller) pattern for organizing application code.
- ActiveRecord: An ORM (Object-Relational Mapping) system in Rails that abstracts and simplifies database communication.
- Bcrypt: A Ruby gem used for secure password hashing and authentication.



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


6. Visit [http://localhost:3000](http://localhost:3000)

in your browser to explore the app locally.

## Technologies Used

- Backend: Ruby on Rails
- Frontend: React, Redux, JavaScript, HTML5, CSS3
- Database: PostgreSQL
- Image Hosting: Amazon S3
- Deployment: Render
