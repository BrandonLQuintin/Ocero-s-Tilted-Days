gdjs.Level_322Code = {};
gdjs.Level_322Code.GDImage_9595of_9595PlayerObjects1= [];
gdjs.Level_322Code.GDImage_9595of_9595PlayerObjects2= [];
gdjs.Level_322Code.GDPlayerObjects1= [];
gdjs.Level_322Code.GDPlayerObjects2= [];
gdjs.Level_322Code.GDCloudsObjects1= [];
gdjs.Level_322Code.GDCloudsObjects2= [];
gdjs.Level_322Code.GDPress_9595StartObjects1= [];
gdjs.Level_322Code.GDPress_9595StartObjects2= [];
gdjs.Level_322Code.GDWoodObjects1= [];
gdjs.Level_322Code.GDWoodObjects2= [];
gdjs.Level_322Code.GDImage_9595of_9595Player_9595CryingObjects1= [];
gdjs.Level_322Code.GDImage_9595of_9595Player_9595CryingObjects2= [];
gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1= [];
gdjs.Level_322Code.GDPlayer_9595PlatformerObjects2= [];
gdjs.Level_322Code.GDBall_9595ObstacleObjects1= [];
gdjs.Level_322Code.GDBall_9595ObstacleObjects2= [];
gdjs.Level_322Code.GDBall_9595TextureObjects1= [];
gdjs.Level_322Code.GDBall_9595TextureObjects2= [];
gdjs.Level_322Code.GDSpike_9595TipObjects1= [];
gdjs.Level_322Code.GDSpike_9595TipObjects2= [];
gdjs.Level_322Code.GDSpike_9595BaseObjects1= [];
gdjs.Level_322Code.GDSpike_9595BaseObjects2= [];
gdjs.Level_322Code.GDSpike_9595Tip_9595CollisionObjects1= [];
gdjs.Level_322Code.GDSpike_9595Tip_9595CollisionObjects2= [];
gdjs.Level_322Code.GDSpike_9595Base_9595CollisionObjects1= [];
gdjs.Level_322Code.GDSpike_9595Base_9595CollisionObjects2= [];
gdjs.Level_322Code.GDCloud_9595Platform2Objects1= [];
gdjs.Level_322Code.GDCloud_9595Platform2Objects2= [];
gdjs.Level_322Code.GDWood_9595BlockObjects1= [];
gdjs.Level_322Code.GDWood_9595BlockObjects2= [];
gdjs.Level_322Code.GDBricksObjects1= [];
gdjs.Level_322Code.GDBricksObjects2= [];
gdjs.Level_322Code.GDBackgroundObjects1= [];
gdjs.Level_322Code.GDBackgroundObjects2= [];
gdjs.Level_322Code.GDBlackObjects1= [];
gdjs.Level_322Code.GDBlackObjects2= [];
gdjs.Level_322Code.GDRed_9595SpikeObjects1= [];
gdjs.Level_322Code.GDRed_9595SpikeObjects2= [];
gdjs.Level_322Code.GDDeath_9595TextObjects1= [];
gdjs.Level_322Code.GDDeath_9595TextObjects2= [];
gdjs.Level_322Code.GDHouseObjects1= [];
gdjs.Level_322Code.GDHouseObjects2= [];


gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDPlayer_95959595PlatformerObjects1Objects = Hashtable.newFrom({"Player_Platformer": gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDWoodObjects1Objects = Hashtable.newFrom({"Wood": gdjs.Level_322Code.GDWoodObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDPlayer_95959595PlatformerObjects1Objects = Hashtable.newFrom({"Player_Platformer": gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDRed_95959595SpikeObjects1Objects = Hashtable.newFrom({"Red_Spike": gdjs.Level_322Code.GDRed_9595SpikeObjects1});
gdjs.Level_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "quiz-game-music-loop-bpm-90-61070.mp3", 0, true, 30, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Level_322Code.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ball_Texture"), gdjs.Level_322Code.GDBall_9595TextureObjects1);
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.Level_322Code.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bricks"), gdjs.Level_322Code.GDBricksObjects1);
gdjs.copyArray(runtimeScene.getObjects("Death_Text"), gdjs.Level_322Code.GDDeath_9595TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player_Platformer"), gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wood_Block"), gdjs.Level_322Code.GDWood_9595BlockObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1.length !== 0 ? gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[i].activateBehavior("Physics2", false);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1.length !== 0 ? gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[0] : null), true, "Background", 0);
}{for(var i = 0, len = gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDWood_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDWood_9595BlockObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDBall_9595TextureObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDBall_9595TextureObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDBricksObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDBricksObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDBlackObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDBlackObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDBackgroundObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDDeath_9595TextObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDDeath_9595TextObjects1[i].getBehavior("Text").setText("Total Deaths: " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Platformer"), gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[i].getY() > 2000 ) {
        isConditionTrue_0 = true;
        gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[k] = gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Platformer"), gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[k] = gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[i].getBehavior("Animation").setAnimationName("NewSprite");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Platformer"), gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[k] = gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[i].getBehavior("Animation").setAnimationName("NewSprite");
}
}{for(var i = 0, len = gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Platformer"), gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wood"), gdjs.Level_322Code.GDWoodObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDPlayer_95959595PlatformerObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDWoodObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Platformer"), gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Red_Spike"), gdjs.Level_322Code.GDRed_9595SpikeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDPlayer_95959595PlatformerObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDRed_95959595SpikeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}}

}


};

gdjs.Level_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_322Code.GDImage_9595of_9595PlayerObjects1.length = 0;
gdjs.Level_322Code.GDImage_9595of_9595PlayerObjects2.length = 0;
gdjs.Level_322Code.GDPlayerObjects1.length = 0;
gdjs.Level_322Code.GDPlayerObjects2.length = 0;
gdjs.Level_322Code.GDCloudsObjects1.length = 0;
gdjs.Level_322Code.GDCloudsObjects2.length = 0;
gdjs.Level_322Code.GDPress_9595StartObjects1.length = 0;
gdjs.Level_322Code.GDPress_9595StartObjects2.length = 0;
gdjs.Level_322Code.GDWoodObjects1.length = 0;
gdjs.Level_322Code.GDWoodObjects2.length = 0;
gdjs.Level_322Code.GDImage_9595of_9595Player_9595CryingObjects1.length = 0;
gdjs.Level_322Code.GDImage_9595of_9595Player_9595CryingObjects2.length = 0;
gdjs.Level_322Code.GDPlayer_9595PlatformerObjects1.length = 0;
gdjs.Level_322Code.GDPlayer_9595PlatformerObjects2.length = 0;
gdjs.Level_322Code.GDBall_9595ObstacleObjects1.length = 0;
gdjs.Level_322Code.GDBall_9595ObstacleObjects2.length = 0;
gdjs.Level_322Code.GDBall_9595TextureObjects1.length = 0;
gdjs.Level_322Code.GDBall_9595TextureObjects2.length = 0;
gdjs.Level_322Code.GDSpike_9595TipObjects1.length = 0;
gdjs.Level_322Code.GDSpike_9595TipObjects2.length = 0;
gdjs.Level_322Code.GDSpike_9595BaseObjects1.length = 0;
gdjs.Level_322Code.GDSpike_9595BaseObjects2.length = 0;
gdjs.Level_322Code.GDSpike_9595Tip_9595CollisionObjects1.length = 0;
gdjs.Level_322Code.GDSpike_9595Tip_9595CollisionObjects2.length = 0;
gdjs.Level_322Code.GDSpike_9595Base_9595CollisionObjects1.length = 0;
gdjs.Level_322Code.GDSpike_9595Base_9595CollisionObjects2.length = 0;
gdjs.Level_322Code.GDCloud_9595Platform2Objects1.length = 0;
gdjs.Level_322Code.GDCloud_9595Platform2Objects2.length = 0;
gdjs.Level_322Code.GDWood_9595BlockObjects1.length = 0;
gdjs.Level_322Code.GDWood_9595BlockObjects2.length = 0;
gdjs.Level_322Code.GDBricksObjects1.length = 0;
gdjs.Level_322Code.GDBricksObjects2.length = 0;
gdjs.Level_322Code.GDBackgroundObjects1.length = 0;
gdjs.Level_322Code.GDBackgroundObjects2.length = 0;
gdjs.Level_322Code.GDBlackObjects1.length = 0;
gdjs.Level_322Code.GDBlackObjects2.length = 0;
gdjs.Level_322Code.GDRed_9595SpikeObjects1.length = 0;
gdjs.Level_322Code.GDRed_9595SpikeObjects2.length = 0;
gdjs.Level_322Code.GDDeath_9595TextObjects1.length = 0;
gdjs.Level_322Code.GDDeath_9595TextObjects2.length = 0;
gdjs.Level_322Code.GDHouseObjects1.length = 0;
gdjs.Level_322Code.GDHouseObjects2.length = 0;

gdjs.Level_322Code.eventsList0(runtimeScene);

return;

}

gdjs['Level_322Code'] = gdjs.Level_322Code;
