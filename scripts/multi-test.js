const multiLib=require("multi-lib/wrapper");
const multi=multiLib.extend(GenericCrafter,GenericCrafter.GenericCrafterEntity,"multi",{
// you can customize here ex) draw(tile)
},
/*length of output, input, crafTimes should same.
if not, I'm not sure which error happens

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

ItemStack(item,amount)
Vanilla item : Items.itemName ex)Items.thorium , Items.surgealloy
list: scrap, copper, lead, graphite, coal, titanium, thorium, silicon, plastanium, phasefabric, surgealloy,
    sporePod, sand, blastCompound, pyratite, metaglass
    
or Vars.content.getByName(ContentType.item,"item-name")  ex) Vars.content.getByName(ContentType.item,"thorium"), Vars.content.getByName(ContentType.item,"surge-alloy")
list: scrap, copper. lead, graphite, coal, titanium, thorium, silicon, plastanium, phase-fabric, surge-alloy,
    spore-pod, sand, blast-compound, pyratite, metaglass

Modded item : Vars.content.getByName(ContentType.item,"Mod-Name"+"-"+"modded-item")

LiquidStack(liquid,amount)
Vanilla liquids : Liquids.LiquidName ex)Liquids.oil , Liquids.slag
or Vars.content.getByName(ContentType.liquid,"liquids-name")  ex) Vars.content.getByName(ContentType.liquid,"oil"), Vars.content.getByName(ContentType.liquid,"water")
Modded liquids : Vars.content.getByName(ContentType.liquid,"Mod-Name"+"-"+"modded-liquids")


*/


{
  output:[
    [null,10],
    [ItemStack(Vars.content.getByName(ContentType.item,"thorium"),1),ItemStack(Vars.content.getByName(ContentType.item,"surge-alloy"),3),LiquidStack(Vars.content.getByName(ContentType.liquid,"slag"),5),null],
    [ItemStack(Vars.content.getByName(ContentType.item,"scrap"),1),ItemStack(Vars.content.getByName(ContentType.item,"plastanium"),2),ItemStack(Vars.content.getByName(ContentType.item,"spore-pod"),2),LiquidStack(Vars.content.getByName(ContentType.liquid,"oil"),5),10],
    [ItemStack(Vars.content.getByName(ContentType.item,"silicon"),1),null,null],
  ],
  input:[
    [ItemStack(Vars.content.getByName(ContentType.item,"sand"),1),ItemStack(Vars.content.getByName(ContentType.item,"lead"),2),LiquidStack(Vars.content.getByName(ContentType.liquid,"water"),5),null],
    [ItemStack(Vars.content.getByName(ContentType.item,"coal"),1),ItemStack(Vars.content.getByName(ContentType.item,"sand"),1),LiquidStack(Vars.content.getByName(ContentType.liquid,"water"),5),1],
    [ItemStack(Vars.content.getByName(ContentType.item,"pyratite"),1),ItemStack(Vars.content.getByName(ContentType.item,"blast-compound"),1),LiquidStack(Vars.content.getByName(ContentType.liquid,"water"),5),1],
    [ItemStack(Vars.content.getByName(ContentType.item,"sand"),1),null,null],
  ],
  craftTimes:[12,60,72,30]
});

/*you can use this without json.

YOU MUST NOT MODIFY VALUE OF

configurable=true;
outputsPower=true;
hasItems=true;
hasLiquids=true;
hasPower
THESE

*/

multi.localizedName="multi";
multi.description="multi";

multi.itemCapacity= 30;
multi.liquidCapacity= 20;
multi.size= 4;
multi.health= 100;
multi.craftEffect= Fx.pulverizeMedium;
multi.updateEffect=Fx.none;

multi.requirements(Category.crafting,ItemStack.with(Items.copper,75));
