const multiLib=require("multi-lib/wrapper");
const multi2=multiLib.extend(GenericCrafter,GenericCrafter.GenericCrafterEntity,"multi2",{
// you can customize here ex) draw(tile)
},

/*length of output, input, crafTimes should be same.
if not, I'm not sure which error happens.
max length is 10, and can be extended manually in multi-lib.

output
-second from the back : liquid *IF YOU DON't NEED IT, YOU MUST SET NULL**only one kind of liquid available for each output*
-first from the back : power production *IF YOU DON't NEED IT, YOU MUST SET NULL*
-else : items *place representative item in first space*

*FACTORY DUMP ITEM OF OUTPUT UNCONDITIONALLY*

input
-second from the back : liquid *IF YOU DON't NEED IT, YOU MUST SET NULL**only one kind of liquid available for each output*
-first from the back : power usage *IF YOU DON't NEED IT, YOU MUST SET NULL*
-else : items *free*

craftTimes
-1=1frame=1/60second
-NOT NULLABLE

[item,amount]
Vanilla item : "item-name"
list: scrap, copper. lead, graphite, coal, titanium, thorium, silicon, plastanium, phase-fabric, surge-alloy,
    spore-pod, sand, blast-compound, pyratite, metaglass

Modded item : "Mod-Name"+"-"+"item-name"
item-name is .json file name

[liquid,amount]
Vanilla liquids : "liquid-name"

Modded liquids :"Mod-Name"+"-"+"mod-liquid"
liquid-name is .json file name

*/

{
  output:[
    [["copper",1]   ,null               ,null               ,null       ,10],
    [["thorium",1]  ,["surge-alloy",3]  ,["slag",5]         ,null],
    [["scrap",1]    ,["plastanium",2]   ,["spore-pod",2]    ,["oil",5]  ,10],
    [["silicon",1]  ,null               ,null],
  ],
  input:[
    [["sand",1]     ,["lead",2]             ,["water",5]    ,null],
    [["coal",1]     ,["sand",1]             ,["water",5]    ,1],
    [["pyratite",1] ,["blast-compound",1]   ,["water",5]    ,1],
    [["sand",1]     ,null                   ,null],
  ],
  craftTimes:[12,60,72,30]
});
/*you can use this without json.

YOU MUST NOT MODIFY VALUE OF THESE

configurable=true;
outputsPower=true;
hasItems=true;
hasLiquids=true;
hasPower=true;
*/

multi2.localizedName="multi2";
multi2.description="multi2";

multi2.itemCapacity= 30;
multi2.liquidCapacity= 20;
multi2.size= 4;
multi2.health= 100;
multi2.craftEffect= Fx.pulverizeMedium;
multi2.updateEffect=Fx.none;

multi2.requirements(Category.crafting,ItemStack.with(Items.copper,75));
