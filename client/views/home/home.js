Template.home.helpers({
    menulist: function() {
        return [{
            icon: 'fa-align-left',
            path: 'newsfeed',
            label: 'Newsfeed'
        }, {
            icon: 'fa-calendar',
            path: 'calendar',
            label: 'Calendar'
/*        }, {
            icon: 'fa-heart-o',
            path: 'carearrangements',
            label: 'Care Arrangements'*/
        }, {
            icon: 'fa-dollar',
            path: 'expenses',
            label: 'Expense Recorder'
        }, {
            icon: 'fa-users',
            path: 'managegroup',
            label: 'Group Connections & Information'
        }]
    }
});

Template.home.rendered = function () {
    var user = Meteor.user();
    console.log(user.profile);
    if (!user.profile.avatarUrl)
        IonModal.open('profilePic');
}