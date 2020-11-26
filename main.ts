input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    basic.showLeds(`
        # . # . #
        # . # . .
        # # # . #
        # . # . #
        # . # . #
        `)
    basic.clearScreen()
    basic.pause(1000)
    basic.showString("welcome")
})
input.onButtonPressed(Button.B, function () {
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(2000)
    basic.showString(" bye ")
    basic.pause(1000)
    basic.showArrow(ArrowNames.South)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . # . .
        # . . . #
        # # # # #
        `)
})
