//syntax of switch

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// };

const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Febuary");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("default case match");
    break;
}
// suppose we have to checked into in strings how we can cheked:--

const months = "april";

switch (months) {
  case "jan":
    console.log("January");
    break;
  case "Feb":
    console.log("Febuary");
    break;
  case "mar":
    console.log("march");
    break;
  case "april":
    console.log("April");
    break;
  default:
    console.log("months not Matched");
    break;
}
