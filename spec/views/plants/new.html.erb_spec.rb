require 'rails_helper'

RSpec.describe "plants/new", type: :view do
  before(:each) do
    assign(:plant, Plant.new(
      name: "MyString",
      price: "9.99",
      description: "MyString",
      icon: "MyString"
    ))
  end

  it "renders new plant form" do
    render

    assert_select "form[action=?][method=?]", plants_path, "post" do

      assert_select "input[name=?]", "plant[name]"

      assert_select "input[name=?]", "plant[price]"

      assert_select "input[name=?]", "plant[description]"

      assert_select "input[name=?]", "plant[icon]"
    end
  end
end
