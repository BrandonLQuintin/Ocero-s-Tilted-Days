gdjs.Intro_32Scene_324Code = {};
gdjs.Intro_32Scene_324Code.GDOcero_9595s_9595ThoughtsObjects1= [];
gdjs.Intro_32Scene_324Code.GDOcero_9595s_9595ThoughtsObjects2= [];
gdjs.Intro_32Scene_324Code.GDImage_9595of_9595PlayerObjects1= [];
gdjs.Intro_32Scene_324Code.GDImage_9595of_9595PlayerObjects2= [];
gdjs.Intro_32Scene_324Code.GDPlayerObjects1= [];
gdjs.Intro_32Scene_324Code.GDPlayerObjects2= [];
gdjs.Intro_32Scene_324Code.GDCloudsObjects1= [];
gdjs.Intro_32Scene_324Code.GDCloudsObjects2= [];
gdjs.Intro_32Scene_324Code.GDPress_9595StartObjects1= [];
gdjs.Intro_32Scene_324Code.GDPress_9595StartObjects2= [];
gdjs.Intro_32Scene_324Code.GDWoodObjects1= [];
gdjs.Intro_32Scene_324Code.GDWoodObjects2= [];
gdjs.Intro_32Scene_324Code.GDImage_9595of_9595Player_9595CryingObjects1= [];
gdjs.Intro_32Scene_324Code.GDImage_9595of_9595Player_9595CryingObjects2= [];
gdjs.Intro_32Scene_324Code.GDPlayer_9595PlatformerObjects1= [];
gdjs.Intro_32Scene_324Code.GDPlayer_9595PlatformerObjects2= [];
gdjs.Intro_32Scene_324Code.GDBall_9595ObstacleObjects1= [];
gdjs.Intro_32Scene_324Code.GDBall_9595ObstacleObjects2= [];
gdjs.Intro_32Scene_324Code.GDBall_9595TextureObjects1= [];
gdjs.Intro_32Scene_324Code.GDBall_9595TextureObjects2= [];
gdjs.Intro_32Scene_324Code.GDSpike_9595TipObjects1= [];
gdjs.Intro_32Scene_324Code.GDSpike_9595TipObjects2= [];
gdjs.Intro_32Scene_324Code.GDSpike_9595BaseObjects1= [];
gdjs.Intro_32Scene_324Code.GDSpike_9595BaseObjects2= [];
gdjs.Intro_32Scene_324Code.GDSpike_9595Tip_9595CollisionObjects1= [];
gdjs.Intro_32Scene_324Code.GDSpike_9595Tip_9595CollisionObjects2= [];
gdjs.Intro_32Scene_324Code.GDSpike_9595Base_9595CollisionObjects1= [];
gdjs.Intro_32Scene_324Code.GDSpike_9595Base_9595CollisionObjects2= [];
gdjs.Intro_32Scene_324Code.GDCloud_9595Platform2Objects1= [];
gdjs.Intro_32Scene_324Code.GDCloud_9595Platform2Objects2= [];
gdjs.Intro_32Scene_324Code.GDWood_9595BlockObjects1= [];
gdjs.Intro_32Scene_324Code.GDWood_9595BlockObjects2= [];
gdjs.Intro_32Scene_324Code.GDBricksObjects1= [];
gdjs.Intro_32Scene_324Code.GDBricksObjects2= [];
gdjs.Intro_32Scene_324Code.GDBackgroundObjects1= [];
gdjs.Intro_32Scene_324Code.GDBackgroundObjects2= [];
gdjs.Intro_32Scene_324Code.GDBlackObjects1= [];
gdjs.Intro_32Scene_324Code.GDBlackObjects2= [];
gdjs.Intro_32Scene_324Code.GDRed_9595SpikeObjects1= [];
gdjs.Intro_32Scene_324Code.GDRed_9595SpikeObjects2= [];
gdjs.Intro_32Scene_324Code.GDDeath_9595TextObjects1= [];
gdjs.Intro_32Scene_324Code.GDDeath_9595TextObjects2= [];
gdjs.Intro_32Scene_324Code.GDHouseObjects1= [];
gdjs.Intro_32Scene_324Code.GDHouseObjects2= [];


gdjs.Intro_32Scene_324Code.mapOfGDgdjs_9546Intro_959532Scene_9595324Code_9546GDPress_95959595StartObjects1Objects = Hashtable.newFrom({"Press_Start": gdjs.Intro_32Scene_324Code.GDPress_9595StartObjects1});
gdjs.Intro_32Scene_324Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Press_Start"), gdjs.Intro_32Scene_324Code.GDPress_9595StartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Intro_32Scene_324Code.mapOfGDgdjs_9546Intro_959532Scene_9595324Code_9546GDPress_95959595StartObjects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Intro_32Scene_324Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Intro_32Scene_324Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Intro_32Scene_324Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", false);
}
}}

}


};

gdjs.Intro_32Scene_324Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Intro_32Scene_324Code.GDOcero_9595s_9595ThoughtsObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDOcero_9595s_9595ThoughtsObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDImage_9595of_9595PlayerObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDImage_9595of_9595PlayerObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDPlayerObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDPlayerObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDCloudsObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDCloudsObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDPress_9595StartObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDPress_9595StartObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDWoodObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDWoodObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDImage_9595of_9595Player_9595CryingObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDImage_9595of_9595Player_9595CryingObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDPlayer_9595PlatformerObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDPlayer_9595PlatformerObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDBall_9595ObstacleObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDBall_9595ObstacleObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDBall_9595TextureObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDBall_9595TextureObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDSpike_9595TipObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDSpike_9595TipObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDSpike_9595BaseObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDSpike_9595BaseObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDSpike_9595Tip_9595CollisionObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDSpike_9595Tip_9595CollisionObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDSpike_9595Base_9595CollisionObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDSpike_9595Base_9595CollisionObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDCloud_9595Platform2Objects1.length = 0;
gdjs.Intro_32Scene_324Code.GDCloud_9595Platform2Objects2.length = 0;
gdjs.Intro_32Scene_324Code.GDWood_9595BlockObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDWood_9595BlockObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDBricksObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDBricksObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDBackgroundObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDBackgroundObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDBlackObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDBlackObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDRed_9595SpikeObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDRed_9595SpikeObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDDeath_9595TextObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDDeath_9595TextObjects2.length = 0;
gdjs.Intro_32Scene_324Code.GDHouseObjects1.length = 0;
gdjs.Intro_32Scene_324Code.GDHouseObjects2.length = 0;

gdjs.Intro_32Scene_324Code.eventsList0(runtimeScene);

return;

}

gdjs['Intro_32Scene_324Code'] = gdjs.Intro_32Scene_324Code;
