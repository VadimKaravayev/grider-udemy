defmodule Identicon do
  def main(input) do
    input
    |> hash_input()
    |> create_image()
    |> build_grid()
    |> filter_odd_squares()
    |> build_pixel_map()
    |> draw_image()
    |> save_image(input)
  end

  def save_image(image, fileName) do
    File.write("#{fileName}.png", image)
  end

  def draw_image(%Identicon.Image{color: color, pixel_map: pixel_map}) do
    image = :egd.create(250, 250)
    fill = :egd.color(color)

    Enum.each(pixel_map, fn {start, stop} ->
      :egd.filledRectangle(image, start, stop, fill)
    end)

    :egd.render(image)
  end

  def build_pixel_map(%Identicon.Image{grid: grid} = image) do
    pixel_map =
      Enum.map(
        grid,
        fn {_, index} ->
          horizontal = rem(index, 5) * 50
          vertical = div(index, 5) * 50

          top_left = {horizontal, vertical}
          bottom_right = {horizontal + 50, vertical + 50}
          {top_left, bottom_right}
        end
      )

    %Identicon.Image{image | pixel_map: pixel_map}
  end

  def create_image([r, g, b | _] = hex) do
    %Identicon.Image{hex: hex, color: {r, g, b}}
  end

  def build_grid(%Identicon.Image{hex: hex} = image) do
    grid =
      hex
      |> Enum.chunk_every(3, 3, :discard)
      |> Enum.map(&mirror_row/1)
      |> List.flatten()
      |> Enum.with_index()

    %Identicon.Image{image | grid: grid}
  end

  def filter_odd_squares(%Identicon.Image{grid: grid} = image) do
    grid = Enum.filter(grid, fn {code, _} -> rem(code, 2) == 0 end)
    %Identicon.Image{image | grid: grid}
  end

  def mirror_row(row) do
    row
    |> Enum.reverse()
    |> tl()
    |> (fn reversed_row_tail -> Enum.concat(row, reversed_row_tail) end).()
  end

  def pick_color(image) do
    %Identicon.Image{hex: [r, g, b | _]} = image
    %Identicon.Image{image | color: {r, g, b}}
  end

  def hash_input(input) do
    :crypto.hash(:md5, input)
    |> :binary.bin_to_list()
  end
end
