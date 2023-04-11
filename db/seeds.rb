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
      category: "Sale Women's Shoes",
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

p11.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a69ba219-ca54-4692-bae6-3352c53cdc6e/pegasus-38-pittsburgh-steelers-mens-running-shoes-884pG1.png'), filename: 'pegasus-38.png')

# Product 12
p12 = Product.create!({
  name: "Nike React Infinity Run Flyknit 2",
  description: "The Nike React Infinity Run Flyknit 2 offers a supportive and cushioned ride. It features a Flyknit upper for breathability and React foam for a soft and responsive feel underfoot.",
  price: 160,
  category: "Men's Shoes",
  size: "M",
  color: "Black/White",
})

p12.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f66c6551-4f46-41df-86d8-a3c0dcd7c449/react-infinity-2-mens-road-running-shoes-DttDF2.png'), filename: 'react-infinity-flyknit-2.png')

# Product 13
p13 = Product.create!({
  name: "Nike Air Zoom SuperRep 2",
  description: "The Nike Air Zoom SuperRep 2 is designed for high-intensity workouts. It features Zoom Air cushioning for responsiveness and a wide, supportive base for stability during quick movements.",
  price: 120,
  category: "Men's Shoes",
  size: "M",
  color: "Blue/White",
})

p13.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e4773e9-0038-4cf2-aaf4-70c1d803a08a/air-zoom-superrep-3-womens-hiit-class-shoes-4p1pwz.png'), filename: 'superrep-2.png')

# Product 14
p14 = Product.create!({
  name: "Nike Metcon 7",
  description: "The Nike Metcon 7 is a versatile training shoe that offers stability and support for a variety of workouts. It features a flat, wide base for stability and a flexible forefoot for natural movement.",
  price: 130,
  category: "Men's Shoes",
  size: "M",
  color: "Black/Grey",
})

p14.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4a8062cc-2332-4746-983a-7d9a2d28bdf2/metcon-7-amp-training-shoes-gJT8QZ.png'), filename: 'metcon-7.png')

# Product 15
p15 = Product.create!({
  name: "Nike ZoomX Invincible Run Flyknit",
  description: "The Nike ZoomX Invincible Run Flyknit offers a comfortable and cushioned ride for long runs. It features a lightweight Flyknit upper and ZoomX foam for a soft and responsive feel underfoot.",
  price: 180,
  category: "Men's Shoes",
  size: "M",
  color: "Blue/White",
})

p15.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/80baedf0-d6f5-4d35-b912-c7c40eeb0be0/invincible-3-womens-road-running-shoes-kC40R9.png'), filename: 'zoomx-invincible-flyknit.png')

# Product 16
p16 = Product.create!({
  name: "Nike Dri-FIT Men's Training T-Shirt",
  description: "The Nike Dri-FIT Men's Training T-Shirt is made with sweat-wicking fabric to help keep you dry and comfortable during your workout.",
  price: 25,
  category: "Men's Tops",
  size: "M",
  color: "Black",
})

p16.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cdc3b393-20e0-47aa-a4a0-c421d4a7b11c/dri-fit-mens-training-t-shirt-1Hh6cz.png'), filename: 'dri-fit-mens-training-tshirt.png')

# Product 17
p17 = Product.create!({
  name: "Nike Pro Men's Short-Sleeve Top",
  description: "The Nike Pro Men's Short-Sleeve Top features sweat-wicking fabric and a compression fit for a supportive feel during your workout.",
  price: 28,
  category: "Men's Tops",
  size: "M",
  color: "White",
})

p17.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cdbd490b-6e76-49f8-bbfe-4f4c7a43bf7b/pro-dri-fit-mens-slim-fit-short-sleeve-top-H7B5f3.png'), filename: 'pro-mens-short-sleeve-top.png')

# Product 18
p18 = Product.create!({
  name: "Nike Sportswear Club Fleece Men's Pullover Hoodie",
  description: "The Nike Sportswear Club Fleece Men's Pullover Hoodie is made with soft, brushed-back fleece for all-day comfort and warmth.",
  price: 55,
  category: "Men's Tops",
  size: "M",
  color: "Grey",
})

p18.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b6c51b92-2d96-4c39-9266-593d81b5ccff/sportswear-club-fleece-pullover-hoodie-Gw4Nwq.png'), filename: 'club-fleece-pullover-hoodie.png')

# Product 19
p19 = Product.create!({
  name: "Nike Therma Men's Training Hoodie",
  description: "The Nike Therma Men's Training Hoodie is made with thermal fabric to help keep you warm and comfortable during cold-weather workouts.",
  price: 65,
  category: "Men's Tops",
  size: "M",
  color: "Blue",
})

p19.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c79b0d4d-f837-4beb-96a1-08ec72a22f0d/therma-mens-therma-fit-hooded-fitness-pullover-X9fVm2.png'), filename: 'therma-mens-training-hoodie.png')

# Product 20
p20 = Product.create!({
  name: "Nike Sportswear Men's Windrunner Jacket",
  description: "The Nike Sportswear Windrunner Jacket is a lightweight, water-repellent layer that helps you stay covered and comfortable in any weather.",
  price: 100,
  category: "Men's Tops",
  size: "M",
  color: "Black/White",
})

p20.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a52dc894-7459-4e47-b651-7197cfa04d6a/storm-fit-windrunner-mens-primaloft-insulated-vest-lMmN5v.png'), filename: 'windrunner-jacket.png')

# Product 21
p21 = Product.create!({
  name: "Nike Sportswear Club Fleece Men's Joggers",
  description: "The Nike Sportswear Club Fleece Men's Joggers are made with soft, brushed-back fleece for all-day comfort and warmth.",
  price: 55,
  category: "Men's Bottoms",
  size: "M",
  color: "Black",
})

p21.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eaf227ef-f494-478b-9430-d31428ecd680/sportswear-club-fleece-joggers-KflRdQ.png'), filename: 'club-fleece-joggers.png')

# Product 22
p22 = Product.create!({
  name: "Nike Dri-FIT Men's Training Pants",
  description: "The Nike Dri-FIT Men's Training Pants are made with sweat-wicking fabric to help keep you dry and comfortable during your workout.",
  price: 50,
  category: "Men's Bottoms",
  size: "M",
  color: "Grey",
})

p22.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c13e59b5-81ea-4847-a176-29719973949f/dri-fit-mens-training-pants-41n6G2.png'), filename: 'dri-fit-mens-training-pants.png')

# Product 23
p23 = Product.create!({
  name: "Nike Flex Stride Men's 7'' Brief Running Shorts",
  description: "The Nike Flex Stride Men's 7'' Brief Running Shorts are made with lightweight, stretchy fabric to help keep you moving freely and comfortably during your run.",
  price: 50,
  category: "Men's Bottoms",
  size: "M",
  color: "Black",
})

p23.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-2a47c708-32a9-41bc-9082-d0c8890b1cb4/flex-stride-mens-7-brief-running-shorts-BvCXmh.png'), filename: 'flex-stride-running-shorts.png')

# Product 24
p24 = Product.create!({
  name: "Nike Sportswear Club Men's Cargo Pants",
  description: "The Nike Sportswear Club Men's Cargo Pants are made with soft, brushed-back fleece for all-day comfort and warmth. Multiple pockets provide convenient storage for your essentials.",
  price: 70,
  category: "Men's Bottoms",
  size: "M",
  color: "Olive",
})

p24.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a1dc8682-1cba-4cc1-8834-5be5d9017c54/jordan-essentials-mens-utility-pants-F0MNZ6.png'), filename: 'club-cargo-pants.png')

# Product 25
p25 = Product.create!({
  name: "Nike Pro Men's Tights",
  description: "The Nike Pro Men's Tights are made with sweat-wicking, stretchy fabric to help keep you dry, comfortable and moving freely during your workout.",
  price: 35,
  category: "Men's Bottoms",
  size: "M",
  color: "Black",
})

p25.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/be161238-0126-4a14-91a0-86881f24347c/pro-warm-mens-tights-jK57mH.png'), filename: 'pro-mens-tights.png')

# Product 26
p26 = Product.create!({
  name: "Nike Sportswear Heritage86 Cap",
  description: "The Nike Sportswear Heritage86 Cap is made with durable, lightweight fabric and features an adjustable strap for personalized comfort.",
  price: 25,
  category: "Men's Accessories",
  size: "One Size",
  color: "Black",
})

p26.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/107bcc9c-f6ed-4104-9f80-809f0be6fb92/sportswear-heritage86-womens-cap-vg1VNf.png'), filename: 'heritage86-cap.png')

# Product 27
p27 = Product.create!({
  name: "Nike Sportswear Essentials Hip Pack",
  description: "The Nike Sportswear Essentials Hip Pack is designed to keep your essentials close and organized, featuring a zippered main compartment and an adjustable strap for a custom fit.",
  price: 30,
  category: "Men's Accessories",
  size: "One Size",
  color: "Black",
})

p27.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/79362ee5-35e5-462a-a4db-f0d3c3e1ccb2/sportswear-essentials-sling-bag-8l-2gM57K.png'), filename: 'essentials-hip-pack.png')

p28 = Product.create!({
  name: "Nike Elite Basketball Crew Socks",
  description: "The Nike Elite Basketball Crew Socks offer a supportive fit and feel, featuring cushioning in key areas and sweat-wicking fabric to help keep your feet dry and comfortable.",
  price: 16,
  category: "Men's Accessories",
  size: "M",
  color: "White/Black",
})

p28.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c65858d8-72f0-4061-8202-ec3142eb4d2e/elite-kay-yow-basketball-crew-socks-0jpqqV.png'), filename: 'elite-basketball-crew-socks.png')

# Product 29
p29 = Product.create!({
  name: "Nike Vapor Knit 3.0 Football Gloves",
  description: "The Nike Vapor Knit 3.0 Football Gloves are designed to provide excellent grip and a locked-in feel, featuring a lightweight, breathable knit construction and strategically placed padding.",
  price: 60,
  category: "Men's Accessories",
  size: "M",
  color: "Black/White",
})

p29.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a9951729-c004-45f2-ac74-89c5693d6060/vapor-jet-7-football-gloves-1-pair-ShhnmB.png'), filename: 'vapor-knit-football-gloves.png')

p30 = Product.create!({
  name: "Nike Sportswear Tech Fleece Scarf",
  description: "The Nike Sportswear Tech Fleece Scarf is made with soft, lightweight fleece for warmth and comfort, featuring a versatile design that can be worn multiple ways.",
  price: 45,
  category: "Men's Accessories",
  size: "One Size",
  color: "Black",
})

p30.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd7c9754-4951-40b8-bd45-a47628705883/sport-scarf-3hkHf7.png'), filename: 'tech-fleece-scarf.png')

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

p31.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8645801f-3570-4366-91c6-64f78714215c/sportswear-heritage86-futura-washed-hat-9xDxge.png'), filename: 'heritage86-futura-washed-cap-pink.png')

# Product 32
p32 = Product.create!({
  name: "Nike Women's Lightweight Training Gloves",
  description: "The Nike Women's Lightweight Training Gloves are designed for a comfortable, supportive fit during your workout, featuring a breathable construction and a secure wrist strap.",
  price: 20,
  category: "Women's Accessories",
  size: "M",
  color: "Black",
})

p32.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e21582b9-2a79-43b5-aad0-d9fa029e26b0/accelerate-womens-running-gloves-8VK3XC.png'), filename: 'womens-lightweight-training-gloves.png')

# Product 33
p33 = Product.create!({
  name: "Nike Women's Everyday Training Socks",
  description: "The Nike Women's Everyday Max Cushioned Training Crew Socks feature sweat-wicking fabric and cushioning for all-day comfort during your workouts.",
  price: 20,
  category: "Women's Accessories",
  size: "M",
  color: "White",
})

p33.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4d6c67c0-7d6c-47c9-b610-d816c8b42bff/everyday-plus-cushioned-training-crew-socks-3-pairs-kt8drs.png'), filename: 'womens-training-crew-socks.png')

p34 = Product.create!({
  name: "Nike Gym Club Training Duffel Bag",
  description: "The Nike Gym Club Training Duffel Bag is designed to keep all your gear organized and easily accessible, featuring a spacious main compartment, multiple zippered pockets, and a durable, water-repellent finish.",
  price: 35,
  category: "Women's Accessories",
  size: "One Size",
  color: "Black",
})

p34.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/36387f61-5a00-42cf-b053-b4cf7908140f/one-club-womens-training-duffel-bag-24l-sMgH5x.png'), filename: 'gym-club-training-duffel-bag.png')

# Product 35
p35 = Product.create!({
  name: "Nike Women's Essential Running Jacket",
  description: "The Nike Women's Essential Running Jacket is lightweight and water-repellent, designed to keep you comfortable and dry during your run. It features a packable design for easy storage when you're on the go.",
  price: 90,
  category: "Women's Accessories",
  size: "M",
  color: "Black",
})

p35.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e8e30c64-0ec8-4adc-8e6b-a6a4c9d2f55f/essential-womens-running-jacket-JzkDMn.png'), filename: 'womens-essential-running-jacket.png')

p36 = Product.create!({
  name: "Nike Air Zoom Victory Tour 3 NRG Men's Golf Shoes",
  description: "The Nike Air Zoom Victory Tour 3 NRG Men's Golf Shoes offer exceptional comfort and support on the course. With a Zoom Air unit and React cushioning, these shoes provide a responsive and stable ride.",
  price: 200,
  category: "Men's Shoes",
  size: "M",
  color: "Multi-Color",
})

p36.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8b2d1313-3a3d-4cc9-b877-865f5a13be03/air-zoom-victory-tour-3-nrg-mens-golf-shoes-pgZWf5.png'), filename: 'air-zoom-victory-tour-3-nrg.png')

p37 = Product.create!({
  name: "Nike Air Zoom Infinity Tour NEXT% NRG Golf Shoes",
  description: "The Nike Air Zoom Infinity Tour NEXT% NRG Golf Shoes are designed for maximum performance on the golf course. Featuring a responsive Zoom Air unit and innovative traction pattern, these shoes provide exceptional stability and grip.",
  price: 180,
  category: "Men's Shoes",
  size: "M",
  color: "Yellow",
})

p37.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e3ffb91f-6db1-49b3-b756-a8353e163101/air-zoom-infinity-tour-next-nrg-golf-shoes-Qz3VFg.png'), filename: 'air-zoom-infinity-tour-next-nrg.png')

p38 = Product.create!({
  name: "Nike Dri-FIT Tour Men's Golf Polo",
  description: "Stay comfortable and stylish on the golf course with the Nike Dri-FIT Tour Men's Golf Polo. Made with moisture-wicking Dri-FIT technology, this polo keeps you dry and cool throughout your round.",
  price: 80,
  category: "Men's Tops",
  size: "M",
  color: "Green",
})

p38.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fa3d98b6-758b-4c6d-81ac-7228d05bba11/dri-fit-tour-mens-golf-polo-TZ9f24.png'), filename: 'dri-fit-tour-mens-golf-polo.png')

p39 = Product.create!({
  name: "Nike Dri-FIT Repel Men's 5-Pocket Slim Fit Golf Pants",
  description: "The Nike Dri-FIT Repel Men's 5-Pocket Slim Fit Golf Pants provide a sleek and modern look for the golf course. With Dri-FIT technology and a water-repellent finish, these pants offer both comfort and functionality.",
  price: 95,
  category: "Men's Bottoms",
  size: "M",
  color: "Black",
})

p39.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/80100db3-a5e8-414e-adb4-93f0c015d665/dri-fit-repel-mens-5-pocket-slim-fit-golf-pants-CL61FV.png'), filename: 'dri-fit-repel-mens-golf-pants.png')

p40 = Product.create!({
  name: "Nike Infinity Ace Next Nature NRG Golf Shoes",
  description: "The Nike Infinity Ace Next Nature NRG Golf Shoes are crafted with sustainable materials and offer excellent traction and support on the golf course. The unique design provides a comfortable fit for all-day wear.",
  price: 120,
  category: "Men's Shoes",
  size: "M",
  color: "White",
})

p40.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/739e01eb-64da-4a03-a072-c72ef711fe12/infinity-ace-next-nature-nrg-golf-shoes-p010rD.png'), filename: 'infinity-ace-next-nature-nrg.png')

p41 = Product.create!({
  name: "Nike Air Max 1 '86 OG G NRG Men's Golf Shoes",
  description: "The Nike Air Max 1 '86 OG G NRG Men's Golf Shoes offer a classic look with modern performance. Featuring Air Max cushioning and a durable outsole, these shoes provide exceptional comfort and traction on the course.",
  price: 170,
  category: "Men's Shoes",
  size: "M",
  color: "Multi-Color",
})

p41.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/70bc17fe-951a-439a-8641-a3f9a4208a56/air-max-1-86-og-g-nrg-mens-golf-shoes-Hgntt1.png'), filename: 'air-max-1-86-og-g-nrg.png')

p42 = Product.create!({
  name: "Nike Air Hybrid Energy Golf Bag",
  description: "The Nike Air Hybrid Energy Golf Bag offers ample storage and organization for all your golfing essentials. With a lightweight design and comfortable carrying system, this bag is perfect for the golfer on the go.",
  price: 295,
  category: "Men's Accessories",
  size: "One Size",
  color: "Multi-Color",
})

p42.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5953af83-5757-470b-9b73-71a51b273286/air-hybrid-energy-golf-bag-k492nJ.png'), filename: 'air-hybrid-energy-golf-bag.png')

p43 = Product.create!({
  name: "Jordan Fadeaway 6-Way Golf Bag",
  description: "The Jordan Fadeaway 6-Way Golf Bag provides stylish storage for all your golf gear. With a six-way top divider and multiple pockets, this golf bag offers organized storage and easy access to your essentials.",
  price: 360,
  category: "Golf Bags",
  size: "One Size",
  color: "Black",
})

p43.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/40c8fac6-a09d-4d36-acae-cc8581142b27/jordan-fadeaway-6-way-golf-bag-h8qqBv.png'), filename: 'jordan-fadeaway-6-way-golf-bag.png')

p44 = Product.create!({
  name: "Nike G-Flex Stretch Woven Belt",
  description: "The Nike G-Flex Stretch Woven Belt offers a comfortable fit and a stylish look for any golfer. With its stretchy woven design and G-Flex technology, this belt moves with you for ultimate comfort and performance.",
  price: 55,
  category: "Men's Accessories",
  size: "One Size",
  color: "Gray",
})

p44.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/17e7087d-4667-489d-9e72-894a059f30a2/g-flex-stretch-woven-belt-9Kv97g.png'), filename: 'g-flex-stretch-woven-belt.png')

p45 = Product.create!({
  name: "Air Jordan 1 Low G Golf Shoes",
  description: "The Air Jordan 1 Low G Golf Shoes combine iconic style with performance features for the golf course. With a responsive cushioning system and a durable outsole, these shoes provide excellent comfort and traction during your round.",
  price: 140,
  category: "Men's Shoes",
  size: "M",
  color: "Black",
})

p45.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1398e462-df70-41ac-8ac9-865153dd7325/air-jordan-1-low-g-golf-shoes-jChrQ3.png'), filename: 'air-jordan-1-low-g-golf-shoes.png')

p46 = Product.create!({
  name: "Nike Cortez Women's Shoes",
  description: "The Nike Cortez Women's Shoes offer a classic, timeless design with a comfortable fit. Featuring a lightweight upper and a cushioned midsole, these shoes provide all-day comfort and style.",
  price: 85,
  category: "Women's Shoes",
  size: "M",
  color: "White",
})

p46.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c9d2720e-d75b-4532-96ad-350b79f4c963/cortez-womens-shoes-f9qMXB.png'), filename: 'nike-cortez-womens-shoes.png')

p47 = Product.create!({
  name: "Nike Cortez Men's Shoes",
  description: "The Nike Cortez Men's Shoes are an iconic silhouette with a comfortable and stylish design. Featuring a lightweight upper and a cushioned midsole, these shoes are perfect for everyday wear.",
  price: 100,
  category: "Men's Shoes",
  size: "M",
  color: "White",
})

p47.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/48979f39-1f45-4fa6-9b16-217e3e6f9556/cortez-mens-shoes-DHDh56.png'), filename: 'nike-cortez-mens-shoes.png')

p48 = Product.create!({
  name: "Nike Cortez SP Men's Shoes",
  description: "The Nike Cortez SP Men's Shoes offer a premium take on the classic silhouette. With upgraded materials and a sleek design, these shoes provide a stylish and comfortable option for daily wear.",
  price: 130,
  category: "Men's Shoes",
  size: "M",
  color: "Multi-Color",
})

p48.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a6c8399-3350-4835-8646-605ae0de54bd/cortez-sp-mens-shoes-s4Q44T.png'), filename: 'nike-cortez-sp-mens-shoes.png')

p49 = Product.create!({
  name: "Nike Cortez SE Women's Shoes",
  description: "The Nike Cortez SE Women's Shoes feature a modern twist on the classic silhouette. With unique design elements and a comfortable fit, these shoes are perfect for adding a touch of style to your everyday wardrobe.",
  price: 100,
  category: "Women's Shoes",
  size: "M",
  color: "Pink",
})

p49.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2a8cb2be-b60b-46d8-807b-b25b8f22f043/cortez-se-womens-shoes-TxCj3v.png'), filename: 'nike-cortez-se-womens-shoes.png')

p50 = Product.create!({
  name: "Nike Lunar Cortez Baseball Baseball Cleats",
  description: "The Nike Lunar Cortez Baseball Cleats combine the iconic Cortez design with performance features for the baseball field. With a Lunarlon cushioning system and a durable outsole, these cleats provide exceptional comfort and traction during play.",
  price: 63.97,
  category: "Men's Shoes",
  size: "M",
  color: "White",
})

p50.photo.attach(io: URI.open('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bf34ef35-5fb1-4451-8238-3b022cc64d13/lunar-cortez-baseball-baseball-cleats-Ld2GZ3.png'), filename: 'nike-lunar-cortez-baseball-cleats.png')


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