for(let i=0; i<=20; i++){
    console.log(i);
}
let i=0;
while(i<=30){
    i++;
    console.log(i);
}
let x=0;
do{
    x++;
    console.log(x);
}while(x<=40)

const numbers = [1,2,5,7,8,10,23,24,26];

for (let i=0; i<numbers.length; i++){
	if (numbers[i] % 2===0){
	    console.log(numbers[i]);
	}
}

const currentDay = new Date().getDay();

switch (currentDay){
	case 0:
		console.log("kvira");
		break;

	case 1:
		console.log("orshabati");
		break;

	case 2:
		console.log("samshabati");
		break;

	case 3:
		console.log("otxshabati");
		break;

	case 4:
		console.log("xutshabati");
		break;

	case 5:
		console.log("paraskevi");
		break;

	case 6:
		console.log("shabati");
		break;
}