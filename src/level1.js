ACEH.level1 = function(game){};
var flag = true;
var left=false,right=false, duck = false, lompat = false;
var lompat = false;
var left=false; 
var right=false;
var duck= false;
var score = 0;
var scoreText;
var main = 3;
var introText;
var livesText;

var timer, timerEvent, text;
var btnlompat,btnjlnkanan,btnjlnkiri,daun, player, platforms,mnubutton,ltr, menu,lompat,atas,lyrkmbli,huruf,coin,t,choiseLabel;

ACEH.level1.prototype = {
	create:function(){
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.world.setBounds(0, 0, 2550, 800);
			ltrblkang = this.add.tileSprite(0,0,2550,800,'lyr3');
			pintu = this.add.image(0,520, 'pintu');
			pause_label = this.add.group();
			pause_label.enableBody = true;

			pause = this.add.group();
			pause.enableBody = true;
			pause.fixedToCamera = true;

			bckpta1 = this.add.group();
			bckpta1.enableBody = true;
			bckpta1.fixedToCamera = true;



			airgelumbung = this.add.group();
			airgelumbung.enableBody = true;

			huruf = this.add.group();
			huruf.enableBody = true;
			jebakan = this.add.group();
			jebakan.enableBody = true;
			var air = jebakan.create( 280, 720, 'air1');
			j1 = jebakan.create( 885, 730,'jbk1');
			j2 = jebakan.create( 2075, 730,'jbk1');
		

	 		coin = this.add.group();
	 	   	coin.enableBody = true;
			var star,star1;
			  	

   			star = coin.create(150, 400, 'coin');
   			star = coin.create( 140, 500, 'coin');
       			star = coin.create( 135, 600, 'coin');


       		
   			star = coin.create(200, 400, 'coin');
   			star = coin.create( 220, 500, 'coin');
       			star = coin.create( 235, 600, 'coin');
   		 	star = coin.create( 320, 450, 'coin');
   		 	star = coin.create( 380, 450, 'coin');

   			for (var i = 0; i < 7; i++)
   			{        	
		       		star = coin.create(i * 600, 520, 'coin');
		       		star = coin.create(i * 500, 560, 'coin');
				star = coin.create(i * 430, 400, 'coin');       		    	
		       		coin.callAll('animations.add', 'animations', 'coin', [3,4,5,6,7],12, true);    
		    		coin.callAll('animations.play', 'animations', 'coin');
		    	}	   

  
			this.waktu();	
			t = this.add.image( 0,0,'t');
			t.enableBody = true;
			t.fixedToCamera = true;	
			scoreText = this.add.text(22, 25, ' 0', { font: "bold 14pt Arial", fill: "white",align: "center"  });
			scoreText.enableBody = true;
			scoreText.fixedToCamera = true;	

			this.pause();
		 	this.daun();
			this.gelumbung();
			this.pijakan();
			this.player();
		 

		}, 

		update:function(){ 
			this.game.physics.arcade.collide(player, platforms);
			this.game.physics.arcade.collide(jebakan,platforms);
			this.game.physics.arcade.collide(coin, platforms );
			this.game.physics.arcade.overlap(player, coin,this.tambahpoin,null, this);

			this.game.physics.arcade.overlap(player,jebakan,this.jbkan,null, this);
	  		player.body.velocity.x = 0;
			player.body.velocity.x = -0;
    			if (left && !duck)
    			{
		
        		player.body.velocity.x = -200;
       			player.animations.play('walk');

    			}
    			else if (right && !walk)
    			{
		  
			       player.body.velocity.x = 200;
			       player.animations.play('duck');
   			}
			    else
			    {
		
				player.animations.stop();

				player.frame = 4;
			    }
			    
			    
			    if (lompat && !left && !right)
			    {
		
				player.body.velocity.y = -500;
			    }
		},

	waktu:function(){
		timer = this.game.time.create();
  		timerEvent = timer.add(Phaser.Timer.MINUTE * 00 + Phaser.Timer.SECOND * 50, this.endTimer, this);
               	timer.start();
	},

	render: function () {
	        if (timer.running) {
        	this.game.debug.text('Petualangan dimulai' , 150, 20, "#ff0");
        	this.game.debug.text(this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)), 210, 47, "#ff0");
        	}
        	else {
            
           	this.main();
	        }
	    },
   		endTimer: function() {

       		timer.stop();


	},

 formatTime: function(s) {

		var minutes = "0" + Math.floor(s / 60);
		var seconds = "0" + (s - minutes * 60);
		return minutes.substr(-2) + ":" + seconds.substr(-2);   
    },

   
	pijakan: function(){
		platforms = this.add.group();
    		platforms.enableBody = true;
		pijakw= platforms.create(-220,700, 'pijakw');
    		pijakw.body.immovable = true;
	    	
	    	k1=platforms.create(330,600,'ky');
	    	k1.body.immovable=true;
	    	k2=platforms.create(1740,600,'ky');
	    	k2.body.immovable=true;
	    	k3=platforms.create(2260,600,'ky');
	    	k3.body.immovable=true;
	    	p_2= platforms.create(495,690, 'pjak_2');
	    	p_2.body.immovable = true;
	    	
	    	p_5= platforms.create(945,690, 'pjak_2');
	    	p_5.body.immovable = true;
	    	p_4= platforms.create(695,690, 'pjak2_2');
	    	p_4.body.immovable = true;
	    	p_3= platforms.create(595,590, 'pjak_2');
	    	p_3.body.immovable = true;
	    	p_6= platforms.create(1000,590, 'pjak_2');
	    	p_6.body.immovable = true;
	    	p_7= platforms.create(1085,500, 'pjak_2');
	    	p_7.body.immovable = true;
	    	p_11= platforms.create(1400,700, 'pjak2_2');
	    	p_11.body.immovable = true;
	    	p_10= platforms.create(1295,590, 'pjak2_2');
	    	p_10.body.immovable = true;
	    	
	    	p_9= platforms.create(1230,500, 'pjak2_2');
	    	p_9.body.immovable = true;
	    	
	    	p_8= platforms.create(1200,420, 'pjak_2');
	    	p_8.body.immovable = true;
	    	p_12= platforms.create(1500,690, 'pjak2_2');
	    	p_12.body.immovable = true;
	    	p_13= platforms.create(1885,690, 'pjak2_2');
	    	p_13.body.immovable = true;
	    	p_14= platforms.create(2140,750, 'pjak_3');
	    	p_14.body.immovable = true;
	    	p_14= platforms.create(2140,690, 'pjak_3');
	    	p_14.body.immovable = true;
	    	p_15= platforms.create(2390,690, 'pjak2_2');
	    	p_15.body.immovable = true;
	
	},	
	
	player:function() {
		
		player = this.add.sprite(32, 530, 'mario');
		this.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;

		player.body.gravity.y = 4500;
		player.body.collideWorldBounds = true;		

		this.physics.arcade.enable(player);
		player.animations.add('duck', [0, 1, 2, 3], 40, true);
		player.animations.add('walk', [6, 7,9], 40, true);
		this.camera.follow(player);
		btnlompat = this.add.button(350,490,'buttonjump',null,this);
		btnlompat.fixedToCamera = true;
		btnlompat.events.onInputOver.add(function(){lompat=true;});
		btnlompat.events.onInputOut.add(function(){lompat=false;});
		btnlompat.events.onInputDown.add(function(){lompat=true;});
		btnlompat.events.onInputUp.add(function(){lompat=false;});
		btnjlnkanan = this.add.button(100, 490, 'buttonhorizontal',null, this);
		btnjlnkanan.fixedToCamera = true;
		btnjlnkanan.events.onInputOver.add(function(){right=true;});
		btnjlnkanan.events.onInputOut.add(function(){right=false;});
		btnjlnkanan.events.onInputDown.add(function(){right=true;});
		btnjlnkanan.events.onInputUp.add(function(){right=false;});
		btnjlnkiri = this.add.button(30, 490, 'buttonvertical',null, this);
		btnjlnkiri.fixedToCamera = true;
		btnjlnkiri.events.onInputOver.add(function(){left=true;});
		btnjlnkiri.events.onInputOut.add(function(){left=false;});
		btnjlnkiri.events.onInputDown.add(function(){left=true;});
		btnjlnkiri.events.onInputUp.add(function(){left=true;});	

	},

 	next:function () {
		this.state.start('level1');
		music = this.add.audio("mn_clck");
        	music.play();
	},
 	
	jbkan:function(_player,_jabakan){
		music = this.add.audio("lost_life");
      		music.play();    
    		main --;
    		if ( main == 0) { 
      			for (main = 4; main > 4;)        
        		livesText.text = '' +main;
        		_player.kill();
        	this.endTimer();
        }
        

	},

	tambahpoin:function  (_player, _coin) {
			music = this.add.audio("collect");
		    	music.play();
			scoreText.text = '0' + score,{ font: 'bold 14pt Arial', fill: 'white' };
			scoreText.text = '' + score,{ font: 'bold 14pt Arial', fill: 'white' };
		 	_coin.kill(); 
    			score += 5;
    			if (score ==250)
    			{
    			   _player.kill();
    			   timer.pause();
    		 	   this.lanjutscore();
       			for (score =0; score > 250; score++){      			
       				}    		
			}
    			else {
				scoreText.text = ' ' + score;			
	   		}
	},
	
	gelumbung:function(){
			gelumbung2 = this.add.emitter(420, 750);
			gelumbung2.width = 120;
			gelumbung2.makeParticles('airbulat');
			gelumbung2.minParticleSpeed.set(30, 40);
	   		gelumbung2.maxParticleSpeed.set(10, 80);
			gelumbung2.setRotation(0, 0);
	 		gelumbung2.setAlpha(0.3, 0.8);
		    	gelumbung2.setScale(0.5, 0.5, 1, 1);
		    	gelumbung2.gravity = -250;
			gelumbung2.start(false, 800, 30);
			var air1 = jebakan.create( 1685, 720, 'air1');
			gelumbung2 = this.add.emitter(1790, 750);
			gelumbung2.width = 200;
			gelumbung2.makeParticles('airbulat');
			gelumbung2.minParticleSpeed.set(30, 40);
	   		gelumbung2.maxParticleSpeed.set(10, 80);
			gelumbung2.setRotation(0, 0);
	 		gelumbung2.setAlpha(0.3, 0.8);
		    	gelumbung2.setScale(0.5, 0.5, 1, 1);
		    	gelumbung2.gravity = -250;
			gelumbung2.start(false, 800, 30);
			var air2 = jebakan.create( 2178, 720, 'air1');
			gelumbung3 = this.add.emitter(2278, 750);
			gelumbung3.width = 200;
			gelumbung3.makeParticles('airbulat');
			gelumbung3.minParticleSpeed.set(30, 40);
	   		gelumbung3.maxParticleSpeed.set(10, 80);
			gelumbung3.setRotation(0, 0);
	 		gelumbung3.setAlpha(0.3, 0.8);
		    	gelumbung3.setScale(0.5, 0.5, 1, 1);
		    	gelumbung3.gravity = -250;
			gelumbung3.start(false, 800, 30);
		
		},

	playGame:function(){
			ltr= this.add.image(250,320, "bck");
	    		ltr.anchor.set(0.5);
	   		ltr.fixedToCamera = true;
			scoreText = this.add.text(150, 150, 'Andah Kalah ', { font: "bold 16pt Arial", fill: "white",align: "center"  });
			scoreText.enableBody = true;
			scoreText.fixedToCamera = true;
	   		scoreText = this.add.text(200, 250, 'Score '+score, { font: "bold 16pt Arial", fill: "white",align: "center"  });
			scoreText.enableBody = true;
			scoreText.fixedToCamera = true;
	   		var buttonRestart = this.add.button(290,380, 'restart_button',this.backlevel, this,1,0,2);
			buttonRestart.anchor.set(0.5);
			buttonRestart.fixedToCamera = true;
	   		var selectlevel_button = this.add.button(180,380, 'selectlevel_button',this.backmnu, this,1,0,2);
			selectlevel_button.anchor.set(0.5);
			selectlevel_button.fixedToCamera = true;	
	
		},

	daun:function(){

		daun1 = this.add.emitter(620, 80);
    		daun1.width = 300;
		daun1.makeParticles('daun');
		daun1.minParticleSpeed.set(200, 600);
   		daun1.maxParticleSpeed.set(10, 20);
		daun1.setRotation(0, 0);
 		daun1.setAlpha(0.3, 0.8);
    		daun1.setScale(0.5, 0.5, 1, 1);
    		daun1.gravity = -300;
		daun1.start(false, 800, 10);		
		daun1 = this.add.emitter(920, 80);
    		daun1.width = 400;
		daun1.makeParticles('daun');
		daun1.minParticleSpeed.set(500, 600);
   		daun1.maxParticleSpeed.set(10, 20);
		daun1.setRotation(0, 0);
 		daun1.setAlpha(0.3, 0.8);
	    	daun1.setScale(0.5, 0.5, 1, 1);
	    	daun1.gravity = -300;
		daun1.start(false, 800, 10);
	
	},	
	

	backmnu:function () {
		this.state.start('FileGambar');
		music = this.add.audio("mn_clck");
        	music.play();
		
	},
	backlevel:function () {
		this.state.start('level1');
		music = this.add.audio("mn_clck");
        	music.play();
		
	},
	buttonjump:function(){
		music = this.add.audio("jump");
		music.play();
		btnlompat.events.onInputOver.add(function(){lompat=true;});
	    	btnlompat.events.onInputOut.add(function(){lompat=false;});
	    	btnlompat.events.onInputDown.add(function(){lompat=true;});
	    	btnlompat.events.onInputUp.add(function(){lompat=false;});

	},
	btnjlnkanan:function(){
		music = this.add.audio("hit");
		music.play();
		btnjlnkanan.events.onInputOver.add(function(){right=true;});
   		btnjlnkanan.events.onInputOut.add(function(){right=false;});
   		btnjlnkanan.events.onInputDown.add(function(){right=true;});
    		btnjlnkanan.events.onInputUp.add(function(){right=false;});

	},
	btnjlnkiri:function(){
		music = this.add.audio("hit");
		music.play();
		btnjlnkiri.events.onInputOver.add(function(){left=true;});
	    	btnjlnkiri.events.onInputOut.add(function(){left=false;});
	    	btnjlnkiri.events.onInputDown.add(function(){left=true;});
   		btnjlnkiri.events.onInputUp.add(function(){left=false;});	
	}, 



	main:function(){
		ltr= this.add.image(230,320, "bck");
		ltr.anchor.set(0.5);
		ltr.fixedToCamera = true;
		scoreText = this.add.text(160, 130, 'Anda Kalah', { font: "bold 20pt Arial", fill: '#ff0',align: "center"  });
			scoreText.enableBody = true;
			scoreText.fixedToCamera = true;
			scoreText = this.add.text(195, 180, 'Poin '+score, { font: "bold 20pt Arial", fill: '#ff0',align: "center"  });
			scoreText.enableBody = true;
			scoreText.fixedToCamera = true;
		    
			var selectlevel_button = this.add.button(160,380, 'selectlevel_button',this.backmnu, this,1,0,2);
			selectlevel_button.anchor.set(0.5);
			selectlevel_button.fixedToCamera = true;
			var btnpta = this.add.button(240,380, 'btnpta',this.bckpta, this,1,0,2);
			btnpta.anchor.set(0.5);
			btnpta.fixedToCamera = true;  
			var buttonRestart = this.add.button(320,380, 'restart_button',this.backlevel, this,1,0,2);
			buttonRestart.anchor.set(0.5);
			buttonRestart.fixedToCamera = true;
		},

		lanjutscore:function(){
			ltr= this.add.image(230,320, "bck");
			ltr.anchor.set(0.5);
			ltr.fixedToCamera = true;
			tText = this.add.text(160, 130, 'Anda Menang', { font: "bold 20pt Arial", fill: '#ff0',align: "center"  });
			tText.enableBody = true;
			tText.fixedToCamera = true;   
	      
		    var selectlevel_button = this.add.button(160,380, 'selectlevel_button',this.backmnu, this,1,0,2);
		    selectlevel_button.anchor.set(0.5);
		    selectlevel_button.fixedToCamera = true;
		    var btnpta = this.add.button(240,380, 'btnpta',this.bckpta, this,1,0,2);
		    btnpta.anchor.set(0.5);
		    btnpta.fixedToCamera = true;  
		    var buttonRestart = this.add.button(320,380, 'lnjut',this.next, this,1,0,2);
		    buttonRestart.anchor.set(0.5);
		    buttonRestart.fixedToCamera = true;    	
		
	},

	pause:function(){      

			this.soundButton = this.game.add.button(360, 20, 'btnlagu', this.toggleMute, this,0,1,2);
			this.soundButton.fixedToCamera = true;
			if (!this.game.sound.mute) {
	
			    this.soundButton.tint = 16777215;
			} else {

			    this.soundButton.tint = 16711680;
			}

			this.pauseButton = this.game.add.sprite(420, 20, 'btnpause');
			this.pauseButton.inputEnabled = true;
			this.pauseButton.fixedToCamera = true;

			this.pauseButton.events.onInputUp.add(function() {
	
			    this.game.paused = true;
			    
			    this.pauseButton.tint = 16711680;
			   
			}, this);
			this.game.input.onDown.add(function() {

   			if (this.game.paused) this.game.paused = false;
	
			    this.pauseButton.tint = 16777215;
			}, this);
			},


	toggleMute: function() {

	    if (!this.game.sound.mute) {
		this.game.sound.mute = true;
		this.soundButton.tint = 16711680;
	    } else {

		this.game.sound.mute = false;
		this.soundButton.tint = 16777215;
	    }

	},


	bckpta:function(){
		this.state.start('peta');
		music = this.add.audio("mn_clck");
        music.play();
	}
};
