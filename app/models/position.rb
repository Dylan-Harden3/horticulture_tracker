class Position < ApplicationRecord
	belongs_to:member
	validates :ID, presence: true
	validates :memberID, presence: true
	validates :position_name, presence: true
end
