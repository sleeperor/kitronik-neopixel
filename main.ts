input.onButtonPressed(Button.A, function () {
    Pixel_Array.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    Pixel_Array.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    Pixel_Array.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    Pixel_Array.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    Pixel_Array.setPixelColor(4, neopixel.colors(NeoPixelColors.White))
    Pixel_Array.show()
})
input.onButtonPressed(Button.B, function () {
    Pixel_Array.clear()
    Pixel_Array.show()
})
let Pixel_Array: neopixel.Strip = null
Pixel_Array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    basic.pause(100)
    Pixel_Array.rotate(1)
    Pixel_Array.show()
})
