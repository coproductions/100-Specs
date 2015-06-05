/* Step 1
 *
 * Declare a variable named "unicorn"
 * then set it's value to null;
 *
 */

var unicorn;
unicorn = null;
var videogame_system;
videogame_system = 'Atari';


var sahara_animal = 'The Addax';


var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus' , 'Neptune'];


var galilean_moons = ['Io', 'Europa', 'Ganymede', 'Callisto']


var golden_ratio = 1.61803398874;


var earths_water_composition = 0.71;

var club_name = 'Fight Club';


var gender = {
  female : 'female',
  male : 'male',
  unknown : undefined
}


var princess_leia = {
  name : 'Leia Organa',
  money : 890,
  age : 20,
  gender : gender.female
}



var domains = {
  'ycombinator.com' : '198.41.190.47',
  'laughingsquid.com' : '162.159.247.97',
  'slumlordhosting.com' : "198.61.179.126",
  'jsonformatter.curiousconcept.com' : "104.28.5.70"
}


var browsers = {
  Chromium : 'google.com',
  Safari : 'apple.com',
  Opera : 'opera.com',
  Firefox : 'mozilla.org',
  Sleipnir : 'fenrir-inc.com',
  Konqueror : 'konqueror.org'
}



var rainbow = {
  colors : {
    red : '#F0280A',
    orange : '#FF8800',
    yellow : '#FFDD00',
    green : '#51AB0C',
    blue : '#1593ED',
    indigo : '#5215ED',
    violet : '#A915ED'
  },
  isDouble : true
};



var linuxFlavors = ['Gentoo', 'Fedora', 'Debian', 'Slackware', 'Red Hat', 'Bieber Linux'];



var DNA = ['nucleatides', 'guanine', 'adenine', 'thymine', 'cytosine'];

var laptopCosts = {
  MacBook : 1500,
  Alienware : 2500,
  HP : 499,
  Surface : 320
};

var livingOrganismClassification = ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species'];


var scmList = ['git', 'svn', 'mercurial', 'bazaar', 'cvs'];



var beers = {
  IPA : 'Ale',
  Lager : 'Strong',
  Heffeweisen : 'German',
  Stout : ['Thick', 'Dark'],
  Porter : 'Bitter',
  Ale : ['Light', 'Golden']
};



var sahara_river = function(){
  return 'Nile River';};



var addNumbers = function(a,b){
  return a+b;};

var installLinux = function(string){
  if(linuxFlavors.indexOf(string) >= 0){
    return true;
  } else return false;
}

var drink = function(beer){
  if(beers.hasOwnProperty(beer)){
    if(Array.isArray(beers[beer])){
      return 'This ' + beer +' is '+ beers[beer][0]+ ' and '+beers[beer][1]+'.';
    } else return 'This ' + beer +' is '+ beers[beer]+'.';
  } else return false;
};

var browseURL = function(value){
  if(!browsers.hasOwnProperty(value)){
    return false;
  } else {
    return browsers[value];
  }
}

var listLivingOrgClass = function(){
  var result = '<ul>';
  for (var i = 0; i < livingOrganismClassification.length; i++) {
    result += '<li>'+livingOrganismClassification[i]+'</li>';
  };
  return result+'</ul>';
}

var favoritePlanet = function(planet){
  if(planets.indexOf(planet) < 0){
    return planet+' is not a planet!';
  } else {
    var taskComplete = false;
    while(!taskComplete){
      var randomNumber = Math.floor(Math.random()*8);
      if(randomNumber !== planets.indexOf(planet)){
        taskComplete = true;
        return "I'm from "+planet+', but I wish I could go to '+ planets[randomNumber]+'.'
      }
    }
  }
}
var Person = function(name, money, age , gender){
  this.name = name;
  this.money = money;
  this.age = age;
  this.gender = gender;
}
Person.prototype.spendMoney = function(amount){
    this.money -= amount;
}
Person.prototype.earnMoney = function(amount){
    this.money += amount;
}


/* Step 27
 *
 * Define a class named "Person" that has properties for
 * "name," "money," "age," and "gender." Pass values for
 * all these properies in the constructor. Create methods
 * named "spendMoney" and "earnMoney" that each take an
 * amount of money and add or subtract them to this
 * person's money.
 *
 * class
 *   Person
 * properties
 *   @param {String} name
 *   @param {String} money
 *   @param {String} age
 *   @param {String} gender
 *
 * methods
 *   spendMoney
 *   earnMoney
 *
 */


/* Step 28
 *
 * Define a function named "purchaseLaptop" that takes
 * a laptop as a parameter. If the laptop is valid as
 * defined in "laptopCosts" then return the cost as a string. Otherwise,
 * return -1
 *
 * @param {String}
 * @return {String}
 *
 */


/* Step 29
 *
 * Define a function named "canTalkAbout" that takes
 * a club as a parameter. Return true if you can
 * talk about the club and false if the club passed
 * in has the same value as "club_name"
 *
 * @param {String}
 * @return {Bool}
 *
 */


/* Step 30
 *
 * Define a class named "Pen" with a property for
 * color and a class method named "write" that takes
 * a message string as a parameter and returns the
 * string back with the pen's color added to the
 * beginning of the string
 *
 * example: "{color}: {Message passed in}"
 *
 * class
 *   Pen
 *
 * properties
 *   @param {String} color
 *
 * methods
 *   write
 *
 */


/* Step 31
 *
 * Define a class named "Garden" with a property for
 * the number of plants and whether it was recently
 * watered.
 *
 * Define a class method named "water" which
 * sets the recently watered property to true
 *
 * Defined a class method named "grow" which adds a plant to
 * the garden if it was recently watered and exhausts the water.
 * If this method is called and the 'isWatered' property is
 * false, it should return false;
 *
 * class
 *   Garden
 *
 * properties
 *   @param {Number} plantsTotal
 *   @property {Bool:Not Passed as Argument - Default Value FALSE} isWatered
 *
 * methods
 *   water
 *   grow
 *
 */


/* Step 32
 *
 * Define a class named "SolarSystem" with a property
 * "planets" that is initialized as an empty array. Add
 * a method "addPlanet" that adds a planet to the list
 * and a method "removePlanet" that removes a planet.
 *
 * class
 *   SolarSystem
 * properties
 *   planets
 * methods
 *   addPlanet
 *   removePlanet
 *
 */


/* Step 33
 *
 * Define a class named "PrincessLeia" that is a subclass of "Person"
 * with properties "name," "money," "age," "gender," and
 * "isInTrouble"(initialized as null)
 *
 * Add a method "shootsGun" that returns a message
 * "Leia shoots her gun wildly"
 * and sets the isInTrouble property to FALSE
 *
 * Add a method "getsInTrouble" that returns a message
 * "Help me Obi-wan Kenobi, you're my only hope"
 * and sets the property 'isInTroube' to TRUE
 *
 * Add a method "marries" that takes a prospective
 * love interest and returns true for "Han Solo" or false for anyone
 * else.
 *
 * In the 'marries' method - Add a message of disapproval for "Luke Skywalker"
 * "Gross!"
 *
 *
 * class
 *   PrincessLeia
 * properties
 *   isInTrouble
 * methods
 *   shootsGun
 *   getsInTrouble
 *   marries
 *
 */


/* Step 34
 *
 * Define a class named "Stapler" with properties "color"
 * and "maxPapers". Add a method "staplePapers" that accepts a
 * number of papers as a parameter and returns true if the
 * papers are less than or equal to the papers and false
 * if there are too many papers to staple.
 *
 * class
 *   Stapler
 * properties
 *   color
 *   maxPapers
 * methods
 *   staplePapers
 *
 */


/* Step 35
 *
 * Define a class named "Scientist" that extends the Person Class that takes
 * name, money, age, and gender as well as new instance properties
 * "disciplines" and "discoveries" which initializes as empty arrays.
 *
 * Add a method named 'addDiscipline' that takes a string as an argument and
 * adds it to the discipline property. Return the value of the discipline property
 *
 * Add a method named 'checkDisciple' that takes a string as an argument and
 * checks if the argument can be found in the discipline property. Return false
 * if it is not found otherwise return back true.
 *
 * Add a method named 'addDiscovery' that takes a string as an argument and
 * adds it to the discoveries property. Return back the contents of the discoveries
 * property as a String made up of all the elements found see below
 *
 * examples:
 * ["Gravity"] will be returned as:
 * "I discovered Gravity."
 *
 * ["Gravity", "Theory of Relativity"] will be returned as:
 * "I discovered Gravity and Theory of Relativity."
 *
 * ["Gravity", "Theory of Relativity", "Jesus Christ"] will be returned as:
 *       "I discovered Gravity, Theory of Relativity, and Jesus Christ."
 *
 * class
 *   Scientist
 * properties
 *   disciplines
 *   discoveries
 * methods
 *   addDiscipline
 *   checkDiscipline
 *   addDiscovery
 *
 */


/* Step 36
 *
 * Define a class named "BankAccount" that has properties
 * "balance" and "owner." Add a method "withdraw" that allows
 * the owner to remove money from the account and add it to
 * their Person object, "deposit" that lets a Person spend
 * money to increase their balance, and "rob" that allows
 * any Person object to take money from the bank account.
 *
 * class
 *   BankAccount
 * properties
 *   balance
 *   owner
 * methods
 *   withdraw
 *   deposit
 *   rob
 *
 */


/* Step 37
 *
 * WIP
 * PacMan
 *  x
 *  y
 *  north()
 *  south()
 *  east()
 *  west()
 *  getPosition()
 *
 *
 */


/* Step 38
 *
 * WIP
 * beer
 *  temperature 50
 *  volume 12
 *  dispense()
 *  getVolume()
 *
 */


/* Step 39
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 40
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 41
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 42
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 43
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 44
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 45
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 46
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 47
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 48
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 49
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/**
 * Define a Classes
 */

/**
 * Step 50
 *
 * Animal class
 * @param {string} species The animal species
 * @param {string} gender  male or female
 */


/**
 * Step 51
 *
 * Vehicle class
 * @param {string} make The vehicle's make
 * @param {string} model The vehicle's model
 */


/**
 * Step 52
 *
 * Shape class
 * @param {number} sides The number of sides, should be a number
 * greater or equal to 3, if the number is less than 3 then set the
 * value of the sides property to null.
 *
 */


/**
 * Step 53
 *
 * Box class
 * @param {anything} contents The contents of the box
 * @param {boolean} isOpen     Whether the box is opened or closed
 */


/**
 * Step 54
 *
 * Door class
 * @param {boolean} isOpen Whether the door is opened or closed
 */


/**
 * Step 55
 *
 * Shoe class
 * @param {number} size  The shoe size
 * @param {string} color The shoe color
 */


/**
 * Step 56
 *
 * House class
 * @param {number} stories How many stories tall the house is
 */


/**
 * Step 57
 *
 * Lightbulb class
 * @param {boolean} isOn Whether the light is on or off
 */


/**
 * Step 58
 *
 * Cookie class
 * @param {string} flavor The cookie's flavor
 */


/**
 * Step 59
 *
 * Meal class
 * @param {Array} foods All the foods in the meal
 */


/**
 * Create a new instance of the Classes you defined above, below!
 * Steps 60-80 (each variable is a 'step')
 */


// Create 2 different species of animals
var george;
var nemo;

// Create 2 different vehicles
var civic;
var forte;

// Create 2 shapes with different numbers of sides
var square;
var hexagon;

// Create 2 boxes
var catBox;
var christmasPresent;

// Create 2 doors
var automaticDoor;
var bankVault;

// Create 2 shoes
var rubySlippers;
var dressShoes;

// Create 2 houses
var singleStory;
var twoStory;

// Create 2 lightbulbs
var incandescent;
var halogen;

// Create 2 cookies of different flavors
var chocolateChip;
var gingerbread;

// Create 2 different meals
var breakfast;
var dinner;


 /* Steps 81 to 90
 *
 * Create methods
 *
 */


/* Step 81
 *
 * Declare an Animal method called isWarmBlooded that returns
 * a true if the animal species is warm-blooded, false if cold-blooded.
 * Three species are provided below.  If the species is anything else,
 * return the string indicated below.
 *
 *            this.species =>
 *                "Fish"   => false
 *                "Monkey" => true
 *                "Bird"   => true
 *       Any other species => "Could not determine if warm-blooded"
 *
 */


/* Step 82
 *
 * Declare a Vehicle method called drive that accepts a parameter
 * called streetName.  If streetName is a string and is not empty,
 * return "Driving on {streetName}", else return "Driving forward".
 *
 */


 /* Step 83
 *
 * Declare a Shape method called getType that returns a string
 * containing the type of shape based on the sides property.
 *
 *       this.sides =>
 *                3 => "triangle"
 *                4 => "quadrilateral"
 *                5 => "pentagon"
 *                6 => "hexagon"
 *                7 => "heptagon"
 *                8 => "octagon"
 *                9 => "nonagon"
 *               10 => "decagon"
 * Any other number => "Could not determine type"
 *
 */


/* Step 84
 *
 * Declare a Box method called openBox that opens the box
 * if it is already closed.
 * But it should not close the box if it is already open.
 * Return true if openBox opens the box, false otherwise.
 *
 */


 /* Step 85
 *
 * Declare a Door method called openClose that opens the door
 * if it is already closed, or closes the door if it is already open.
 * Return true if openClose opens the door, false if openClose closes the door.
 *
 */


/* Step 86
 *
 * Declare a Shoe method called findShoes that returns a string containing
 * the color and size of the shoe ("Found red shoes of size 7").
 *
 */


 /* Step 87
 *
 * Declare a House method called isATallStory that accepts a
 * param number called storiesTooTall.
 * If the house's stories property is greater than or equal to
 * storiesTooTall, return true, else return false.
 *
 */


 /* Step 88
 *
 * Declare a Lightbulb method called flipSwitch that accepts a
 * param string called on.  If on is the string "on", set
 * the isOn property to true.  If on is any other string,
 * set isOn to false.
 * Return true if isOn is true, false otherwise.
 *
 */


 /* Step 89
 *
 * Declare a Cookie method called swipedByCookieMonster that accepts
 * a param called dayOfTheWeek.  If the cookie's flavor is "chocolate"
 * and the dayOfTheWeek is "Monday", return true.  Else return false.
 *
 */


 /* Step 90
 *
 * Declare a Meal method called containsJunkFood that returns true if
 * at least one of the items in the foods array is junk food, false otherwise.
 * To check if the food item is junk food, create an array called
 * junkFood containing the following strings: "chips", "soda", "ice cream",
 * "popcorn", and "candy".
 *
 * Use Array's indexOf method to check if the foods array contains junk food.
 * Note that if an element is not found in the array, indexOf returns -1.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 */


 /* Steps 91 to 100
 *
 * Call methods
 *
 */


/* Step 91
 *
 * Call the isWarmBlooded method on three Animal instances
 * and assign the values to each variable below.
 *
 */
var warmBloodedAnimal;
var coldBloodedAnimal;
var notWarmOrColdAnimal;


/* Step 92
 *
 * Call the drive method on two Vehicle instances
 * and assign the values to each variable below.
 *
 */
var streetDriving;
var forwardDriving;


 /* Step 93
 *
 * Call the getType method on two Shape instances
 * and assign the values to each variable below.
 *
 */
var decagon;
var polygon;


/* Step 94
 *
 * Call the openBox method on two Box instances
 * and assign the values to each variable below.
 *
 */
var openAClosedBox;
var closeAnOpenBox;


 /* Step 95
 *
 * Call the openClose method on two Door instances
 * and assign the values to each variable below.
 *
 */
var openAClosedDoor;
var closeAnOpenDoor;


/* Step 96
 *
 * Call the findShoes method on two Shoe instances
 * and assign the values to each variable below.
 *
 */
var redShoesSize7;
var blackShoesSize10;


 /* Step 97
 *
 * Call the isATallStory method on two House instances
 * and assign the values to each variable below.
 *
 */
var farTooTallAStory;
var shortStory;


 /* Step 98
 *
 * Call the switch method on two Lightbulb instances
 * and assign the values to each variable below.
 *
 */
var kitchenLightsOn;
var porchLightsOff;


 /* Step 99
 *
 * Call the swipedByCookieMonster method on two Cookie instances
 * and assign the values to each variable below.
 *
 */
var cookieMonsterPwns;
var cookieMonsterBlocked;


 /* Step 100
 *
 * Call the containsJunkFood method on two Meal instances
 * and assign the values to each variable below.
 *
 */
var badForYou;
var goodForYou;
