# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  price       :integer          not null
#  category    :string           not null
#  size        :string           not null
#  color       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
    validates :name, :description, :price, :category, presence: true
    validates :price, numericality: { greater_than: 0 }
    validates :name, uniqueness: true
    
    has_one_attached :photo

    has_many :reviews,
        foreign_key: :product_id,
        class_name: :Review

        def self.search(query)
            result = where("name ILIKE :query OR description ILIKE :query OR CAST(price AS TEXT) ILIKE :query OR category ILIKE :query", query: "%#{query}%")
            puts "Searching for: #{query}"
            puts "Result: #{result.inspect}"
            result
        end
end
