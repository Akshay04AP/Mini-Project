var i=0;
var images = []; 
var time = 10000;

images[0] = "..\\images\\banner\\banner (1).png";
images[1] = "..\\images\\banner\\banner (2).png";
images[2] = "..\\images\\banner\\banner (3).png";
images[3] = "..\\images\\banner\\banner (4).png";

function changeImg(){
    document.slide.src = images[i];

    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }

        setTimeout('changeImg()',time);
    }

window.onload = changeImg();