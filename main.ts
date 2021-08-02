input.onButtonPressed(Button.A, function () {
    go = 0
})
input.onButtonPressed(Button.B, function () {
    go = 1
})
let go = 0
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
go = 0
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (go) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(1000)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
        basic.pause(500)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(1500)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(500)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    basic.pause(200)
})
