var bg;
var gameState = "notStarted";
var shooter;
var b = [];
var e = [];
var l = [];
var c = [];
var diff = 70;
var rockState = "normal";
var sHealth = 3;
var h1;
var h2;
var h3;
var musicVolume = 0.4;
var loadingScreen;
var score = 0;
var startButton;
var helpButton;
var logo;
var help;
var back;
var reloadPrompt;
var shootTimer = 0;
var scoreCounter;
var scoreCounterState = "normal";
var formState = "no";
var enemyFrameate = 20;
var bulletCount = 30;
var bulletState = "notFired";
var bulletArr = [];
var myBoss;
var bossHealth;
var bossHealthAnimation;
var bulletCounter = 0;
var fireRate = 15;
var bgLeftEdge;
var bgRightEdge;
var velocityTimer = 1;
var bossBullet1 = [];
var bossBullet2 = [];
var loseTimer = 0;
var lifeRate = 520;
var bossHealthCounter = 10;
var a = [];
var ammoRate = 140;
var lifeArr = []; // LIFE ARR IS NOTHING BUT THE LIFE INDICATOR ARRAY (JUST SO YOU KNOW, YOU KNOW....);
var ammoArr = []; // AMMO ARR IS ALSO THE AMMO INDICATOR;
var coinArr = [];
var scoreArr = [];
var multiplier = "1x";
var coinRate = 755;
var multIndicator;
var multIndicatorAnimation;
var multWidth = 100;
var winningMusicVolume = 1;
var protection;
var protectionMode = "notProtected";
var scoreX;
var scoreY;

function preload() {

    wall = loadImage('bg.jpeg');
    bgImage = loadAnimation('bg.png');
    backMusic = loadSound('background.ogg');
    start = loadAnimation('startButton.png');
    helpButtonImage = loadAnimation('htp.png');
    logoImage = loadAnimation('logo.png');
    blast1 = loadSound('blast/blast1.ogg');
    blast2 = loadSound('blast/blast2.ogg');
    blast3 = loadSound('blast/blast3.ogg');
    blast4 = loadSound('blast/blast4.ogg');
    // blast5 = loadSound('blast/blast.ogg');
    healthAnimation = loadAnimation('health.png');
    noHealth = loadAnimation('outline.png');
    ended = loadImage('ended.gif');
    helpImage = loadAnimation('help.png');
    lobby_sound = loadSound('lobby_sound.ogg');
    lose_background = loadSound('lose_background.ogg');
    spaceShipAnimation = loadAnimation(
        'spaceship/1.png',
        'spaceship/2.png',
        'spaceship/3.png',
        'spaceship/4.png',
        'spaceship/5.png',
        'spaceship/6.png',
        'spaceship/7.png',
        'spaceship/8.png');
    coinAnimation = loadAnimation('coin/1.png', 'coin/2.png', 'coin/3.png', 'coin/4.png', 'coin/5.png', 'coin/6.png', 'coin/7.png', 'coin/8.png', 'coin/9.png', 'coin/10.png')
    bulletAnimation = loadAnimation('bullet/bullet.png');
    bulletAnimation3 = loadAnimation('bullet/bullet3.png');
    rockAnimation = loadAnimation('rock.png');
    shoot = loadSound('shoot.ogg');
    shoot2 = loadSound('shoot2.ogg');
    shoot3 = loadSound('shoot4.ogg');
    shoot4 = loadSound('bullet/sound/shoot1.ogg');
    shoot5 = loadSound('bullet/sound/ak.ogg');
    help = createSprite(200, 200);
    reload = loadAnimation('reload.jpg');
    help.addAnimation('help', helpImage);
    help.visible = false;
    backButton = loadImage('back_button.png');
    lifeAnimation = loadAnimation('life.png');
    scoreCounter1 = loadAnimation('score/1.png');
    scoreCounter2 = loadAnimation('score/2.png');
    scoreCounter3 = loadAnimation('score/3.png');
    bulletCountImage = loadImage('bullet/bulletCount.png');
    bossImage = loadImage('boss/boss.png');
    rpgImage = loadImage('bullet/rpg.png');
    enemyBulletImage = loadImage('bullet/enemyBullet.png');
    shooterBlasted = loadSound('blast/shooterBlast.ogg');
    ammoImage = loadImage('ammo/ammo.png');
    ammoSound = loadSound('ammo/sound2.ogg');
    lifeSound = loadSound('lifeSound2.ogg');
    loseSound = loadSound('lose4.ogg');
    lifeIndicatorImage = loadImage('score/life.png');
    lifeIndicatorImage2 = loadImage('score/2life.png');
    lifeIndicatorImage3 = loadImage('score/3life.png');
    ammoIndicatorImage = loadImage('score/bullet.png');
    ammoIndicatorImage10 = loadImage('score/10_bullet.png');
    ammoIndicatorImage15 = loadImage('score/15_bullet.png');
    winningMusic = loadSound('sounds/winning_theme.ogg');
    multiplierIndicator = loadImage('score/multiplier.png');
    scoreIndicatorImage1 = loadImage('score/1score.png');
    scoreIndicatorImage2 = loadImage('score/2score.png');
    winImage = loadImage('score/win.png');
    protectionImage = loadImage('spaceship/layer.png');
    protectionSound = loadSound('sounds/pro3.ogg');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    createsprite = createSprite;
    shealth = sHealth;
    // fullscreen(true);
    bg = createSprite(width / 2, -650 + height);
    bg.addAnimation('bg', bgImage);
    // bg.debug = true;
    bg.visible = false;
    startButton = createSprite(width / 2, height / 3 + height / 2 - 80);
    helpButton = createSprite(width / 2, (height / 3 + height / 2) + 320);
    logo = createSprite(width / 2, (height / 2) - 100);
    startButton.addAnimation('start', start);
    startButton.scale = 0.6
    helpButton.scale = 0.6
    logo.scale = 0.6;;
    bg.velocityY = 3;
    reloadPrompt = createSprite(width / 2, logo.y);
    reloadPrompt.addAnimation('prompt', reload);
    helpButton.addAnimation('help', helpButtonImage);
    logo.addAnimation('logo', logoImage);
    shooter = createSprite(width / 2, height / 3 + height / 2);
    shooter.addAnimation('normal', spaceShipAnimation);
    shooter.visible = false;
    shooter.setCollider("rectangle", -30, 10, 750, 500);
    h1 = createSprite(50, 30);
    h2 = createsprite(150, 30);
    h3 = createSprite(250, 30);
    h1.scale = 0.1;
    h2.scale = h1.scale;
    h3.scale = h1.scale;
    h1.addAnimation('health1', healthAnimation);
    h1.addAnimation('outline1', noHealth);
    h2.addAnimation('health2', healthAnimation);
    h2.addAnimation('outline2', noHealth);
    h3.addAnimation('health3', healthAnimation);
    h3.addAnimation('outline3', noHealth);

    h1.visible = false;
    h2.visible = false;
    h3.visible = false;
    back = createSprite(10000, 50);
    back.addAnimation('back', backButton);
    back.visible = false;
    back.scale = 0.7;
    bgLeftEdge = createSprite(bg.x - bg.width / 2, width / 2, 100, 100000);
    bgLeftEdge.visible = false;

    bgRightEdge = createSprite(bg.x + 450, height / 2, 100, 10000);
    bgRightEdge.visible = false;


    myBoss = new Boss();
    bossHealth = createSprite(myBoss.sprite.x, myBoss.sprite.y - myBoss.sprite.height / 2 - 30, myBoss.sprite.width / 2, 10);
    bossHealth.shapeColor = "black"
    bossHealthAnimation = createSprite(bossHealth.x, bossHealth.y, bossHealth.width - 5, bossHealth.height - 5)
    bossHealthAnimation.shapeColor = "red";

    multIndicator = createSprite(500, 30, 10, 10);
    multIndicator.visible = false;
    multIndicatorAnimation = createSprite(multIndicator.x, multIndicator.y, multWidth, 10);
    multIndicatorAnimation.visible = false;

    protection = createSprite(shooter.x, shooter.y);
    protection.addAnimation('img', protectionImage);
    protection.visible = false;
    // protection.debug = true;
    protection.scale = 1.4
    protection.setCollider('circle', -3, -7, 90)
}


function draw() {
    background(wall);
    protection.debug = true
    winningMusic.setVolume(winningMusicVolume);
    // shooter.debug = true;
    // createEdgeSprites();
    bgRightEdge.depth = bg.depth - 100

    if (mousePressedOver(startButton)) {
        gameState = "started";
    }
    if (mouseIsOver(startButton) || mouseIsOver(helpButton) || mouseIsOver(back)) {
        cursor('pointer');
    } else {
        cursor('default')
    }
    if (mousePressedOver(helpButton)) {
        gameState = "help";
    }
    if (mousePressedOver(back)) {
        gameState = "notStarted";
    }
    if (gameState === "prompt") {
        textSize(30);
        textFont('iras itc');
        text("Please enter you name: ", width / 2 - 50, height / 2 - 50);
        if (formState === "no") {
            var form = new Form();
            form.display();
        }
    }
    if (gameState === "help") {
        help.visible = true;
        help.x = width / 2;
        help.y = height / 2;
        back.x = bg.width - 150;
        back.visible = true;
    }
    //594003195136

    if (gameState === "notStarted") {
        if (lobby_sound.isPlaying() == false) {
            lobby_sound.play();
            // lobby_sound.set

        }
        reloadPrompt.visible = true;
        reloadPrompt.scale = 0.5;
        reloadPrompt.x = width / 2;

        if (mousePressedOver(reloadPrompt)) {
            window.location.reload()
        }
        reloadPrompt.y =
            logo.y - 300;
        reloadPrompt.depth =
            logo.depth - 100;
        back.x = 100000;
    } else {
        reloadPrompt.visible = false;
        reloadPrompt.x = 1000;
    }
    if (gameState != 'help') {
        help.visible = false;
    }
    if (gameState != "notStarted") {
        startButton.x = 10000;
        helpButton.x = 10000;
        logo.x = 10000;
    } else {
        startButton.x = width / 2;
        startButton.y = height / 3 + height / 2 - 80;
        helpButton.x = width / 2;
        helpButton.y = height / 2 + height / 3 + 20
        logo.position = { x: width / 2, y: height / 2 - 100 }
    }
    console.log(sHealth, gameState);

    backMusic.setVolume(musicVolume);
    if (gameState == "started") {
        noCursor();
        bgLeftEdge.x = bg.x - 450
        lobby_sound.pause();
        h1.visible = true
        h2.visible = true;
        h3.visible = true;

        if (backMusic.isPlaying() == false) {
            backMusic.play();
            // backMusic.setVolume(musicVolume)
        }
        if (frameCount % enemyFrameate === 0 && rockState === "normal" && scoreCounterState === "normal") {
            var obstacle = new Enemy();
            e.push(obstacle);
        }
        if (frameCount % lifeRate === 0) {
            var addLife = new Life();
            l.push(addLife);
        }
        if (frameCount % ammoRate === 0) {
            var myAmmo = new Ammo();
            a.push(myAmmo);
        }
        if (frameCount % coinRate === 0) {
            var myCoin = new Coin();
            c.push(myCoin);
        }
        for (var i = 0; i < a.length; i++) {
            a[i].move();
        }
        for (var i = 0; i < l.length; i++) {
            l[i].show();
            l[i].move();
        }
        for (var i = 0; i < c.length; i++) {
            c[i].move();
        }
        if (rockState === "normal" && gameState != "end") {
            for (var i = 0; i < e.length; i++) {

                e[i].show();
                e[i].move();

                if (e[i].rock.isTouching(shooter) && protectionMode === "notProtected") {
                    e[i].rock.destroy();
                    sHealth -= 1;
                    shooterBlasted.play();
                    shooterBlasted.setVolume(2)
                } else if (e[i].rock.isTouching(protection) && protectionMode === "protected") {
                    e[i].rock.destroy();
                    protectionSound.play();
                }
            }
        }
        for (var i = 0; i < l.length; i++) {
            if (l[i].life.isTouching(shooter)) {
                l[i].life.destroy(); {
                    if (multiplier === "1x") {
                        sHealth += 1;
                    } else if (multiplier === "2x") {
                        sHealth += 2;
                    }
                }
                lifeSound.play();
                var myLifeIndicator = new LifeShower();
                lifeArr.push(myLifeIndicator);
            }
        }
        for (var i = 0; i < scoreArr.length; i++) {
            var myScoreIndicator = new ScoreIndicator(scoreX, scoreY);
            scoreArr.push(myScoreIndicator);
            scoreArr[i].move();
            scoreArr[i].show();
        }

        if (multiplier === "2x") {
            multIndicator.visible = true;
            multIndicatorAnimation.visible = true;
            if (frameCount % 1 === 0 && multIndicatorAnimation.width > 0) {
                multIndicatorAnimation.width -= 0.1;
            }
        }
        if (multIndicatorAnimation.width <= 0) {
            multiplier = "1x";
            multIndicatorAnimation.visible = false;
            multIndicator.visible = false;
            multIndicatorAnimation.width = 100;
        }
        for (var i = 0; i < lifeArr.length; i++) {
            lifeArr[i].move();
            lifeArr[i].disappear();
            if (multiplier === "1x") {
                lifeArr[i].sprite.changeAnimation('img', lifeIndicatorImage);
            } else if (multiplier === "2x") {
                lifeArr[i].sprite.changeAnimation("2", lifeIndicatorImage2)
            }
        }
        for (var i = 0; i < ammoArr.length; i++) {
            ammoArr[i].move();
            ammoArr[i].disappear();
            // if (gameState === )
            if (multiplier === "1x") {
                ammoArr[i].sprite.changeAnimation('img', ammoIndicatorImage);
            } else if (multiplier === "2x") {
                ammoArr[i].sprite.changeAnimation("2x", ammoIndicatorImage10);
            }
        }

        for (var i = 0; i < a.length; i++) {
            if (a[i].sprite.isTouching(shooter)) {
                a[i].sprite.destroy();
                if (multiplier === "1x") {
                    bulletCount += 5;
                    ammoRate = 140
                } else if (multiplier === "2x") {
                    bulletCount += 10;
                    ammoRate = 240
                }
                var myAmmoIndicator = new AmmoShower();
                ammoArr.push(myAmmoIndicator);
                ammoSound.play();
                ammoSound.setVolume(0.2);
            }
        }
        for (var i = 0; i < c.length; i++) {
            if (c[i].sprite.isTouching(shooter)) {
                c[i].sprite.destroy();
                var myCoinIndicator = new CoinIndicator();
                coinArr.push(myCoinIndicator);
                var randomGenerator = Math.round(random(1, 3));
                if (randomGenerator === 1) {
                    multiplier = "2x";
                    myCoinIndicator.sprite.changeAnimation('multiplier', multiplierIndicator);
                } else
                if (randomGenerator === 2) {
                    sHealth += 3;
                    myCoinIndicator.sprite.changeAnimation('life', lifeIndicatorImage3);
                } else if (randomGenerator === 3) {
                    bulletCount += 15;
                    myCoinIndicator.sprite.changeAnimation('bullet', ammoIndicatorImage15);
                } else if (randomGenerator === 4) {
                    protectionMode = "protected";
                }

            }
        }


        if (protectionMode === "protected") {
            protection.visible = true;
            protection.debug = false;
            protection.scale = 1;
            protection.x = shooter.x;
            protection.y = shooter.y;
            shooter.setCollider('circle', -10, -0, 490);
            shooter.debug = false;
        } else if (protectionMode === "notProtected") {
            shooter.setCollider("rectangle", -30, 10, 750, 500);
            shooter.debug = false;
        }
        for (var i = 0; i < coinArr.length; i++) {
            coinArr[i].move();
            coinArr[i].disappear();
        }


        for (var i = 0; i < ammoArr.length; i++) {
            if (multiplier === "1x") {
                ammoArr[i].sprite.changeAnimation('img', ammoIndicatorImage);
            } else if (multiplier === "2x") {
                ammoArr[i].sprite.changeAnimation('10', ammoIndicatorImage10);
            }
        }

        bg.visible = true;
        // bg.velocityY += 0.001;
        // bg.y +=1
        bg.scale = 0.5
        if (bg.y > height + 650) {
            bg.y = -630 + height
        }
        if (scoreCounterState === "normal") {
            shooter.visible = true;
        }
        shooter.bounceOff(bgLeftEdge);
        shooter.bounceOff(bgRightEdge

        );

        shooter.scale = 0.2;
        shooter.frameDelay = 1;
        if (mouseX < bg.width && mouseX > bg.x - bg.width / 2) {
            shooter.x = mouseX;
        }
        // console.log(scoreCounterStatee);

        if (scoreCounterState == "normal") {
            for (var i = 0; i < b.length; i++) {
                b[i].show();
                b[i].move();
                for (var j = 0; j < e.length; j++) {
                    if (b[i].touches(e[j])) {
                        b[i].bullet.destroy();
                        e[i].rock.destroy()
                    }
                }
                if (rockState === "notNormal") {
                    if (b[i].bullet.isTouching(myBoss.sprite)) {
                        b[i].bullet.destroy(); {
                            if (myBoss.sprite.y >= 140) blast4.play();
                            blast4.setVolume(1);
                            bossHealthCounter -= 2;
                        }
                    }
                }
            }
        }




        if (scoreCounterState === "notNormal") {
            shooter.visible = false;
            scoreCounter.visible = true;
            bg.visible = false;
            if (sHealth === 3) {
                scoreCounter.changeAnimation('3', scoreCounter3);
            } else if (sHealth === 2) {
                scoreCounter.changeAnimation('2', scoreCounter2);
            } else if (sHealth === 1) {
                scoreCounter.changeAnimation('1', scoreCounter1);
            }
            setTimeout(() => {
                scoreCounterState = "normal";
                bg.visible = true;
            }, 5000);
        } else {
            // scoreCounter.visible = false;
        }

        push()
        textSize(30);
        fill("yellow");
        textFont('comfortaa');
        push();
        textSize(15)
        text(scoreX + " " + scoreY, 0, 300);
        pop();
        text(bulletCount + ' health:' + sHealth, 0, 400);
        text(multWidth, 10, 450)
        pop();
        textSize(35);
        fill("lightgreen");
        textStyle(BOLD)
        textFont('comfortaa');
        text("Your Score: " + score, 50, 100);
        if (score >= 300) {
            rockState = "notNormal"
        }
        // for (var i = 0; i < bulletCount; i++) {
        //     for (var j = 0; j < 5; j++) {
        //         push();
        //         scale(0.2)
        //         image(bulletCountImage, j, 50);
        //         pop();
        //     }
        // }
        if (rockState === "notNormal") {
            bossHealthAnimation.x = bossHealth.x;
            bossHealthAnimation.y = bossHealth.y;
            bossHealth.x = myBoss.sprite.x;
            bossHealth.y = myBoss.sprite.y - myBoss.sprite.height / 4 - 30;
            if (myBoss.sprite.y < 140) {
                myBoss.sprite.velocityY = 4.5;
            } else {
                myBoss.sprite.velocityY = 0;
            }
            if (myBoss.sprite.y >= 140) {
                if (velocityTimer === 1) {
                    myBoss.sprite.velocityX = -5;
                    velocityTimer = 0
                }
                myBoss.sprite.bounceOff(bgLeftEdge);
                myBoss.sprite.bounceOff(bgRightEdge);
                if (myBoss.sprite.isTouching(bgLeftEdge)) {
                    // myBoss.sprite.velocityX = 5;
                }
            }
            push();
            text(bossHealth.x + ' ' + bossHealth.y + ' ' + myBoss.sprite.y, 60, 700);
            pop()
            if (myBoss.sprite.velocityY === 0) {
                if (bulletCounter === 0) {
                    bulletCount = 20;
                    fireRate = 25;
                    bulletCounter = 1;
                }
            }
            if (frameCount % 25 === 0 && myBoss.sprite.y >= 140) {
                var newBullet1 = new EnemyBullet(myBoss.sprite.x - 40, myBoss.sprite.y + 30, shooter);
                bossBullet1.push(newBullet1);

                var newBullet2 = new EnemyBullet(myBoss.sprite.x + 40, myBoss.sprite.y + 30, shooter);
                bossBullet2.push(newBullet2);
            }
            for (var i = 0; i < bossBullet1.length; i++) {
                if (bossBullet1[i].bullet.isTouching(shooter)) {
                    bossBullet1[i].bullet.destroy();

                    sHealth -= 1;
                    shooterBlasted.play();
                }
            }
            for (var i = 0; i < bossBullet1.length; i++) {
                if (bossBullet2[i].bullet.isTouching(shooter)) {
                    bossBullet2[i].bullet.destroy();

                    sHealth -= 1;
                    shooterBlasted.play();
                }
            }

            for (var i = 0; i < bossBullet1.length; i++) {
                bossBullet1[i].move();
            }
            for (var i = 0; i < bossBullet2.length; i++) {
                bossBullet2[i].move();
            }
            lifeRate = 100;

            if (bossHealthCounter == 0) {
                myBoss.sprite.destroy();
                // score += 20;
                for (var i = 0; i < bossBullet1.length; i++) {
                    bossBullet1[i].bullet.destroy();
                }
                for (var i = 0; i < bossBullet2.length; i++) {
                    bossBullet2[i].bullet.destroy();
                }
                rockState = "normal";
                gameState = "win";
            }
        }

        //gameState = "started"^^^^^^^

        //

        //

        //

        //

        //

    } else {
        h1.visible = false;
        h2.visible = false;
        h3.visible = false;
    }



    if (sHealth <= 0) {
        gameState = "end";
    }


    if (gameState === "end") {
        for (var i = 0; i < ammoArr.length; i++) {
            ammoArr[i].sprite.destroy();
        }
        for (var i = 0; i < e.length; i++) {
            e[i].rock.velocityY++
        }
        multIndicatorAnimation.visible = false;
        multIndicator.visible = false;
        myBoss.sprite.destroy();
        bossHealthAnimation.destroy();
        setTimeout(() => {
            if (loseSound.isPlaying() === false && loseTimer === 0) {
                loseSound.play();
                loseTimer = 1;
            }
        }, 400);

        if (bg.velocityY > 0) {

            bg.velocityY = bg.velocityY - 0.06;
            shooter.scale = shooter.scale - 0.006;
            shooter.velocityY = 10;
            musicVolume -= 0.02;
        }
        if (bg.velocityY <= 0) {
            bg.visible = false;
            musicVolume = 0; {
                setTimeout(() => {
                    if (lose_background.isPlaying() == false) {

                        lose_background.play();
                        lose_background.onended(() => {
                            lose_background.setVolume(0);
                        })
                    }
                }, 2000);
            }
            textFont("comfortaa");
            textSize(120);
            fill('yellow')
            text("Final Score: " + score, (width / 2) - 400, height / 4);
            textStyle(BOLD);
            imageMode(CENTER);
            image(ended, width / 2, height / 2);
        }
        if (bg.velocityY > 0) {
            bg.scale = bg.scale + 0.005;

        }
        if (bg.scale > 0.8) {
            bg.velocityY = 0;

        }

        setTimeout(() => {
            back.x = bg.width - 150;
            back.visible = true;
        }, 3000);
        if (back.visible === true) {
            if (mouseIsPressed) {
                window.location.reload();
            }
        }

    }
    if (gameState == "win") {
        if (musicVolume > 0) {
            musicVolume -= 0.1;
        }
        if (musicVolume <= 0) {
            musicVolume = 0;
        }
        if (winningMusic.isPlaying() === false) {
            winningMusic.play();
        }
        winningMusic.onended(() => {
            winningMusicVolume = 0;
        });
        imageMode(CENTER)
        image(winImage, width / 2, height / 2);
        shooter.scale += 0.003;
        shooter.y -= 0.4;
        text(shooter.scale, 100, 100);
        if (shooter.scale >= 0.4) {
            shooter.scale = 0.4;
            shooter.x += random(-5, 5);
            setTimeout(() => {
                shooter.velocityY--;
                bg.velocityY++
            }, 4000);
        }
    }

    if (sHealth >= 3) {
        h1.changeAnimation('health1', healthAnimation);
        h2.changeAnimation('health2', healthAnimation);
        h3.changeAnimation('health3', healthAnimation);
    }
    if (sHealth === 2) {
        h3.changeAnimation('outline3', noHealth);
        h2.changeAnimation('health2', healthAnimation);
        h1.changeAnimation('health1', healthAnimation);
    }
    if (sHealth === 1) {
        h3.changeAnimation('outline3', noHealth);
        h2.changeAnimation('outline2', noHealth);
        h1.changeAnimation('health1', healthAnimation);
    }
    if (sHealth === 0) {
        h3.changeAnimation('outline3', noHealth);
        h2.changeAnimation('outline2', noHealth);
        h1.changeAnimation('outline1', noHealth);
    }
    if (bulletState === "fired") {
        if (rockState === "normal" && frameCount % fireRate === 0) {
            bulletState = "notFired";
        } else if (rockState === "notNormal" && myBoss.sprite.y >= 130 && frameCount % fireRate === 0) {
            bulletState = "notFired";
        }
    }
    document.oncontextmenu = function() {
        return false;
    }
    drawSprites();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
    startButton.y -= 100;
    helpButton.y -= 100;
}

function keyPressed() {
    if (gameState === "started" && keyCode === 32 && scoreCounterState === "normal" && bulletState === "notFired" && bulletCount > 0) {
        var b1 = new Bullets(shooter.x, shooter.y, e);
        b.push(b1);
        if (myBoss.sprite.y < 140) {
            if (score < 50) {
                shoot.play();
                shoot.setVolume(0.2);
            } else if (score >= 50) {
                shoot2.play();
                shoot2.setVolume(0.5)
            }
        } else if (myBoss.sprite.y >= 140) {
            shoot4.play();
            shoot4.setVolume(3);
        }
        bulletCount -= 1;
        bulletState = "fired";
    }
}