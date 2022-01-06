class Game < ApplicationRecord
  belongs_to :platform

  validates :title, :rating, :image, presence: true
end
