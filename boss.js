class Boss {
    constructor() {
        this.y = -200;
        this.x = width / 2;
        this.sprite = createSprite(this.x, this.y);
        this.sprite.addAnimation('img', bossImage);
        this.sprite.scale = 0.5;
        // this.sprite.debug = true;
        this.sprite.setCollider("rectangle", 0, 50, this.sprite.width, 10)
    }
}