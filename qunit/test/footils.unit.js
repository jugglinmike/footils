/*test("module without setup/teardown (default)", function() {
	expect(1);
	ok(true);
});*/

test("foreach implementation", 8, function() {

	var test_array = [3,4,5],
		test_object = {
			"first": 'a',
			second: 'b',
			"third": 'c'
		},
		copy = undefined,
		counter = 0,
		othercontext = {
			counter: 0
		};
	
	// Touch every member of the target array
	F.forEach(test_array, function(value, index) {
		counter++;
	});
	equal(counter, test_array.length, "F.forEach touches every member of the target array");
	
	// Touch every member of the included object
	counter = 0;
	F.forEach(test_object, function(value, index) {
		counter++;
	});
	equal(counter, 3, "F.forEach touches every member of the target object");
	
	// Accepts and executes an apply function on the target array
	counter = 0;
	F.forEach(test_array, function(value, index) {
		counter += index + value;
	});
	equal(counter, 15, "F.forEach accepts and executes an apply function on the target array");
	
	// Accepts and executes an apply function on the target object
	counter = '';
	F.forEach(test_object, function(value, index) {
		counter += index + value;
	});
	equal(counter, 'firstasecondbthirdc', "F.forEach accepts and executes an apply function on the target object");
	
	// Uses the supplied context
	F.forEach(test_array, function(value, index) {
		this.counter += value;
	}, othercontext);
	equal(othercontext.counter, 12, "F.forEach executes its apply function in the given context on the target array");
	
	// Uses the supplied context
	othercontext.counter = '';
	F.forEach(test_object, function(value, index) {
		this.counter += index + value;
	}, othercontext);
	equal(othercontext.counter, 'firstasecondbthirdc', "F.forEach executes its apply function in the given context on the target object");
	
	// Returns the array it iterates over
	copy = F.forEach(test_array, function(value, index) {});
	equal(test_array, copy, "F.forEach returns the array it iterates over");
	
	// Returns the object it iterates over
	copy = F.forEach(test_object, function(value, index) {});
	equal(test_object, copy, "F.forEach returns the object it iterates over");
});