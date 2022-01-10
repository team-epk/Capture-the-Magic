function Captcha(x, y, img) {
  this.xpos = x;
  this.ypos = y;
  this.image = img;

  this.display = function() {
    image(this.image, this.xpos, this.ypos);
  }

  this.isUnderMouse = function(x,y, obj) {//Determines where the image is that gets clicked, to make the checkmark.
    console.log (x +'-'+ y);
      if (x >= this.xpos && x <= this.xpos + obj.image.width  && y >= this.ypos && y <= this.ypos + obj.image.height) {
      return true
    }

  }

  this.selected = function() {//Sets the clicked image as "selected," so it gets the checkmark/
    this.image.copy(checkmark, this.xpos, this.ypos, this.image.width, this.image.height,this.xpos, this.ypos, checkmark.width, checkmark.height);
    image(this.image, this.xpos, this.ypos);

  }
}
