class Api::NotesController < ApplicationController
  before_action :set_game
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    render json: @game.notes
  end

  def show
    render json: @note
  end

  def create 
    @note = @game.notes.new(note_params)
    if @note.save
      render json: @note
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @note.destroy
    render json: { message: "Note Deleted" }
  end

  private
    def set_game
      @game = Game.find(params[:game_id])
    end

    def set_note
      @note = @game.notes.find(params[:id])
    end

    def note_params
      params.require(:note).permit(:title, :body)
    end
end
