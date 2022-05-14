input.onButtonPressed(Button.A, function () {
    escala = 255
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    escala = 128
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
})
let escala = 0
escala = 255
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    # # # # #
    # . . . #
    `)
basic.forever(function () {
    if (escala == 255) {
        pins.servoWritePin(AnalogPin.P0, 180 - input.soundLevel() / 1.42)
    } else {
        if (input.soundLevel() > 128) {
            pins.servoWritePin(AnalogPin.P0, 0)
        } else {
            pins.servoWritePin(AnalogPin.P0, 180 - input.soundLevel() / 0.71)
        }
    }
})
basic.forever(function () {
    if (input.soundLevel() > escala * 0.3 && input.soundLevel() < escala * 0.5) {
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
    }
    if (input.soundLevel() > escala * 0.5 && input.soundLevel() < escala * 0.7) {
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
    if (input.soundLevel() > escala * 0.7) {
        pins.digitalWritePin(DigitalPin.P11, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
})
