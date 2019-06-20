import img from '../img/b.png';
console.log('img==>' ,img);

window.onload=function(){
    var image=new Image();
    if(/^data:image\/.+;base64/.test(img)){
        image.src=img;
    }else{
        image.src="./image/"+img;
    }
    document.body.appendChild(image);
}