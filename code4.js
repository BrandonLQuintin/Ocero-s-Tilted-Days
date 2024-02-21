gdjs.Level_321Code = {};
gdjs.Level_321Code.GDWood_9595PlanksObjects1= [];
gdjs.Level_321Code.GDWood_9595PlanksObjects2= [];
gdjs.Level_321Code.GDScore_9595TextObjects1= [];
gdjs.Level_321Code.GDScore_9595TextObjects2= [];
gdjs.Level_321Code.GDHeartObjects1= [];
gdjs.Level_321Code.GDHeartObjects2= [];
gdjs.Level_321Code.GDInfo_9595TextObjects1= [];
gdjs.Level_321Code.GDInfo_9595TextObjects2= [];
gdjs.Level_321Code.GDBlack_9595BoundaryObjects1= [];
gdjs.Level_321Code.GDBlack_9595BoundaryObjects2= [];
gdjs.Level_321Code.GDImage_9595of_9595PlayerObjects1= [];
gdjs.Level_321Code.GDImage_9595of_9595PlayerObjects2= [];
gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDCloudsObjects1= [];
gdjs.Level_321Code.GDCloudsObjects2= [];
gdjs.Level_321Code.GDPress_9595StartObjects1= [];
gdjs.Level_321Code.GDPress_9595StartObjects2= [];
gdjs.Level_321Code.GDWoodObjects1= [];
gdjs.Level_321Code.GDWoodObjects2= [];
gdjs.Level_321Code.GDImage_9595of_9595Player_9595CryingObjects1= [];
gdjs.Level_321Code.GDImage_9595of_9595Player_9595CryingObjects2= [];
gdjs.Level_321Code.GDPlayer_9595PlatformerObjects1= [];
gdjs.Level_321Code.GDPlayer_9595PlatformerObjects2= [];
gdjs.Level_321Code.GDBall_9595ObstacleObjects1= [];
gdjs.Level_321Code.GDBall_9595ObstacleObjects2= [];
gdjs.Level_321Code.GDBall_9595TextureObjects1= [];
gdjs.Level_321Code.GDBall_9595TextureObjects2= [];
gdjs.Level_321Code.GDSpike_9595TipObjects1= [];
gdjs.Level_321Code.GDSpike_9595TipObjects2= [];
gdjs.Level_321Code.GDSpike_9595BaseObjects1= [];
gdjs.Level_321Code.GDSpike_9595BaseObjects2= [];
gdjs.Level_321Code.GDSpike_9595Tip_9595CollisionObjects1= [];
gdjs.Level_321Code.GDSpike_9595Tip_9595CollisionObjects2= [];
gdjs.Level_321Code.GDSpike_9595Base_9595CollisionObjects1= [];
gdjs.Level_321Code.GDSpike_9595Base_9595CollisionObjects2= [];
gdjs.Level_321Code.GDCloud_9595Platform2Objects1= [];
gdjs.Level_321Code.GDCloud_9595Platform2Objects2= [];
gdjs.Level_321Code.GDWood_9595BlockObjects1= [];
gdjs.Level_321Code.GDWood_9595BlockObjects2= [];
gdjs.Level_321Code.GDBricksObjects1= [];
gdjs.Level_321Code.GDBricksObjects2= [];
gdjs.Level_321Code.GDBackgroundObjects1= [];
gdjs.Level_321Code.GDBackgroundObjects2= [];
gdjs.Level_321Code.GDBlackObjects1= [];
gdjs.Level_321Code.GDBlackObjects2= [];
gdjs.Level_321Code.GDRed_9595SpikeObjects1= [];
gdjs.Level_321Code.GDRed_9595SpikeObjects2= [];
gdjs.Level_321Code.GDDeath_9595TextObjects1= [];
gdjs.Level_321Code.GDDeath_9595TextObjects2= [];
gdjs.Level_321Code.GDHouseObjects1= [];
gdjs.Level_321Code.GDHouseObjects2= [];


gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBall_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Ball_Obstacle": gdjs.Level_321Code.GDBall_9595ObstacleObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBlack_95959595BoundaryObjects1Objects = Hashtable.newFrom({"Black_Boundary": gdjs.Level_321Code.GDBlack_9595BoundaryObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDWoodObjects1Objects = Hashtable.newFrom({"Wood": gdjs.Level_321Code.GDWoodObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBall_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Ball_Obstacle": gdjs.Level_321Code.GDBall_9595ObstacleObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBlack_95959595BoundaryObjects1Objects = Hashtable.newFrom({"Black_Boundary": gdjs.Level_321Code.GDBlack_9595BoundaryObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBlack_95959595BoundaryObjects1Objects = Hashtable.newFrom({"Black_Boundary": gdjs.Level_321Code.GDBlack_9595BoundaryObjects1});
gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Death_Text"), gdjs.Level_321Code.GDDeath_9595TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score_Text"), gdjs.Level_321Code.GDScore_9595TextObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDScore_9595TextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDScore_9595TextObjects1[i].getBehavior("Text").setText("lbs of wood: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", true);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDeath_9595TextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDeath_9595TextObjects1[i].getBehavior("Text").setText("Total Deaths: " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "bgm-blues-guitar-loop-192099.mp3", 0, true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball_Obstacle"), gdjs.Level_321Code.GDBall_9595ObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Black_Boundary"), gdjs.Level_321Code.GDBlack_9595BoundaryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.objectsCollide(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBall_95959595ObstacleObjects1Objects, "Physics2", gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBlack_95959595BoundaryObjects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDBall_9595ObstacleObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDBall_9595ObstacleObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBall_9595ObstacleObjects1[i].getBehavior("Physics2").applyForceTowardPosition(10, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wood"), gdjs.Level_321Code.GDWoodObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDWoodObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score_Text"), gdjs.Level_321Code.GDScore_9595TextObjects1);
/* Reuse gdjs.Level_321Code.GDWoodObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{for(var i = 0, len = gdjs.Level_321Code.GDScore_9595TextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDScore_9595TextObjects1[i].getBehavior("Text").setText("lbs of wood: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}{for(var i = 0, len = gdjs.Level_321Code.GDWoodObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDWoodObjects1[i].setX(gdjs.randomInRange(350, 900));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDWoodObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDWoodObjects1[i].setY(gdjs.randomInRange(50, 600));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball_Obstacle"), gdjs.Level_321Code.GDBall_9595ObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBall_95959595ObstacleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].resetTimer("Ocero_Pain_Timer");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].activateBehavior("Physics2", true);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Crying");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "punch.mp3", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Ocero_Pain_Timer") >= 2 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", true);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("NewSprite");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Black_Boundary"), gdjs.Level_321Code.GDBlack_9595BoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBlack_95959595BoundaryObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDBlack_9595BoundaryObjects1 */
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBlack_95959595BoundaryObjects1Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 50;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene 1", false);
}}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDWood_9595PlanksObjects1.length = 0;
gdjs.Level_321Code.GDWood_9595PlanksObjects2.length = 0;
gdjs.Level_321Code.GDScore_9595TextObjects1.length = 0;
gdjs.Level_321Code.GDScore_9595TextObjects2.length = 0;
gdjs.Level_321Code.GDHeartObjects1.length = 0;
gdjs.Level_321Code.GDHeartObjects2.length = 0;
gdjs.Level_321Code.GDInfo_9595TextObjects1.length = 0;
gdjs.Level_321Code.GDInfo_9595TextObjects2.length = 0;
gdjs.Level_321Code.GDBlack_9595BoundaryObjects1.length = 0;
gdjs.Level_321Code.GDBlack_9595BoundaryObjects2.length = 0;
gdjs.Level_321Code.GDImage_9595of_9595PlayerObjects1.length = 0;
gdjs.Level_321Code.GDImage_9595of_9595PlayerObjects2.length = 0;
gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDCloudsObjects1.length = 0;
gdjs.Level_321Code.GDCloudsObjects2.length = 0;
gdjs.Level_321Code.GDPress_9595StartObjects1.length = 0;
gdjs.Level_321Code.GDPress_9595StartObjects2.length = 0;
gdjs.Level_321Code.GDWoodObjects1.length = 0;
gdjs.Level_321Code.GDWoodObjects2.length = 0;
gdjs.Level_321Code.GDImage_9595of_9595Player_9595CryingObjects1.length = 0;
gdjs.Level_321Code.GDImage_9595of_9595Player_9595CryingObjects2.length = 0;
gdjs.Level_321Code.GDPlayer_9595PlatformerObjects1.length = 0;
gdjs.Level_321Code.GDPlayer_9595PlatformerObjects2.length = 0;
gdjs.Level_321Code.GDBall_9595ObstacleObjects1.length = 0;
gdjs.Level_321Code.GDBall_9595ObstacleObjects2.length = 0;
gdjs.Level_321Code.GDBall_9595TextureObjects1.length = 0;
gdjs.Level_321Code.GDBall_9595TextureObjects2.length = 0;
gdjs.Level_321Code.GDSpike_9595TipObjects1.length = 0;
gdjs.Level_321Code.GDSpike_9595TipObjects2.length = 0;
gdjs.Level_321Code.GDSpike_9595BaseObjects1.length = 0;
gdjs.Level_321Code.GDSpike_9595BaseObjects2.length = 0;
gdjs.Level_321Code.GDSpike_9595Tip_9595CollisionObjects1.length = 0;
gdjs.Level_321Code.GDSpike_9595Tip_9595CollisionObjects2.length = 0;
gdjs.Level_321Code.GDSpike_9595Base_9595CollisionObjects1.length = 0;
gdjs.Level_321Code.GDSpike_9595Base_9595CollisionObjects2.length = 0;
gdjs.Level_321Code.GDCloud_9595Platform2Objects1.length = 0;
gdjs.Level_321Code.GDCloud_9595Platform2Objects2.length = 0;
gdjs.Level_321Code.GDWood_9595BlockObjects1.length = 0;
gdjs.Level_321Code.GDWood_9595BlockObjects2.length = 0;
gdjs.Level_321Code.GDBricksObjects1.length = 0;
gdjs.Level_321Code.GDBricksObjects2.length = 0;
gdjs.Level_321Code.GDBackgroundObjects1.length = 0;
gdjs.Level_321Code.GDBackgroundObjects2.length = 0;
gdjs.Level_321Code.GDBlackObjects1.length = 0;
gdjs.Level_321Code.GDBlackObjects2.length = 0;
gdjs.Level_321Code.GDRed_9595SpikeObjects1.length = 0;
gdjs.Level_321Code.GDRed_9595SpikeObjects2.length = 0;
gdjs.Level_321Code.GDDeath_9595TextObjects1.length = 0;
gdjs.Level_321Code.GDDeath_9595TextObjects2.length = 0;
gdjs.Level_321Code.GDHouseObjects1.length = 0;
gdjs.Level_321Code.GDHouseObjects2.length = 0;

gdjs.Level_321Code.eventsList0(runtimeScene);

return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
