Meteor.startup(function() {
	// read environment variables from Meteor.settings
	if(Meteor.settings && Meteor.settings.env && _.isObject(Meteor.settings.env)) {
		for(var variableName in Meteor.settings.env) {
			process.env[variableName] = Meteor.settings.env[variableName];
		}
	}
	console.log('len', Countries.find().count());
    if (Countries.find().count() === 0) {
        console.log("Importing private/countries.json to db")

        var data = JSON.parse(Assets.getText("countries.json"));

        data.forEach(function (item, index, array) {
            Countries.insert(item);
        })
    }
});