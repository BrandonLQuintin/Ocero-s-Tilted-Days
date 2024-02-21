gdjs.Ending_321Code = {};
gdjs.Ending_321Code.GDTextObjects1= [];
gdjs.Ending_321Code.GDTextObjects2= [];
gdjs.Ending_321Code.GDPlay_9595AgainObjects1= [];
gdjs.Ending_321Code.GDPlay_9595AgainObjects2= [];
gdjs.Ending_321Code.GDImage_9595of_9595PlayerObjects1= [];
gdjs.Ending_321Code.GDImage_9595of_9595PlayerObjects2= [];
gdjs.Ending_321Code.GDPlayerObjects1= [];
gdjs.Ending_321Code.GDPlayerObjects2= [];
gdjs.Ending_321Code.GDCloudsObjects1= [];
gdjs.Ending_321Code.GDCloudsObjects2= [];
gdjs.Ending_321Code.GDPress_9595StartObjects1= [];
gdjs.Ending_321Code.GDPress_9595StartObjects2= [];
gdjs.Ending_321Code.GDWoodObjects1= [];
gdjs.Ending_321Code.GDWoodObjects2= [];
gdjs.Ending_321Code.GDImage_9595of_9595Player_9595CryingObjects1= [];
gdjs.Ending_321Code.GDImage_9595of_9595Player_9595CryingObjects2= [];
gdjs.Ending_321Code.GDPlayer_9595PlatformerObjects1= [];
gdjs.Ending_321Code.GDPlayer_9595PlatformerObjects2= [];
gdjs.Ending_321Code.GDBall_9595ObstacleObjects1= [];
gdjs.Ending_321Code.GDBall_9595ObstacleObjects2= [];
gdjs.Ending_321Code.GDBall_9595TextureObjects1= [];
gdjs.Ending_321Code.GDBall_9595TextureObjects2= [];
gdjs.Ending_321Code.GDSpike_9595TipObjects1= [];
gdjs.Ending_321Code.GDSpike_9595TipObjects2= [];
gdjs.Ending_321Code.GDSpike_9595BaseObjects1= [];
gdjs.Ending_321Code.GDSpike_9595BaseObjects2= [];
gdjs.Ending_321Code.GDSpike_9595Tip_9595CollisionObjects1= [];
gdjs.Ending_321Code.GDSpike_9595Tip_9595CollisionObjects2= [];
gdjs.Ending_321Code.GDSpike_9595Base_9595CollisionObjects1= [];
gdjs.Ending_321Code.GDSpike_9595Base_9595CollisionObjects2= [];
gdjs.Ending_321Code.GDCloud_9595Platform2Objects1= [];
gdjs.Ending_321Code.GDCloud_9595Platform2Objects2= [];
gdjs.Ending_321Code.GDWood_9595BlockObjects1= [];
gdjs.Ending_321Code.GDWood_9595BlockObjects2= [];
gdjs.Ending_321Code.GDBricksObjects1= [];
gdjs.Ending_321Code.GDBricksObjects2= [];
gdjs.Ending_321Code.GDBackgroundObjects1= [];
gdjs.Ending_321Code.GDBackgroundObjects2= [];
gdjs.Ending_321Code.GDBlackObjects1= [];
gdjs.Ending_321Code.GDBlackObjects2= [];
gdjs.Ending_321Code.GDRed_9595SpikeObjects1= [];
gdjs.Ending_321Code.GDRed_9595SpikeObjects2= [];
gdjs.Ending_321Code.GDDeath_9595TextObjects1= [];
gdjs.Ending_321Code.GDDeath_9595TextObjects2= [];
gdjs.Ending_321Code.GDHouseObjects1= [];
gdjs.Ending_321Code.GDHouseObjects2= [];


gdjs.Ending_321Code.mapOfGDgdjs_9546Ending_9595321Code_9546GDPlay_95959595AgainObjects1Objects = Hashtable.newFrom({"Play_Again": gdjs.Ending_321Code.GDPlay_9595AgainObjects1});
gdjs.Ending_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Death_Text"), gdjs.Ending_321Code.GDDeath_9595TextObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "soft-piano-loop-192098.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.Ending_321Code.GDDeath_9595TextObjects1.length ;i < len;++i) {
    gdjs.Ending_321Code.GDDeath_9595TextObjects1[i].getBehavior("Text").setText("Total Deaths: " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Again"), gdjs.Ending_321Code.GDPlay_9595AgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Ending_321Code.mapOfGDgdjs_9546Ending_9595321Code_9546GDPlay_95959595AgainObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro Scene", false);
}}

}


};

gdjs.Ending_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Ending_321Code.GDTextObjects1.length = 0;
gdjs.Ending_321Code.GDTextObjects2.length = 0;
gdjs.Ending_321Code.GDPlay_9595AgainObjects1.length = 0;
gdjs.Ending_321Code.GDPlay_9595AgainObjects2.length = 0;
gdjs.Ending_321Code.GDImage_9595of_9595PlayerObjects1.length = 0;
gdjs.Ending_321Code.GDImage_9595of_9595PlayerObjects2.length = 0;
gdjs.Ending_321Code.GDPlayerObjects1.length = 0;
gdjs.Ending_321Code.GDPlayerObjects2.length = 0;
gdjs.Ending_321Code.GDCloudsObjects1.length = 0;
gdjs.Ending_321Code.GDCloudsObjects2.length = 0;
gdjs.Ending_321Code.GDPress_9595StartObjects1.length = 0;
gdjs.Ending_321Code.GDPress_9595StartObjects2.length = 0;
gdjs.Ending_321Code.GDWoodObjects1.length = 0;
gdjs.Ending_321Code.GDWoodObjects2.length = 0;
gdjs.Ending_321Code.GDImage_9595of_9595Player_9595CryingObjects1.length = 0;
gdjs.Ending_321Code.GDImage_9595of_9595Player_9595CryingObjects2.length = 0;
gdjs.Ending_321Code.GDPlayer_9595PlatformerObjects1.length = 0;
gdjs.Ending_321Code.GDPlayer_9595PlatformerObjects2.length = 0;
gdjs.Ending_321Code.GDBall_9595ObstacleObjects1.length = 0;
gdjs.Ending_321Code.GDBall_9595ObstacleObjects2.length = 0;
gdjs.Ending_321Code.GDBall_9595TextureObjects1.length = 0;
gdjs.Ending_321Code.GDBall_9595TextureObjects2.length = 0;
gdjs.Ending_321Code.GDSpike_9595TipObjects1.length = 0;
gdjs.Ending_321Code.GDSpike_9595TipObjects2.length = 0;
gdjs.Ending_321Code.GDSpike_9595BaseObjects1.length = 0;
gdjs.Ending_321Code.GDSpike_9595BaseObjects2.length = 0;
gdjs.Ending_321Code.GDSpike_9595Tip_9595CollisionObjects1.length = 0;
gdjs.Ending_321Code.GDSpike_9595Tip_9595CollisionObjects2.length = 0;
gdjs.Ending_321Code.GDSpike_9595Base_9595CollisionObjects1.length = 0;
gdjs.Ending_321Code.GDSpike_9595Base_9595CollisionObjects2.length = 0;
gdjs.Ending_321Code.GDCloud_9595Platform2Objects1.length = 0;
gdjs.Ending_321Code.GDCloud_9595Platform2Objects2.length = 0;
gdjs.Ending_321Code.GDWood_9595BlockObjects1.length = 0;
gdjs.Ending_321Code.GDWood_9595BlockObjects2.length = 0;
gdjs.Ending_321Code.GDBricksObjects1.length = 0;
gdjs.Ending_321Code.GDBricksObjects2.length = 0;
gdjs.Ending_321Code.GDBackgroundObjects1.length = 0;
gdjs.Ending_321Code.GDBackgroundObjects2.length = 0;
gdjs.Ending_321Code.GDBlackObjects1.length = 0;
gdjs.Ending_321Code.GDBlackObjects2.length = 0;
gdjs.Ending_321Code.GDRed_9595SpikeObjects1.length = 0;
gdjs.Ending_321Code.GDRed_9595SpikeObjects2.length = 0;
gdjs.Ending_321Code.GDDeath_9595TextObjects1.length = 0;
gdjs.Ending_321Code.GDDeath_9595TextObjects2.length = 0;
gdjs.Ending_321Code.GDHouseObjects1.length = 0;
gdjs.Ending_321Code.GDHouseObjects2.length = 0;

gdjs.Ending_321Code.eventsList0(runtimeScene);

return;

}

gdjs['Ending_321Code'] = gdjs.Ending_321Code;
