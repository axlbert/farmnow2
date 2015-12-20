var catAlog = {
  "cat": [{
    "name": "Kitty",
    "picture": "catpick.jpg",
    "clicks": "0",
  }, {
    "name": "Patty",
    "picture": "catpick2.jpg",
    "clicks": "0",
  }, {
    "name": "Nally",
    "picture": "http://lorempixel.com/400/400/animals/5/",
    "clicks": "0",
  }, {
    "name": "Polly",
    "picture": "http://lorempixel.com/400/400/animals/4/",
    "clicks": "0",
  }, {
    "name": "Natty",
    "picture": "catpick3.jpg",
    "clicks": "0",
  }],
};

var catBox = '<div id="picbox" class="picturebox%picno%"><div class="counterbox%countno%"></div></div>';
var formattedCatBox;
var ListBox = '<p class="listEntry%nameno%"><a href="#CatContainer">%name%</a></p><hr>';
var formattedListBox;
var counterText = "<h2>%name% has been clicked %data% times !</h2>";
var formattedCount;
var picBox = '<img src="%url%" alt="picture of a cat">';
var formattedPic;


var Init = function(){
};

Init.prototype.CreateList = function() {
  var len = catAlog.cat.length;
  for (var i = 0; i < len; i++) {
    formattedListBox = ListBox.replace("%nameno%", i).replace("%name%", catAlog.cat[i].name);
    $(".ListContainer").append(formattedListBox);
  }
};

//Loops over the cats in the catAlog array
Init.prototype.ClickTrigger = function() {
  var len = catAlog.cat.length;
  for (var cats = 0; cats < len; cats++) {
    Main.prototype.linkClick(cats);
  }
};

Init.prototype.Render = function() {
  this.CreateList();
  this.ClickTrigger();
}

var Main = function(){
};

Main.prototype.singleDisplay = function(cats) {
    formattedCatBox = catBox.replace("%picno%", cats).replace("%countno%", cats);
    $(".CatContainer").append(formattedCatBox);
    formattedPic = picBox.replace("%url%", catAlog.cat[cats].picture);
    $(".picturebox" + [cats]).prepend(formattedPic);
                formattedCount = counterText.replace("%data%", catAlog.cat[cats].clicks).replace("%name%", catAlog.cat[cats].name);
    $(".counterbox" + [cats]).empty().append(formattedCount);
};

Main.prototype.clickcount = function(cats) {
  $(".picturebox" + [cats]).click(function() {
    catAlog.cat[cats].clicks++;
    formattedCount = counterText.replace("%data%", catAlog.cat[cats].clicks).replace("%name%", catAlog.cat[cats].name);
    $(".counterbox" + [cats]).empty().append(formattedCount);
  });
};

Main.prototype.linkClick = function(cats) {
  $(".listEntry"+[cats]).click(function(){
    $(".CatContainer").empty();
    Main.prototype.singleDisplay(cats);
    Main.prototype.clickcount(cats);
  });
};

Init.prototype.Render();