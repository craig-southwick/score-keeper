let Team_1 = 0
let Tie = 0
let Team_2 = 0
input.onButtonPressed(Button.A, function () {
    Team_1 += 1
    basic.showString("team 1 got a point!")
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Tie += 1
    basic.showString("They tied!")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Team_2 += 1
    basic.showString("team 2 got a point!")
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Team 1")
    basic.showNumber(Team_1)
    basic.showString("tie")
    basic.showNumber(Tie)
    basic.showString("Team 2")
    basic.showNumber(Team_2)
    basic.clearScreen()
})
