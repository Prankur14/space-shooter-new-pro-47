class Life {
    constructor() {
        this.x = random(460, 1168 - 100);
        this.y = -50;
        this.life = createSprite(this.x, this.y);
        this.life.addAnimation('life', lifeAnimation);
        this.life.lifetime = 150;
        this.life.scale = 2.4;
    }
    show() {
        // this.life.addAnimation('life', lifeAnimation);
    }
    move() {
        this.life.velocityY = 45;
    }
    collides() {}
}
class ScoreIndicator {
    constructor() {
        this.x = scoreX;
        this.y = scoreY;
        this.sprite = createSprite(scoreX, scoreY);
        this.sprite.addAnimation('1', scoreIndicatorImage1);
        this.sprite.addAnimation('2', scoreIndicatorImage2);
        // this.sprite.lifetime = 100;
        // this.sprite.scale = 2;
        console.log(scoreX, scoreY);
        // console.log(this.sprite.position.x, this.sprite.position.y);
    }
    show() {
        if (multiplier === "1x") {
            this.sprite.changeAnimation('1', scoreIndicatorImage1);
        } else if (multiplier === "2x") {
            this.sprite.changeAnimation('2', scoreIndicatorImage2);
        }
    }
    move() {
        this.sprite.velocityY -= 0.1;
    }
}