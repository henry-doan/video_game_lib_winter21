class Note < ApplicationRecord
  belongs_to :game

  validates :title, :body, presence: true
end
