class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @seq = []
    @game_over = false
  end

  def play
    until @game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    return if @game_over
    round_success_message
    @sequence_length += 1
  end

  def show_sequence
    add_random_color
    sleep(2)
    @seq.each.with_index do |color, i|
      system("clear")
      puts "Color #{i} is #{color}"
      sleep(2)
      system("clear")
    end
  end

  def require_sequence
    puts "Please enter your guesses separated by commas (no spaces):"
    guess = gets.chomp.split(",")
    @game_over = true unless guess == @seq
  end

  def add_random_color
    @seq << COLORS[rand(4)]
  end

  def round_success_message
    puts "Correct!"
  end

  def game_over_message
    puts "You lost"
  end

  def reset_game
    @seq = []
    @sequence_length = 1
    @game_over = false
  end
end

if $PROGRAM_NAME == __FILE__
  game = Simon.new
  game.play
end
