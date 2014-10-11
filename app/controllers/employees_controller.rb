class EmployeesController < ApplicationController
  def index
    render :json => Task.all
  end

  def index
    render :json => Task.all
  end

  def show
    id = params[:id]
    render :json => Employee.find(id.to_i)
  end
end
