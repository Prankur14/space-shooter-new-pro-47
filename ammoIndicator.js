class AmmoShower {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.sprite = createSprite(this.x, this.y);
        this.sprite.addAnimation('10', ammoIndicatorImage10);
        this.sprite.addAnimation('img', ammoIndicatorImage);
        this.sprite.scale = 2
    }
    z
    move() {
        this.sprite.velocityY -= 3;
    }
    disappear() {
        this.sprite.scale -= 0.08;
        if (this.sprite.y < -100) {
            this.sprite.destroy();
        }
    }
}