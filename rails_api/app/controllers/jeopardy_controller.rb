class JeopardyController < ApplicationController
  #possibility of bugs arising from params values
  def questions
    questionArray = HTTParty.get("http://jservice.io/api/clues/", {
      query: {
        category: params[:category],
        value: params[:value],
        offset: params[:offset]
      },
      headers: {
        "Accept" => "application/json"
      }
      }).parsed_response

      render json: questionArray, status: :ok
      
  end
end
