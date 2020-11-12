# ResourcedKC
 A KC Community Resource Application

/**What are the major entities for your objects? Who needs to access them?**/

 The Major entites for our objects are Location, Resources, DemographicInfo, Topics, and Client. What would actually need to access these parts? 

/**What assumptions are you making about your entities? Clarify them.**/

Location - End user requests for information regarding a specific, zip, city, or state.

Resources - Services they offer are relvant and that these resources are current.

DemographicInfo - That our pre-made list of demographic information is big enough to cross reference the information and pull matches.

Topics - Topics are generalized enough to cover multiple different demographics.

Client - The END USER is the inteded Case Manager / Socail Worker



/**What functionality should each entity have? + How do the entities need to be connected?**/

Location will be used throughout the whole process of the program from the input from the end user, to generating resources within the area specifed. This will also be cross referenced throughout the process of the program running. Resources will be structured in a manner that is easily readable for our program. DemographicInfo will be cross referenced with the Topics as well as the Client to match what Resources will be available for that specific user. Topics will be using the information from the DemographicInfo to refine what services could potentially be used. From there the Topics would add another key factor to generating the final list of relevant resources. Topics could be things like "Battered Women, Homeless Shelters, Food Pantries" that the DemographicInfo will be ablke to specifically show services for "a female - Battered Women Shelter & Food Pantries" where for "a male Homeless Shelter && Food Pantries". Client would be where we set up the generic "client" this is where we get things like what specific information to do what was previous explained at the end of Topics.



Can you identify where you use Abstraction, Polymorphism, Inheritance, and Encapsulation in your designs?
How will you apply KISS and DRY to your design?