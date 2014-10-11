class TaskDispatcher
  def initialize empid
    @empid = empid
    resort
  end
  
  def resort
    tasks = Task.where(employee_id: @empid, status: 'active').order(:due_date)
    num_items = tasks.count
    tasks.each do |t|
      t.quadrant = t.weightage / 3
      t.priority = num_items
      num_items = num_items - 1
      t.save
    end
  end

end

