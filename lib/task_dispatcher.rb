class TaskDispatcher
  def initialize(empid)
    Rails.logger.info("Dispatching router for #{empid}")
    @empid = empid
    resort
  end
  
  def resort
    tasks = Task.where(employee_id: @empid, status: 'active').order(:due_date)
    num_items = tasks.count
    Rails.logger.info("Current task count is #{num_items}")
    tasks.each do |t|
      t.weightage ||= 1
      t.quadrant = (t.weightage-1)/25
      t.priority = num_items
      num_items = num_items - 1
      Rails.logger.info(
        "The new quadrant #{t.quadrant} and priority is #{t.priority}")
      t.save
    end
  end
end
