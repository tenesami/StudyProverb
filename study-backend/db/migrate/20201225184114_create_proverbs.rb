class CreateProverbs < ActiveRecord::Migration[6.0]
  def change
    create_table :proverbs do |t|
      t.string :topic
      t.text :content
      t.belongs_to :author, null: false, foreign_key: true

      t.timestamps
    end
  end
end
