require 'test_helper'

class JeopardyControllerTest < ActionDispatch::IntegrationTest
  test "should get questions" do
    get jeopardy_questions_url
    assert_response :success
  end

end
