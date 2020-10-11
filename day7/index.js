function GetMedicines(item1, item2, item3){
    this.item1 = item1;
    this.item2 = item2;
    this.item3 = item3;

}
// remember and give the names to medical shop owner

var listOfMedicines = {};
GetMedicines.call(listOfMedicines,'med1','med2','med3');
console.log(listOfMedicines.item1)

// list in a paper 
var listOfMedicines1 = {} 
var arr = ['med1','med2','med3']
//arr.sort()
GetMedicines.apply(listOfMedicines1 , arr);

// no complete medicine list is available 
var listOfMedicines2 = {};
var partialMedicineList = GetMedicines.bind(listOfMedicines2 , 'med1');

partialMedicineList('med2','med3');

var heading = document.getElementById("heading");


// DOM + javascript  = api
