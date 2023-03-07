class Api::ProductsController < ApplicationController
    def index 
        @products = Product.all
        render :index
    end

    def show
        # debugger
        @product = Product.find(params[:id])
        render :show
    end
end
