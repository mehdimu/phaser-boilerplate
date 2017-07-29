// Create the state that will contain the whole game
var mainState = {
    preload: function() {
        // Here we preload the assets

        game.load.image('player', 'assets/bird.png');

    },

    create: function() {
        // Here we create the game

        // Set the background color to blue
        game.stage.backgroundColor = '#3598db';

        // Start the Arcade physics system (for movements and collisions)
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // Add the physics engine to all game objects
        game.world.enableBody = true;

        // Variable to store the arrow key pressed
        this.cursor = game.input.keyboard.createCursorKeys();

        // Create the player in the middle of the game
        this.player = game.add.sprite(70, 100, 'player');
        this.player.scale.setTo(0.50)

        // Add gravity to make it fall
    },

    update: function() {
        // Here we update the game 60 times per second

        // Move the player when an arrow key is pressed
        if (this.cursor.left.isDown)
            this.player.body.velocity.x = -200;
        else if (this.cursor.right.isDown)
            this.player.body.velocity.x = 200;
        else
            this.player.body.velocity.x = 0;
    },
};

// Initialize the game and start our state
var game = new Phaser.Game(500, 200);
game.state.add('main', mainState);
game.state.start('main');
