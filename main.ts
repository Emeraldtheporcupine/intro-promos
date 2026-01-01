namespace SpriteKind {
    export const Animation = SpriteKind.create()
}
let mySprite = sprites.create(assets.image`blank`, SpriteKind.Animation)
mySprite.setScale(4, ScaleAnchor.Middle)
mySprite.setPosition(47, 42)
music.play(music.createSong(assets.song`The Song Intro`), music.PlaybackMode.UntilDone)
music.play(music.createSong(assets.song`The Song`), music.PlaybackMode.LoopingInBackground)
animation.runImageAnimation(
mySprite,
assets.animation`Makecode Promo`,
100,
false
)
timer.after(10000, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Gelbs Promo`,
    100,
    false
    )
    timer.after(10000, function () {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Greedy Pirates Promo`,
        100,
        false
        )
    })
})
