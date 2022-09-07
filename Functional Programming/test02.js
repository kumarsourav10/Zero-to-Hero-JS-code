
// Understand Functional Programming Terminology


// Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively. Note that the getTea function has been modified so it now takes a function as the first argument.

// Note: The data (the number of cups of tea) is supplied as the last argument. We'll discuss this more in later lessons.


//                                                                                      Tests
// Passed:The tea4GreenTeamFCC variable should hold 27 cups of green tea for the team.
// Passed:The tea4GreenTeamFCC variable should hold cups of green tea.
// Passed:The tea4BlackTeamFCC variable should hold 13 cups of black tea.
// Passed:The tea4BlackTeamFCC variable should hold cups of black tea.

//This is the code 

/*

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
/*

const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];
  
    for(let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
  };
  
  // Only change code below this line
  const tea4GreenTeamFCC = null;
  const tea4BlackTeamFCC = null;
  // Only change code above this line
  
  console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
  );

  */

// This is the code ans

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);;
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);