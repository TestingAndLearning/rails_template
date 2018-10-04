Rails.application.routes.draw do
  devise_for :users
	root 'home_page#index'
	namespace :api do
		resources :books
	end
end
