module API
    module V1
      class Base < Grape::API
        mount API::V1::Events
        mount API::V1::Plants
      end
    end
  end