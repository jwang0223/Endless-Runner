class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
        
        
    }

    preload(){


        this.load.image('play_bg', './assets/playBackground.png');

        this.load.image('shark', './assets/shark.png');
        this.load.image('bubbles', './assets/bubbles.png');
        this.load.image('leafs', './assets/leafs.png');


        this.load.spritesheet('human_run', './assets/human.png', {frameWidth: 300, frameHeight: 200, startFrame: 0, endFrame: 7})


        this.load.spritesheet('turtle_run','./assets/turtle_run.png',{frameWidth: 128, frameHeight: 128, startFrame: 0, endFrame: 7});

        this.load.path = 'assets/';
        this.load.image('groundScroll', 'ground1.png');
        
    }

    create() {
        // variables and settings
        this.JUMP_VELOCITY = -600;
        this.MAX_JUMPS = 1.5;
        this.SCROLL_SPEED = 4;
        currentScene = 3;
        this.physics.world.gravity.y = 2600;

       
        this.bgm = this.sound.add('bg_music', {mute: false, volume: 1.0, rate: 1, loop: true});
        this.talltrees = this.add.tileSprite(0, 0, 1200, 700, 'play_bg').setOrigin(0,0);
        this.groundScroll = this.add.tileSprite(0, game.config.height-tileSize, game.config.width, tileSize, 'groundScroll').setOrigin(0);

        this.sfx = this.sound.add('skeleton_laugh');
        this.sfx.play();

        this.ground = this.add.group();
        for(let i = 0; i < game.config.width; i += tileSize) {
            let groundTile = this.physics.add.sprite(i, game.config.height - tileSize,'groundScroll' ).setScale(SCALE).setOrigin(0);
            groundTile.body.immovable = true ;
            groundTile.body.allowGravity = false;
            this.ground.add(groundTile);
        }


        var math_variable0= Phaser.Math.Between(-300, -600);
        this.block0 = this.add.group();
        this.Block = this.physics.add.sprite(400, 635,"shark").setScale(SCALE).setOrigin(0);
        for (var i = 0; i <= 300; i++) { 
            this.Block.body.immovable =true ;
            this.Block.body.allowGravity = false;
            this.Block.body.setVelocityX(math_variable0);
            this.block0.add(this.Block);
        }

        var math_variable1= Phaser.Math.Between(-300, -600);
        this.block1 = this.add.group();
        this.Block1 = this.physics.add.sprite(650, 545,"bubbles").setScale(SCALE).setOrigin(0);
        for (var i = 0; i <= 300; i++) { 
            this.Block1.body.immovable =true ;
            this.Block1.body.allowGravity = false;
            this.Block1.body.setVelocityX(math_variable1);
            this.block1.add(this.Block1);
        }
        
        var math_variable2= Phaser.Math.Between(-300, -600);
        this.block2 = this.add.group();
        this.Block2 = this.physics.add.sprite(900, 570,"leafs").setScale(SCALE).setOrigin(0);
        for (var i = 0; i <= 300; i++) {
            this.Block2.body.immovable = true;
            this.Block2.body.allowGravity = false;
            this.Block2.body.setVelocityX(math_variable2);
            this.block2.add(this.Block2);
        }


        this.human_end = this.add.group();
        this.human = this.physics.add.sprite(100, game.config.height/100-tileSize, 'human_run').setScale(SCALE);
        this.human_end.add(this.human);


        

        this.turtle = this.physics.add.sprite(800, game.config.height/2-tileSize, 'turtle_run').setScale(SCALE);

        this.turtleCollide = this.add.group();
        this.turtleCollide.add(this.turtle);
        cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.turtleCollide, this.ground);
        this.physics.add.collider(this.human_end, this.ground);

        
        this.physics.add.collider(this.turtleCollide, this.block0);
        this.physics.add.collider(this.turtleCollide, this.block1);
        this.physics.add.collider(this.turtleCollide, this.block2);
        this.physics.add.collider(this.turtleCollide, this.human_end);

        let scoreConfig = {
            fontFamily: 'serif',
            fontSize: '28px',
            backgroundColor: '#A020F0',
            color: '#843605',
            align: 'right',
            padding: {
                top: 10,
                bottom: 10,
            },
            fixedWidth: 200
        }
        
        this.gameOver = false;
        this.changeScene = false;
        this.playerTime = 0;

        scoreConfig.color = '#FFFF00';

        this.jump_music = this.sound.add('jump_sound', {mute: false, volume: 0.2, rate: 1, loop: false});


        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q)
    }

    update(time, delta) {
        let scoreConfig = {
            fontFamily: 'serif',
            fontSize: '28px',
            backgroundColor: '#ADD8E6',
            color: '#843605',
            align: 'right',
            padding: {
                top: 10,
                bottom: 10,
            },
        }

        if(this.gameOver == false ){ 
            this.playerTime += delta;
        }        


        this.talltrees.tilePositionX += this.SCROLL_SPEED;
        this.groundScroll.tilePositionX += this.SCROLL_SPEED;

            this.turtle.isGrounded = this.turtle.body.touching.down;
            this.human.isGrounded = this.human.body.touching.down;
        

	    if((this.turtle.isGrounded || this.human.isGrounded) && this.gameOver == false) {
	    	this.jumps = this.MAX_JUMPS;
	    	this.jumping = false;
	    }
	    if(this.jumps > 0 && Phaser.Input.Keyboard.DownDuration(cursors.up, 150) && this.gameOver == false) {
	        if(cursors.right.isDown){
                this.turtle.setVelocityX(15);
            }
            else{
                this.turtle.setVelocityX(0);
            }
            this.turtle.body.velocity.y = this.JUMP_VELOCITY;
            this.human.body.velocity.y = this.JUMP_VELOCITY;
	        this.jumping = true;
            
            this.jump_music.play();
            

	    }
	    if(this.jumping && Phaser.Input.Keyboard.UpDuration(cursors.up) && this.gameOver == false) {
	    	this.jumps--;
	    	this.jumping = false;
	    }
 

        if(this.physics.overlap(this.turtle, this.human_end)){
            this.gameOver == true;
        }

        if(this.physics.overlap(this.turtle, this.human_end) || this.turtle.x <= this.human.x || this.turtle.x < 0 || this.human.x < 0){           
            this.gameOver == true;
            this.block0.clear();
            this.block1.clear();
            this.block2.clear();
            this.sfx.play();
            this.turtleCollide.killAndHide(this.turtle);
            this.human_end.killAndHide(this.human);

            this.playerTime = 0;
            this.bgm.stop();

            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press SPACE to Restart', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 128, 'Press Q to Go Back to Menu', scoreConfig).setOrigin(0.5);
        }

        if(this.gameOver == true){
            this.timeLeft = this.add.text(borderPadding + borderUISize*10, borderUISize + borderPadding, temp, scoreConfig);
        }
       
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.bgm.stop();
            this.scene.restart();
        }

        if(Phaser.Input.Keyboard.JustDown(keyQ)){
            this.bgm.stop();
            this.scene.start('menuScene');
        }
        
        this.physics.world.wrap(this.block0, 0);
        this.physics.world.wrap(this.block1, 0);
        this.physics.world.wrap(this.block2, 0);


    }
}

