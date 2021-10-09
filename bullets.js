class Bullets {
    constructor(x, y, enemy) {
        this.x = x;
        this.y = y;
        this.enemy = enemy;
        this.bullet = createsprite(this.x, this.y);
        this.bullet.addAnimation('bullet', bulletAnimation);
        // this.bullet.addAnimation('changed', bulletAnimation2);
        this.bullet.addAnimation('3', bulletAnimation3);
        this.bullet.addAnimation('ak', rpgImage);
        this.blastCacl = Math.round(random(1, 3));
        this.bullet.scale = 1;
        this.blastSound;
        if (this.blastCacl === 1) {
            this.blastSound = blast1;
        } else
        if (this.blastCacl === 2) {
            this.blastSound = blast2;
        } else if (this.blastCacl === 3) {
            this.blastSound = blast3;
        }
    }
    show() {
        if (scoreCounterState === "normal") {
            if (myBoss.sprite.y < 140) {
                this.bullet.depth = shooter.depth - 1;
                if (score < 50) {
                    this.bullet.scale = 1.5;
                    this.bullet.setCollider('rectangle', 0, 0, 20, 40);
                } else if (score >= 50) {
                    this.bullet.changeAnimation('3', bulletAnimation3);
                    this.bullet.setCollider('circle', -1, -19, 5);
                }
            } else if (myBoss.sprite.y >= 140) {
                this.bullet.changeAnimation('ak', rpgImage);
                this.bullet.scale = 0.15
            }
        }
        // this.bullet.debug = true;
    }
    move() {
        if (myBoss.sprite.y < 140) {
            if (score < 25) {
                this.bullet.velocityY = -35;
            } else if (score >= 25 && score < 50) {
                this.bullet.velocityY = -35;
            } else if (score >= 50) {
                this.bullet.velocityY = -30;
            }
            if (this.bullet.y < -80) {
                this.bullet.destroy();
            }
        } else if (myBoss.sprite.y >= 140) {
            this.bullet.velocityY = -15;
        }
        if (this.enemy.y > height) {
            this.enemy.destroy();
        }
    }
    touches(enemy) {
        this.enemy = enemy;
        if (this.bullet.isTouching(this.enemy.rock)) {
            this.bullet.destroy();
            scoreX = this.enemy.rock.x;
            scoreY = this.enemy.rock.y;



            if (multiplier === "1x") {
                score += 1;
            } else if (multiplier === "2x") {
                score += 2;
            }
            this.enemy.rock.destroy();
            this.enemy.rock.frameDelay = 2;
            this.blastSound.play();
        }
    }
}