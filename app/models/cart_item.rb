class CartItem < ApplicationRecord
    validates :user_id, :product_id, :quantity, presence: true
    validates :quantity, numericality: { greater_than: 0 }

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
end
