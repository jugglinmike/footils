/*test("module without setup/teardown (default)", function() {
	expect(1);
	ok(true);
});*/

test("foreach implementation", 5, function() {
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
	
	// Accepts an apply function
	var foo = [1,2,3],
		counter = 0;
	F.forEach(foo, function(value, index) {
		counter += value;
	});
	equal(counter, 6, "F.forEach accepts and executes an apply function");
	
	// Uses the supplied context
	var othercontext = { counter: 0 };
	F.forEach(foo, function(value, index) {
		this.counter += value;
	}, othercontext);
	equal(othercontext.counter, 6, "F.forEach executes the supplied apply function in the given context");
	
	var foo2;
	foo2 = F.forEach(foo, function(value, index) {});
	equal(foo, foo2, "F.forEach returns the object it iterates over");
});

// Accepts and array or object
	// Accepts an apply function
	// Accepts the context
	
	// Return: the object iterated over