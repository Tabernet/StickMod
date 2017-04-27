G.AddData({
name:'LateGameAddons',
author:'Tabernet',
desc:'An Econ mod that adds a later game uses to heavily stockpiled resources',
engineVersion:1,
manifest:'LateGame.js',
requires:['Default dataset*'],
sheets:{'LateGameSheet':'http://i.imgur.com/LRvECSY.png'},
func:function()
{
	//The idea in this mod is to add a means of adding use to items that otherwise just fill storage
	//Based on Orteil's 'Example mod' 
		//
		// New Resourses 
		// 
	
	//Compost - 
	new G.Res({
		name:'compost',
		desc:'What once was waste now gives way to new life',
		icon:[0,1,'LateGameSheet'],
		partOf:'misc materials',
		category:'build',
		
	});
	
		//
		// New Technology 
		// 
		
		//Tech for Water Filter
	new G.Tech({
		name:'water purification',
		desc:'@[muddy water] can now be filtered in to [water] with [coal] and crushed [stone]s//Water once deadly can now be safely consumed',
		icon:[25,3],
		cost:{'insight':30},
		req:{'city planning':true},
		});
		
		//Tech for Compost
		new G.Tech({
		name:'Composting',
		desc:'What once was waste now gives way to new life',
		icon:[1,1,'LateGameSheet'],
		cost:{'insight':15},
		req:{'stockpiling':true},
		});
		
		//
		// New Units 
		// 
		//Compost Pile - create compost from other wastes
		new G.Unit({
		name:'Compost Pile',
		desc:'@Turns [spoiled food] and [muddy water] into compost by way of [bugs]',
		icon:[10,1],
		cost:{'archaic building materials':500,'bugs':50,'mud':50},
		use:{'land':1},
		effects:[
			{type:'convert',from:{'spoiled food':50,'muddy water':10,'bugs':50},into:{'compost':1},every:15}
		],
		category:'production',
		req:{'Composting':true},
		});
		//Water Purification Unit - To get rid of surplus Muddy Water
		new G.Unit({
		name:'Water Purification System',
		desc:'@Turns 250 [muddy water] into [water], using 50 [coal] and 50 [stone]',
		icon:[22,7],
		cost:{'basic building materials':1000,'soft metal ingot':20},
		use:{'land':1},
		effects:[
			{type:'convert',from:{'stone':50,'muddy water':250,'coal':50},into:{'water':150},every:10}
		],
		category:'production',
		req:{'water purification':true},
		
	});

	
		//Appartment - Improved Housing Unit
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
		//Mass Grave - Improved Burial Unit
	new G.Unit({
		name:'Mass Grave',
		desc:'@provides 100 [burial spot], in which the [corpse,dead] are automatically interred one by one@graves with buried corpses decay over time, freeing up land for more graves<>A simple grave dug into the earth, where the dead may find rest.//Burying your dead helps prevent [health,disease] and makes your people slightly [happiness,happier].',
		icon:[1,0,'LateGameSheet'],
		cost:{},
		use:{'land':1},
		//require:{'worker':1,'stone tools':1},
		effects:[
			{type:'provide',what:{'burial spot':100}},
			//{type:'waste',chance:1/1000,desired:true},
			{type:'function',func:function(me){
				var buried=G.getRes('burial spot').used;
				if (buried>0 && G.getRes('burial spot').amount>=buried)
				{
					var toDie=Math.min(me.amount,randomFloor(buried*0.001));
					me.targetAmount-=toDie;
					G.wasteUnit(me,toDie);
					G.getRes('burial spot').amount-=toDie;
					G.getRes('burial spot').used-=toDie;
				}
			}}
		],
		req:{'burial':true,'city planning':true},
		category:'civil',
	});
		
		//
		// Changes to existing units 
		// 
	
		//adding a new mode to carpenter workshop to impove stick collection
	G.getDict('carpenter workshop').modes['sticks']={name:'Split logs into sticks',icon:[0,6],desc:'Turn 1 [log] into 5 [stick]s.',use:{'stone tools':1}};
			//adding a new effect to carpenter workshop 
	G.getDict('carpenter workshop').effects.push({type:'convert',from:{'log':1},into:{'stick':5},every:3,mode:'sticks'});
	
}
});
