require "open-uri"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Product.destroy_all
    Review.destroy_all
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition', 
      email: 'demo@user.io', 
      first_name: 'Demo',
      last_name: 'User',
      password: 'password'
    )
  
    # More users
    10.times do 
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        password: 'password'
      }) 
    end

    10.times do
      Product.create!({
        name: Faker::Commerce.product_name,
        description: Faker::Lorem.paragraph,
        price: Faker::Commerce.price,
        category: Faker::Commerce.department,
        size: "M",
        color: Faker::Commerce.color,
        # photo: Faker::LoremFlickr.image(size: "300x300", search_terms: ['product'])
      })
    end

    Product.create!({
      name: "Nike Air Force 1",
      description: "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, which provides lightweight cushioning. The Air Force 1 is also known for its iconic silhouette, which features a low-cut collar and a midsole that wraps up from the toebox. The shoe is available in a variety of colors and materials, including leather, suede, and canvas. The Air Force 1 is a staple in sneaker culture and has been worn by many famous athletes and musicians.",
      price: 100,
      category: "Shoes",
      size: "M",
      color: "White"
    })

    Product.create!({
      name: "Nike Air Max 90",
      description: "The Nike Air Max 90 is a classic running shoe that was first released in 1990. It features a visible Air unit in the heel, which provides lightweight cushioning. The shoe is available in a variety of colors and materials, including leather, suede, and canvas. The Air Max 90 is a staple in sneaker culture and has been worn by many famous athletes and musicians.",
      price: 100,
      category: "Shoes",
      size: "M",
      color: "White"
    })
    

    10.times do
      Review.create!({
        title: "please work",
        user_id: User.all.sample.id,
        product_id: Product.all.sample.id,
        rating: Faker::Number.between(from: 1, to: 5),
        body: Faker::Lorem.paragraph
      })
    end

    
  
    puts "Aight, done seeding the database"
  # end