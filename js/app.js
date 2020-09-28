//declare original size
var size = 16;
var gridSize = 20;

//declare button function
$(document).ready(function() {
  makeGrid();
  $(".button").click(function() {
    $('div').removeClass("active");
    size = prompt("Try entering 10 - 64");
    if (size < 10) {
            size = 10;
        }
        else {
            if (size > 64) {
                size = 64;
            }
        }
    gridSize = 320/size;
    makeNew();
  });
});
//make the grid div
function makeGrid() {
  for (i=1;i<=size*size;i++) {
    $(".container").append("<div class='grid'></div>");
  };
  $(".container").width(size*gridSize + "px");
  $(".grid").width(gridSize + "px");
  $(".grid").height(gridSize + "px");
};
//declare makeNew function
function makeNew() {
  $(".container").empty();
  makeGrid();
};

//mouse coloring
$(document).on("mouseenter", ".grid", function() {
  $(this).addClass("active");
});