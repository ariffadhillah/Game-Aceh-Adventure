ACEH.FileGambar = function(game){

};    
ACEH.FileGambar.prototype = {
    preload:function(){
     
        	var ltrblkng = this.add.image(-20,20,'ltrblkng');
		var load = this.add.image(140,580,'load');   
		var text = this.add.text(250, 555, ' L o d i n g ');
		text.anchor.set(0.5);text.align = 'center';text.font = 'Arial';text.fontSize = 20;
		text.stroke = '#f89a33';text.strokeThickness = 0.5;text.fill = '#32f6f8';

		this.preloadBar = this.add.sprite(146,587, 'preloaderBar');
       		this.load.setPreloadSprite(this.preloadBar);
        	this.load.image('background', 'asset/background.png');
		this.load.image('loading-background', 'asset/loading-background.png');
        	this.load.image('backgroundpertama', 'asset/backgroundpertama.png');
        	this.load.image('bck', 'asset/bck.png');
	    	this.load.image('lanjut', 'asset/lanjut.png');
                this.load.image('daun', 'asset/daun.png');
		this.load.spritesheet('coin', 'asset/coin.png',29,41);
      
		 	

		this.load.image('pjktnah', 'asset/starpertama/pjktnah.png');
		this.load.image('airbulat', 'asset/starpertama/airbulat.png');
		this.load.image('lbelakang', 'asset/starpertama/layarblakang.png');
		this.load.image('pijakatas', 'asset/starpertama/pijakatas.png');
		this.load.image('air', 'asset/starpertama/air.png');
		this.load.image('air1', 'asset/starpertama/air1.png');
		this.load.image('pjak', 'asset/starpertama/pjak.png');
		this.load.image('pijakw', 'asset/starpertama/pijakw.png');
		this.load.image('pjk_2', 'asset/starpertama/pjk_2.png');

		this.load.image('pjak_2', 'asset/starpertama/pjak_2.png');
		this.load.image('pjak2_2', 'asset/starpertama/pjak2_2.png');
		this.load.image('pjak_3', 'asset/starpertama/pjak_3.png');
		this.load.image('pjak_4', 'asset/starpertama/pjak_4.png');
		this.load.image('pintu', 'asset/starpertama/pintu.png');
		this.load.image('pjk_4', 'asset/starpertama/pjk_4.png');
		this.load.image('pijakan', 'asset/starpertama/pijakan.png');
		this.load.image('pijak', 'asset/starpertama/pijak.png');


		this.load.image('phn', 'asset/starpertama/phn.png');
		this.load.image('jbk1', 'asset/starpertama/jbk1.png');
		this.load.image('jbk2', 'asset/starpertama/jbk2.png');
		this.load.spritesheet('buttonstart', 'asset/play.png',200, 66);
		this.load.spritesheet('button-lagu', 'asset/lagu.png',200, 66);
		this.load.spritesheet('btnlagu', 'asset/buttons-big/sound.png');
		this.load.spritesheet('mario', 'asset/player.png', 36, 120);
		this.load.spritesheet('player', 'asset/buttons-big/player.png', 15, 70);  
		this.load.image('ground', 'asset/2048x48-ground.png');
		this.load.image('clouds', 'asset/clouds.jpg');
		this.load.image('t', 'asset/t.png');  

		this.load.spritesheet('pagar', 'asset/buttons-big/Tileset1.png',1500,100);
		this.load.spritesheet('restart_button', 'asset/buttons-big/restart_button.png',42,80);
		this.load.spritesheet('selectlevel_button', 'asset/buttons-big/selectlevel_button.png',42,80);

		this.load.image('btnlnjt', 'asset/buttons-big/btnlnjt.png');
		this.load.image('btnpta', 'asset/buttons-big/btnpta.png');
		this.load.image('pause_button', 'asset/buttons-big/pause_button.png');
		this.load.spritesheet('buttonvertical', 'asset/buttons-big/btnkr.png',70,40);
		this.load.spritesheet('buttonhorizontal', 'asset/buttons-big/btnkn.png',70,40);
		this.load.spritesheet('buttondiagonal', 'asset/buttons-big/button-diagonal.png',64,64);
		this.load.spritesheet('buttonjump', 'asset/buttons-big/btnatas.png',70,40);
		this.load.image('lyr3', 'asset/buttons-big/lyr3.png');

		this.load.image('btnpause', 'asset/buttons-big/btnpause.png');
		this.load.image('keluar', 'asset/buttons-big/keluar.png');
		this.load.image('bantuan', 'asset/buttons-big/bantuan.png');
		this.load.image('kembali', 'asset/buttons-big/kembali.png');

		this.load.image("lagu", "asset/buttons-big/lagu.png");
	     	this.load.image("tmlbtn", "asset/buttons-big/tmlbtn.png");

		this.load.image("lnjut", "asset/buttons-big/lnjut.png");
		this.load.image("ky", "asset/buttons-big/ky.png");



		this.load.image('back1', 'asset/buttons-big/back1.png');


		
		this.load.audio("jump","asset/lagu/jump.ogg");
		 
		this.load.audio("music","asset/lagu/laguaceh.mp3"); 
		this.load.audio("collect","asset/lagu/collect.ogg"); 
	 	this.load.audio("hit_block","asset/lagu/hit_block.ogg"); 
	 	this.load.audio("hit","asset/lagu/hit.ogg");
	 	this.load.audio("lost_life","asset/lagu/lost_life.ogg"); 
	 	this.load.audio("mn_clck","asset/lagu/menu_click.ogg"); 
	 	this.load.audio("gameover","asset/lagu/gameover.ogg"); 


	 	  
    },
    create:function(){
   this.state.start('MainMenu');         
    
    }



};
