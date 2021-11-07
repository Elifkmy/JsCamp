function primeNumbers(...parameter) {  
    for (let i = 0; i < parameter.length; i++) {
        if (parameter[i] % 2 == 1 || parameter[i] == 2){
            console.log(parameter[i] + " Asal sayıdır")
        }
        else{
            console.log(parameter[i] + " Asal sayı değildir")
        }
    } 
}

primeNumbers(2,3,8,-2,1/6)

function friendNumbers(number1,number2) {
    let result1 = 0
    let result2 = 0
    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            result1 += i
        }
    }
    for (let j = 1; j < number2; j++) {
        if (number2 % j == 0) {
            result2 += j
        }
    }
    if (number1 == result2 && number2 == result1) {
        console.log(number1 + " ve " + number2 + " Arkadaş Sayılardır")
    }
    else{
        console.log(number1 + " ve " + number2 + " Arkadaş Sayı Değillerdir")
    }
}

friendNumbers(220,284)
friendNumbers(120,284)

function perfectNumbers() {
    for (let i = 1; i < 1000; i++) {
        let total=0
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                total += j
            }   
        }
        if (total == i) {
            console.log(i)
        }
    }
}

perfectNumbers()

function primes() {
    for (let i = 2; i <= 1000; i++) {
        let counter = 0
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                counter++
            }
        }
        if (counter == 0) {
            console.log(i)
        }
    }
}
primes()

