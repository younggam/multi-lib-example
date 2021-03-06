try{//nvm
  //get script from multi-lib2
  const multiLib=require("multi-lib2/wrapper");
  //you can use GenericSmelter instead GenericCrafter
                                          // ▼this has to be same with .json file name
  const multi=multiLib.extend(GenericCrafter,"multi_",/*Array [] not {} ->*/[
    /*default form for each recipes. You can change values.
    {
      input:{
        items:[],     Modded Item:  "mod-name-item-name/amount", Vanilla Item: "item-name/amount"
        liquids:[],   Modded Liquid:  "mod-name-liquid-name/amount",  Vanilla liquid: "liquid-name/amount"
        power:0,
      },
      output:{
        items:[],
        liquids:[],
        power:0,
      },
      craftTime:80,
    },*/
    {//1  you can skip recipe properties
      input:{

      },
      output:{
        power:5.25
      },
      craftTime:12
    },
    {//2
      input:{
        items:["coal/1","sand/1"],
        liquids:["water/5"],
        power:1
      },
      output:{
        items:["thorium/1","surge-alloy/2"],
        liquids:["slag/5"],
      },
      craftTime:60
    },
    {//3
      input:{
        items:["pyratite/1","blast-compound/1"],
        liquids:["water/5"],
        power:1
      },
      output:{
        items:["scrap/1","plastanium/2","spore-pod/2"],
        liquids:["oil/5"],
      },
      craftTime:72
    },
    {//4
      input:{
        items:["sand/1"],
      },
      output:{
        items:["silicon/1"],
      },
      craftTime:30
    },
    {//5
      input:{
        items:["sand/1","lead/2"],
        liquids:["water/5"],
      },
      output:{
        items:["multi-lib-example-gun-powder/1"],
      },
      craftTime:12
    },
    {//6
      input:{
        items:["coal/1","sand/1"],
        liquids:["water/5"],
        power:1
      },
      output:{
        items:["thorium/1","surge-alloy/2"],
        liquids:["slag/5"],
      },
      craftTime:60
    },
    {//7
      input:{
        items:["pyratite/1","blast-compound/1"],
        liquids:["water/5"],
        power:1
      },
      output:{
        items:["scrap/1","plastanium/2","spore-pod/2"],
        liquids:["oil/5"],
      },
      craftTime:72
    },
    {//8
      input:{
        items:["sand/1"],
      },
      output:{
        items:["silicon/1"],
      },
      craftTime:30
    },
    {//9
      input:{
        items:["sand/1","lead/2"],
        liquids:["water/5"],
      },
      output:{
        items:["multi-lib-example-gun-powder/1"],
      },
      craftTime:12
    },
    {//10
      input:{
        items:["coal/1","sand/1"],
        liquids:["water/5"],
        power:1
      },
      output:{
        items:["thorium/1","surge-alloy/2"],
        liquids:["slag/5","oil/5"],
      },
      craftTime:60
    }
  ],{
    /*you can customize block here. ex)draw()
    you can use customUpdate(tile). this function excuted before update(tile)
    Modifying methods in library.js is not recommanded.
    */
  },{
    /*you can customize entity here.
    ex)
    _myProp:0,
    getMyProp(){
      return this._myProp;
    },
    setMyProp(a){
      this._myProp=a;
    }*/
  });
  /*
  YOU MUST NOT MODIFY VALUE OF THESE
  configurable
  outputsPower
  hasItems
  hasLiquids
  hasPower
  */
  //using example without .json file. I don't recommand this because you can't use mod item as requirements.
  multi.localizedName="multi_";
  multi.description="multi_";
  multi.itemCapacity= 30;
  multi.liquidCapacity= 20;
  multi.size= 4;
  multi.health= 100;
  multi.craftEffect= Fx.pulverizeMedium;
  multi.updateEffect=Fx.none;
  /*true: dump items and liquids of output according to button
  false: dump items and liquids of output unconditionally*/
  multi.dumpToggle=false;

  multi.requirements(Category.crafting,ItemStack.with(Items.copper,75));
}
catch(err){
  print("multi-lib2 is not enabled");
}
