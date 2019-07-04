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
			"name": "protoncharge", "value": 1.6022E-19, "units": "C"
		},
		{
			"name": "electron-rest-mass", "value": 9.1094E-31, "units": "kg"
		},
		{
			"name": "proton-rest-mass", "value": 1.6726E-27, "units": "kg"
		},
		{
			"name": "atomic-mass-constant", "value": 1.6605E-27, "units": "kg"
		},
		{
			"name": "speed-light-vacuum", "value": 2.9979E8, "units": "m s^-1"
		},
		{
			"name": "planck", "value":6.6261E-34, "units": "J s"
		},
		{
			"name": "reduced-planck", "value": 1.0546E-34, "units": "J s"
		},
		{
			"name": "boltzmann", "value": 1.3807E-23, "units": "J K^-1"
		},
		{
			"name": "avogadro", "value": 3.0221E23, "units": "mol^-1"
		},
		{
			"name": "gas-constant", "value": 8.3145, "units": "J K^-1 mol^-1"
		},
		{	
			"name": "ice-point-temperature", "value": 273.15, "units": "K"
		},
		{
			"name": "faraday", "value": 9.6485E4, "units": "C mol^-1"
		},
		{
			"name": "vacuum-permeability", "value": 1.256637E-6, "units": "kg m s^-2 A-2"
		},
		{
			"name": "vacuum-permittivity", "value": 8.8542E-12, "units": "F m^-1"
		},
		{
			"name": "bohr-radius", "value": 52.9, "units": "pm"
		},
		{
			"name": "bohr-magneton", "value": 9.2740E-24, "units": "A m^-2"
		},
		{
			"name": "rydberg-constant", "value": 1.097373E5, "units": "cm^-1"
		},
		{
			"name": "hartree-energy", "value": 4.3598E-18, "units": "J"
		}
	]
});


