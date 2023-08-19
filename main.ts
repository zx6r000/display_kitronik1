let RollReading = 0
basic.showIcon(IconNames.Happy)
basic.pause(10000)
basic.forever(function () {
    RollReading = input.rotation(Rotation.Roll)
    kitronik_VIEW128x64.show(RollReading, 1, kitronik_VIEW128x64.ShowAlign.Left, kitronik_VIEW128x64.FontSelection.Normal)
    kitronik_VIEW128x64.plot(RollReading)
})
