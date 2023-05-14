// Rocket prefab
class skeleton extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);  
        this.isWalking = false;     
        this.moveSpeed = 8;        
        this.moveSpeed2 = 1.25;
        
    }

    update() {

        if(!this.isWalking) {
            if(keyRIGHT.isDown && this.x <= borderUISize + this.width) {
                this.x += this.moveSpeed;
            } 
        }
    }
}