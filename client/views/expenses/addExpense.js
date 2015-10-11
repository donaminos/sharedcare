Template.addExpense.rendered = function() {
	Session.set("expense_photo", "");
}

Template.addExpense.events({
  'click .save': function(e) {
    e.preventDefault();
    var user = Meteor.user();
    var date = $("#date").val();
    var amount = parseFloat($("#amount").val());
    var note = $("#note").val();
    var child_name = $("#child_name").val();
    console.log(date, amount, note);
    Expenses.insert({
    	date: new Date(date),
    	group: user.profile.groupId[0],
    	note: note,
    	child_name: child_name,
    	amount: amount,
    	userId: Meteor.userId(),
    	createdAt: new Date(),
    	attachment: Session.get('expense_photo') ? Session.get('expense_photo') : "",
    });
    IonModal.close('addExpense');
  },
  'click .picture': function () {
      MeteorCameraUI.getPicture(CameraOptions, function (error, data) {
        Session.set("expense_photo", data);
      });
   }
});

Template.addExpense.helpers({
	photo: function () {
  		return Session.get("expense_photo");
	}
});