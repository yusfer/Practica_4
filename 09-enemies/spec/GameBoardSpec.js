describe("GameBoard", function(){
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
	
	it("GBoard.add", function(){
		
	//var GBoard = new GameBoard()
	spyOn(GBoard, "add").andCallThrough();
	
	var foo = {};

	expect(GBoard.add(foo).board).toBe(GBoard);
	expect(GBoard.objects.length).toEqual(1);
	
	});
	
	
	it("GBoard meto en removed", function(){
		
	//var GBoard = new GameBoard()
	
	spyOn(GBoard, "add").andCallThrough();	
	spyOn(GBoard, "remove").andCallThrough();	
	spyOn(GBoard, "resetRemoved").andCallThrough();	
	
	var foo1 = {};

	GBoard.add(foo1);

	GBoard.resetRemoved();
	GBoard.remove(foo1);
	
	expect(GBoard.removed.length).toBe(1);
	
	GBoard.resetRemoved();
	
	expect(GBoard.removed.length).toBe(0);
	});
	
	
	//meto dos objetos, marco para borrar uno, doy a delete y miro length = 1
	
	it("GBoard borrar objeto", function(){
	
	//var GBoard = new GameBoard()
	
	spyOn(GBoard, "add").andCallThrough();	
	spyOn(GBoard, "remove").andCallThrough();	
	spyOn(GBoard, "finalizeRemoved").andCallThrough();	
	spyOn(GBoard, "resetRemoved").andCallThrough();	
	
	var foo1 = {};
	var foo2 = {};
	
	GBoard.add(foo1);
	GBoard.add(foo2);
	
	GBoard.resetRemoved();
	GBoard.remove(foo1);
	
	GBoard.finalizeRemoved();
	
	expect(GBoard.objects.length).toBe(1)
		
	
	});
	
	it("GBoard overlap", function(){
		
		var foo1 = {x:0,y:0,w:50,h:50}
		var foo2 = {x:15,y:15,w:50,h:50}
		
		GBoard.add(foo1);
		GBoard.add(foo2);
		
		expect(GBoard.overlap(foo1,foo2)).toBeTruthy();
		
		var foo3 ={x:100,y:100,w:50,h:50}
		
		GBoard.add(foo3);
		
		expect(GBoard.overlap(foo1,foo3)).toBeFalsy();
		
		
	});
	
	
	it("GBoard funcion en objeto e iterate", function(){
		
		function obj(){
			this.funcDummy = function(){}			
		}
		
		GBoard.add(new obj)
		//spyOn(board,"funcDummy").andCallThrough()
		spyOn(GBoard,"iterate").andCallThrough()
		spyOn(GBoard.objects[0],"funcDummy").andCallThrough()
		
		GBoard.iterate("funcDummy");
		
		expect(GBoard.objects[0].funcDummy).toHaveBeenCalled();
		
	});
	
	
	

	
});
	
