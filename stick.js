G.AddData({
name:'Testmod',
author:'Tabernet',
desc:'A simple example mod that adds a means of converting logs into sticks',
engineVersion:1,
manifest:'stick.js',
requires:['Default dataset*'],
func:function()
{
	//The idea in this simple mod is to add a means of converting logs into sticks 
	//Based on Orteil's 'Example mod' 
	
		//adding a new mode to carpenter workshop 
	G.getDict('carpenter workshop').modes['sticks']={name:'Split logs into sticks',icon:[0,6],desc:'Turn 1 [log] into 5 [stick]s.',use:{'stone tools':1}};
			//adding a new effect to carpenter workshop 
	G.getDict('carpenter workshop').effects.push({type:'convert',from:{'log':1},into:{'stick':5},every:3,mode:'sticks'});
	

	
	
}
});
