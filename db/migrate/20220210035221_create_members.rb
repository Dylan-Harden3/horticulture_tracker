class CreateMembers < ActiveRecord::Migration[6.1]
  def change
    create_table :members do |t|
      t.string :name
      t.string :events_attended

      t.timestamps
    end

    create_table :positions do |t|
    	t.belongs_to :member
    	t.integer :ID
    	t.integer :memberID
        t.string :position_name
      	t.timestamps
  end
end
