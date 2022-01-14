Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :platforms do
      resources :games
    end

    resources :games, except: [:index, :show, :create, :update, :destroy] do
      resources :notes
    end
  end
  
end
