class AddPasswordToTeams < ActiveRecord::Migration[5.2]
  def change
    add_column :teams, :password, :string
  end
end
