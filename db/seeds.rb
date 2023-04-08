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

    p5.photo.attach(io: URI.open('https://ekin-seeds.s3.us-west-1.amazonaws.com/aj6-mens-cool-grey.webp'), filename: 'air-jordan-6-white.webp')

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

    p10 = Product.create!({
      name: "Air Max 270",
      description: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.",
      price: 160,
      category: "Women's Shoes",
      size: "M",
      color: "White/Pink",
    })

    p10.photo.attach(io: URI.open('https://ekin-seeds.s3.us-west-1.amazonaws.com/air-max-270-mens-shoes-KkLcGR.png'), filename: 'air-max-270-womens-shoes-KkLcGR.png')

   # Product 11
p11 = Product.create!({
  name: "Nike Air Zoom Pegasus 38",
  description: "The Nike Air Zoom Pegasus 38 offers a responsive and comfortable ride. It features a breathable mesh upper, Zoom Air cushioning, and a durable rubber outsole for long-lasting traction.",
  price: 120,
  category: "Men's Shoes",
  size: "M",
  color: "Black/White",
})

# p11.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/40dc8e57-0fbc-48f3-964b-6a8db73e9d6e/air-zoom-pegasus-38-running-shoe-6PzQfV.png'), filename: 'pegasus-38.png')

# Product 12
p12 = Product.create!({
  name: "Nike React Infinity Run Flyknit 2",
  description: "The Nike React Infinity Run Flyknit 2 offers a supportive and cushioned ride. It features a Flyknit upper for breathability and React foam for a soft and responsive feel underfoot.",
  price: 160,
  category: "Men's Shoes",
  size: "M",
  color: "Black/White",
})

# p12.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/8f941b39-26d2-4642-8fbc-6a9a6a75a6c7/react-infinity-run-flyknit-2-running-shoe-JK0mtq.png'), filename: 'react-infinity-flyknit-2.png')

# Product 13
p13 = Product.create!({
  name: "Nike Air Zoom SuperRep 2",
  description: "The Nike Air Zoom SuperRep 2 is designed for high-intensity workouts. It features Zoom Air cushioning for responsiveness and a wide, supportive base for stability during quick movements.",
  price: 120,
  category: "Men's Shoes",
  size: "M",
  color: "Blue/White",
})

# p13.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/3d1b6e91-6f7d-43a3-b3a9-9b763bf40a84/air-zoom-superrep-2-training-shoe-14dVQ2.png'), filename: 'superrep-2.png')

# Product 14
p14 = Product.create!({
  name: "Nike Metcon 7",
  description: "The Nike Metcon 7 is a versatile training shoe that offers stability and support for a variety of workouts. It features a flat, wide base for stability and a flexible forefoot for natural movement.",
  price: 130,
  category: "Men's Shoes",
  size: "M",
  color: "Black/Grey",
})

# p14.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/3bf3b3f3-1a71-4e87-9d6e-c2a9b2d2425b/metcon-7-training-shoe-7cG1DM.png'), filename: 'metcon-7.png')

# Product 15
p15 = Product.create!({
  name: "Nike ZoomX Invincible Run Flyknit",
  description: "The Nike ZoomX Invincible Run Flyknit offers a comfortable and cushioned ride for long runs. It features a lightweight Flyknit upper and ZoomX foam for a soft and responsive feel underfoot.",
  price: 180,
  category: "Men's Shoes",
  size: "M",
  color: "Blue/White",
})

# p15.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/3ff3bc9e-afbe-420a-9831-f8edbae18d50/zoomx-invincible-run-flyknit-running-shoe-4Ccsd4.png'), filename: 'zoomx-invincible-flyknit.png')

# Product 16
p16 = Product.create!({
  name: "Nike Dri-FIT Men's Training T-Shirt",
  description: "The Nike Dri-FIT Men's Training T-Shirt is made with sweat-wicking fabric to help keep you dry and comfortable during your workout.",
  price: 25,
  category: "Men's Tops",
  size: "M",
  color: "Black",
})

# p16.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/gsuin11ptg6irqxw0u4m/dri-fit-mens-short-sleeve-training-top-9SDLrn.png'), filename: 'dri-fit-mens-training-tshirt.png')

# Product 17
p17 = Product.create!({
  name: "Nike Pro Men's Short-Sleeve Top",
  description: "The Nike Pro Men's Short-Sleeve Top features sweat-wicking fabric and a compression fit for a supportive feel during your workout.",
  price: 28,
  category: "Men's Tops",
  size: "M",
  color: "White",
})

# p17.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/qrrkcqdfrrjuhqlo0zhz/pro-mens-short-sleeve-top-KkLd2v.png'), filename: 'pro-mens-short-sleeve-top.png')

# Product 18
p18 = Product.create!({
  name: "Nike Sportswear Club Fleece Men's Pullover Hoodie",
  description: "The Nike Sportswear Club Fleece Men's Pullover Hoodie is made with soft, brushed-back fleece for all-day comfort and warmth.",
  price: 55,
  category: "Men's Tops",
  size: "M",
  color: "Grey",
})

# p18.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ed6a5d6f-7e12-4dac-a270-6d02fb6c0a2a/sportswear-club-fleece-pullover-hoodie-8xJMN3.png'), filename: 'club-fleece-pullover-hoodie.png')

# Product 19
p19 = Product.create!({
  name: "Nike Therma Men's Training Hoodie",
  description: "The Nike Therma Men's Training Hoodie is made with thermal fabric to help keep you warm and comfortable during cold-weather workouts.",
  price: 65,
  category: "Men's Tops",
  size: "M",
  color: "Blue",
})

# p19.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/56f6a838-6a88-419b-bd6a-0876bfcf2d45/therma-mens-training-hoodie-dLcJbR.png'), filename: 'therma-mens-training-hoodie.png')

# Product 20
p20 = Product.create!({
  name: "Nike Sportswear Men's Windrunner Jacket",
  description: "The Nike Sportswear Windrunner Jacket is a lightweight, water-repellent layer that helps you stay covered and comfortable in any weather.",
  price: 100,
  category: "Men's Tops",
  size: "M",
  color: "Black/White",
})

# p20.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/94e6f0e0-ee7f-407d-b88d-81d1cfa0e7e7/sportswear-windrunner-mens-jacket-9R1RMM.png'), filename: 'windrunner-jacket.png')

# Product 21
p21 = Product.create!({
  name: "Nike Sportswear Club Fleece Men's Joggers",
  description: "The Nike Sportswear Club Fleece Men's Joggers are made with soft, brushed-back fleece for all-day comfort and warmth.",
  price: 55,
  category: "Men's Bottoms",
  size: "M",
  color: "Black",
})

# p21.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e0f9cb68-0e62-43f7-af64-8d3e3f3a3e80/sportswear-club-fleece-joggers-2xjDn1.png'), filename: 'club-fleece-joggers.png')

# Product 22
p22 = Product.create!({
  name: "Nike Dri-FIT Men's Training Pants",
  description: "The Nike Dri-FIT Men's Training Pants are made with sweat-wicking fabric to help keep you dry and comfortable during your workout.",
  price: 50,
  category: "Men's Bottoms",
  size: "M",
  color: "Grey",
})

# p22.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/edfa58f1-7f83-48d9-9d33-4e70cc7d05d0/dri-fit-mens-training-pants-4bLbwD.png'), filename: 'dri-fit-mens-training-pants.png')

# Product 23
p23 = Product.create!({
  name: "Nike Flex Stride Men's 7'' Brief Running Shorts",
  description: "The Nike Flex Stride Men's 7'' Brief Running Shorts are made with lightweight, stretchy fabric to help keep you moving freely and comfortably during your run.",
  price: 50,
  category: "Men's Bottoms",
  size: "M",
  color: "Black",
})

# p23.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5b6e833f-1c30-4525-95e5-06fa26c9f333/flex-stride-mens-7-brief-running-shorts-KlhlQD.png'), filename: 'flex-stride-running-shorts.png')

# Product 24
p24 = Product.create!({
  name: "Nike Sportswear Club Men's Cargo Pants",
  description: "The Nike Sportswear Club Men's Cargo Pants are made with soft, brushed-back fleece for all-day comfort and warmth. Multiple pockets provide convenient storage for your essentials.",
  price: 70,
  category: "Men's Bottoms",
  size: "M",
  color: "Olive",
})

# p24.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/722b665d-5c5b-4ccf-9c94-c9d9b3ea3b3d/sportswear-club-mens-cargo-pants-nGZSTh.png'), filename: 'club-cargo-pants.png')

# Product 25
p25 = Product.create!({
  name: "Nike Pro Men's Tights",
  description: "The Nike Pro Men's Tights are made with sweat-wicking, stretchy fabric to help keep you dry, comfortable and moving freely during your workout.",
  price: 35,
  category: "Men's Bottoms",
  size: "M",
  color: "Black",
})

# p25.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/35c3d1a3-3fc5-4f80-9b38-89fbcf603d21/pro-mens-tights-2YJ8Qv.png'), filename: 'pro-mens-tights.png')

# Product 26
p26 = Product.create!({
  name: "Nike Sportswear Heritage86 Cap",
  description: "The Nike Sportswear Heritage86 Cap is made with durable, lightweight fabric and features an adjustable strap for personalized comfort.",
  price: 25,
  category: "Men's Accessories",
  size: "One Size",
  color: "Black",
})

# p26.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/gsuin1ecihotz6gqtswk/sportswear-heritage86-cap-MfvtTz.png'), filename: 'heritage86-cap.png')

# Product 27
p27 = Product.create!({
  name: "Nike Sportswear Essentials Hip Pack",
  description: "The Nike Sportswear Essentials Hip Pack is designed to keep your essentials close and organized, featuring a zippered main compartment and an adjustable strap for a custom fit.",
  price: 30,
  category: "Men's Accessories",
  size: "One Size",
  color: "Black",
})

# p27.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/da7a94a0-71ee-4a5a-9065-5c5b8ca7a1b5/sportswear-essentials-hip-pack-xM4Zb9.png'), filename: 'essentials-hip-pack.png')

p28 = Product.create!({
  name: "Nike Elite Basketball Crew Socks",
  description: "The Nike Elite Basketball Crew Socks offer a supportive fit and feel, featuring cushioning in key areas and sweat-wicking fabric to help keep your feet dry and comfortable.",
  price: 16,
  category: "Men's Accessories",
  size: "M",
  color: "White/Black",
})

# p28.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1db24340-48a2-48a8-b8d0-47ec3f3ac9e9/elite-basketball-crew-socks-knQGxR.png'), filename: 'elite-basketball-crew-socks.png')

# Product 29
p29 = Product.create!({
  name: "Nike Vapor Knit 3.0 Football Gloves",
  description: "The Nike Vapor Knit 3.0 Football Gloves are designed to provide excellent grip and a locked-in feel, featuring a lightweight, breathable knit construction and strategically placed padding.",
  price: 60,
  category: "Men's Accessories",
  size: "M",
  color: "Black/White",
})

# p29.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/60e7a0f3-36ec-4d61-8d63-6a3bb3f3e9ac/vapor-knit-3-football-gloves-2QcRzn.png'), filename: 'vapor-knit-football-gloves.png')

p30 = Product.create!({
  name: "Nike Sportswear Tech Fleece Scarf",
  description: "The Nike Sportswear Tech Fleece Scarf is made with soft, lightweight fleece for warmth and comfort, featuring a versatile design that can be worn multiple ways.",
  price: 45,
  category: "Men's Accessories",
  size: "One Size",
  color: "Black",
})

# p30.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/271d5b8e-4bf4-4e6d-8d76-8a3a3c50b3cd/sportswear-tech-fleece-scarf-5D5R5J.png'), filename: 'tech-fleece-scarf.png')

# Women's Accessories
# Product 31
p31 = Product.create!({
  name: "Nike Sportswear Heritage86 Futura Washed Cap",
  description: "The Nike Sportswear Heritage86 Futura Washed Cap is made with a soft, durable cotton fabric and features an adjustable strap for a personalized fit.",
  price: 25,
  category: "Women's Accessories",
  size: "One Size",
  color: "Pink",
})

# p31.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/8f8baff9-0e27-4e0d-8d71-1a1ff2e1737d/sportswear-heritage86-futura-washed-cap-7ZvRtg.png'), filename: 'heritage86-futura-washed-cap-pink.png')

# Product 32
p32 = Product.create!({
  name: "Nike Women's Lightweight Training Gloves",
  description: "The Nike Women's Lightweight Training Gloves are designed for a comfortable, supportive fit during your workout, featuring a breathable construction and a secure wrist strap.",
  price: 20,
  category: "Women's Accessories",
  size: "M",
  color: "Black",
})

# p32.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/8d1e0e89-0c3f-4a6a-a3b3-0d4e01db4ba4/womens-lightweight-training-gloves-cGJ1ZX.png'), filename: 'womens-lightweight-training-gloves.png')

# Product 33
p33 = Product.create!({
  name: "Nike Women's Everyday Max Cushioned Training Crew Socks (3 Pairs)",
  description: "The Nike Women's Everyday Max Cushioned Training Crew Socks feature sweat-wicking fabric and cushioning for all-day comfort during your workouts.",
  price: 20,
  category: "Women's Accessories",
  size: "M",
  color: "White",
})

# p33.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/4f4e29c9-4d71-4f20-81e0-d27e8cb11f16/everyday-max-cushioned-training-crew-socks-3-pairs-3m6b3q.png'), filename: 'womens-training-crew-socks.png')

p34 = Product.create!({
  name: "Nike Gym Club Training Duffel Bag",
  description: "The Nike Gym Club Training Duffel Bag is designed to keep all your gear organized and easily accessible, featuring a spacious main compartment, multiple zippered pockets, and a durable, water-repellent finish.",
  price: 35,
  category: "Women's Accessories",
  size: "One Size",
  color: "Black",
})

# p34.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/gb5zk5j5l5udajkkf8pg/gym-club-training-duffel-bag-2BXd8R.png'), filename: 'gym-club-training-duffel-bag.png')

# Product 35
p35 = Product.create!({
  name: "Nike Women's Essential Running Jacket",
  description: "The Nike Women's Essential Running Jacket is lightweight and water-repellent, designed to keep you comfortable and dry during your run. It features a packable design for easy storage when you're on the go.",
  price: 90,
  category: "Women's Accessories",
  size: "M",
  color: "Black",
})

# p35.photo.attach(io: URI.open('https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/qb0kgtwiyzufdruyfkjf/womens-essential-running-jacket-B1qrKb.png'), filename: 'womens-essential-running-jacket.png')

    puts "done creating products"
    puts ""

    puts "Creating reviews..."
    20.times do
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