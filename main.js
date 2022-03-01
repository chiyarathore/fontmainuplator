nosex=0;
nosey=0;
leftwrist=0;
rightwrist=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    oncontextmenu(nosex,nosey,difference);
}
function modelloaded(){
    console.log("modelloaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
         nosex=results[0].pose.nose.y;
        console.log("nosex="+nosex+"nosey="+nosey);
 leftwrist=results[0].pose.leftWrist.x;
 rightwrist=results[0].pose.rightWrist.x;
        difference=floor(leftwrist-rightwrist);
    }
}