class Product < ApplicationRecord
    validates :name, :description, :price, :category, presence: true
    validates :price, numericality: { greater_than: 0 }
    validates :name, uniqueness: true
    
    # has_one_attached :photo

    has_many :reviews,
        foreign_key: :product_id,
        class_name: :Review

end
