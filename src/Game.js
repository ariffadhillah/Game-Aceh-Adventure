var ACEH = {

};

ACEH.Game = function (game){
};


ACEH.Game.prototype = {

    init: function () {
        
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        
        this.scale.forceOrientation(false, true);
        
        this.scale.setResizeCallback(this.gameResized, this);
        
        this.scale.updateLayout(true);
        
        this.scale.refresh();

    },  

    preload: function () {
   	this.load.image('preloaderBar', 'asset/loading-bar.png');
	this.load.image('ltrblkng', 'asset/ltrblkng.png');
	this.load.image('load', 'asset/loading-background.png');	
    },

    create: function () {
	this.state.start("FileGambar");        
    	},

    gameResized: function (width, height) {}
};
