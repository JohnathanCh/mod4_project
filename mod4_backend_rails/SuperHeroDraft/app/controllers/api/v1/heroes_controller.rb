class Api::V1::HeroesController < ApplicationController

  def index
    # @heroes = Hero.all
    render json: Hero.all
  end

end
