class LifeShower {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.sprite = createSprite(this.x, this.y);
        this.sprite.addAnimation('img', lifeIndicatorImage);
        this.sprite.addAnimation('2', lifeIndicatorImage2);
        this.sprite.scale = 2;
    }
    move() {
        this.sprite.velocityY -= 3;
    }
    disappear() {
        if (this.sprite.scale > 0) {
            this.sprite.scale -= 0.08;
        }
        if (this.sprite.y < -100) {
            this.sprite.destroy();
        }
    }
}