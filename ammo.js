class Ammo {
    constructor() {
        this.x = random(460, 1168 - 100);
        this.y = -50;
        this.sprite = createsprite(this.x, this.y);
        this.sprite.addAnimation('img', ammoImage);
        this.sprite.scale = 2;
        this.sprite.frameDelay = 1;
    }
    move() {
        this.sprite.veloczityY = 20;
    }
}