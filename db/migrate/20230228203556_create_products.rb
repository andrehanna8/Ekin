class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.integer :price, null: false
      t.string :category, null: false
      t.string :size, null: false
      t.string :color, null: false

      t.timestamps
    end
    add_index :products, :category,  unique: true

  end
end
