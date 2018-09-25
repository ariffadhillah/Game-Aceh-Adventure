(function () {
    
    var game = new Phaser.Game(480, 640, Phaser.AUTO, 'game');

    game.state.add('Game', ACEH.Game);
    game.state.add('FileGambar', ACEH.FileGambar);
    game.state.add('MainMenu',ACEH.MainMenu);
    game.state.add('bantuan',ACEH.bantuan);
    game.state.add('peta',ACEH.peta);
    game.state.add('level1',ACEH.level1);
    game.state.start('Game');

})();
