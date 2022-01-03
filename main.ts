function run(p1: number, p2: number) {
    pins.servoWritePin(AnalogPin.P1, p1)
    pins.servoWritePin(AnalogPin.P2, p2)
    basic.pause(250)
}
input.onButtonPressed(Button.A, function () {
    run(180, 90)
    run(90, 180)
    run(0, 180)
    run(0, 90)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
input.onButtonPressed(Button.B, function () {
    Pixel_Array.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Red))
    Pixel_Array.range(3, 2).showColor(neopixel.colors(NeoPixelColors.Red))
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 0)
})
let Pixel_Array: neopixel.Strip = null
Pixel_Array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)

let motors = [
    [ 90,  90],
    [100,  80],
    [110,  70],
    [120,  60],
    [130,  50],
    [140,  40],
    [150,  30],
    [160,  20],
    [170,  10],
    [180,   0],
]
let motori = 0
loops.everyInterval(250, function () {
    motori++
    if (motori == motors.length) {
        motori = 0;
    }
    run(motors[motori][0], motors[motori][1])
})

let colors = [NeoPixelColors.Red, NeoPixelColors.Blue];
let colori = 0
loops.everyInterval(250, function () {
    colori++
    if (colori == colors.length) {
        colori = 0;
    }
    Pixel_Array.range(0, 2).showColor(neopixel.colors(colors[colori]))
    Pixel_Array.range(3, 2).showColor(neopixel.colors(colors[colori]))
})
