class CreateEligibleAdmins < ActiveRecord::Migration[6.1]
  def change
    create_table :eligible_admins do |t|
      t.string :email

      t.timestamps
    end
  end
end
