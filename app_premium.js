$(function() {


  var model = {
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
      "picture": "catpick4.jpg",
      "clicks": "0",
    }, {
      "name": "Polly",
      "picture": "catpick5.jpg",
      "clicks": "0",
    }, {
      "name": "Natty",
      "picture": "catpick3.jpg",
      "clicks": "0",
    }],
  };

  var counterText = "<h2>%name% has been clicked %data% times !</h2>";
  var formattedCount;

  var octopus = {
    render: function() { //this manipulates the view and the model split it up somehow?
      var len = model.cat.length;
      var ListBox = '<p class="listEntry%nameno%"><a href="#CatContainer">%name%</a></p><hr>';
      for (var i = 0; i < len; i++) {
        formattedListBox = ListBox.replace("%nameno%", i).replace("%name%", model.cat[i].name);
        $(".ListContainer").append(formattedListBox);
        view.linkClick(i);
      }
    },

    prepForBox: function(cats) { //super octopus
      var picBox = '<img src="%url%" alt="picture of a cat">';
      var catBox = '<div id="picbox" class="picturebox%picno%"><div class="counterbox%countno%"></div></div>';
      var nbox = catBox.replace("%picno%", cats).replace("%countno%", cats);
      var pbox = picBox.replace("%url%", model.cat[cats].picture);
      var cbox = counterText.replace("%data%", model.cat[cats].clicks).replace("%name%", model.cat[cats].name);
      view.boxDisplay(cats, nbox, pbox, cbox);
    },


    clickManager: function(cats) { //super octopus
      model.cat[cats].clicks++;
      formattedCount = counterText.replace("%data%", model.cat[cats].clicks).replace("%name%", model.cat[cats].name);
    }

  };

  var view = {

    boxDisplay: function(cats, nbox, pbox, cbox) {
      $(".CatContainer").append(nbox);
      $(".picturebox" + [cats]).prepend(pbox);
      $(".counterbox" + [cats]).empty().append(cbox);
    },

    clickcount: function(cats) {
      $(".picturebox" + [cats]).click(function() {
        octopus.clickManager(cats);
        $(".counterbox" + [cats]).empty().append(formattedCount);
      });
    },

    linkClick: function(cats) { //listening for clicks on the names in the list
      $(".listEntry" + [cats]).click(function() { //no direct communication with the model
        $(".CatContainer").empty();
        octopus.prepForBox(cats);
        view.clickcount(cats);
      });
    }

  };



  octopus.render();

});