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
    var note = $("#note").val()
    CalendarEvents.insert({date: new Date(date), note: note});
  }
});