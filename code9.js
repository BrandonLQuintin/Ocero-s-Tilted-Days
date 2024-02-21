gdjs.Cutscene_324Code = {};
gdjs.Cutscene_324Code.GDTextObjects1= [];
gdjs.Cutscene_324Code.GDTextObjects2= [];
gdjs.Cutscene_324Code.GDImage_9595of_9595PlayerObjects1= [];
gdjs.Cutscene_324Code.GDImage_9595of_9595PlayerObjects2= [];
gdjs.Cutscene_324Code.GDPlayerObjects1= [];
gdjs.Cutscene_324Code.GDPlayerObjects2= [];
gdjs.Cutscene_324Code.GDCloudsObjects1= [];
gdjs.Cutscene_324Code.GDCloudsObjects2= [];
gdjs.Cutscene_324Code.GDPress_9595StartObjects1= [];
gdjs.Cutscene_324Code.GDPress_9595StartObjects2= [];
gdjs.Cutscene_324Code.GDWoodObjects1= [];
gdjs.Cutscene_324Code.GDWoodObjects2= [];
gdjs.Cutscene_324Code.GDImage_9595of_9595Player_9595CryingObjects1= [];
gdjs.Cutscene_324Code.GDImage_9595of_9595Player_9595CryingObjects2= [];
gdjs.Cutscene_324Code.GDPlayer_9595PlatformerObjects1= [];
gdjs.Cutscene_324Code.GDPlayer_9595PlatformerObjects2= [];
gdjs.Cutscene_324Code.GDBall_9595ObstacleObjects1= [];
gdjs.Cutscene_324Code.GDBall_9595ObstacleObjects2= [];
gdjs.Cutscene_324Code.GDBall_9595TextureObjects1= [];
gdjs.Cutscene_324Code.GDBall_9595TextureObjects2= [];
gdjs.Cutscene_324Code.GDSpike_9595TipObjects1= [];
gdjs.Cutscene_324Code.GDSpike_9595TipObjects2= [];
gdjs.Cutscene_324Code.GDSpike_9595BaseObjects1= [];
gdjs.Cutscene_324Code.GDSpike_9595BaseObjects2= [];
gdjs.Cutscene_324Code.GDSpike_9595Tip_9595CollisionObjects1= [];
gdjs.Cutscene_324Code.GDSpike_9595Tip_9595CollisionObjects2= [];
gdjs.Cutscene_324Code.GDSpike_9595Base_9595CollisionObjects1= [];
gdjs.Cutscene_324Code.GDSpike_9595Base_9595CollisionObjects2= [];
gdjs.Cutscene_324Code.GDCloud_9595Platform2Objects1= [];
gdjs.Cutscene_324Code.GDCloud_9595Platform2Objects2= [];
gdjs.Cutscene_324Code.GDWood_9595BlockObjects1= [];
gdjs.Cutscene_324Code.GDWood_9595BlockObjects2= [];
gdjs.Cutscene_324Code.GDBricksObjects1= [];
gdjs.Cutscene_324Code.GDBricksObjects2= [];
gdjs.Cutscene_324Code.GDBackgroundObjects1= [];
gdjs.Cutscene_324Code.GDBackgroundObjects2= [];
gdjs.Cutscene_324Code.GDBlackObjects1= [];
gdjs.Cutscene_324Code.GDBlackObjects2= [];
gdjs.Cutscene_324Code.GDRed_9595SpikeObjects1= [];
gdjs.Cutscene_324Code.GDRed_9595SpikeObjects2= [];
gdjs.Cutscene_324Code.GDDeath_9595TextObjects1= [];
gdjs.Cutscene_324Code.GDDeath_9595TextObjects2= [];
gdjs.Cutscene_324Code.GDHouseObjects1= [];
gdjs.Cutscene_324Code.GDHouseObjects2= [];


gdjs.Cutscene_324Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cutscene_324Code.GDPlayerObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Scene_Timer");
}{for(var i = 0, len = gdjs.Cutscene_324Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cutscene_324Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Scene_Timer") >= 3;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}


};

gdjs.Cutscene_324Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cutscene_324Code.GDTextObjects1.length = 0;
gdjs.Cutscene_324Code.GDTextObjects2.length = 0;
gdjs.Cutscene_324Code.GDImage_9595of_9595PlayerObjects1.length = 0;
gdjs.Cutscene_324Code.GDImage_9595of_9595PlayerObjects2.length = 0;
gdjs.Cutscene_324Code.GDPlayerObjects1.length = 0;
gdjs.Cutscene_324Code.GDPlayerObjects2.length = 0;
gdjs.Cutscene_324Code.GDCloudsObjects1.length = 0;
gdjs.Cutscene_324Code.GDCloudsObjects2.length = 0;
gdjs.Cutscene_324Code.GDPress_9595StartObjects1.length = 0;
gdjs.Cutscene_324Code.GDPress_9595StartObjects2.length = 0;
gdjs.Cutscene_324Code.GDWoodObjects1.length = 0;
gdjs.Cutscene_324Code.GDWoodObjects2.length = 0;
gdjs.Cutscene_324Code.GDImage_9595of_9595Player_9595CryingObjects1.length = 0;
gdjs.Cutscene_324Code.GDImage_9595of_9595Player_9595CryingObjects2.length = 0;
gdjs.Cutscene_324Code.GDPlayer_9595PlatformerObjects1.length = 0;
gdjs.Cutscene_324Code.GDPlayer_9595PlatformerObjects2.length = 0;
gdjs.Cutscene_324Code.GDBall_9595ObstacleObjects1.length = 0;
gdjs.Cutscene_324Code.GDBall_9595ObstacleObjects2.length = 0;
gdjs.Cutscene_324Code.GDBall_9595TextureObjects1.length = 0;
gdjs.Cutscene_324Code.GDBall_9595TextureObjects2.length = 0;
gdjs.Cutscene_324Code.GDSpike_9595TipObjects1.length = 0;
gdjs.Cutscene_324Code.GDSpike_9595TipObjects2.length = 0;
gdjs.Cutscene_324Code.GDSpike_9595BaseObjects1.length = 0;
gdjs.Cutscene_324Code.GDSpike_9595BaseObjects2.length = 0;
gdjs.Cutscene_324Code.GDSpike_9595Tip_9595CollisionObjects1.length = 0;
gdjs.Cutscene_324Code.GDSpike_9595Tip_9595CollisionObjects2.length = 0;
gdjs.Cutscene_324Code.GDSpike_9595Base_9595CollisionObjects1.length = 0;
gdjs.Cutscene_324Code.GDSpike_9595Base_9595CollisionObjects2.length = 0;
gdjs.Cutscene_324Code.GDCloud_9595Platform2Objects1.length = 0;
gdjs.Cutscene_324Code.GDCloud_9595Platform2Objects2.length = 0;
gdjs.Cutscene_324Code.GDWood_9595BlockObjects1.length = 0;
gdjs.Cutscene_324Code.GDWood_9595BlockObjects2.length = 0;
gdjs.Cutscene_324Code.GDBricksObjects1.length = 0;
gdjs.Cutscene_324Code.GDBricksObjects2.length = 0;
gdjs.Cutscene_324Code.GDBackgroundObjects1.length = 0;
gdjs.Cutscene_324Code.GDBackgroundObjects2.length = 0;
gdjs.Cutscene_324Code.GDBlackObjects1.length = 0;
gdjs.Cutscene_324Code.GDBlackObjects2.length = 0;
gdjs.Cutscene_324Code.GDRed_9595SpikeObjects1.length = 0;
gdjs.Cutscene_324Code.GDRed_9595SpikeObjects2.length = 0;
gdjs.Cutscene_324Code.GDDeath_9595TextObjects1.length = 0;
gdjs.Cutscene_324Code.GDDeath_9595TextObjects2.length = 0;
gdjs.Cutscene_324Code.GDHouseObjects1.length = 0;
gdjs.Cutscene_324Code.GDHouseObjects2.length = 0;

gdjs.Cutscene_324Code.eventsList0(runtimeScene);

return;

}

gdjs['Cutscene_324Code'] = gdjs.Cutscene_324Code;
