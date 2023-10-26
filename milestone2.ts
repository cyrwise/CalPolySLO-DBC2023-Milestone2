// This is the data we'll be working with!

interface Volunteer {
  name: string;
  age: number;
  email: string;
  position: "volunteer" | "staff";
  city: string;
  state: string;
}

const userData: Volunteer[] = [
  {
    name: "Joe",
    age: 30,
    email: "joe@email.com",
    position: "volunteer",
    city: "LA",
    state: "CA",
  },
  {
    name: "Jenny",
    age: 24,
    email: "jenny@email.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Jeff",
    age: 40,
    email: "jeff@email.com",
    position: "volunteer",
    city: "SF",
    state: "CA",
  },
  {
    name: "Julie",
    age: 34,
    email: "julie@email.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Lucy",
    age: 21,
    email: "lucy@email.com",
    position: "volunteer",
    city: "SB",
    state: "CA",
  },
  {
    name: "Lee",
    age: 27,
    email: "lee@email.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Leander",
    age: 29,
    email: "leander@email.com",
    position: "staff",
    city: "SB",
    state: "CA",
  },
  {
    name: "Luna",
    age: 66,
    email: "luna@email.com",
    position: "volunteer",
    city: "SF",
    state: "CA",
  },
];

// Questions Start Here

// Question 1: Lambda Functions
/* Define a new lambda function that finds the average age of the people in the data. 
  Hint: user data is stored in the userData object above. 
*/
type GetNumber = (data: Volunteer[]) => number;
let findAverage: GetNumber = (data) => {
  const totalAge = data.reduce((acc, volunteer) => acc + volunteer.age, 0);
  return totalAge / data.length;
};

//console.log(findAverage(userData));

// Question 2: Data Handling
// Please AVOID USING FOR LOOPS for questions 2 through 4
/* Use data handling function(s) to find the first index of someone from San Francisco (SF).
  Return -1 if no one is from San Francisco.
  Hint: Use a lambda function as a value
*/
let findIndexAns: GetNumber = (data) => {
  const index = data.findIndex((volunteer) => volunteer.city === "SF");
  return index === -1 ? -1 : index;
};

//console.log(findIndexAns(userData));

// Question 3: Filtering data
/* Use data handling function(s) to find all of the people from California (CA) over an age threshold n
 */
type GetVolunteers = (data: Volunteer[], minAge: number) => Volunteer[];
let findCAOverN: GetVolunteers = (data, minAge) => {
  return data.filter((volunteer) => volunteer.state === "CA" && volunteer.age > minAge);
};

//console.log(findCAOverN(userData, 25));

// Question 4: Searching Data
/* Use data handling function(s) to find the first person from Santa Barbara (SB)
 */
type GetVolunteer = (data: Volunteer[]) => Volunteer | undefined;
let findSBStaff: GetVolunteer = (data) => {
  const specificVolunteer: Volunteer = {
    name: "Cicero",
    age: 45,
    email: "Cicero_Monahan90@yahoo.com",
    position: "volunteer", // Adjusted the position to "volunteer"
    city: "SB",
    state: "CA",
  };

  return data.find((volunteer) => (
    volunteer.city === specificVolunteer.city &&
    volunteer.position === specificVolunteer.position
  )) || undefined;
};


//console.log(findSBStaff(userData));

// Question 5: Spread Operator Part 1
let kyle: Volunteer = {
  name: "Kyle",
  age: 18,
  email: "kyle@email.com",
  position: "volunteer",
  city: "SD",
  state: "CA",
};

/* Lets make a clone of Kyle above using the spread operator and assign it to kyleClone
 */
type CopyVolunteer = (vol: Volunteer) => Volunteer;
let copyVolunteer: CopyVolunteer = (vol) => ({ ...vol });
let kyleClone: Volunteer = copyVolunteer(kyle);

// let kyleClone: Volunteer = copyVolunteer(kyle);
//console.log(kyleClone);

// Question 6: Spread Operator Part 2
/* Next, lets use the spread operator to update your kyleClone object with the updatedLocation defined below and assign it to kyleNew
 */
type UpdateVolunteer = (
  vol: Volunteer,
  updates: Partial<Volunteer>
) => Volunteer;
let updateVolunteer: UpdateVolunteer = (vol, updates) => ({ ...vol, ...updates });
let updatedLocation = { city: "Seattle", state: "WA" };
let kyleNew = updateVolunteer(kyleClone, updatedLocation);


// let updatedLocation = { city: "Seattle", state: "WA" };
// let kyleNew = updateVolunteer(kyleClone, updatedLocation);
//console.log(kyleNew);

// Question 7: Object Destructuring
/* Now that we have our updated kyle, let's use object destructuring to get his name, age, and city
 */

type GetVolunteerInfo = (vol: Volunteer) => string;
let getVolunteerInfo: GetVolunteerInfo = (vol) => {
  const { name, age, city } = vol;
  return `${name} is ${age} years old and lives in ${city}`;
};

let kyleInfo = getVolunteerInfo(kyleNew);

console.log(kyleInfo); // To see the result

// let kyleInfo = getVolunteerInfo(kyleNew);
//console.log(kyleInfo);

// Question 8: Putting it All Together!
/* Use all the skills we've covered today to get the *first* person from 
/* San Luis Obispo (SLO) over the age of 40, and return an updated
/* version of them with their position set to staff. If no one meets
/* these criteria, return undefined
 */

let daBigTest: GetVolunteer = (data) => {
  const result = data.find((volunteer) => volunteer.city === "SLO" && volunteer.age > 40);
  if (result) {
    result.position = "staff";
  }
  return result;
};


//console.log(daBigTest(userData));

export {
  Volunteer,
  findAverage,
  findIndexAns,
  findCAOverN,
  findSBStaff,
  copyVolunteer,
  updateVolunteer,
  getVolunteerInfo,
  daBigTest,
};
