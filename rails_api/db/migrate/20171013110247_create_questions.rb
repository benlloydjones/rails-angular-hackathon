class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.integer :jeopardy_id
      t.text :question
      t.string :answer
      t.integer :value

      t.timestamps
    end
  end
end
