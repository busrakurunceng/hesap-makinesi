const display = document.querySelector(".calculator-sonuc");
const buton = document.querySelector(".calculator-buton");

let displayValue = "0";
let ilk_deger = null;
let operator = null;
sonraki_deger = false;

Display_yenile();


function Display_yenile() 
{
    display.value = displayValue;
}

buton.addEventListener("click" , function(e)
{
    const element =e.target;
    const value =element.value;


    if(! element.matches("button"))
    {
        return;
    }

    switch(value){
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
            operator_secimi(value);
            break;

    case '.':
        input_nokta();
        break;

    case 'C':
        temizle();
        break;

        default: 
        input_sayi(element.value);    

}
    
    Display_yenile();
     
});

function calculate(first, second, operator){
    if(operator==='+')
    {
        return first+second;
    }
    else if(operator==='-')
    {
        return first-second;
    }
    else if(operator==='*')
    {
        return first*second;
    }
    else if(operator==='/')
    {
        return first/second;
    }
    return second;
}

function operator_secimi(oper) 
{
    const value = parseFloat(displayValue);

    if(ilk_deger=== null)
    {
        ilk_deger=value;
    }
    else if(operator)
    {
        const result=calculate(ilk_deger, value,operator);
        displayValue=String(result); 
        ilk_deger = result;
    }

    sonraki_deger = true;
    operator = oper;

    console.log(displayValue , ilk_deger , operator , sonraki_deger);
 
}

function input_sayi(sayi)
{
    if(sonraki_deger)
    {
        displayValue = sayi;
        sonraki_deger = false;
    }
    else
    {
        displayValue = displayValue === "0" ? sayi: displayValue + sayi;
    }
    console.log(displayValue , ilk_deger , operator , sonraki_deger);
}

function input_nokta() 
{
    if(!(displayValue.includes(".")))
    {
        displayValue += ".";
    } 
}

function temizle()
{
    displayValue = "0";
}

