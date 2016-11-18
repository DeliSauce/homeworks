class Map
  def initialize
    @map = []
  end


  def assign(key, value)
    pair_index = @map.index {|pair| pair.first == key}
    pair_index ? @map[pair_index][1] = value : @map.push([key, value])
  end

  def lookup(key)
    @map.each do |pair|
      return pair.last if pair.first == key
    end
    nil
  end

  def remove(key)
    @map.each.with_index do |pair, idx|
      if pair.first == key
        @map.delete_at(idx)
        break
      end
    end
  end


  def show
    deep_dup(@map)
  end

  def deep_dup(arr)
    arr.map { |el| el.is_a?(Array) ? deep_dup(el) : el }
  end
end

map = Map.new
map.assign(1,2)
map.assign(2,3)
map.assign(3,4)
p map.show

map.assign(1,5)
p map.show

map.remove(1)
p map.show

map.remove(0)
p map.show

map.assign("charles","sam")
map.assign("mike",4)
map.assign(2,"mike")
p map.show
