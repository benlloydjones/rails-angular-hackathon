class QuizSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :creator, :description
  has_many :questions
end
