module Api
  class BooksController < ApplicationController
	load_and_authorize_resource
	before_action :authenticate_user!, except: [:index]

	def index
	  render json: Book.all
	end

	def new
	  @book = Book.new
	end

	def create
	  book = Book.new(book_create_params)
	  if book.save
	    render json: book
	  else
	    render nothing: true, status: :bad_request
	    end
	end

	def update
	  if @book.update(book_create_params)
	    render json: @book
	  else
	    render nothing: true, status: :unprocessable_entity
	  end
	end

	def show
	  @book = Book.find(params[:id])
	  render json: @book
	end

	def destroy
	  @book.destroy
	  head :no_content
	end

	private

	def article_params
	  params.permit(:book, :title, :author, :description, :pages, :published)
	end

  end
end