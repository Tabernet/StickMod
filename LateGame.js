G.AddData({
name:'LateGameAddons',
author:'Tabernet',
desc:'An Econ mod that adds a later game uses to heavily stockpiled resources',
engineVersion:1,
manifest:'LateGame.js',
requires:['Default dataset*'],
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
		desc:'@Turns 750 [muddy water] into [water], using 10 [coal] and 50 [stone]',
		icon:[22,7],
		cost:{'basic building materials':1000,'soft metal ingot':20},
		use:{'land':1},
		effects:[
			{type:'convert',from:{'stone':50,'muddy water':750,'coal':10},into:{'water':100},every:10}
		],
		category:'production',
		req:{'water purification':true},
		limitPer:{'land':25},
	});

		//adding a new mode to carpenter workshop 
	G.getDict('carpenter workshop').modes['sticks']={name:'Split logs into sticks',icon:[0,6],desc:'Turn 1 [log] into 5 [stick]s.',use:{'stone tools':1}};
			//adding a new effect to carpenter workshop 
	G.getDict('carpenter workshop').effects.push({type:'convert',from:{'log':1},into:{'stick':5},every:3,mode:'sticks'});
	

	
	
}
});
