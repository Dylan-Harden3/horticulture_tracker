require 'rails_helper'

RSpec.describe "positions/new", type: :view do
  before(:each) do
    assign(:position, Position.new(
      ID: "",
      memberID: "",
      position_name: "MyString"
    ))
  end

  it "renders new position form" do
    render

    assert_select "form[action=?][method=?]", positions_path, "post" do

      assert_select "input[name=?]", "position[ID]"

      assert_select "input[name=?]", "position[memberID]"

      assert_select "input[name=?]", "position[position_name]"
    end
  end
end
