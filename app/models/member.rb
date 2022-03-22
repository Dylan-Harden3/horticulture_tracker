# frozen_string_literal: true

class Member < ApplicationRecord
  validates :name, presence: true
  has_one_attached :avatar

  # has_many :points, dependent: :destroy
  # has_many :events, through: :points
end
