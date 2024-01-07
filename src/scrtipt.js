var img = document.getElementById("img");
img.crossOrigin = "Anonymous";
var loaded = false;

img.onload = function() {
  if(loaded == true)
    return;
  
  loaded = true;
  
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/jpg");
    img.src = dataURL;
    console.log(dataURL);
}

img.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/8076/pool-canvas.jpg" 