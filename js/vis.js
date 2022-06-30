let theImage = document.querySelector('#theImage');
let scene = "";
let onWallTile = document.querySelector('.imageContainer');
let home = document.querySelector('.home');
let vis_page = document.querySelector('.vis_page');
let vis_page_title = document.querySelector('body > div.container.vis_page > div.row.justify-content-center > div.col-11.text-center.display-5');


//Changes the product image based on the selected image
const changeScene = (sceneArg) => {
    if(sceneArg == 'onwall'){
        theImage.src = `images/${sceneArg}/${sceneArg}_default.png`;
    }
    else if(sceneArg != '') {
        theImage.src = `images/${sceneArg}/${sceneArg}_default.jpg`;
    }
    console.log(theImage.src);
    scene = sceneArg;
    home.style.display = "none";
    vis_page.style.display = "block";
    vis_page_title.innerHTML = scene;
}

//Works for the back button
const returnHome = () => {
    home.style.display = "block";
    vis_page.style.display = "none";
}

//Changes the image based on the tile selected
const changeImage = (imageName) => {
    if(scene == 'onwall'){
        onWallTile.style.backgroundImage = "url('images/onwall/" + imageName + ".jpg')"
    }
    else if(scene != ""){
        theImage.src = `images/${scene}/${scene}_${imageName}.jpg`;
        console.log(theImage.src);
    }
    else {
        theImage.src = "#";
    }
}