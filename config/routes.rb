Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    %w{ home about blog testing videos photos terms-of-use privacy-policy}.each do |type|
    	get "/#{type}", to: "pages#get_page", :type => type
  	end

  	post "contact", to: "pages#contact"
  	root "pages#get_page"
end
