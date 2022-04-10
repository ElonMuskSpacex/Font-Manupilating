nosex = 0
nosey = 0
difference = 0
rightwristx = 0
leftwristx = 0 

function setup(){
video = createCapture(VIDEO)
video.size(500,500)
canvas = createCanvas(750,500)
canvas.position(560,150)
posenet = ml5.poseNet(video,modelLoaded)
posenet.on('pose',gotPoses)
}

function draw(){
background('#30D5C8')
textSize(difference)
fill('#FFFFFF')
text('SAEE',50,400)
//stroke('#FFFFFF')
//square(nosex,nosey,difference)    
}

function modelLoaded(){
console.log("posenet is initialized")
}

function gotPoses(results){
if(results.length >0){
console.log(results)
nosex =  results[0].pose.nose.x
nosey = results[0].pose.nose.y
rightwristx = results[0].pose.rightWrist.x
leftwristx = results[0].pose.leftWrist.x
difference = leftwristx - rightwristx
}}