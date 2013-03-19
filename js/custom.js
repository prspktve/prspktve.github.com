$(document).ready(function() {

  $( ".prspktve-tabs" ).tabs();

  // fix the classes
  $( ".tabs-bottom .ui-tabs-nav, .tabs-bottom .ui-tabs-nav > *" )
    .removeClass( "ui-corner-all ui-corner-top" )
    .addClass( "ui-corner-bottom" );

  // move the nav to the bottom
  $( ".tabs-bottom .ui-tabs-nav" ).appendTo( ".tabs-bottom" );

  // Expander + und -
  $('.list-element-synopse').expander({
    expandText: '<span>+</span>',
    userCollapseText: '<span>–</span>'
  });
});


