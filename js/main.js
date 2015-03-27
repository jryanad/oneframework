$(document).ready(function() {
  $("#responsive-menu").mmenu({
    counters: true,
    header: {
    	add: true,
    	update: true,
    	title: "Main Menu"
    },
    offCanvas: {
      position: "right"
    },
    classes: "mm-custom",
    searchfield: true
  });
});