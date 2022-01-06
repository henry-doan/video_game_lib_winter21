class Platform < ApplicationRecord
  belongs_to :user
  has_many :games, dependent: :destroy

  validates :name, presence: true
end
