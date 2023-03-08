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

    30.times do
      Product.create!({
        name: Faker::Commerce.product_name,
        description: Faker::Lorem.paragraph,
        price: Faker::Commerce.price,
        category: Faker::Commerce.department,
        size: "M"
        color: Faker::Commerce.color,
        # photo: Faker::LoremFlickr.image(size: "300x300", search_terms: ['product'])
      })
    end

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