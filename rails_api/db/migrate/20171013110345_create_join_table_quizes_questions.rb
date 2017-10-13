class CreateJoinTableQuizesQuestions < ActiveRecord::Migration[5.1]
  def change
    create_join_table :quizes, :questions do |t|
      # t.index [:quize_id, :question_id]
      # t.index [:question_id, :quize_id]
    end
  end
end
