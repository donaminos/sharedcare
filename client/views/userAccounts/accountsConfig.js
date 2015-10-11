AccountsTemplates.configure({
    // Behavior
    confirmPassword: false,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/home',
    redirectTimeout: 4000,

    // Hooks
    // onLogoutHook: myLogoutFunc,
     onSubmitHook: submitFunc,
    // preSignUpHook: myPreSubmitFunc,

    // Texts
    texts: {
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },
});

AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    displayName: "Full Name",
    required: true
});

// AccountsTemplates.addField({
//     _id: "country",
//     type: "select",
//     displayName: "Choose Country",
//     select: getCountries()
//     // select: function () {
//     // },
// });

function getCountries () {
	var options = [];
	var countries = Countries.find().fetch();
	console.log(countries);
	_.each(countries, function (country) {
		console.log(conntry.name);
		options.push({text: country.name, value: country.name});
	});
	return options;
}

function submitFunc(error, state){
  if (!error) {
    if (state === "signIn") {
      // Successfully logged in
      // ...
      var user = Meteor.user();
      Meteor.call('checkInvitation', user.emails[0].address, function (err, exists) {
        if (exists.length > 0) {
          Meteor.users.update({_id: Meteor.userId()}, {$push:{'profile.groupId': exists[0]._id}});
          Router.go('/acceptInvitation');
        } else {
          Meteor.call('checkChildrenExists', user.profile.groupId[0], function (err, children) {
            console.log(children, {groupId: user.profile.groupId[0]});
            if (children.length > 0)
              Router.go('/');
            else
              Router.go('/children');
          })
        }
      });
    }
    if (state === "signUp") {
      console.log(Meteor.userId());
      var user = Meteor.user();
      console.log(user);
      Meteor.call('checkInvitation', user.emails[0].address, function (err, exists) {
        console.log('exists', {'members.email': user.emails[0].address, 'members.invitationStatus': 'invited'});
        console.log(err, exists);
        if (exists.length > 0) {
          Meteor.users.update({_id: Meteor.userId()}, {$push:{'profile.groupId': exists[0]._id}});
          Router.go('/acceptInvitation');
        } else {
          var members = [{email: user.emails[0].address, name: user.profile.name, relationship: 'admin', invitationStatus: 'created'}];
          var groupId = Group.insert({groupOwnerId: Meteor.userId(), members: members});
          Meteor.users.update({_id: Meteor.userId()}, {$push:{'profile.groupId': groupId}});
          var children = Children.find({groupId: groupId}).count();
          if (children > 0)
            Router.go('/');
          else
            Router.go('/children');

        }
      });
    }
  }
};