class Hero < ApplicationRecord
    belongs_to :team, optional: true
end
