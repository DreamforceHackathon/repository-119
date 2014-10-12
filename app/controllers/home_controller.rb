class HomeController < ApplicationController
  def index
    @employee = Employee.find(2)
    @tasks = Task.where(employee: @employee).order(
      quadrant: :desc, priority: :desc)
  end
end
