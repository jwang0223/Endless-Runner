class Menu extends Phaser.Scene {
  constructor() {
      super("menuScene");
  }

  preload() {
      this.load.image('menuBackground', './assets/menuBackground.png');
      this.load.audio('skeleton_laugh', './assets/skeleton_laugh.mp3');
      this.load.audio('bg_music', './assets/bg_music.wav');
      this.load.audio('jump_sound', './assets/jump_sound.wav');

      this.load.audio('menu_bgm', './assets/t.wav');
  }

  create() {
      let titleConfig1 = {
          fontFamily: 'Pangolin',
          fontSize: '64px',
          color: '#ff8c00',
          align: 'center',
      }

      let titleConfig2 = {
          fontFamily: 'Pangolin',
          fontSize: '32px',
          color: '#ffa90a',
          align: 'center',
      }

      let centerX = game.config.width / 2;
      let centerY = game.config.height / 2;

      this.music = this.sound.add('menu_bgm', {mute: false, volume: 1.0, rate: 1, loop: true});
      this.music.play();
      
      this.add.tileSprite(0, 0, 1200, 700, 'menuBackground').setOrigin(0, 0);

      this.add.text(centerX, centerY/3 - borderUISize - borderPadding, 'Human Catcher', titleConfig1).setOrigin(0.5);
      this.add.text(centerX, centerY/2 + 90, 'Press S for Credits', titleConfig2).setOrigin(0.5);
      this.add.text(centerX, centerY/2 + 45, 'Press W for Game Introduction', titleConfig2).setOrigin(0.5);
      this.add.text(centerX, centerY/2, 'Press SPACE to Play', titleConfig2).setOrigin(0.5);

      keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      KeyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      
  }

  update() {
      if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
          this.music.stop();
          this.scene.start("playScene");
      }
      if(Phaser.Input.Keyboard.JustDown(KeyW)){
          this.music.stop();
          this.scene.start("ruleScene");
      }
      if(Phaser.Input.Keyboard.JustDown(keyS)){
          this.music.stop();
          this.scene.start("creatorScene");
      }
      } 
  }