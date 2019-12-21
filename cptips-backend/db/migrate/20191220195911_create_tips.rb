class CreateTips < ActiveRecord::Migration[6.0]
  def change
    create_table :tips do |t|
      t.string :title
      t.text :content
      t.string :author
      t.string :tip_url

      t.timestamps
    end
  end
end
