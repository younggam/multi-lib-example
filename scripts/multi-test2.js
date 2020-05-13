//get script from multi-lib
const multiLib=require("multi-lib/wrapper");
//you can use GenericSmelter                                                    ▼this has to be same with .json file name
const multi2=multiLib.extend(GenericSmelter,GenericCrafter.GenericCrafterEntity,"multi2",{
// you can customize here ex) draw(tile)
},
/*length of output, input, crafTimes should be same.
if not, I'm not sure which error happens.
length of recipes is not limited now.

output
-first place : array of items      *IF YOU DON't NEED IT, YOU MUST SET NULL*
-second place: array of liquids    *IF YOU DON't NEED IT, YOU MUST SET NULL*
-third place: power                *IF YOU DON't NEED IT, YOU MUST SET NULL*

input
-first place : array of items      *IF YOU DON't NEED IT, YOU MUST SET NULL*
-second place: array of liquids    *IF YOU DON't NEED IT, YOU MUST SET NULL*
-third place: power                *IF YOU DON't NEED IT, YOU MUST SET NULL*

craftTimes
-1=1frame=1/60second
-NOT NULLABLE

[item,amount]
Vanilla item : "item-name"
list: scrap, copper, lead, graphite, coal, titanium, thorium, silicon, plastanium, phase-fabric, surge-alloy,
    spore-pod, sand, blast-compound, pyratite, metaglass

Modded item : "Mod-Name"+"-"+"item-name"
item-name is .json file name

[liquid,amount]
Vanilla liquids : "liquid-name"

Modded liquids :"Mod-Name"+"-"+"liquid-name"
liquid-name is .json file name

*/

{
  _output:[
    [/*items*/[                 ["copper",1]  ,  ["graphite",1]    ,null    ]/*liquids*/,[  null  ]/*power*/,10],
    [/*items*/[                ["thorium",1]  ,  ["surge-alloy",3]          ]/*liquids*/,null      /*power*/,null],
    [/*items*/[     ["scrap",1]  ,  ["plastanium",2]  ,  ["spore-pod",2]    ]/*liquids*/,null      /*power*/,10],
    [/*items*/[                         ["silicon",1]                       ]/*liquids*/,null      /*power*/,null],
  ],
  _input:[
    [/*items*/[       ["sand",1]  ,  ["lead",2]             ]/*liquids*/,null      /*power*/,null],
    [/*items*/[       ["coal",1]  ,  ["sand",1]             ]/*liquids*/,null      /*power*/,null],
    [/*items*/[   ["pyratite",1]  ,  ["blast-compound",1]   ]/*liquids*/,[  null  ]/*power*/,null],
    [/*items*/[              ["sand",1]                     ]/*liquids*/,null      /*power*/,null],
  ],
  craftTimes:[12,60,72,30],
  //DON'T MODIFY THESE
  output:[],
  input:[],
  itemList:[],
  liquidList:[],
  isSameOutput:[],
  //
});
/*true: enable displaying inventory
false:disable displaying inventory*/
multi2.enableInv=true;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
multi2.dumpToggle=true;
/*
YOU MUST NOT MODIFY VALUE OF THESE

configurable=true;
outputsPower=true;
hasItems=true;
hasLiquids=true;
hasPower=true;

*/
//using this without json. not recommanded because can cause error.
multi2.localizedName="multi2";
multi2.description="multi2";
multi2.itemCapacity= 30;
multi2.liquidCapacity= 20;
multi2.size= 4;
multi2.health= 100;
multi2.craftEffect= Fx.pulverizeMedium;
multi2.updateEffect=Fx.none;

multi2.requirements(Category.crafting,ItemStack.with(Items.copper,75));
