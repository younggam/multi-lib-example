const multiLib=require("multi-lib/wrapper");
const multi2=multiLib.extend(GenericCrafter,GenericCrafter.GenericCrafterEntity,"multi2",{
// you can customize here ex) draw(tile)
},

/*length of output, input, crafTimes should same.
if not, I'm not sure which error happens

*FACTORY DUMP ITEM OF OUTPUT UNCONDITIONALLY*

output
-second from the back : liquid *IF YOU DON't NEED IT, YOU MUST SET NULL**only one kind of liquid available for each output*
-first from the back : power production *IF YOU DON't NEED IT, YOU MUST SET NULL*
-else : items *place representative item in first space*

input
-second from the back : liquid *IF YOU DON't NEED IT, YOU MUST SET NULL**only one kind of liquid available for each output*
-first from the back : power usage *IF YOU DON't NEED IT, YOU MUST SET NULL*
-else : items *free*

craftTimes
-1=1frame=1/60second
-NOT NULLABLE

ItemStack(item,amount)
Vanilla item : Items.itemName ex)Items.thorium , Items.surgealloy
or Vars.content.getByName(ContentType.item,"item-name")  ex) Vars.content.getByName(ContentType.item,"thorium"), Vars.content.getByName(ContentType.item,"surge-alloy")
Modded item : Vars.content.getByName(ContentType.item,"Mod-Name"+"-"+"modded-item")

LiquidStack(liquid,amount)
Vanilla liquids : Liquids.liquidName ex)Liquids.oil , Liquids.slag
or Vars.content.getByName(ContentType.liquid,"liquids-name")  ex) Vars.content.getByName(ContentType.liquid,"oil"), Vars.content.getByName(ContentType.liquid,"water")
Modded liquids : Vars.content.getByName(ContentType.liquid,"Mod-Name"+"-"+"modded-liquids")


*/

{
  output:[
    [ItemStack(Vars.content.getByName(ContentType.item,"copper"),1),null,null,null,10],
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

THESE*/

multi2.localizedName="multi2";
multi2.description="multi2";

multi2.itemCapacity= 30;
multi2.liquidCapacity= 20;
multi2.size= 4;
multi2.health= 100;
multi2.craftEffect= Fx.pulverizeMedium;
multi2.updateEffect=Fx.none;

multi2.requirements(Category.crafting,ItemStack.with(Items.copper,75));
