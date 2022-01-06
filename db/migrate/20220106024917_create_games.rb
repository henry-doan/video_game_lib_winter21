class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :rating
      t.string :image
      t.belongs_to :platform, null: false, foreign_key: true

      t.timestamps
    end
  end
end
