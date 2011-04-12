/*test("module without setup/teardown (default)", function() {
	expect(1);
	ok(true);
});*/

test("foreach implementation", 2, function() {
	// Touch every member of the included array
	var foo = [1,2,3],
		counter = 0;
	
	F.forEach(foo, function(value, index) {
		counter++;
	});
	equal(counter, foo.length, "F.forEach touches every member of the array");
	
	// Touch every member of the included object
	var foo = {
			"foobar": true,
			bar: true,
			"gasfka": true
		},
		counter = 0;
	
	F.forEach(foo, function(value, index) {
		counter++;
	});
	equal(counter, 3, "F.forEach touches every member of the object");
});

// Accepts and array or object
	// Accepts an apply function
	// Accepts the context
	
	// Return: the object iterated over