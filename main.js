var game = new Phaser.Game(600,400, Phaser.AUTO);
game.state.add('state0', demo.state2);
game.state.add('state1', demo.state1);
game.state.add('state2', demo.state2);
game.state.add('state3', demo.state2);
game.state.add('state4', demo.state2);
game.state.add('state5', demo.state2);
game.state.add('state6', demo.state2);
game.state.add('state7', demo.state2);
game.state.add('state8', demo.state2);
game.state.add('state9', demo.state2);
game.state.start('state1');