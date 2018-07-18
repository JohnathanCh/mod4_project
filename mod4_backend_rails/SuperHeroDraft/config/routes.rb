Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :heroes, only: [:index, :show]
      
      resources :teams, only: [:index, :create, :show]

      post '/login', to: "sessions#create"
      post '/sessions/:id', to: "sessions#destroy"
    end
  end
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
