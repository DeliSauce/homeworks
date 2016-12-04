# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


parent_house = House.create(address: "580 7th street")

mom = Person.create(name: 'Kristy Delfausse', house_id: parent_house.id)
dad = Person.create(name: 'Kristy Delfausse', house_id: parent_house.id)
