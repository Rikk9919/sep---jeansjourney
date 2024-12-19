namespace SpriteKind {
    export const NPC5 = SpriteKind.create()
    export const NPC1 = SpriteKind.create()
    export const NPC2 = SpriteKind.create()
    export const NPC3 = SpriteKind.create()
    export const NPC4 = SpriteKind.create()
    export const HUND_NPC = SpriteKind.create()
    export const NPC6 = SpriteKind.create()
    export const NPC7 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (kan_jeg_gå_vidre == 1) {
        level_2()
    } else {
        game.showLongText("Jeg skal svare på et spørgsmål for at komme vidre, find en NPC", DialogLayout.Bottom)
    }
})
function placering_bukser () {
    buksertilsalg.setPosition(88, 160)
    buksertilsalg2.setPosition(140, 160)
    buksertilsalg3.setPosition(128, 63)
    buksertilsalg4.setPosition(180, 160)
    buksertilsalglys.setPosition(20, 220)
    buksertilsalglys2.setPosition(240, 220)
    buksertilsalglys3.setPosition(220, 240)
    buksertilsalglys4.setPosition(40, 240)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (kan_jeg_gå_vidre == 2) {
        level_3()
    } else {
        game.showLongText("Jeg skal svare på et spørgsmål for at komme vidre, find en NPC", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.field0, function (sprite, location) {
    mySprite.setImage(img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 2 2 2 4 4 4 b e . 
        . . e e 9 9 4 2 2 2 4 4 4 9 b e 
        . e 2 2 9 9 4 4 2 2 2 4 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f c b b f e e f c b b f . 
        . . . . f f f . . . . f f f . . 
        `)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (kan_jeg_gå_vidre == 0) {
        level_1()
    } else {
    	
    }
})
function level_7 () {
    tiles.setCurrentTilemap(tilemap`level19`)
    mySprite.setPosition(46, 5)
    sprites.destroyAllSpritesOfKind(SpriteKind.HUND_NPC)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC6)
    NPC7 = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f 5 5 5 5 f f . . 
        . f f 5 5 5 5 5 5 f f . 
        f f f 5 5 7 7 5 5 f f f 
        f f 5 5 7 5 5 7 5 5 f f 
        f f f f f f f f f f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f 7 5 5 5 5 7 f 4 e 
        4 d f 5 5 5 5 5 5 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.NPC7)
    tiles.placeOnTile(NPC7, tiles.getTileLocation(8, 11))
}
function Bukserbutik (mySprite: Sprite) {
    buksertilsalg = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f 5 f f f f . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    buksertilsalg2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f 5 f f f f . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    buksertilsalg3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f 5 f f f f . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    buksertilsalg4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f 5 f f f f . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . 8 8 8 . . 8 8 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    buksertilsalglys = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f f f 5 f f f f . . . . . . 
        . . 9 9 9 9 9 9 9 9 . . . . . . 
        . . 9 9 9 9 9 9 9 9 . . . . . . 
        . . 9 9 9 9 9 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    buksertilsalglys2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f f f 5 f f f f . . . . . . 
        . . 9 9 9 9 9 9 9 9 . . . . . . 
        . . 9 9 9 9 9 9 9 9 . . . . . . 
        . . 9 9 9 9 9 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    buksertilsalglys3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f f f 5 f f f f . . . . . . 
        . . 9 9 9 9 9 9 9 9 . . . . . . 
        . . 9 9 9 9 9 9 9 9 . . . . . . 
        . . 9 9 9 9 9 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    buksertilsalglys4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f f f 5 f f f f . . . . . . 
        . . 9 9 9 9 9 9 9 9 . . . . . . 
        . . 9 9 9 9 9 9 9 9 . . . . . . 
        . . 9 9 9 9 9 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . 9 9 9 . . 9 9 9 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC7, function (sprite, otherSprite) {
    DialogM = true
    game.showLongText("Hvad er den mest bæredygtige måde at bortskaffe sine jeans på? ", DialogLayout.Bottom)
    story.showPlayerChoices("Forbrænding", "Deponering", "Genbrug", "Kompostering")
    if (story.checkLastAnswer("Forbrænding")) {
        info.changeScoreBy(3)
    } else if (story.checkLastAnswer("Deponering")) {
        info.changeScoreBy(2)
    } else if (story.checkLastAnswer("Genbrug")) {
        info.changeScoreBy(0.1)
    } else if (story.checkLastAnswer("Kompostering")) {
        info.changeScoreBy(1)
    } else {
    	
    }
    game.showLongText("For at minimere miljøpåvirkningen er genbrug den mest bæredygtige måde at bortskaffe jeans på. Det hjælper med at reducere affald og sparer ressourcer ved at give materialerne nyt liv.    ", DialogLayout.Full)
    pause(200)
    DialogM = false
    kan_jeg_gå_vidre += 1
    pause(2000)
})
function level_3 () {
    tiles.setCurrentTilemap(tilemap`level9`)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    mySprite.setPosition(13, 13)
    NPC3 = sprites.create(img`
        . . . . . f f 5 5 f f . . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 e f . . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 e 5 5 e e 5 5 e 5 5 f . 
        . f 5 5 f f e e e e f f 5 5 f . 
        . f 5 5 f b f e e f b f 5 5 f . 
        . f 5 5 e 1 f 4 4 f 1 e 5 5 f . 
        f f 5 5 f 4 4 4 4 4 4 f 5 5 f f 
        f 5 5 f f f e e e e f f f 5 5 f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.NPC3)
    tiles.placeOnTile(NPC3, tiles.getTileLocation(12, 12))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC5, function (sprite, otherSprite) {
    DialogM = true
    game.showLongText("Hvilken emballage metode udleder mindst CO2e pr. Kg? ", DialogLayout.Bottom)
    story.showPlayerChoices("Plastik", "Pap", "Genanvendt plastik", "Genanvendt pap")
    if (story.checkLastAnswer("Plastik")) {
        info.changeScoreBy(3)
    } else if (story.checkLastAnswer("Pap")) {
        info.changeScoreBy(0.89)
    } else if (story.checkLastAnswer("Genanvendt plastik")) {
        info.changeScoreBy(1.1)
    } else if (story.checkLastAnswer("Genanvendt pap")) {
        info.changeScoreBy(0.1)
    } else {
    	
    }
    game.showLongText("Plastemballage som traditionelt bliver brugt til at pakke og transportere tøj, har en højere CO2e-udledning pga. Brugen af fossile brændstoffer.  ", DialogLayout.Full)
    pause(200)
    DialogM = false
    kan_jeg_gå_vidre += 1
    pause(2000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (kan_jeg_gå_vidre == 7) {
        if (info.score() < 5) {
            game.setGameOverMessage(true, "DU ER EN MILJØKRIGER!")
            game.gameOver(true)
        } else if (info.score() > 5 && info.score() < 10) {
            game.setGameOverMessage(false, "Du er en miljøkollega!")
            game.gameOver(false)
        } else if (info.score() > 10) {
            game.setGameOverMessage(false, "DU ER ET MILJØSVIN!")
            game.gameOver(false)
        } else {
        	
        }
    } else {
        game.showLongText("Jeg skal svare på et spørgsmål for at komme vidre, find en NPC", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (kan_jeg_gå_vidre == 5) {
        level_6()
    } else {
        game.showLongText("Jeg skal svare på et spørgsmål for at komme vidre, find en NPC", DialogLayout.Bottom)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC2, function (sprite, otherSprite) {
    DialogM = true
    game.showLongText("Hvad er den mest bæredygtige farvningsmetode for jeans? ", DialogLayout.Bottom)
    story.showPlayerChoices("Traditionel indigo-farvning", "Enzymbaseret farvning", "Farvning med lys", "Kemisk farvning med natriumdithionit")
    if (story.checkLastAnswer("Traditionel indigo-farvning")) {
        info.changeScoreBy(5)
    } else if (story.checkLastAnswer("Enzymbaseret farvning")) {
        info.changeScoreBy(1)
    } else if (story.checkLastAnswer("Farvning med lys")) {
        info.changeScoreBy(1.5)
    } else if (story.checkLastAnswer("Kemisk farvning med natriumdithionit")) {
        info.changeScoreBy(7)
    } else {
    	
    }
    game.showLongText("Traditionelt bruges indigo til farvning af jeans, som er svært at opløse i vand. For at få farven til at binde til stoffet, bruges ofte kemikalier som kaustisk soda og tungmetaller, hvilket kan forurene vandmiljøet  ", DialogLayout.Full)
    pause(200)
    DialogM = false
    kan_jeg_gå_vidre += 1
    pause(2000)
})
function level_2 () {
    tiles.setCurrentTilemap(tilemap`level6`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC1)
    mySprite.setPosition(22, 11)
    NPC2_ = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 5 7 7 5 f f . . . . 
        . . . f f 5 5 7 7 5 5 f f . . . 
        . . f f 5 5 5 7 7 5 5 5 f f . . 
        . . f f 5 5 5 7 7 5 5 5 5 f . . 
        . . f 5 5 f f f f f f 5 5 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 5 5 5 5 5 5 f 4 e . . 
        . . 4 d f 5 5 5 5 5 5 f d 4 . . 
        . . 4 4 f 4 4 7 7 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.NPC2)
    tiles.placeOnTile(NPC2_, tiles.getTileLocation(7, 11))
    vådebukser2(vådebukser)
    vådebukser2(vådebusker_2)
    vådebukser2(vådebukser_3)
    vådebukser2(vådebukser_4)
    vådebukser.setPosition(140, 232)
    vådebusker_2.setPosition(180, 232)
    vådebukser_3.setPosition(60, 232)
    vådebukser_4.setPosition(100, 232)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (kan_jeg_gå_vidre == 4) {
        level_5()
    } else {
        game.showLongText("Jeg skal svare på et spørgsmål for at komme vidre, find en NPC", DialogLayout.Bottom)
    }
})
function level_1 () {
    tiles.setCurrentTilemap(tilemap`level4`)
    mySprite.setPosition(130, 13)
    for (let index = 0; index < 8; index++) {
        Bomuldsplukker(Bomuldsmand)
    }
    NPC1 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e 1 4 1 f d d f 1 4 e e f . 
        . . 1 7 1 d d d d d d e e f . . 
        . 1 7 1 e e 4 4 4 4 e e f . . . 
        . . 1 7 1 2 2 2 2 2 2 f 4 e . . 
        . . 4 1 f 2 2 2 2 2 2 f d 4 . . 
        . . 4 7 f 4 4 5 5 4 4 f 4 4 . . 
        . . . 7 . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.NPC1)
    tiles.placeOnTile(NPC1, tiles.getTileLocation(7, 10))
}
function hund (mySprite: Sprite) {
    HUND = sprites.create(img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `, SpriteKind.HUND_NPC)
    HUND.setBounceOnWall(true)
    tiles.placeOnRandomTile(HUND, sprites.castle.tileGrass1)
    HUND.setVelocity(20, 20)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC3, function (sprite, otherSprite) {
    DialogM = true
    game.showLongText("Dette er alle processer i produktionen af jeans. Hvilken udleder mest CO2e? ", DialogLayout.Bottom)
    story.showPlayerChoices("Spinding af garn", "Vævning af denimstof", "Farvning og efterbehandling", "Syning og samling")
    if (story.checkLastAnswer("Spinding af garn")) {
        info.changeScoreBy(2)
    } else if (story.checkLastAnswer("Vævning af denimstof")) {
        info.changeScoreBy(3)
    } else if (story.checkLastAnswer("Farvning og efterbehandling")) {
        info.changeScoreBy(5)
    } else if (story.checkLastAnswer("Syning og samling")) {
        info.changeScoreBy(1)
    } else {
    	
    }
    game.showLongText("Vidste du, at produktionen af et enkelt par jeans kan kræve op til 10.000 liter vand? Dette inkluderer vand til at dyrke bomulden, farve stoffet og vaske de færdige jeans", DialogLayout.Full)
    pause(200)
    DialogM = false
    kan_jeg_gå_vidre += 1
    pause(2000)
})
function vådebukser2 (mySprite: Sprite) {
    vådebukser = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 9 9 . . . 
        . . . . f f f 5 f f f f 9 9 . . 
        . . 9 9 8 8 8 8 8 8 a 8 9 9 . . 
        . . . 9 a 8 a a a 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 a 8 . . 8 a 8 . . . . 
        . . 9 . 8 8 8 . 9 8 8 8 . . . . 
        . . . 9 8 a 8 . . a 8 8 . . . . 
        . . . . a 8 8 . . 8 a 8 . . . . 
        . . . . 8 8 8 . . 8 8 8 . . . . 
        . . . . a 8 a 9 . 8 8 8 . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    vådebusker_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 9 9 . . . 
        . . . . f f f 5 f f f f 9 9 . . 
        . . 9 9 8 8 8 8 8 8 a 8 9 9 . . 
        . . . 9 a 8 a a a 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 a 8 . . 8 a 8 . . . . 
        . . 9 . 8 8 8 . 9 8 8 8 . . . . 
        . . . 9 8 a 8 . . a 8 8 . . . . 
        . . . . a 8 8 . . 8 a 8 . . . . 
        . . . . 8 8 8 . . 8 8 8 . . . . 
        . . . . a 8 a 9 . 8 8 8 . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    vådebukser_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 9 9 . . . 
        . . . . f f f 5 f f f f 9 9 . . 
        . . 9 9 8 8 8 8 8 8 a 8 9 9 . . 
        . . . 9 a 8 a a a 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 a 8 . . 8 a 8 . . . . 
        . . 9 . 8 8 8 . 9 8 8 8 . . . . 
        . . . 9 8 a 8 . . a 8 8 . . . . 
        . . . . a 8 8 . . 8 a 8 . . . . 
        . . . . 8 8 8 . . 8 8 8 . . . . 
        . . . . a 8 a 9 . 8 8 8 . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    vådebukser_4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 9 9 . . . 
        . . . . f f f 5 f f f f 9 9 . . 
        . . 9 9 8 8 8 8 8 8 a 8 9 9 . . 
        . . . 9 a 8 a a a 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 a 8 . . 8 a 8 . . . . 
        . . 9 . 8 8 8 . 9 8 8 8 . . . . 
        . . . 9 8 a 8 . . a 8 8 . . . . 
        . . . . a 8 8 . . 8 a 8 . . . . 
        . . . . 8 8 8 . . 8 8 8 . . . . 
        . . . . a 8 a 9 . 8 8 8 . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC4, function (sprite, otherSprite) {
    DialogM = true
    game.showLongText("Hvilken transportmetode udleder mindst CO2e i kg. Pr. Par jeans? ", DialogLayout.Bottom)
    story.showPlayerChoices("Luftfragt", "Skibstransport", "Lastbiltransport", "Togtransport")
    if (story.checkLastAnswer("Luftfragt")) {
        info.changeScoreBy(5)
    } else if (story.checkLastAnswer("Skibstransport")) {
        info.changeScoreBy(0.5)
    } else if (story.checkLastAnswer("Lastbiltransport")) {
        info.changeScoreBy(1)
    } else if (story.checkLastAnswer("Togtransport")) {
        info.changeScoreBy(0.3)
    } else {
    	
    }
    game.showLongText("Luftfragt er den hurtigste, men også den mest CO2-intensive transportmetode.   Togtransport er den mest miljøvenlige metode, når det kommer til CO2-udledning pr. par jeans. ", DialogLayout.Full)
    pause(200)
    DialogM = false
    kan_jeg_gå_vidre += 1
    pause(2000)
})
function sælger2 (mySprite: Sprite) {
    NPC5_ = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 1 6 6 6 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d e d d e d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 3 3 3 3 3 d f f . . 
        . . f d d f 3 3 3 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 3 3 3 3 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.NPC5)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC1, function (sprite, otherSprite) {
    DialogM = true
    game.showLongText("Hvad er den mest bæredygtige materiale at dyrke pr. Kg?", DialogLayout.Bottom)
    story.showPlayerChoices("Konventionel bomuldsproduktion", "Økologisk bomuldsproduktion", "Hør", "Uld")
    if (story.checkLastAnswer("Konventionel bomuldsproduktion")) {
        info.changeScoreBy(0.21)
    } else if (story.checkLastAnswer("Økologisk bomuldsproduktion")) {
        info.changeScoreBy(0.1)
    } else if (story.checkLastAnswer("Hør")) {
        info.changeScoreBy(0.71)
    } else if (story.checkLastAnswer("Uld")) {
        info.changeScoreBy(7.74)
    } else {
    	
    }
    game.showLongText("Økologisk bomuldsproduktion udleder omkring 0,10 kg CO2e pr. kg bomuld. Denne metode bruger ingen syntetiske pesticider eller gødninger og har en lavere miljøpåvirkning. ", DialogLayout.Full)
    pause(200)
    DialogM = false
    kan_jeg_gå_vidre += 1
    pause(2000)
})
function Bomuldsplukker (mySprite: Sprite) {
    Bomuldsmand = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e 1 4 1 f d d f 1 4 e e f . 
        . . 1 1 1 f d d d d d e e f . . 
        . f e e 1 e f 4 4 4 e e f . . . 
        . f f e e f f 2 2 2 2 f 4 e . . 
        . f e e e e f 2 2 2 2 f d 4 . . 
        . f e e e e 4 5 5 4 4 f 4 4 . . 
        . . f f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(Bomuldsmand, sprites.castle.tileGrass2)
    Bomuldsmand.setBounceOnWall(true)
    Bomuldsmand.setVelocity(20, 20)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC6, function (sprite, otherSprite) {
    DialogM = true
    game.showLongText("Hvad er den mest bæredygtige metode til at vaske jeans?  ", DialogLayout.Bottom)
    story.showPlayerChoices(" Vask ved 60°C og tørretumbling", "Vask ved 30°C og lufttørring", "Vask ved 40°C og tørretumbling", "Vask ved koldt vand og lufttørring")
    if (story.checkLastAnswer(" Vask ved 60°C og tørretumbling")) {
        info.changeScoreBy(3)
    } else if (story.checkLastAnswer("Vask ved 30°C og lufttørring")) {
        info.changeScoreBy(0.6)
    } else if (story.checkLastAnswer("Vask ved 40°C og tørretumbling")) {
        info.changeScoreBy(2.4)
    } else if (story.checkLastAnswer("Vask ved koldt vand og lufttørring")) {
        info.changeScoreBy(0.3)
    } else {
    	
    }
    game.showLongText("Denne metode udleder omkring 3 kg CO2e. Den høje temperatur og brugen af tørretumbler kræver meget energi, hvilket resulterer i høj CO2-udledning. Den mest bæredygtige metode, som udleder kun 0,3 kg CO2e. Vask ved koldt vand kræver minimal energi, og lufttørring eliminerer behovet for en tørretumbler. ", DialogLayout.Full)
    pause(200)
    DialogM = false
    kan_jeg_gå_vidre += 1
    pause(2000)
})
function level_6 () {
    tiles.setCurrentTilemap(tilemap`level17`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC5)
    mySprite.setPosition(8, 15)
    NPC6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 e e e e . . e e e e 4 . . . 
        4 e e e e e e e e e e e e 4 . . 
        4 e e 4 4 e e e e 4 4 e e 4 . . 
        e e e 4 e e e e e e 4 e e e . . 
        . e e e e e e e e e e e e . . . 
        . . e e f e e e e f e e . . . . 
        . . f e e e 4 4 e e e f . f f . 
        . . . 4 e e f f e e 6 f f e f . 
        . . . f 6 6 6 6 6 6 4 f e e f . 
        . . . f e e e e e e e 4 e f . . 
        . . . . f e 4 e f e f f f . . . 
        . . . . . f f f f f f f . . . . 
        `, SpriteKind.NPC6)
    tiles.placeOnTile(NPC6, tiles.getTileLocation(13, 9))
    for (let index = 0; index < 4; index++) {
        hund(HUND)
    }
}
function level_4 () {
    mySprite.setImage(img`
        ...fffffff.........ccc..
        ...ff22ccff.......cc4f..
        ....fffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c999b2222222222222fc..
        .c2b99111b222222222c22c.
        c222b111992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222442222f.....
        ..ff2222222cf442222f....
        ....ffffffffff442222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `)
    mySprite.setPosition(240, 20)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC3)
    tiles.setCurrentTilemap(tilemap`level11`)
    NPC4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c b c . . . . . . 
        . . . . c c c 8 8 c c c . . . . 
        . . c c b c 8 5 8 8 c c c c . . 
        . c b b 8 b 8 8 5 8 b 8 b b c . 
        . c b 8 8 b b 8 8 b b 8 8 b c . 
        . . f 8 8 8 b b b b 8 8 8 c . . 
        . . f f 8 8 8 8 8 8 8 8 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f e e e b b b b f f . . . 
        . . . e b b e e e e f b b e . . 
        . . . e b b e b b 8 5 f e e . . 
        . . . . c e e 8 8 8 8 8 f . . . 
        . . . . . f f f f f f f . . . . 
        `, SpriteKind.NPC4)
    tiles.placeOnTile(NPC4, tiles.getTileLocation(6, 8))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (kan_jeg_gå_vidre == 3) {
        level_4()
    } else {
        game.showLongText("Jeg skal svare på et spørgsmål for at komme vidre, find en NPC", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (kan_jeg_gå_vidre == 6) {
        level_7()
    } else {
        game.showLongText("Jeg skal svare på et spørgsmål for at komme vidre, find en NPC", DialogLayout.Bottom)
    }
})
function level_5 () {
    mySprite.setImage(img`
        ....................
        .....ffff5fffff.....
        .....8888888888.....
        .....8888888888.....
        .....8888888888.....
        .....8888888888.....
        .....8888..8888.....
        .....8888..8888.....
        .....8888..8888.....
        .....8888..8888.....
        .....8888..8888.....
        .....8888..8888.....
        .....8888..8888.....
        .....8888..8888.....
        .....8888..8888.....
        .....8888..8888.....
        .....8888..8888.....
        ....................
        ....................
        ....................
        `)
    mySprite.setPosition(125, 6)
    tiles.setCurrentTilemap(tilemap`level15`)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC4)
    sælger2(NPC5_)
    Bukserbutik(buksertilsalg)
    Bukserbutik(buksertilsalg2)
    Bukserbutik(buksertilsalg3)
    Bukserbutik(buksertilsalg4)
    Bukserbutik(buksertilsalglys)
    Bukserbutik(buksertilsalglys2)
    Bukserbutik(buksertilsalglys3)
    Bukserbutik(buksertilsalglys4)
    NPC5_.setPosition(26, 50)
    placering_bukser()
}
let NPC4: Sprite = null
let NPC6: Sprite = null
let NPC5_: Sprite = null
let HUND: Sprite = null
let NPC1: Sprite = null
let Bomuldsmand: Sprite = null
let vådebukser_4: Sprite = null
let vådebukser_3: Sprite = null
let vådebusker_2: Sprite = null
let vådebukser: Sprite = null
let NPC2_: Sprite = null
let NPC3: Sprite = null
let NPC7: Sprite = null
let buksertilsalglys4: Sprite = null
let buksertilsalglys3: Sprite = null
let buksertilsalglys2: Sprite = null
let buksertilsalglys: Sprite = null
let buksertilsalg4: Sprite = null
let buksertilsalg3: Sprite = null
let buksertilsalg2: Sprite = null
let buksertilsalg: Sprite = null
let DialogM = false
let kan_jeg_gå_vidre = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ....................
    .....ffff5fffff.....
    .....8888888888.....
    .....8888888888.....
    .....8888888888.....
    .....8888888888.....
    .....8888..8888.....
    .....8888..8888.....
    .....8888..8888.....
    .....8888..8888.....
    .....8888..8888.....
    .....8888..8888.....
    .....8888..8888.....
    .....8888..8888.....
    .....8888..8888.....
    .....8888..8888.....
    .....8888..8888.....
    ....................
    ....................
    ....................
    `, SpriteKind.Player)
game.showLongText("Velkommen til Jeans journey! Du skal nu på en rejse igennem et par jeans Livscyklus", DialogLayout.Full)
game.showLongText("Du kommer til at bevæge dig igennem de forskellige facer af livscyklussen. ", DialogLayout.Full)
game.showLongText("ved hver face vil du blive stillet et spørgsmål, målet er at få flest mulige rigtige og dermed den lavest mullige score! Held og Lykke ", DialogLayout.Full)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite.setPosition(49, 6)
info.setScore(0)
kan_jeg_gå_vidre = 0
DialogM = false
forever(function () {
    if (DialogM == false) {
        controller.moveSprite(mySprite)
    } else if (DialogM == true) {
        controller.moveSprite(mySprite, 0, 0)
    } else {
    	
    }
})
