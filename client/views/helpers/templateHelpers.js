Template.registerHelper('isSelected', function(left,right) {
   return left == right ? 'selected' : '';
  });
Template.registerHelper('uppercase', function(text) {
  return text.toUpperCase();
});