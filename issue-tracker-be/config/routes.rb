Rails.application.routes.draw do

  root "issues#index"

  namespace :api do 
    namespace :v1 do 
      resources :issues
    end
  end

   

  get '*path', to: "issues#index", via: :all

  # this will route requests that aren't for exisitng paths that are predefined in the API back to the root path. 

  # helps when using react router, helps to handle routing to react components without interfering with the rails routes to the API. 
  
end
