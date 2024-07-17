import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "PLEASE ENTER THE AMOUNT OF SECONDS",
    validate: (input) => {
        if (isNaN(input)) {
            return "PLEASE ENTER THE VALID NUMBER";
        }
        else if (input > 60) {
            return "SECOND MUST BE IN 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function startTime(val) {
    const initTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(initTime);
    setInterval((() => {
        const currTime = new Date();
        const TimeDiff = differenceInSeconds(intervalTime, currTime);
        if (TimeDiff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const min = Math.floor((TimeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(TimeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);
