Template.homeButton.events({
  'click .home-button': function(e) {
    e.preventDefault();
    $('[data-nav-container]').addClass('nav-view-direction-back');
    $('[data-navbar-container]').addClass('nav-bar-direction-back');
    Router.go('home');
  }
})  