class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false 
      t.integer :product_id, null: false
      t.integer :rating, null: false
      t.string :title, null: false
      t.string :body, null: false

      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :product_id
  end
end
