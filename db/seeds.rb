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
  
    puts "Creating demo user..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition', 
      email: 'demo@user.io', 
      first_name: 'Demo',
      last_name: 'User',
      password: 'password'
    )
    puts "done creating demo user"
    puts ""

    puts "Creating users..."
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
    puts "done creating users"
    puts ""

    puts "Creating products..."
    

    p1 = Product.create!({
      name: "Nike Air Force 1 '07",
      description: "The Nike Air Force 1 '07 is a modern take on the iconic AF-1. It features a leather upper with a padded collar for comfort and a durable rubber outsole with a Nike Air unit in the heel for cushioning.",
      price: 100,
      category: "Men's Shoes",
      size: "M",
      color: "White",
    })

    p1.photo.attach(io: URI.open('https://ekin-seeds.s3.us-west-1.amazonaws.com/af1-scroller.webp'), filename: 'af1-scroller.webp')

    p2 = Product.create!({
      name: "Nike Air Max 270",
      description: "The Nike Air Max 270 is a new addition to the Air Max family. It features a large Max Air unit in the heel for maximum impact protection and a stretchy mesh upper for a snug, comfortable fit.",
      price: 160,
      category: "Men's Shoes",
      size: "M",
      color: "White/Black",
    })

    p2.photo.attach(io: URI.open('https://ekin-seeds.s3.us-west-1.amazonaws.com/top-block-2.webp'), filename: 'top-block-2.webp')

    p3 = Product.create!({
      name: "Nike Air Max 90",
      description: "The Nike Air Max 90 is a classic runner that features a leather and textile upper with a padded collar for comfort and a durable rubber outsole with a Nike Air unit in the heel for cushioning.",
      price: 120,
      category: "Women's Shoes",
      size: "M",
      color: "White/Beige",
    })

    p3.photo.attach(io: URI.open('https://ekin-seeds.s3.us-west-1.amazonaws.com/am90-equal-womens.webp'), filename: 'am90-equal-womens.webp')

    p4 = Product.create!({
      name: "Nike Air Max 720",
      description: "The Nike Air Max 720 is the tallest Air unit yet. It features a stretchy mesh upper for a snug, comfortable fit and a durable rubber outsole with a Nike Air unit in the heel for cushioning.",
      price: 120,
      category: "Men's Shoes",
      size: "M",
      color: "White/Black",
    })

    p4.photo.attach(io: URI.open('https://ekin-seeds.s3.us-west-1.amazonaws.com/air-max-720-green.webp'), filename: 'air-max-720-green.webp')

    p5 = Product.create!({
      name: "Air Jordan 6",
      description: "The Air Jordan 6 is a classic basketball shoe that features a leather upper with a padded collar for comfort and a durable rubber outsole with a Nike Air unit in the heel for cushioning.",
      price: 225,
      category: "Men's Shoes",
      size: "M",
      color: "White/Grey",
    })

    p5.photo.attach(io: URI.open('https://ekin-seeds.s3.us-west-1.amazonaws.com/air-max-720-green.webp'), filename: 'air-jordan-6-white.webp')

    p6 = Product.create!({
      name: "Blazer Mid '77",
      description: "The Nike Blazer Mid '77 is a classic basketball shoe that features a leather upper with a padded collar for comfort and a durable rubber outsole with a Nike Air unit in the heel for cushioning.",
      price: 100,
      category: "Men's Shoes",
      size: "M",
      color: "White/Black",
    })

    p6.photo.attach(io: URI.open('https://ekin-seeds.s3.us-west-1.amazonaws.com/blazer-mid-77-vintage-white.webp'), filename: 'blazer-mid-77-vintage-white.webp')

    p7 = Product.create!({
      name: "Dunk Low Mens",
      description: "The Nike Dunk Low is a classic basketball shoe that features a leather upper with a padded collar for comfort and a durable rubber outsole with a Nike Air unit in the heel for cushioning.",
      price: 110,
      category: "Men's Shoes",
      size: "M",
      color: "White/Black",
    })

    p7.photo.attach(io: URI.open('https://ekin-seeds.s3.us-west-1.amazonaws.com/dunk-low-mens-green-yellow.webp'), filename: 'dunk-low-mens-white.webp')
    
    p8 = Product.create!({
      name: "Air Max 97 Mens",
      description: "The Nike Air Max 97 is a classic basketball shoe that features a leather upper with a padded collar for comfort and a durable rubber outsole with a Nike Air unit in the heel for cushioning.",
      price: 160,
      category: "Men's Shoes",
      size: "M",
      color: "Gold/Black",
    })

    p8.photo.attach(io: URI.open('https://ekin-seeds.s3.us-west-1.amazonaws.com/Am97-og-gold-men\'s.webp'), filename: 'air-max-97-mens-gold-black.webp')

    p9 = Product.create!({
      name: "Air Max 97 Womens",
      description: "The Nike Air Max 97 is a classic basketball shoe that features a leather upper with a padded collar for comfort and a durable rubber outsole with a Nike Air unit in the heel for cushioning.",
      price: 160,
      category: "Women's Shoes",
      size: "M",
      color: "Gold/Black",
    })

    p9.photo.attach(io: URI.open('https://ekin-seeds.s3.us-west-1.amazonaws.com/am97-womens-gold.webp'), filename: 'air-max-97-womens-gold-black.webp')

    # p10 = Product.create!({
    #   name: "Men's Tank Top",
    #   description: "tank top",
    #   price: 25,
    #   category: "Men's Clothing",
    #   size: "M",
    #   color: "White",
    # })

    # p10.photo.attach(io: URI.open('https://ekin-seeds.s3.us-west-1.amazonaws.com/dri-fit-primary-mens-tank-beige.webp'), filename: 'mens-tank-top.webp')

    # p11 = Product.create!({
    #   name: "Dri-Fit Totality Shorts",
    #   description: "shorts",
    #   price: 40,
    #   category: "Men's Clothing",
    #   size: "M",
    #   color: "Black",
    # })

    # p11.photo.attach(io: URI.open('https://ekin-seeds.s3.us-west-1.amazonaws.com/dri-fit-totality-red-shorts.webp'), filename: 'dri-fit-totality-shorts-black.webp')

    puts "done creating products"
    puts ""

    puts "Creating reviews..."
    10.times do
      Review.create!({
        title: Faker::Lorem.sentence(word_count: 6),
        user_id: User.all.sample.id,
        product_id: Product.all.sample.id,
        rating: Faker::Number.between(from: 1, to: 5),
        body: Faker::Lorem.paragraph
      })
    end
    puts "done creating reviews"
    puts ""

    
  
    puts "Aight, done seeding the database"
  # end