class CreateQuizzes < ActiveRecord::Migration[5.1]
  def change
    create_table :quizzes do |t|
      t.string :name
      t.string :image
      t.string :creator
      t.text :description

      t.timestamps
    end
  end
end
