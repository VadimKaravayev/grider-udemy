defmodule Cards do

  @moduledoc """
    Prodiving functions for creating and handling a deck of cards
  """

  @doc """
    Returns a list of strings representing a deck of playing cards
  """
  def create_deck do
    values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"]
    suits = ["Hearts", "Diamonds", "Clubs", "Spades"]

    for value <- values, suit <- suits do
      "#{value} #{suit}"
    end
  end

  def shuffle(deck) do
    Enum.shuffle(deck)
  end

  @doc ~S"""
    Determines whether a `deck` contains a given `card`

    ## Examples
        iex> deck = Cards.create_deck
        iex> Cards.contains? deck, "Ace Hearts"
        true

  """
  def contains?(deck, card) do
    Enum.member?(deck, card)
  end

  @doc ~S"""
    Divides a deck into a hand and the remainder of the deck.
    `hand_size` indicates how many cards should be in the hand

    ## Examples
        iex> deck = Cards.create_deck
        iex> {hand, deck} = Cards.deal(deck, 1)
        iex> hand
        ["Ace Hearts"]
  """
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
      {:error, _} -> "The file doesn't exist"
    end
  end

  def create_hand(hand_size) do
    Cards.create_deck
      |> Cards.shuffle
      |> Cards.deal(hand_size)
  end
end
