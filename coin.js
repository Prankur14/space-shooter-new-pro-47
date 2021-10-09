class Coin {
    constructor() {
        this.x = random(460, 1168 - 100);
        this.y = -100;
        this.sprite = createSprite(this.x, this.y);
        this.sprite.addAnimation('ani', coinAnimation);
        this.sprite.frameDelay = 1;
        this.sprite.scale = 0.27;
    }
    move() {
        this.sprite.velocityY = 25;
    }
    addLife() {
        sHealth += 1;
    }
}
class CoinIndicator {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.sprite = createSprite(this.x, this.y);
        this.sprite.addAnimation('multiplier', multiplierIndicator);
        this.sprite.addAnimation('life', lifeIndicatorImage3);
        this.sprite.addAnimation('bullet', ammoIndicatorImage15);
        this.sprite.scale = 2;
    }
    move() {
        this.sprite.velocityY -= 2;
    }
    disappear() {
        this.sprite.scale -= 0.08;
        if (this.sprite.y < -100) {
            this.sprite.destroy();
        }
    }
}