class Animal

  attr_accessor :type
  def initialize(type = "animal")
    @type = type
  end

end

class Human < Animal

  attr_accessor :typing_sys
  def initialize(type)
    super

    @type = "hutype"
  end
end

peter = Human.new("human")
p peter.type
# p peter.typing_sys

class Municipality
  attr_reader :state

  def initialize(state = "California")
    @state = state
  end
end

class City < Municipality
  def initialize(name, state)
    @name = name
    super(state)
  end
end

class Town < Municipality
  def initialize(population)
    @population = population
    super
  end
end

class County < Municipality
  def change_state(new_state)
    self.state = new_state
  end
end

nyc = City.new("New York City", "New York")
oaktown = Town.new(500000)
marin = County.new


p nyc.state
p oaktown.state
p marin.state

#Immutable object within a mutible object
# thus dup is fine. If position were an Array
# it would not be fin.
class Pawn
  attr_accessor :position
  def initialize(pos)
    @position = pos
  end
end


pawn = Pawn.new(5)
pawn_copy = pawn.dup

pawn_copy.position = "CHANGED"
p pawn.position
