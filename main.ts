namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
	
})
let mySprite = sprites.create(img`
    . . . 3 . 3 3 3 . . . . . . . . 
    . . . 3 3 3 3 3 3 . . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . 3 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . . 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 3 3 . . 
    . . . . . . 3 3 3 3 3 3 3 3 . . 
    . . . . . . 3 3 3 3 3 3 3 3 . . 
    . . . . . . . . 3 . 3 . . . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 . . . . . . . . . 
    . . . 2 2 2 2 2 2 . . . . . . . 
    . . 2 2 2 2 2 2 2 2 . . . . . . 
    . . 2 2 2 2 2 2 2 2 . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.NPC)
forever(function () {
    pause(1000)
    mySprite2.setVelocity(randint(-50, 50), randint(-50, 50))
})
forever(function () {
    scene.cameraFollowSprite(mySprite)
})
