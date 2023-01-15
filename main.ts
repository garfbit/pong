input.onButtonPressed(Button.A, function () {
    Nave1.change(LedSpriteProperty.X, -1)
    Nave2.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Nave1.change(LedSpriteProperty.X, 1)
    Nave2.change(LedSpriteProperty.X, 1)
})
let Bola: game.LedSprite = null
let Nave2: game.LedSprite = null
let Nave1: game.LedSprite = null
Nave1 = game.createSprite(1, 4)
Nave2 = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    Bola = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        Bola.change(LedSpriteProperty.Y, 1)
        if (Bola.isTouching(Nave1) || Bola.isTouching(Nave2)) {
            basic.pause(100)
            Bola.delete()
            game.addScore(1)
        }
    }
    if (Bola.isTouchingEdge()) {
        game.gameOver()
    }
})
