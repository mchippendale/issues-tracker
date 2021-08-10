class Issue < ApplicationRecord
    validates :title, presence: true
    validates :description, presence: true
    validates :status, presence: true
    
end
