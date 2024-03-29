class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.string :title
      t.text :body
      t.belongs_to :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
