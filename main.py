def on_forever():
    pass
basic.forever(on_forever)

def on_forever2():
    for index in range(4):
        led.plot(0, 0)
        basic.pause(100)
        led.unplot(0, 0)
        basic.pause(100)
basic.forever(on_forever2)
input.button_is_pressed(Button.A)
if True:
    pass
    basic.show_leds("""
    . . . . .
    . . . . .
    . . # # .
    . . . . .
    . . . . .
    """)