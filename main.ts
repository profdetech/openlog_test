input.onButtonPressed(Button.A, function () {
    repere += 1
})
serial.redirect(
SerialPin.P14,
SerialPin.P0,
BaudRate.BaudRate4800
)
let repere = 0
while (!(input.buttonIsPressed(Button.A))) {
    basic.pause(100)
}
let entete = "temps" + ";" + "analogique" + ";" + "repere"
serial.writeLine(entete)
basic.showLeds(`
    . . # . .
    . . # . .
    # . # . #
    . # # # .
    . . # . .
    `)
basic.pause(500)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    entete = "" + input.runningTime() + ";" + pins.analogReadPin(AnalogPin.P1) + ";" + repere
    serial.writeLine(entete)
    basic.pause(100)
})
