describe("Enemy", function(){
	
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
	
	
	it("Enemy draw", function(){
		
		//creo enemigo
		enemigo = new Enemy({x: 80, y: -80, sprite: 'enemy_purple'}); 
		spyOn(SpriteSheet,"draw") ;
		GBoard.add(enemigo)
		enemigo.draw(ctx);
		expect(SpriteSheet.draw).toHaveBeenCalled() ; 
		
	});
	
	it("Enemy step", function(){
		
		//creo enemigo
		enemigo = new Enemy({x: 80, y: -1, sprite: 'enemy_purple',B: 100, C: 2 , E: 100}); 
		GBoard.add(enemigo)
		enemigo.step(1);
		expect(enemigo.y).toBeGreaterThan(0);
	});
});
