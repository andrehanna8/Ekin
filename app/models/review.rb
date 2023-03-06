class Review < ApplicationRecord
    validates :user_id, :product_id, :rating, :title, presence: true
    validates :rating, numericality: { greater_than: 0, less_than: 6 }
    validates :body, length: { maximum: 500 }

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product

end
