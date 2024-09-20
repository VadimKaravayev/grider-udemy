defmodule Cards do
  @moduledoc """
    Card deck
  """

  @doc """
    Creates a new deck of cards.
  """
  @spec create_deck() :: [String.t()]
  def create_deck do
    suits = ["Spades", "Clubs", "Hearts", "Diamonds"]
    values = ["Ace", "King", "Queen", "Jack", "Ten"]

    for suit <- suits, value <- values do
      "#{value} of #{suit}"
    end
  end

  @spec shuffle([String.t()]) :: [String.t()]
  def shuffle(deck) do
    Enum.shuffle(deck)
  end

  @spec contains?(list(String.t()), String.t()) :: boolean()
  def contains?(deck, card) do
    Enum.member?(deck, card)
  end

  @spec deal([String.t()], integer()) :: {list(String.t()), list(String.t())}
  def deal(deck, hand_size) do
    Enum.split(deck, hand_size)
  end

  def save(deck, filename) do
    binary = :erlang.term_to_binary(deck)
    File.write(filename, binary)
  end

  def load(filename) do
    case File.read(filename) do
      {:ok, binary} -> :erlang.binary_to_term(binary)
      {:error, _} -> "File not found"
    end
  end

  @spec create_hand(integer()) :: {[String.t()], [String.t()]}
  def create_hand(hand_size) do
    Cards.create_deck()
    |> Cards.shuffle()
    |> Cards.deal(hand_size)
  end
end
