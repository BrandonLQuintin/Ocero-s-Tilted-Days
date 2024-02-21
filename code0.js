gdjs.Intro_32SceneCode = {};
gdjs.Intro_32SceneCode.GDTitleObjects1= [];
gdjs.Intro_32SceneCode.GDTitleObjects2= [];
gdjs.Intro_32SceneCode.GDImage_9595of_9595PlayerObjects1= [];
gdjs.Intro_32SceneCode.GDImage_9595of_9595PlayerObjects2= [];
gdjs.Intro_32SceneCode.GDPlayerObjects1= [];
gdjs.Intro_32SceneCode.GDPlayerObjects2= [];
gdjs.Intro_32SceneCode.GDCloudsObjects1= [];
gdjs.Intro_32SceneCode.GDCloudsObjects2= [];
gdjs.Intro_32SceneCode.GDPress_9595StartObjects1= [];
gdjs.Intro_32SceneCode.GDPress_9595StartObjects2= [];
gdjs.Intro_32SceneCode.GDWoodObjects1= [];
gdjs.Intro_32SceneCode.GDWoodObjects2= [];
gdjs.Intro_32SceneCode.GDImage_9595of_9595Player_9595CryingObjects1= [];
gdjs.Intro_32SceneCode.GDImage_9595of_9595Player_9595CryingObjects2= [];
gdjs.Intro_32SceneCode.GDPlayer_9595PlatformerObjects1= [];
gdjs.Intro_32SceneCode.GDPlayer_9595PlatformerObjects2= [];
gdjs.Intro_32SceneCode.GDBall_9595ObstacleObjects1= [];
gdjs.Intro_32SceneCode.GDBall_9595ObstacleObjects2= [];
gdjs.Intro_32SceneCode.GDBall_9595TextureObjects1= [];
gdjs.Intro_32SceneCode.GDBall_9595TextureObjects2= [];
gdjs.Intro_32SceneCode.GDSpike_9595TipObjects1= [];
gdjs.Intro_32SceneCode.GDSpike_9595TipObjects2= [];
gdjs.Intro_32SceneCode.GDSpike_9595BaseObjects1= [];
gdjs.Intro_32SceneCode.GDSpike_9595BaseObjects2= [];
gdjs.Intro_32SceneCode.GDSpike_9595Tip_9595CollisionObjects1= [];
gdjs.Intro_32SceneCode.GDSpike_9595Tip_9595CollisionObjects2= [];
gdjs.Intro_32SceneCode.GDSpike_9595Base_9595CollisionObjects1= [];
gdjs.Intro_32SceneCode.GDSpike_9595Base_9595CollisionObjects2= [];
gdjs.Intro_32SceneCode.GDCloud_9595Platform2Objects1= [];
gdjs.Intro_32SceneCode.GDCloud_9595Platform2Objects2= [];
gdjs.Intro_32SceneCode.GDWood_9595BlockObjects1= [];
gdjs.Intro_32SceneCode.GDWood_9595BlockObjects2= [];
gdjs.Intro_32SceneCode.GDBricksObjects1= [];
gdjs.Intro_32SceneCode.GDBricksObjects2= [];
gdjs.Intro_32SceneCode.GDBackgroundObjects1= [];
gdjs.Intro_32SceneCode.GDBackgroundObjects2= [];
gdjs.Intro_32SceneCode.GDBlackObjects1= [];
gdjs.Intro_32SceneCode.GDBlackObjects2= [];
gdjs.Intro_32SceneCode.GDRed_9595SpikeObjects1= [];
gdjs.Intro_32SceneCode.GDRed_9595SpikeObjects2= [];
gdjs.Intro_32SceneCode.GDDeath_9595TextObjects1= [];
gdjs.Intro_32SceneCode.GDDeath_9595TextObjects2= [];
gdjs.Intro_32SceneCode.GDHouseObjects1= [];
gdjs.Intro_32SceneCode.GDHouseObjects2= [];


gdjs.Intro_32SceneCode.mapOfGDgdjs_9546Intro_959532SceneCode_9546GDPress_95959595StartObjects1Objects = Hashtable.newFrom({"Press_Start": gdjs.Intro_32SceneCode.GDPress_9595StartObjects1});
gdjs.Intro_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Press_Start"), gdjs.Intro_32SceneCode.GDPress_9595StartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Intro_32SceneCode.mapOfGDgdjs_9546Intro_959532SceneCode_9546GDPress_95959595StartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro Scene 2", false);
}}

}


};

gdjs.Intro_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Intro_32SceneCode.GDTitleObjects1.length = 0;
gdjs.Intro_32SceneCode.GDTitleObjects2.length = 0;
gdjs.Intro_32SceneCode.GDImage_9595of_9595PlayerObjects1.length = 0;
gdjs.Intro_32SceneCode.GDImage_9595of_9595PlayerObjects2.length = 0;
gdjs.Intro_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Intro_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Intro_32SceneCode.GDCloudsObjects1.length = 0;
gdjs.Intro_32SceneCode.GDCloudsObjects2.length = 0;
gdjs.Intro_32SceneCode.GDPress_9595StartObjects1.length = 0;
gdjs.Intro_32SceneCode.GDPress_9595StartObjects2.length = 0;
gdjs.Intro_32SceneCode.GDWoodObjects1.length = 0;
gdjs.Intro_32SceneCode.GDWoodObjects2.length = 0;
gdjs.Intro_32SceneCode.GDImage_9595of_9595Player_9595CryingObjects1.length = 0;
gdjs.Intro_32SceneCode.GDImage_9595of_9595Player_9595CryingObjects2.length = 0;
gdjs.Intro_32SceneCode.GDPlayer_9595PlatformerObjects1.length = 0;
gdjs.Intro_32SceneCode.GDPlayer_9595PlatformerObjects2.length = 0;
gdjs.Intro_32SceneCode.GDBall_9595ObstacleObjects1.length = 0;
gdjs.Intro_32SceneCode.GDBall_9595ObstacleObjects2.length = 0;
gdjs.Intro_32SceneCode.GDBall_9595TextureObjects1.length = 0;
gdjs.Intro_32SceneCode.GDBall_9595TextureObjects2.length = 0;
gdjs.Intro_32SceneCode.GDSpike_9595TipObjects1.length = 0;
gdjs.Intro_32SceneCode.GDSpike_9595TipObjects2.length = 0;
gdjs.Intro_32SceneCode.GDSpike_9595BaseObjects1.length = 0;
gdjs.Intro_32SceneCode.GDSpike_9595BaseObjects2.length = 0;
gdjs.Intro_32SceneCode.GDSpike_9595Tip_9595CollisionObjects1.length = 0;
gdjs.Intro_32SceneCode.GDSpike_9595Tip_9595CollisionObjects2.length = 0;
gdjs.Intro_32SceneCode.GDSpike_9595Base_9595CollisionObjects1.length = 0;
gdjs.Intro_32SceneCode.GDSpike_9595Base_9595CollisionObjects2.length = 0;
gdjs.Intro_32SceneCode.GDCloud_9595Platform2Objects1.length = 0;
gdjs.Intro_32SceneCode.GDCloud_9595Platform2Objects2.length = 0;
gdjs.Intro_32SceneCode.GDWood_9595BlockObjects1.length = 0;
gdjs.Intro_32SceneCode.GDWood_9595BlockObjects2.length = 0;
gdjs.Intro_32SceneCode.GDBricksObjects1.length = 0;
gdjs.Intro_32SceneCode.GDBricksObjects2.length = 0;
gdjs.Intro_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Intro_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Intro_32SceneCode.GDBlackObjects1.length = 0;
gdjs.Intro_32SceneCode.GDBlackObjects2.length = 0;
gdjs.Intro_32SceneCode.GDRed_9595SpikeObjects1.length = 0;
gdjs.Intro_32SceneCode.GDRed_9595SpikeObjects2.length = 0;
gdjs.Intro_32SceneCode.GDDeath_9595TextObjects1.length = 0;
gdjs.Intro_32SceneCode.GDDeath_9595TextObjects2.length = 0;
gdjs.Intro_32SceneCode.GDHouseObjects1.length = 0;
gdjs.Intro_32SceneCode.GDHouseObjects2.length = 0;

gdjs.Intro_32SceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Intro_32SceneCode'] = gdjs.Intro_32SceneCode;
