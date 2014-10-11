class AddColTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :quadrant, :integer 
    add_column :tasks, :priority, :integer 
    add_column :tasks, :due_date, :datetime
  end
end
