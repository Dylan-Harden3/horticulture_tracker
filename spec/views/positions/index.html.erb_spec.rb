require 'rails_helper'

RSpec.describe "positions/index", type: :view do
  before(:each) do
    assign(:positions, [
      Position.create!(
        ID: "",
        memberID: "",
        position_name: "Position Name"
      ),
      Position.create!(
        ID: "",
        memberID: "",
        position_name: "Position Name"
      )
    ])
  end

  it "renders a list of positions" do
    render
    assert_select "tr>td", text: "".to_s, count: 2
    assert_select "tr>td", text: "".to_s, count: 2
    assert_select "tr>td", text: "Position Name".to_s, count: 2
  end
end
