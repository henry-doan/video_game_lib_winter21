class Api::GamesController < ApplicationController
  before_action :set_platform
  before_action :set_game, only: [:show, :update, :destroy]

  def index 
    render json: @platform.games
  end

  def show
    render json: @game
  end

  def create 
    @game = @platform.games.new(game_params)
    if @game.save
      render json: @game
    else
      render json: { errors: @game.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @game.update(game_params)
      render json: @game
    else
      render json: { errors: @game.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @game.destroy
    render json: { message: "Game deleted" }
  end

  private
    def game_params
      params.require(:game).permit(:title, :rating, :image)
    end

    def set_platform
      @platform = Platform.find(params[:platform_id])
    end

    def set_game
      @game = @platform.games.find(params[:id])
    end
end
