class Api::SessionsController < ApplicationController
 
  def show
    @user = current_user
    if current_user
      render 'api/users/show'
    else  
      render json: {user: nil}
    end
  end

  def create
    @user = User.find_by_credentials(
      params[:credential],
      params[:password]
    )

    if @user 
      login!(@user)
      render 'api/users/show'
    else
      render json: {errors: ['The provided credentials were invalid.']}, status: :unauthorized
    end
  end

  def destroy
    CartItem.destroy_all
    logout!
    render json: {message: 'successfully logged out'}

  end
end
