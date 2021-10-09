class EnemyBullet {
    constructor(x, y, enemy) {
        this.x = x;
        this.y = y;
        this.enemy = enemy;
        this.bullet = createsprite(this.x, this.y);
        this.bullet.addAnimation('img', enemyBulletImage);
        // this.bullet.debug = true;
        this.bullet.lifetime = 100;
        // this.bullet.depth = myBoss.sprite.depth - 100;
    }
    move() {
        this.bullet.velocityY = 10;
    }

}