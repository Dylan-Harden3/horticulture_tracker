# frozen_string_literal: true

class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :category
end
