require 'rails_helper'

RSpec.describe "positions/edit", type: :view do
  before(:each) do
    @position = assign(:position, Position.create!(
      ID: "",
      memberID: "",
      position_name: "MyString"
    ))
  end

  it "renders the edit position form" do
    render

    assert_select "form[action=?][method=?]", position_path(@position), "post" do

      assert_select "input[name=?]", "position[ID]"

      assert_select "input[name=?]", "position[memberID]"

      assert_select "input[name=?]", "position[position_name]"
    end
  end
end
