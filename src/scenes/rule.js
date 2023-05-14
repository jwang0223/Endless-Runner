class Rule extends Phaser.Scene {
    constructor() {
        super("ruleScene");
    }


    preload() {

        this.load.image('menucreator', './assets/intro1.png');

        this.load.spritesheet('turtle_run','./assets/turtle_run.png',{frameWidth: 128, frameHeight: 128, startFrame: 0, endFrame: 7});

        this.load.spritesheet('human_run', './assets/human.png', {frameWidth: 250, frameHeight: 250, startFrame: 0, endFrame: 7})
    }

    create (){
        this.background = this.add.tileSprite(0, 0, 1200, 700, 'menucreator').setOrigin(0.0);

        let titleConfig = {
            fontFamily: 'Pangolin',
            fontSize: '32px',
            color: '#ffa90a',
            align: 'right',
        }

        let text1Config = {
            fontFamily: 'Pangolin',
            fontSize: '28px',
            color: '#FFA500',
            align: 'right',
        }
        
        let creditConfig = {
            color: '#CD00CD',
            fontFamily: 'Pangolin',
            fontSize: '22px',
            stroke: '#FFFFFF', 
            strokeThickness: 3,
            align: 'left',
            fixedWidth: 0,
        } 

        let centerX = game.config.width / 2;
        let centerY = game.config.height / 2;

        this.add.text(centerX, centerY -300, 'Turtle is Trying to Escape from Cage.', titleConfig).setOrigin(0.5);
        this.add.text(centerX, centerY -250, 'But the HUMAN Saw it Escape!', titleConfig).setOrigin(0.5);
        this.add.text(centerX, centerY -200, ' Your Goal is: Run! Run! Run!', titleConfig).setOrigin(0.5);

        this.add.image(centerX - 100, centerY - 100, 'human_run').setOrigin(0.5);
        this.add.image(centerX + 100, centerY - 100, 'turtle_run').setOrigin(0.5);

        this.add.text(centerX, centerY, 'Turtle will Keep Running and Jumping until Caught!', text1Config).setOrigin(0.5);
        text1Config.color = '#FFFFFF';
        this.add.text(centerX, centerY + 100, 'Up Arrow Once: jump', text1Config).setOrigin(0.5);
        this.add.text(centerX, centerY + 150, 'Up Arrow Twice: double jump', text1Config).setOrigin(0.5);
        this.add.text(centerX, centerY + 200, 'Hold Right Arrow: to RUNNNNNNN!!!', text1Config).setOrigin(0.5);
        
        this.add.text(centerX, centerY + 250, '[ Press (SPACE) to Return ]', creditConfig).setOrigin(0.5);
        
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update (){
        if (Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('menuScene');
        }
    }
}