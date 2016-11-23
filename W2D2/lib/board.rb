class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14){[]}
    @name1 = name1
    @name2 = name2
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    @cups.size.times do |i|
      if (i >= 0 && i <= 5) || (i >= 7 && i <= 12)
        4.times{ @cups[i] << :stone}
      end
    end

  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if (start_pos < 1 || start_pos > 12)
    raise "Invalid starting cup" if start_pos == 13 || start_pos == 6
    raise "Invalid starting cup" if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    num_stones = @cups[start_pos].size
    @cups[start_pos] = []
    current_pos = start_pos
    num_stones.times do
      current_pos += 1
      if current_player_name == @name1
        current_pos -= 13 if current_pos == 13
      elsif current_player_name == @name2
        current_pos -= 14 if current_pos == 14
        current_pos -= 7 if current_pos == 6
      end
      @cups[current_pos] << :stone
    end
    render
    next_turn(current_pos)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
    return :prompt if ending_cup_idx == 6 || ending_cup_idx == 13
    @cups[ending_cup_idx].size == 1 ? :switch : ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups[0..5].all?{|cup| cup.empty?} || @cups[7..12].all?{|cup| cup.empty?}
  end

  def winner
    case @cups[6] <=> @cups[13]
    when 1
      @name1
    when 0
      :draw
    when -1
      @name2
    end
  end
end
