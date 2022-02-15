require 'rails_helper'

RSpec.describe "plants/edit", type: :view do
  before(:each) do
    @plant = assign(:plant, Plant.create!(
      name: "MyString",
      price: "9.99",
      description: "MyString",
      icon: "MyString"
    ))
  end

  it "renders the edit plant form" do
    render

    assert_select "form[action=?][method=?]", plant_path(@plant), "post" do

      assert_select "input[name=?]", "plant[name]"

      assert_select "input[name=?]", "plant[price]"

      assert_select "input[name=?]", "plant[description]"

      assert_select "input[name=?]", "plant[icon]"
    end
  end
end
