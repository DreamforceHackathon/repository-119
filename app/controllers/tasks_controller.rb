class TasksController < ApplicationController
  skip_before_filter :verify_authenticity_token
  def index
    if params[:employee_id]
      render :json => Task.where(employee_id: params[:employee_id].to_i)
    else
      render :json => Task.all
    end
  end

  def create
    name = params[:name]
    description = params[:description]
    weightage = params[:weightage] || 5
    if (due_date = params[:due_date])
      if due_date == 'today'
        due_date = Time.now()
      elsif due_date == 'tomorrow'
        due_date == Time.now() + 1.day
      else due_date == 'later'
        due_date = Time.now() + 5.days
      end
    else
      due_date = Time.now() + 5.days
    end
    status = 'active'
    employee = params[:assignee] || 'John Varghese'
    employee = Employee.where(name: employee)
    employee = Employee.where(name: 'John Varghese') if employee.size == 0
    Task.create(name: name, description: description, status: status,
                employee: employee.first, weightage: weightage.to_i,
                due_date: due_date)
    TaskDispatcher.new(employee.first.id).resort
    head 200
  end

  def index
  end

  def show
    id = params[:id]
    render :json => Task.find(id.to_i)
  end
  
  def update
    id = params[:id]
    task = Task.find(id.to_i)
    return head 302 unless task
    task.name = params[:name] if params[:name]
    task.description = params[:description] if params[:description]
    task.status = params[:status] if params[:status]
    current_date = Time.now()
    current_date += current_date.seconds_until_end_of_day.seconds
    if (due_date = params[:due_date])
      if due_date == 'today'
        due_date = current_date
      elsif due_date == 'tomorrow'
        due_date == current_date + 1.day
      else due_date == 'later'
        due_date = current_date + 5.days
      end
      task.due_date = due_date
    else
      task.due_date = current_date + 5.days
    end
    task.weightage = params[:weightage].to_i if params[:weightage]
    employee = params[:assignee] || 'John Varghese'
    employee = Employee.where(name: employee)
    employee = Employee.where(name: 'John Varghese') if employee.size == 0
    task.employee = employee
    task.save
    TaskDispatcher.new(employee.first.id).resort
    head 200
  end

  def destroy
    id = params[:id]
    task = Task.find(id.to_i)
    return head 302 unless task
    task.destroy
    head 200
  end
end
