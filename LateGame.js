G.AddData({
name:'LateGameAddons',
author:'Tabernet',
desc:'An Econ mod that adds a later game uses to heavily stockpiled resources',
engineVersion:1,
manifest:'LateGame.js',
requires:['Default dataset*'],
sheets:{'LateGameSheet':'/Lategame.png'},
func:function()
{
	//The idea in this simple mod is to add a means of adding use to items that otherwise just fill storage
	//Based on Orteil's 'Example mod' 
		//new technology which alows Water Purification:
	new G.Tech({
		name:'water purification',
		desc:'@Convert 750 [muddy water] can now be filtered in to [water] with [coal] and crushed [stone]s//Water once deadly can now be safely consumed',
		icon:[25,3],
		cost:{'insight':30},
		req:{'city planning':true},
		});
//new Water Purification Unit:
		new G.Unit({
		name:'Water Purification System',
		desc:'@Turns 100 [muddy water] into [water], using 50 [coal] and 50 [stone]',
		icon:[22,7],
		cost:{'basic building materials':1000,'soft metal ingot':20},
		use:{'land':1},
		effects:[
			{type:'convert',from:{'stone':50,'muddy water':100,'coal':50},into:{'water':100},every:10}
		],
		category:'production',
		req:{'water purification':true},
		limitPer:{'land':25},
	});

		//adding a new mode to carpenter workshop 
	G.getDict('carpenter workshop').modes['sticks']={name:'Split logs into sticks',icon:[0,6],desc:'Turn 1 [log] into 5 [stick]s.',use:{'stone tools':1}};
			//adding a new effect to carpenter workshop 
	G.getDict('carpenter workshop').effects.push({type:'convert',from:{'log':1},into:{'stick':5},every:3,mode:'sticks'});
	
	new G.Unit({
		name:'Appartment',
		desc:'@provides 50 [housing]<>A towering edifice of humanity .',
		icon:[0,0,'LateGameSheet'],
		cost:{'basic building materials':250,'cut stone':500 },
		use:{'land':1},
		//require:{'worker':3,'metal tools':3},
		effects:[
			{type:'provide',what:{'housing':50}},
			{type:'waste',chance:0.01/1000}
		],
		req:{'city planning':true},
		category:'housing',
	});
	
	
	
}
});
