
@products.each do |product|
    json.set! product.id do 
        json.extract! product, :name, :description, :price, :category, :size, :color, :id
    end
end