const menuButton = document.getElementById('menu-button');

document.addEventListener('DOMContentLoaded', function() {    
    var elem = document.querySelector('.sidenav');
    var options = {};
    var instances = M.Sidenav.init(elem,options);
    const sideNav = M.Sidenav.getInstance(elem);

    menuButton.addEventListener('click',()=>{
        sideNav.open();
    });

  });

//   $(".button-collapse").sideNav();

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

  // Or with jQuery
  