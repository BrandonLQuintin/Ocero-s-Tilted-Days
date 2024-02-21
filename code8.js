gdjs.Cutscene_323Code = {};
gdjs.Cutscene_323Code.GDImage_9595of_9595PlayerObjects1= [];
gdjs.Cutscene_323Code.GDImage_9595of_9595PlayerObjects2= [];
gdjs.Cutscene_323Code.GDPlayerObjects1= [];
gdjs.Cutscene_323Code.GDPlayerObjects2= [];
gdjs.Cutscene_323Code.GDCloudsObjects1= [];
gdjs.Cutscene_323Code.GDCloudsObjects2= [];
gdjs.Cutscene_323Code.GDPress_9595StartObjects1= [];
gdjs.Cutscene_323Code.GDPress_9595StartObjects2= [];
gdjs.Cutscene_323Code.GDWoodObjects1= [];
gdjs.Cutscene_323Code.GDWoodObjects2= [];
gdjs.Cutscene_323Code.GDImage_9595of_9595Player_9595CryingObjects1= [];
gdjs.Cutscene_323Code.GDImage_9595of_9595Player_9595CryingObjects2= [];
gdjs.Cutscene_323Code.GDPlayer_9595PlatformerObjects1= [];
gdjs.Cutscene_323Code.GDPlayer_9595PlatformerObjects2= [];
gdjs.Cutscene_323Code.GDBall_9595ObstacleObjects1= [];
gdjs.Cutscene_323Code.GDBall_9595ObstacleObjects2= [];
gdjs.Cutscene_323Code.GDBall_9595TextureObjects1= [];
gdjs.Cutscene_323Code.GDBall_9595TextureObjects2= [];
gdjs.Cutscene_323Code.GDSpike_9595TipObjects1= [];
gdjs.Cutscene_323Code.GDSpike_9595TipObjects2= [];
gdjs.Cutscene_323Code.GDSpike_9595BaseObjects1= [];
gdjs.Cutscene_323Code.GDSpike_9595BaseObjects2= [];
gdjs.Cutscene_323Code.GDSpike_9595Tip_9595CollisionObjects1= [];
gdjs.Cutscene_323Code.GDSpike_9595Tip_9595CollisionObjects2= [];
gdjs.Cutscene_323Code.GDSpike_9595Base_9595CollisionObjects1= [];
gdjs.Cutscene_323Code.GDSpike_9595Base_9595CollisionObjects2= [];
gdjs.Cutscene_323Code.GDCloud_9595Platform2Objects1= [];
gdjs.Cutscene_323Code.GDCloud_9595Platform2Objects2= [];
gdjs.Cutscene_323Code.GDWood_9595BlockObjects1= [];
gdjs.Cutscene_323Code.GDWood_9595BlockObjects2= [];
gdjs.Cutscene_323Code.GDBricksObjects1= [];
gdjs.Cutscene_323Code.GDBricksObjects2= [];
gdjs.Cutscene_323Code.GDBackgroundObjects1= [];
gdjs.Cutscene_323Code.GDBackgroundObjects2= [];
gdjs.Cutscene_323Code.GDBlackObjects1= [];
gdjs.Cutscene_323Code.GDBlackObjects2= [];
gdjs.Cutscene_323Code.GDRed_9595SpikeObjects1= [];
gdjs.Cutscene_323Code.GDRed_9595SpikeObjects2= [];
gdjs.Cutscene_323Code.GDDeath_9595TextObjects1= [];
gdjs.Cutscene_323Code.GDDeath_9595TextObjects2= [];
gdjs.Cutscene_323Code.GDHouseObjects1= [];
gdjs.Cutscene_323Code.GDHouseObjects2= [];


gdjs.Cutscene_323Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cutscene_323Code.GDPlayerObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Scene_Timer");
}{for(var i = 0, len = gdjs.Cutscene_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cutscene_323Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Scene_Timer") >= 5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene 4", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Cutscene_323Code.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ball_Texture"), gdjs.Cutscene_323Code.GDBall_9595TextureObjects1);
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.Cutscene_323Code.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bricks"), gdjs.Cutscene_323Code.GDBricksObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wood_Block"), gdjs.Cutscene_323Code.GDWood_9595BlockObjects1);
{for(var i = 0, len = gdjs.Cutscene_323Code.GDWood_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Cutscene_323Code.GDWood_9595BlockObjects1[i].activateBehavior("Physics2", true);
}
}{for(var i = 0, len = gdjs.Cutscene_323Code.GDBall_9595TextureObjects1.length ;i < len;++i) {
    gdjs.Cutscene_323Code.GDBall_9595TextureObjects1[i].activateBehavior("Physics2", true);
}
}{for(var i = 0, len = gdjs.Cutscene_323Code.GDBricksObjects1.length ;i < len;++i) {
    gdjs.Cutscene_323Code.GDBricksObjects1[i].activateBehavior("Physics2", true);
}
}{for(var i = 0, len = gdjs.Cutscene_323Code.GDBlackObjects1.length ;i < len;++i) {
    gdjs.Cutscene_323Code.GDBlackObjects1[i].activateBehavior("Physics2", true);
}
}{for(var i = 0, len = gdjs.Cutscene_323Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Cutscene_323Code.GDBackgroundObjects1[i].activateBehavior("Physics2", true);
}
}}

}


};

gdjs.Cutscene_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cutscene_323Code.GDImage_9595of_9595PlayerObjects1.length = 0;
gdjs.Cutscene_323Code.GDImage_9595of_9595PlayerObjects2.length = 0;
gdjs.Cutscene_323Code.GDPlayerObjects1.length = 0;
gdjs.Cutscene_323Code.GDPlayerObjects2.length = 0;
gdjs.Cutscene_323Code.GDCloudsObjects1.length = 0;
gdjs.Cutscene_323Code.GDCloudsObjects2.length = 0;
gdjs.Cutscene_323Code.GDPress_9595StartObjects1.length = 0;
gdjs.Cutscene_323Code.GDPress_9595StartObjects2.length = 0;
gdjs.Cutscene_323Code.GDWoodObjects1.length = 0;
gdjs.Cutscene_323Code.GDWoodObjects2.length = 0;
gdjs.Cutscene_323Code.GDImage_9595of_9595Player_9595CryingObjects1.length = 0;
gdjs.Cutscene_323Code.GDImage_9595of_9595Player_9595CryingObjects2.length = 0;
gdjs.Cutscene_323Code.GDPlayer_9595PlatformerObjects1.length = 0;
gdjs.Cutscene_323Code.GDPlayer_9595PlatformerObjects2.length = 0;
gdjs.Cutscene_323Code.GDBall_9595ObstacleObjects1.length = 0;
gdjs.Cutscene_323Code.GDBall_9595ObstacleObjects2.length = 0;
gdjs.Cutscene_323Code.GDBall_9595TextureObjects1.length = 0;
gdjs.Cutscene_323Code.GDBall_9595TextureObjects2.length = 0;
gdjs.Cutscene_323Code.GDSpike_9595TipObjects1.length = 0;
gdjs.Cutscene_323Code.GDSpike_9595TipObjects2.length = 0;
gdjs.Cutscene_323Code.GDSpike_9595BaseObjects1.length = 0;
gdjs.Cutscene_323Code.GDSpike_9595BaseObjects2.length = 0;
gdjs.Cutscene_323Code.GDSpike_9595Tip_9595CollisionObjects1.length = 0;
gdjs.Cutscene_323Code.GDSpike_9595Tip_9595CollisionObjects2.length = 0;
gdjs.Cutscene_323Code.GDSpike_9595Base_9595CollisionObjects1.length = 0;
gdjs.Cutscene_323Code.GDSpike_9595Base_9595CollisionObjects2.length = 0;
gdjs.Cutscene_323Code.GDCloud_9595Platform2Objects1.length = 0;
gdjs.Cutscene_323Code.GDCloud_9595Platform2Objects2.length = 0;
gdjs.Cutscene_323Code.GDWood_9595BlockObjects1.length = 0;
gdjs.Cutscene_323Code.GDWood_9595BlockObjects2.length = 0;
gdjs.Cutscene_323Code.GDBricksObjects1.length = 0;
gdjs.Cutscene_323Code.GDBricksObjects2.length = 0;
gdjs.Cutscene_323Code.GDBackgroundObjects1.length = 0;
gdjs.Cutscene_323Code.GDBackgroundObjects2.length = 0;
gdjs.Cutscene_323Code.GDBlackObjects1.length = 0;
gdjs.Cutscene_323Code.GDBlackObjects2.length = 0;
gdjs.Cutscene_323Code.GDRed_9595SpikeObjects1.length = 0;
gdjs.Cutscene_323Code.GDRed_9595SpikeObjects2.length = 0;
gdjs.Cutscene_323Code.GDDeath_9595TextObjects1.length = 0;
gdjs.Cutscene_323Code.GDDeath_9595TextObjects2.length = 0;
gdjs.Cutscene_323Code.GDHouseObjects1.length = 0;
gdjs.Cutscene_323Code.GDHouseObjects2.length = 0;

gdjs.Cutscene_323Code.eventsList0(runtimeScene);

return;

}

gdjs['Cutscene_323Code'] = gdjs.Cutscene_323Code;
