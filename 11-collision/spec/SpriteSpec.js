describe("Spec", function(){
	
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
			},
			draw: function(){},
			merge: function(){},
			setup: function(){}, 			
		}
	})
	
	
	afterEach(function(){
		Game = oldGame;
	});
	
	
	it ("draw",function() {
		spyOn(PlayerShip.prototype,"draw");
		ship = new PlayerShip();
		GBoard.add(ship);
		GBoard.draw(ctx);
		expect(PlayerShip.prototype.draw).toHaveBeenCalled();
	});
	
	it("setup",function() {
		spyOn(PlayerShip.prototype,"setup");
		spyOn(PlayerMissile.prototype,"setup");
		spyOn(Enemy.prototype,"setup");
		
		ship = new PlayerShip();
		misil = new PlayerMissile(ship.x,ship.y);
		enemy = new Enemy({ x: 100, y: -50, sprite: 'enemy_purple'})
		
		expect(PlayerShip.prototype.setup.calls[0].args[0]).toBe('ship');
		expect(PlayerMissile.prototype.setup.calls[0].args[0]).toBe('missile');
		expect(Enemy.prototype.setup.calls[0].args[0]).toBe('enemy_purple');
			
	});
	
	
});
