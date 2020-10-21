input.onButtonPressed(Button.B, function () {
    repere += 1
    basic.showNumber(repere)
})
let temps = 0
let repere = 0
serial.redirect(
SerialPin.P14,
SerialPin.P0,
BaudRate.BaudRate4800
)
repere = 0
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
let init = input.runningTime()
basic.clearScreen()
basic.forever(function () {
    temps = input.runningTime() - init
    entete = "" + temps + ";" + pins.analogReadPin(AnalogPin.P1) + ";" + repere
    serial.writeLine(entete)
    basic.pause(1)
})
