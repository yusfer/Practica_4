describe("Collisions", function(){
	
	var canvas, ctx;
	beforeEach(function(){
		loadFixtures('index.html');
		canvas = $('#game')[0];
		expect(canvas).toExist();
		ctx = canvas.getContext('2d');
		expect(ctx).toBeDefined();
		oldGame = Game;
		GBoard = new GameBoard()
		SpriteSheet = {
			map : {
				missile: { sx: 0, sy: 30, w: 2, h: 10, frames: 1 },
				ship: { sx: 0, sy: 0, w: 37, h: 42, frames: 1 },
				enemy_purple: { sx: 37, sy: 0, w: 42, h: 43, frames: 1 },
				enemy_bee: { sx: 79, sy: 0, w: 37, h: 43, frames: 1 },
				enemy_ship: { sx: 116, sy: 0, w: 42, h: 43, frames: 1 },
				enemy_circle: { sx: 158, sy: 0, w: 32, h: 33, frames: 1 },
				fireball: { sx: 0, sy: 75, w: 55, h: 43, frames: 1 },
			},draw: function(ctx, name, x, y){},
		}
	})
	
	afterEach(function(){
		Game = oldGame;
	});
	
	it("nave suficiente dañada desparece", function(){
		
		//creo nave y la dañamos
		nave = new Enemy({x: 10, y: 10, sprite: 'enemy_purple', B: 100, C: 4, E: 100,health:10}); 
		misiles = new PlayerMissile(10,10)
		GBoard.add(nave)
		GBoard.add(misiles)
		expect(GBoard.objects[0].sprite).toBe('enemy_purple');
		expect(GBoard.objects[1].sprite).toBe('missile');
		GBoard.step(8);
		expect(GBoard.objects.length).toBe(0);
		
	});
	
	it("nave insuficiente dañada no desparece", function(){
		
		//creo nave y la dañamos
		nave = new Enemy({x: 10, y: 10, sprite: 'enemy_purple', B: 100, C: 4, E: 100,health:80}); 
		misiles = new PlayerMissile(10,10)
		GBoard.add(nave)
		GBoard.add(misiles)
		expect(GBoard.objects[0].sprite).toBe('enemy_purple');
		expect(GBoard.objects[1].sprite).toBe('missile');
		GBoard.step(2);
		expect(GBoard.objects.length).toBe(1);
		
	});
	
	
	it("fireball alcanza destruye nave pero ella continua", function(){
		
		//creo nave y la dañamos
		nave = new Enemy({x: 10, y: 10, sprite: 'enemy_purple', B: 100, C: 4, E: 100,health:80}); 
		fireball = new FireBall(10,10,1)
		GBoard.add(nave)
		GBoard.add(fireball)
		expect(GBoard.objects[0].sprite).toBe('enemy_purple');
		expect(GBoard.objects[1].sprite).toBe('fireball');
		GBoard.step(2);
		expect(GBoard.objects.length).toBe(1);
		
	});
	
	it("choque enemigo y jugador, mueren los dos", function(){
		
		//creo nave y la dañamos
		nave = new Enemy({x: 10, y: 10, sprite: 'enemy_purple', B: 100, C: 4, E: 100,health:80}); 
		player = new PlayerShip()
		player.x = 10
		player.y = 10
		GBoard.add(nave)
		GBoard.add(player)
		expect(GBoard.objects[0].sprite).toBe('enemy_purple');
		expect(GBoard.objects[1].sprite).toBe('ship');
		GBoard.step(1/1000);
		expect(GBoard.objects.length).toBe(0);
		
	});
	
	
	
});
