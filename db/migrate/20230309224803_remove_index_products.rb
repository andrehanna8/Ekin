class RemoveIndexProducts < ActiveRecord::Migration[7.0]
  def change
    remove_index :products, :category
    add_index :products, :category
  end
end
