class Creator extends Phaser.Scene {
    constructor() {
        super("creatorScene");
    }

    preload() {
        this.load.image('menucreator', './assets/menu.png');
    }

    create(){
        this.background = this.add.tileSprite(0, 0, 1000, 1000, 'menucreator').setOrigin(0.0);
        let titleConfig = {
            fontFamily: 'Pangolin',
            fontSize: '32px',
            color: '#ffa90a',
            align: 'right',
        }
        let text1Config = {
            fontFamily: 'Pangolin',
            fontSize: '24px',
            color: '#98fb98',
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

        this.add.text(centerX, centerY-300, 'Group members:', titleConfig).setOrigin(0.5);
        this.add.text(centerX, centerY-250, 'Jackie Wang', text1Config).setOrigin(0.5);

        this.add.text(centerX, centerY/3+90, 'Music:', titleConfig).setOrigin(0.5);
        this.add.text(centerX, centerY/3+130, 'Jackie Wang', text1Config).setOrigin(0.5);
    
        this.add.text(centerX, centerY+210, '[ Press (SPACE) to Return ]', creditConfig).setOrigin(0.5);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start("menuScene");
        }
    }

    
}