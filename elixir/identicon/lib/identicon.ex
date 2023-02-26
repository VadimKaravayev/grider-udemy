defmodule Identicon do
  @moduledoc """
  `Identicon` generator.
  """

  def main(input) do
    input
    |> hash_input
    |> pick_color
    |> build_grid
    |> filter_odd_squares
    |> build_pixel_map
    |> draw_image
    |> save_image(input)
  end

  def save_image(image, input) do
    File.write("identicons/#{input}.png", image)
  end

  def draw_image(%Identicon.Image{color: color, pixel_map: pixel_map}) do
    image = :egd.create(250, 250)
    fill = :egd.color(color)

    Enum.each(
      pixel_map,
      fn {start, stop} ->
        :egd.filledRectangle(image, start, stop, fill)
      end
    )

    :egd.render(image)
  end

  def build_pixel_map(%Identicon.Image{grid: grid} = image) do
    Enum.map(
      grid,
      fn {_, index} ->
        {get_point_for_idx(0, 0, index), get_point_for_idx(50, 50, index)}
      end
    )
    |> (&%Identicon.Image{image | pixel_map: &1}).()
  end

  defp get_point_for_idx(x, y, idx) do
    compose = (fn i -> fn func -> func.(i, 5) * 50 end end).(idx)
    horizontal = compose.(&rem/2)
    vertical = compose.(&div/2)
    {horizontal + x, vertical + y}
  end

  def filter_odd_squares(%Identicon.Image{grid: grid} = image) do
    Enum.filter(grid, fn {code, _} ->
      rem(code, 2) === 0
    end)
    |> (&%Identicon.Image{image | grid: &1}).()
  end

  def build_grid(%Identicon.Image{hex: hex} = image) do
    hex
    |> Enum.chunk_every(3, 3, :discard)
    |> Enum.map(&mirror_row/1)
    |> List.flatten()
    |> Enum.with_index()
    |> (fn grid -> %Identicon.Image{image | grid: grid} end).()
  end

  def mirror_row(row), do: row ++ tl(Enum.reverse(row))

  def pick_color(%Identicon.Image{hex: [r, g, b | _]} = image),
    do: %Identicon.Image{image | color: {r, g, b}}

  def hash_input(input) do
    :crypto.hash(:md5, input)
    |> :binary.bin_to_list()
    |> (fn hex -> %Identicon.Image{hex: hex} end).()
  end
end
