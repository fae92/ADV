var shownImage = null;
var isImagesShown = false;
var count = 0;

// function showImage(image) {
//     if (image.style.opacity == 1 || isImagesShown)
// 	return;
//     image.style.opacity = 1;

//     if (shownImage == null)
//     {
// 	shownImage = image;
//     }
//     else
//     {
// 	if (image.src == shownImage.src)
// 	{
// 	    count++;
// 	    shownImage = null;
// 	    if (count == 8)
// 		alert("Vous avez gagné !");
// 	}
// 	else
// 	{
// 	    isImagesShown = true;
// 	    setTimeout(function() {
// 		image.style.opacity = 0;
// 		shownImage.style.opacity = 0;
// 		shownImage = null;
// 		isImagesShown = false;
// 	    }, 1000);
// 	}
//     }
// }

var previous_image = null;
var is_images_shown = false;
var count = 0;

function showImage(image) {
    if (is_images_shown)
        return;

    if (previous_image != null) {
        if (image.src == previous_image.src) {
            image.style.opacity = 1;
            previous_image = null;
            count = count + 1;

            if (count == 8)
                alert("Vous avez gagné !");
        } else {
            image.style.opacity = 1;
            is_images_shown = true;
            setTimeout(function () {
                image.style.opacity = 0;
                previous_image.style.opacity = 0;
                previous_image = null;
                is_images_shown = false;
            }, 1000);
        }
    } else {
        image.style.opacity = 1;
        previous_image = image;
    }
}
