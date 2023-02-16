/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

function getLength(jumpings: number[]): number {

  return jumpings.reduce(
    (jumpDistanceSoFar, currentJump) => { 
    return jumpDistanceSoFar + currentJump
    });

}
/*
  2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
  */

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean
  ) {}
}

function getStudentStatus(student: Student): string {

  if (student.name == "Sebastina" && student.handedInOnTime && student.passed) {
    return "VG";
  } else {
    return "IG";
  }
}

/*
  3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
  Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
  */

class Temp {
  constructor(public city: string, public toDayDate: Date, public celsius: number) {}
}

function averageWeeklyTemperature(temperature: Temp[]) {
  let averageWeeklyTemperature = 0;
  const MILLISECONDS_IN_A_WEEK =  604800000;
  const DAY_OF_A_WEEK = 7;

  for (let i = 0; i < temperature.length; i++) {
    if (temperature[i].city === "Stockholm") {
      if (temperature[i].toDayDate.getTime() > Date.now() - MILLISECONDS_IN_A_WEEK) {
        averageWeeklyTemperature += temperature[i].celsius;
      }
    }
  }

  return averageWeeklyTemperature / DAY_OF_A_WEEK ;
}

/*
  4. Följande funktion kommer att presentera ett objekt i dom:en. 
  Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
  */

  interface showProduct{
    name: string,
    price: number,
    amount: number,
    description: string,
    image: string,
    parent: HTMLElement
  }
  
  function createProduct (showProduct:showProduct, parent:HTMLDivElement) {
    const container = document.createElement("div");
    createName(showProduct, container);
    createPrice(showProduct, container);
    createImg(showProduct, container);

    parent.appendChild(container);
  }
  
  
  function createName(showProduct:showProduct, container: HTMLDivElement) {
    const titletag = document.createElement("h4");
    titletag.innerHTML = showProduct.name;
    container.appendChild(titletag);
  
    return titletag;
  }
  
  function createPrice (showProduct:showProduct, container: HTMLDivElement) {
    const priceOnProduct = document.createElement("strong");
    priceOnProduct.innerHTML = showProduct.price.toString();
    container.appendChild(priceOnProduct);
  
    return priceOnProduct;
  }
  
  function createImg (showProduct:showProduct, container: HTMLDivElement) {
    const productImg = document.createElement("img");
    productImg.innerHTML = showProduct.image;
    container.appendChild(productImg);
  
    return productImg;
  }
    

  



  
  


/*
  5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
  går att göra betydligt bättre. Gör om så många som du kan hitta!
  */
function presentStudents(students: Student[]) {
  for (const student of students) {
    if (student.handedInOnTime) {
      let container = document.createElement("div");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = true;

      container.appendChild(checkbox);
      let listOfStudents = document.querySelector("ul#passedstudents");
      listOfStudents?.appendChild(container);
    } else {
      let container = document.createElement("div");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = false;

      container.appendChild(checkbox);
      let listOfStudents = document.querySelector("ul#failedstudents");
      listOfStudents?.appendChild(container);
    }
  }
}

/*
  6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
  Lorem, ipsum, dolor, sit, amet
  Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
  */
function concatenateStrings() {
  let result = ["Lorem", "ipsum", "dolor", "sit","amet"];
   
  return result.join("")


}

/* 
7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
    Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
    fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
    lösning som är hållbar och skalar bättre. 
*/
class createUser{
  constructor(
  public name: string,
  public birthday: Date,
  public email: string,
  public password: string
  ) {}
}// Validation

const MILLISECONDS_SINCE_YEAR = 1970;
const AGE_REQUERD = 20;

 

function getAge (birthday:Date){
  let ageDiff = Date.now() - birthday.getTime();
  let ageDate = new Date(ageDiff);
  let userAge = Math.abs(ageDate.getUTCFullYear() - MILLISECONDS_SINCE_YEAR);

  return userAge;
}

function createUserPerson (createUser:createUser) {
  const userAge = getAge(createUser.birthday);

  if (userAge > AGE_REQUERD) {
    return "konto har skapats";
  } else {
    return "Du är under 20 år";
  }

}  


