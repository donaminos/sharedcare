Template.addExpense.events({
  'click .save': function(e) {
    e.preventDefault();
    var date = $("#date").val()
    var amount = parseFloat($("#amount").val());
    var note = $("#note").val()
    console.log(date, amount, note);
    Expenses.insert({date: new Date(date), note: note, amount: amount, user: '1234', group: "abcd"});
    IonModal.close('addExpense');
  }
});