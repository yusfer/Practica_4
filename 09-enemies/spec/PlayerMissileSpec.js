
describe("PlayerMissileSpec", function(){
	
	beforeEach(function(){
		loadFixtures('index.html');
		canvas = $('#game')[0];
		expect(canvas).toExist();
		ctx = canvas.getContext('2d');
		expect(ctx).toBeDefined();
		oldGame = Game;
		GBoard = new GameBoard()
		
	})
	
	afterEach(function(){
		Game = oldGame;
	});

	
	it("Añado misiles" ,  function(){
		
		var misil = new PlayerMissile(100,200)
		expect(misil.x).toEqual(99)
		expect(misil.y).toEqual(190)
		expect(misil.w).toEqual(2)
		expect(misil.h).toEqual(10)
				
		});
		
		
		
	it("lanzamiento misiles" , function(){
			
		Game.initialize("game",sprites,function(){})
		foo1 = new PlayerMissile(300,300)
		GBoard.add(foo1)
		GBoard.resetRemoved()
		foo1.step(0.5)
		expect(foo1.x).toBe(299);
		expect(foo1.y).toBe(-60);
			
			
			
			
		});
});
