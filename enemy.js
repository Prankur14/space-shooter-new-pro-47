class Enemy {
    constructor() {
        this.x = random(460, 1168 - 100);
        this.y = -50;
        this.rock = createsprite(this.x, this.y, 100, 100);
        this.rock.addAnimation('rock', rockAnimation);
        this.rock.frameDelay = 0.1;
        this.rock.lifetime = 130;
    }
    show() {
        if (scoreCounterState === "normal") {
            this.rock.scale = 0.2;
            this.rock.setCollider("circle", 0, 0, 240);
        }

        // this.rock.debug = true;
    }
    move() {

        if (score < 50) { this.rock.velocityY = 8 } else if (score >= 50 && score < 75) {
            this.rock.velocityY = 14;
            enemyFrameate = 17
        } else if (score >= 75 && score < 100) {
            this.rock.velocityY = 18;
            enemyFrameate = 15
        } else if (score >= 100) {
            this.rock.velocityY = 24;
            enemyFrameate = 17
        }
    }
    stop() {
        setTimeout(() => {
            this.rock.destroy();
        }, 1000);
    }

}