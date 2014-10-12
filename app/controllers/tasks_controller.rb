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
    if params[:employee_id]
      employee_id = params[:employee_id]
      Task.create(name: name, description: description, status: status,
                  employee_id: employee_id.to_i, weightage: weightage.to_i,
                  due_date: due_date)
      TaskDispatcher.new(employee.to_i).resort
    else
      Task.create(name: name, description: description, status: status,
                  weightage: weightage.to_i, due_date: due_date)
    end
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
    if (due_date = params[:due_date])
      if due_date == 'today'
        due_date = Time.now()
      elsif due_date == 'tomorrow'
        due_date == Time.now() + 1.day
      else due_date == 'later'
        due_date = Time.now() + 5.days
      end
      task.due_date = due_date
    else
      task.due_date = Time.now() + 5.days
    end
    task.weightage = params[:weightage].to_i if params[:weightage]
    task.employee_id = params[:employee_id].to_i if params[:employee_id]
    task.save
    TaskDispatcher.new(employee.to_i).resort
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
