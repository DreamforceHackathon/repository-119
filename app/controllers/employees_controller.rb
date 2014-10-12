class EmployeesController < ApplicationController
  def show
    employee_id = params[:id] || 2
    @employee = Employee.find(employee_id.to_i)
    @tasks = Task.where(employee: @employee).order(
      quadrant: :desc, priority: :desc)
  end
  
  def edit
    task_id = params[:task_id]
    @task = Task.find(task_id.to_i)
  end
end
