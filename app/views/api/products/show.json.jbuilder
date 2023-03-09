
json.product do 
    json.extract! @product, :name, :description, :price, :category, :size, :color, :id
    json.photoUrl url_for(@product.photo)
end

json.reviews do
    @product.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :rating, :title, :body, :product_id, :id, :user_id, :created_at
        end
    end
end

# response is jbuilder
#response has two slices

# reviews reducer should key into this to dela with this