let btns = document.querySelectorAll("button")

let btntext = "";
let expr = "";
let screen = document.getElementById("textbox");
let result = "";

for (item of btns) {
    item.addEventListener('click', (b) => {
        btntext = b.target.innerText;
        console.log(b.target.innerText);

        if (btntext == 'X') {
            btntext = '*';
            expr += btntext;
            screen.value = expr;

        }
        else if (btntext == 'C') {
            expr = btntext = '';
            screen.value = expr;
            console.clear();
        }

        else if (btntext == '=') {
            result = eval(expr);
            screen.value = result;
            console.log(result);

        }

        else if (btntext == '') {
            // firstly get value from screen and log its type . convert it into array and use pop method to remove last value now convert back to string and console it to verify . then use replaceall method with popped string to remove commas and again verify it . Finally print the value on screen 

            // console.log("Earliest typeof screenvalue is " + typeof (screen.value))
            // console.log(screen.value)

            let arr = Array.from(screen.value)
            // console.log("now type of string value is " + typeof (arr))
            // console.log(arr)


            let a = arr.pop();
            console.log(a + " is popped")

            // console.log("popped array value is " + arr)
            popped_st = arr.toString();
            // console.log("again converted back the value to " + typeof (popped_st))

            // console.log("popped string is " + popped_st)
            popped_st = popped_st.replaceAll(',', '')
            console.log("new screen value is " + popped_st)
            screen.value = popped_st;
            expr = screen.value;

        }

        else {
            expr += btntext;
            screen.value = expr;
        }

    })
}