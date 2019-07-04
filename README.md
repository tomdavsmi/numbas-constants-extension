# numbas-constants-extension
A personal (and wholly unofficial) extension for the Numbas system which adds both physical constants and the ability to use them in questions. Currently holds three pieces of information for each constant; name, value and units. These are returned in a dictionary, and are accessed using the normal Javascript syntax.

    get_physical_constant(name)[key]
## Values Returned 
The keys stored for each constant are;
- `name`
    - A plain text name, usually a contraction of the formal name. Named constants are referred to byt their single name only (e.g. Avogadro constant -> `avogadro`). 
- `value`
    - The value printed on the Newcastle University physical data card. 
- `units`
    - SI units for the quantity
## Constants Included
So far the following constants are included. This serves to make this extension a carbon copy of the physical constants section of the physical chemistry data card given to students in all examinations.

- Charge of a proton
- Rest mass of an electron
- Rest mass of a proton
- Unified atomic mass constant
- Speed of light in a vacuum 
- Planck constant
- Reduced Planck constant
- Boltzmann constant
- Avogadro constant
- Molar gas constant
- Ice-point temperature of water
- Faraday constant
- Permeability of a vacuum
- Permittivity of a vacuum
- Bohr radius
- Bohr magneton
- Rydberg constant
- Hartree energy
