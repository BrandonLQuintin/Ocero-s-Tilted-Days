gdjs.Level_323Code = {};
gdjs.Level_323Code.GDBoulderObjects1= [];
gdjs.Level_323Code.GDBoulderObjects2= [];
gdjs.Level_323Code.GDGrassObjects1= [];
gdjs.Level_323Code.GDGrassObjects2= [];
gdjs.Level_323Code.GDDirtObjects1= [];
gdjs.Level_323Code.GDDirtObjects2= [];
gdjs.Level_323Code.GDImage_9595of_9595PlayerObjects1= [];
gdjs.Level_323Code.GDImage_9595of_9595PlayerObjects2= [];
gdjs.Level_323Code.GDPlayerObjects1= [];
gdjs.Level_323Code.GDPlayerObjects2= [];
gdjs.Level_323Code.GDCloudsObjects1= [];
gdjs.Level_323Code.GDCloudsObjects2= [];
gdjs.Level_323Code.GDPress_9595StartObjects1= [];
gdjs.Level_323Code.GDPress_9595StartObjects2= [];
gdjs.Level_323Code.GDWoodObjects1= [];
gdjs.Level_323Code.GDWoodObjects2= [];
gdjs.Level_323Code.GDImage_9595of_9595Player_9595CryingObjects1= [];
gdjs.Level_323Code.GDImage_9595of_9595Player_9595CryingObjects2= [];
gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1= [];
gdjs.Level_323Code.GDPlayer_9595PlatformerObjects2= [];
gdjs.Level_323Code.GDBall_9595ObstacleObjects1= [];
gdjs.Level_323Code.GDBall_9595ObstacleObjects2= [];
gdjs.Level_323Code.GDBall_9595TextureObjects1= [];
gdjs.Level_323Code.GDBall_9595TextureObjects2= [];
gdjs.Level_323Code.GDSpike_9595TipObjects1= [];
gdjs.Level_323Code.GDSpike_9595TipObjects2= [];
gdjs.Level_323Code.GDSpike_9595BaseObjects1= [];
gdjs.Level_323Code.GDSpike_9595BaseObjects2= [];
gdjs.Level_323Code.GDSpike_9595Tip_9595CollisionObjects1= [];
gdjs.Level_323Code.GDSpike_9595Tip_9595CollisionObjects2= [];
gdjs.Level_323Code.GDSpike_9595Base_9595CollisionObjects1= [];
gdjs.Level_323Code.GDSpike_9595Base_9595CollisionObjects2= [];
gdjs.Level_323Code.GDCloud_9595Platform2Objects1= [];
gdjs.Level_323Code.GDCloud_9595Platform2Objects2= [];
gdjs.Level_323Code.GDWood_9595BlockObjects1= [];
gdjs.Level_323Code.GDWood_9595BlockObjects2= [];
gdjs.Level_323Code.GDBricksObjects1= [];
gdjs.Level_323Code.GDBricksObjects2= [];
gdjs.Level_323Code.GDBackgroundObjects1= [];
gdjs.Level_323Code.GDBackgroundObjects2= [];
gdjs.Level_323Code.GDBlackObjects1= [];
gdjs.Level_323Code.GDBlackObjects2= [];
gdjs.Level_323Code.GDRed_9595SpikeObjects1= [];
gdjs.Level_323Code.GDRed_9595SpikeObjects2= [];
gdjs.Level_323Code.GDDeath_9595TextObjects1= [];
gdjs.Level_323Code.GDDeath_9595TextObjects2= [];
gdjs.Level_323Code.GDHouseObjects1= [];
gdjs.Level_323Code.GDHouseObjects2= [];


gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPlayer_95959595PlatformerObjects1Objects = Hashtable.newFrom({"Player_Platformer": gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDWoodObjects1Objects = Hashtable.newFrom({"Wood": gdjs.Level_323Code.GDWoodObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPlayer_95959595PlatformerObjects1Objects = Hashtable.newFrom({"Player_Platformer": gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDBoulderObjects1Objects = Hashtable.newFrom({"Boulder": gdjs.Level_323Code.GDBoulderObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPlayer_95959595PlatformerObjects1Objects = Hashtable.newFrom({"Player_Platformer": gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDRed_95959595SpikeObjects1Objects = Hashtable.newFrom({"Red_Spike": gdjs.Level_323Code.GDRed_9595SpikeObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPlayer_95959595PlatformerObjects1Objects = Hashtable.newFrom({"Player_Platformer": gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDHouseObjects1Objects = Hashtable.newFrom({"House": gdjs.Level_323Code.GDHouseObjects1});
gdjs.Level_323Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "music.mp3", 0, true, 15, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Level_323Code.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ball_Texture"), gdjs.Level_323Code.GDBall_9595TextureObjects1);
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.Level_323Code.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bricks"), gdjs.Level_323Code.GDBricksObjects1);
gdjs.copyArray(runtimeScene.getObjects("Death_Text"), gdjs.Level_323Code.GDDeath_9595TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player_Platformer"), gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Red_Spike"), gdjs.Level_323Code.GDRed_9595SpikeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wood_Block"), gdjs.Level_323Code.GDWood_9595BlockObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length !== 0 ? gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length !== 0 ? gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[0] : null), true, "Background", 0);
}{for(var i = 0, len = gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDRed_9595SpikeObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDRed_9595SpikeObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDWood_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDWood_9595BlockObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDBall_9595TextureObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDBall_9595TextureObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDBricksObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDBricksObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDBlackObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDBlackObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDBackgroundObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDDeath_9595TextObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDDeath_9595TextObjects1[i].getBehavior("Text").setText("Total Deaths: " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Platformer"), gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[i].getY() > 2000 ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[k] = gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[i];
        ++k;
    }
}
gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Platformer"), gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[k] = gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[i];
        ++k;
    }
}
gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[i].getBehavior("Animation").setAnimationName("NewSprite");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Platformer"), gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[k] = gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[i];
        ++k;
    }
}
gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[i].getBehavior("Animation").setAnimationName("NewSprite");
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Platformer"), gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wood"), gdjs.Level_323Code.GDWoodObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPlayer_95959595PlatformerObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDWoodObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boulder"), gdjs.Level_323Code.GDBoulderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player_Platformer"), gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPlayer_95959595PlatformerObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDBoulderObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Platformer"), gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Red_Spike"), gdjs.Level_323Code.GDRed_9595SpikeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPlayer_95959595PlatformerObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDRed_95959595SpikeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("House"), gdjs.Level_323Code.GDHouseObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player_Platformer"), gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPlayer_95959595PlatformerObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDHouseObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Ending 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boulder"), gdjs.Level_323Code.GDBoulderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player_Platformer"), gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDBoulderObjects1.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDBoulderObjects1[i].getY() > (( gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length === 0 ) ? 0 :gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[0].getPointY("")) + 500 ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDBoulderObjects1[k] = gdjs.Level_323Code.GDBoulderObjects1[i];
        ++k;
    }
}
gdjs.Level_323Code.GDBoulderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDBoulderObjects1 */
/* Reuse gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDBoulderObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDBoulderObjects1[i].setY((( gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length === 0 ) ? 0 :gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[0].getPointY("")) - gdjs.randomFloatInRange(1000, 1800));
}
}{for(var i = 0, len = gdjs.Level_323Code.GDBoulderObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDBoulderObjects1[i].setX((( gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length === 0 ) ? 0 :gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1[0].getPointX("")) + gdjs.randomFloatInRange(-(100), 800));
}
}{for(var i = 0, len = gdjs.Level_323Code.GDBoulderObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDBoulderObjects1[i].getBehavior("Physics2").setStatic();
}
}{for(var i = 0, len = gdjs.Level_323Code.GDBoulderObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDBoulderObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level_323Code.GDBoulderObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDBoulderObjects1[i].getBehavior("Physics2").setDynamic();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Level_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_323Code.GDBoulderObjects1.length = 0;
gdjs.Level_323Code.GDBoulderObjects2.length = 0;
gdjs.Level_323Code.GDGrassObjects1.length = 0;
gdjs.Level_323Code.GDGrassObjects2.length = 0;
gdjs.Level_323Code.GDDirtObjects1.length = 0;
gdjs.Level_323Code.GDDirtObjects2.length = 0;
gdjs.Level_323Code.GDImage_9595of_9595PlayerObjects1.length = 0;
gdjs.Level_323Code.GDImage_9595of_9595PlayerObjects2.length = 0;
gdjs.Level_323Code.GDPlayerObjects1.length = 0;
gdjs.Level_323Code.GDPlayerObjects2.length = 0;
gdjs.Level_323Code.GDCloudsObjects1.length = 0;
gdjs.Level_323Code.GDCloudsObjects2.length = 0;
gdjs.Level_323Code.GDPress_9595StartObjects1.length = 0;
gdjs.Level_323Code.GDPress_9595StartObjects2.length = 0;
gdjs.Level_323Code.GDWoodObjects1.length = 0;
gdjs.Level_323Code.GDWoodObjects2.length = 0;
gdjs.Level_323Code.GDImage_9595of_9595Player_9595CryingObjects1.length = 0;
gdjs.Level_323Code.GDImage_9595of_9595Player_9595CryingObjects2.length = 0;
gdjs.Level_323Code.GDPlayer_9595PlatformerObjects1.length = 0;
gdjs.Level_323Code.GDPlayer_9595PlatformerObjects2.length = 0;
gdjs.Level_323Code.GDBall_9595ObstacleObjects1.length = 0;
gdjs.Level_323Code.GDBall_9595ObstacleObjects2.length = 0;
gdjs.Level_323Code.GDBall_9595TextureObjects1.length = 0;
gdjs.Level_323Code.GDBall_9595TextureObjects2.length = 0;
gdjs.Level_323Code.GDSpike_9595TipObjects1.length = 0;
gdjs.Level_323Code.GDSpike_9595TipObjects2.length = 0;
gdjs.Level_323Code.GDSpike_9595BaseObjects1.length = 0;
gdjs.Level_323Code.GDSpike_9595BaseObjects2.length = 0;
gdjs.Level_323Code.GDSpike_9595Tip_9595CollisionObjects1.length = 0;
gdjs.Level_323Code.GDSpike_9595Tip_9595CollisionObjects2.length = 0;
gdjs.Level_323Code.GDSpike_9595Base_9595CollisionObjects1.length = 0;
gdjs.Level_323Code.GDSpike_9595Base_9595CollisionObjects2.length = 0;
gdjs.Level_323Code.GDCloud_9595Platform2Objects1.length = 0;
gdjs.Level_323Code.GDCloud_9595Platform2Objects2.length = 0;
gdjs.Level_323Code.GDWood_9595BlockObjects1.length = 0;
gdjs.Level_323Code.GDWood_9595BlockObjects2.length = 0;
gdjs.Level_323Code.GDBricksObjects1.length = 0;
gdjs.Level_323Code.GDBricksObjects2.length = 0;
gdjs.Level_323Code.GDBackgroundObjects1.length = 0;
gdjs.Level_323Code.GDBackgroundObjects2.length = 0;
gdjs.Level_323Code.GDBlackObjects1.length = 0;
gdjs.Level_323Code.GDBlackObjects2.length = 0;
gdjs.Level_323Code.GDRed_9595SpikeObjects1.length = 0;
gdjs.Level_323Code.GDRed_9595SpikeObjects2.length = 0;
gdjs.Level_323Code.GDDeath_9595TextObjects1.length = 0;
gdjs.Level_323Code.GDDeath_9595TextObjects2.length = 0;
gdjs.Level_323Code.GDHouseObjects1.length = 0;
gdjs.Level_323Code.GDHouseObjects2.length = 0;

gdjs.Level_323Code.eventsList0(runtimeScene);

return;

}

gdjs['Level_323Code'] = gdjs.Level_323Code;
