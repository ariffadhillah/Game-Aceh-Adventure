ACEH.bantuan = function(game){

};
 
ACEH.bantuan.prototype = {
create:function(){
this.physics.startSystem(Phaser.Physics.ARCADE);

ltrblkang = this.add.image(0,0,'bantuan');
this.kembali();
	},
	kembali:function(){
	kembali = this.add.button(80,10,'kembali',this.kmb,this);
	},
	kmb:function(){
		this.state.start('MainMenu');
	}	
};
