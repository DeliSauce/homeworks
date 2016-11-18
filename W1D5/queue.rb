class Queue
  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue.push(el)
  end

  def dequeue
    @queue.shift
  end

  def show
    @queue
  end
end

test = Queue.new
test.enqueue(5)
test.enqueue(6)
test.enqueue(7)
p test.show # [5,6,7]
test.dequeue
test.dequeue
test.enqueue(8)
p test.show # [7,8]
