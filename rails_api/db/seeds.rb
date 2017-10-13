# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
[Quiz, Question].each do |model|
  ActiveRecord::Base.connection.execute("TRUNCATE #{model.table_name} RESTART IDENTITY CASCADE")
end

[{
  name: 'My Big Fat Seedy Quiz',
  image: "http://images.pitchero.com/ui/547726/image_5831c5c0706b9.jpg",
  creator: "Alex",
  description: "A really good quiz with really good stuff in it!!"
}].each do |quiz|
  Quiz.create!(quiz)
end

[{
  jeopardy_id: 1000000,
  question: "Who wears the snazziest t-shirt?",
  answer: "Señor Bradley",
  value: 100
}].each do |question|
  Question.create!(question)
end
