(function () {

	//	Create localized reference to global context
	var global = this,
		forEach = Array.prototype.forEach;
		
	// Set up our "util" module
		Footils = (function () {
		
			//	normally, we might do something important in here
			return {
			
				forEach: function( obj, fn, context ) {
					context = context || this;
					if ( forEach && obj.forEach ) {
						return obj.forEach( fn, context );
					}
					for ( var prop in obj ) {
						if ( obj.hasOwnProperty(prop) ) {
							fn.call( context, obj[prop], prop );
						}
					}
					return obj;
				}

			};


		})();

	global.Footils = global.F = Footils;
})();

