document.addEventListener("click", (e) => {
  console.log("You have clicked anywhere in the document");
});

//firstName
const grabFirstNameInput = document.getElementById("FirstNameInput");
console.log(grabFirstNameInput);

//lastName
const grabLastNameInput = document.getElementById("LastNameInput");
console.log(grabLastNameInput);

//Date
const grabdateInput = document.getElementById("grabdateInput");
console.log(grabdateInput);

const grabsubmitButton = document.getElementById("SubmitButton");
console.log(grabsubmitButton);

grabsubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("This is the LIKE button");
  console.log(grabFirstNameInput.value);
  console.log(grabLastNameInput.value);
  console.log(grabdateInput.value);

  const paragraphElement = document.querySelector(".paragraph");
  console.log(paragraphElement);

  paragraphElement.textContent = `${grabFirstNameInput.value} ${grabLastNameInput.value} your birthday is ${grabdateInput}`;

  //when we click the like button the paragraph will appear.
  //Will Brown, your birthday 01/03/2024. Thank you for liking!

  console.log(
    `${grabFirstNameInput.value} ${grabLastNameInput.value} your birthday is ${grabdateInput}. Thank You for liking!`
  );

  //clear values
  grabFirstNameInput.value = "";
  grabLastNameInput.value = "";
  grabdateInput.value = "";
});

/// object ///
const firstName = "will";
console.log(firstName);

/// object literal ///
const person = {
  firstName: "Will", // key-value pair
  lastName: "Brown",
  birthday: "1996-20-05",
  greeting: function () {
    return `Hello World, My name is ${this.firstName} ${this.lastName}`;
  },
};

/// dot accesor ///
console.log(person);
console.log(console);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.birthday);
console.log(person.greeting());

/// methods: function inside an object ///

/// constructor function ///
// must be capitalized
function Person(firstName, lastName, birthday) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = birthday;
}

const newPerson = new Person("Will", "Brown", "1996-20-05");
console.log(newPerson);

const mike = new Person("Mike", "Johnson", "1985-05-05");
console.log(mike);

///// grab the form element //////
const grabForm = document.querySelector("form");
console.log(grabForm);

const peopleArrayOfObjects = [];
console.log(peopleArrayOfObjects);

grabForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("message");
  const formData = new FormData(grabForm);
  console.log(formData);

  const firstName = formData.get("firstName");
  console.log(firstName);

  const lastName = formData.get("lastName");
  console.log(lastName);

  const birthday = formData.get("birthday");
  console.log(birthday);

  const newPerson = new Person(firstName, lastName, birthday);
  console.log(newPerson);

  peopleArrayOfObjects.push(newPerson);
  console.log(peopleArrayOfObjects);
});
