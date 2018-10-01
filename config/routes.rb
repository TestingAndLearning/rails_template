Rails.application.routes.draw do
	root 'home_page#index'
	namespace :api do
		resources :books
	end
end
