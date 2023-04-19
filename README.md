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

## User Authentication

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

----

## Product Browsing
This code allows users to browse through an extensive catalog of products with filtering and sorting options for a more personalized shopping experience. It is implemented in a React application using Redux for state management.

```
const categories = ["All", "Men's", "Women's", "Kids", "Sale"];
const productTypes = ["All", "Shoes", "Tops", "Bottoms", "Accessories"];
```

The categories and productTypes constants define the available categories and product types that can be used for filtering.

```
function useSearchParamsMemo(location) {
  return useMemo(() => new URLSearchParams(location.search), [location.search]);
}

export default function SearchResultsIndex() {
  // ... component code ...
}
```
The useSearchParamsMemo custom hook memoizes the search parameters from the URL. The SearchResultsIndex functional component is responsible for handling the product browsing and filtering.

```
const products = useSelector((state) => Object.values(state.products));
const dispatch = useDispatch();
const location = useLocation();
const searchParams = useSearchParamsMemo(location);

const searchTerm = searchParams.get("q") || "";
const genderFilter = searchParams.get("gender") || "";
// ... other filter state variables ...
```
The component retrieves the products from the Redux state, initializes the dispatch function, and accesses the current location to read search parameters. It sets the searchTerm and genderFilter based on the search parameters.

```
const filterByCategoryAndType = (product, searchTerm) => {
  // ... filtering logic ...
};

const productsToDisplay = products.filter((product) => filterByCategoryAndType(product, searchTerm));
```
The filterByCategoryAndType function filters products based on the selected category, product type, and search term. The productsToDisplay array stores the filtered list of products.

```
const sortedProducts = productsToDisplay.sort((a, b) => {
  if (sortOrder === "priceLowToHigh") {
    return a.price - b.price;
  } else if (sortOrder === "priceHighToLow") {
    return b.price - a.price;
  }
  return 0;
});

const productsToDisplayByColor =
  filterColor === "All"
    ? sortedProducts
    : sortedProducts.filter((product) => product.color === filterColor);
```
The sortedProducts array sorts the products based on the selected sort order. The productsToDisplayByColor array filters the sorted products by color, if a specific color filter is applied.

```
useEffect(() => {
  // ... fetching and updating filter state based on search parameters ...
}, [dispatch, searchTerm, genderFilter, setFilterCategory, searchParams]);
```

The useEffect hook is used to fetch products and update filter state based on the search parameters in the URL when the component mounts or when the search parameters change.

----

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
