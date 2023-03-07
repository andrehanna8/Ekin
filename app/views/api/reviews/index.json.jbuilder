
@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, :user_id, :product_id, :rating, :title, :body, :id, :created_at
    end
end