def on_button_pressed_a():
    Pixel_Array.range(0, 2).show_color(neopixel.colors(NeoPixelColors.WHITE))
    Pixel_Array.range(3, 2).show_color(neopixel.colors(NeoPixelColors.WHITE))
    pins.servo_write_pin(AnalogPin.P1, 0)
    pins.servo_write_pin(AnalogPin.P2, 180)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    pins.servo_write_pin(AnalogPin.P1, 90)
    pins.servo_write_pin(AnalogPin.P2, 90)
    basic.show_icon(IconNames.HAPPY)
    Pixel_Array.show_bar_graph(90, 180)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    Pixel_Array.range(0, 2).show_color(neopixel.colors(NeoPixelColors.RED))
    Pixel_Array.range(3, 2).show_color(neopixel.colors(NeoPixelColors.RED))
    pins.servo_write_pin(AnalogPin.P1, 180)
    pins.servo_write_pin(AnalogPin.P2, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

Pixel_Array: neopixel.Strip = None
Pixel_Array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)