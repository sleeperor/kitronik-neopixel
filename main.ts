input.onButtonPressed(Button.A, function () {
    Pixel_Array.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Red))
    Pixel_Array.setPixelColor(2, neopixel.colors(NeoPixelColors.Violet))
    Pixel_Array.range(3, 2).showColor(neopixel.colors(NeoPixelColors.Green))
})
input.onButtonPressed(Button.B, function () {
    Pixel_Array.clear()
    Pixel_Array.show()
})
let Pixel_Array: neopixel.Strip = null
Pixel_Array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
	
})
