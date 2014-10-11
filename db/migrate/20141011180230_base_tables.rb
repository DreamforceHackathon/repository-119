class BaseTables < ActiveRecord::Migration
  def change
    create_table :employees do |t|
      t.references :manager
      t.string "name"
      t.string "status"
      t.string "role"
    end 
    create_table :tasks do |t|
      t.belongs_to :employee
      t.string "name"
      t.text "description"
      t.string "status"
      t.integer "weightage"
    end
    
    manager = Employee.create(name: "Mark Benioff", status: "Active",
      role: "Employee")
    Employee.create(name: "John Varghese", status: "Active",
      role: "Employee", manager: manager)
    Employee.create(name: "Deep Thakkar", status: "Active",
      role: "Employee", manager: manager)
    Employee.create(name: "Brajeshwar Oinam", status: "Active",
      role: "Employee", manager: manager)
    Employee.create(name: "Franklin Silva", status: "Active",
      role: "Employee", manager: manager)
    Employee.create(name: "Sam Varghese", status: "Active",
      role: "Employee", manager: manager)
  end
end
