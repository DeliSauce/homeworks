class Stack
  def initialize
    @stack = []
  end

  def add(el)
    @stack.push(el)
  end

  def remove
    @stack.pop
  end

  def show
    @stack
  end

end

test = Stack.new
test.add(5)
test.add(6)
test.add(7)
p test.show # [5,6,7]
test.remove
test.remove
test.add(8)
p test.show # [5,8]
