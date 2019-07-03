Numbas.addExtension('physicalconstants',['math','jme'],function(physicalconstants) {
	var jme = Numbas.jme
	var funcObj = jme.funcObj;
	var TString = jme.types.TString;
	var TNum = jme.types.TNum;
	var TDict = jme.types.TDict;
	function addFunction(name,deps,outtype,fn,options) {
        	var a = physicalconstants.scope.addFunction(new funcObj(name,deps,outtype,fn,options));
	}
	physicalconstants.scope.setVariable('physical_constants',Numbas.jme.wrapValue(physical_constants));	
	addFunction('get_physical_constant',[TString],TDict,function(name) {
        		var data = physical_constants.find(function(d) {
            			return (d.name==name);
       			})
        		return jme.wrapValue(data);
   		},{unwrapValues: true});
	var physical_constants = [
		{
			"name":"faraday", 
			"value": 96485.33212, 	
			"units":"C*mol^-1"
		},
		{
			"name":"avogadro", 
			"value": 6.02214076E23,
			"units": "mol^-1"
		},
		{	
			"name":"boltzmann", 
			"value": 1.380649E-23, 
			"units":"J K^-1"		
		},
		{
			"name":"molargas", 
			"value":8.314462, 
			"units": "J mol^-1 K^-1"
		},
		{
			"name":"planck", 
			"value":6.62607015E-34, 
			"units":"J Hz^-1"
		},
		{		
			"name":"reducedplanck",
			"value":1.054571817E-34,
			"units":"J s"
		{
			"name":"speedoflight", 
			"value":299792458, 
			"units":"m s^-1"
		},
		{
			"name":"elementarycharge",
			"value":1.602176634E-19,
			"units":"C"
		},
		{
			"name":"vacuumelectricpermittivity",
			"value":8.8541878128(13)E-12,
			"units":"F m^-1"
		}
	];
});


