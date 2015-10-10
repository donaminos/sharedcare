Template.addNewEvent.helpers({
  eventDate: function() {
    var selectedDate = Session.get('selectedDate');
    return moment(selectedDate).format('YYYY-MM-DD');
  }
});
Template.addNewEvent.events({
  'click .save': function(e) {
    e.preventDefault();
    var date = $("#date").val()
    var time = $("#time").val()
    var note = $("#note").val()
    console.log(date, time);
    CalendarEvents.insert({date: new Date(date + ' ' + time), note: note, group: "abcd"});
    IonModal.close('addNewEvent');
  }
});