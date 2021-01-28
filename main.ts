let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB_RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(10)
    basic.pause(500)
    strip.show()
})
