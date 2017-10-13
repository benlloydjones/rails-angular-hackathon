class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :jeopardy_id, :question, :answer, :value
  has_many :quizzes
end
