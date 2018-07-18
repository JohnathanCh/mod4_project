class HeroSerializer < ActiveModel::Serializer
  attributes :id, :name, :intelligence, :strength, :speed, :durability, :power, :combat, :full_name, :birth_place ,:gender, :race, :image, :team

end
