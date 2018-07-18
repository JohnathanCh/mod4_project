class CreateHeros < ActiveRecord::Migration[5.2]
  def change
    create_table :heros do |t|
      t.string :name
      t.integer :intelligence
      t.integer :strength
      t.integer :speed
      t.integer :durability
      t.integer :power
      t.integer :combat
      
      t.string :full_name
      t.string :birth_place
      
      t.string :gender
      t.string :race

      t.string :image

      t.belongs_to :team

      t.timestamps
    end
  end
end
