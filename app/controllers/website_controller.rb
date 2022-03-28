# frozen_string_literal: true

class WebsiteController < ApplicationController
  def index; end
  def plantsale 
    @plants = Plant.all
    @anuals = Plant.find_by growth: 'Annual'
    @perennials = Plant.find_by growth: 'Perennial'
    @flowers = Plant.find_by category: 'Flowers'
    @bushes = Plant.find_by category: 'Bushes'
    @trees = Plant.find_by category: 'Trees'
    @grasses = Plant.find_by category: 'Grasses'
    @succulents = Plant.find_by category: 'Succulents'
  end
end
