# frozen_string_literal: true

class EligibleAdmin < ApplicationRecord
  validates :email, presence: true
end
