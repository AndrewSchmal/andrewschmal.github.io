function loadImage() {
    var img = document.createElement('introImage').files[0];

    const imageUrl = URL.createObjectURL(image);

    var text = "<img src=\"" + imageUrl + "\" >";
    
    document.getElementById('loadImage').innerHTML = text;
}