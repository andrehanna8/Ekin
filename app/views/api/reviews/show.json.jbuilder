json.review do
    json.extract! @review, :rating, :title, :body, :product_id, :id, :user_id, :created_at
end