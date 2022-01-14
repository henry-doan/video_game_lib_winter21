class Game < ApplicationRecord
  belongs_to :platform
  has_many :notes, dependent: :destroy

  validates :title, :rating, :image, presence: true
end
