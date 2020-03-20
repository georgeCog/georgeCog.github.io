var customString = "Custom"

var players = [];

var nameIn;

var colorPallets = {
  0:['darkviolet','violet'],
  1:['darkgreen','palegreen'],
  2:['teal','paleturquoise'],
  3:['darkblue','skyblue'],
  4:['mediumvioletred','lightpink']
}

var pSize = 5;

var conditions = [customString,"Blinded","Charmed","Deafened","Fatigued","Frightened","Grappled","Paralyzed","Poisoned","Prone","Restrained","Stunned","Unconscious"];

function load(){
  cardDiv = document.getElementById("card-div");
  nameIn = $(document.getElementById("nameInput"));
  $(document.getElementById("newPlayerButton")).click(function(){
    addPlayer(nameIn.val(),Math.floor(Math.random()*pSize));
  });
  $(document.getElementById("activateModal")).click(function(){
    nameIn.val("");
  });
}


function getPlayerInfo(){
  var modal = $('<div />').addClass("card modal").text("SOME STUFF");
  return  $("body").append(modal);
}

function addPlayer(name,color){
  var el = makeCard(player,name,color);
  var player = {
    name:name,
    colorPallet:color,
    conditions:[],
    conditionsDiv:[],
    checkDiv:el.check,
    cardDiv:el.card,
    selectItems:[],
    selectBox:el.select
  };
  //PLEASE CLEAN THIS UP LATER
  $(el.button).click(function(){
    addCondition(player);
  });
  setConditions(player);
  players.push(player);
}

function setConditions(player){
    for(var i=0; i< conditions.length; i++){
      var con = conditions[i];
      addConditionOption(player, con);
    }
}

function addConditionOption(player, condition){
  player.selectItems.push(condition);
  var opt = $(document.createElement('OPTION')).text(condition);
  $(player.selectBox).append(opt);
}

function addCondition(player){
  var condition = $(player.selectBox).val();
  player.conditions.push(condition);
  var button = $(document.createElement("BUTTON")).addClass("btn btn-danger del-check close").text("X");
  var div = createConditionBox(condition).append(button);
  player.conditionsDiv.push(div);
  player.checkDiv.append(div);
  button.click(function(){
    div.remove();
  });
}

function createConditionBox(condition){
  var box = $('<input type="checkbox">').addClass("form-check-input");
  var label = $(document.createElement("LABEL")).addClass("form-check-label text-dark").text(condition);
  return $('<div />').addClass("form-check big-checkbox").append(box).append(label);
}

function makeCard(player,name,color){
  var check = $('<div />');
  var header =   $('<div />').addClass("card-header").css('background', colorPallets[color][0]).text(name);
  var body = $('<div />').addClass("card-body").css('background', colorPallets[color][1]).append(check);
  var button = document.createElement("BUTTON");
  $(button).addClass("btn text-white").css('background', colorPallets[color][0]).text("Add").css('width','30%');
  var select = document.createElement("SELECT");
  $(select).addClass("form-control slim").css('width','70%').css('float','right');
  var footer = $('<div />').addClass("card-footer slim").append(button).append(select);
  var card = $('<div />').addClass("card playercard text-white mb-3").append(header).append(body).append(footer);
  $("#card-div").append(card)
  return {
    card:card,
    check:check,
    select:select,
    button:button
  };
}

function remove(array, element){
  var index = array.indexOf(element);
  if(index>-1){
    array.splice(index,1);
  }
}
