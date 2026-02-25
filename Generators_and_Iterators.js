//1.Функція-генератор для нескінченної послідовності чисел Фібоначчі
function* infiniteFibonacci() {
    //Використовуємо BigInt (додаємо 'n' в кінці числа), 
    //щоб уникнути втрати точності при роботі з дуже великими числами, 
    //оскільки числа Фібоначчі швидко зростають.
    let a = 0n;
    let b = 1n;
    
    while (true) {
        yield a; //повертаємо поточне число і ставимо функцію на паузу
        let nextFib = a + b;
        a = b;
        b = nextFib;
    }
}

//Допоміжна функція для створення затримки в часі.
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

//2.Функція, яка зчитує дані з ітератора протягом заданого часу
async function consumeWithTimeout(iterator, timeoutSeconds) {
    const timeoutMs = timeoutSeconds * 1000; //переводимо секунди в мілісекунди
    const startTime = Date.now(); //час початку роботи
    
    let count = 0;
    let runningTotal = 0n;

    console.log(`Початок обробки даних. Таймаут: ${timeoutSeconds} секунд.`);
    console.log("-".repeat(65));

    //цикл працює, поки різниця між поточним часом і часом старту менша за таймаут
    while ((Date.now() - startTime) < timeoutMs) {
        //отримуємо наступне значення з генератора
        const result = iterator.next(); 
        
        //перевіряємо 
        if (result.done) {
            console.log("Генератор вичерпав усі значення до закінчення часу.");
            break;
        }

        const value = result.value;
        count++;
        runningTotal += value;
        
        //переводимо суму у звичайне число (Number), щоб правильно порахувати середнє значення
        const runningAvg = Number(runningTotal) / count;

        //виводимо результати. Метод padEnd додає пробіли, щоб колонки були рівними
        console.log(`Ітерація: ${count.toString().padEnd(3)} | Значення: ${value.toString().padEnd(5)} | Сума: ${runningTotal.toString().padEnd(7)} | Середнє: ${runningAvg.toFixed(2)}`);

        //пауза між ітераціями, щоб не перевантажувати консоль і дати час на обробку даних
        await sleep(100);
    }

    console.log("-".repeat(65));
    console.log(`Час вийшов. Всього оброблено елементів: ${count}`);
}

//Головна функція для запуску програми
async function main() {
    const fibGen = infiniteFibonacci();
    
    await consumeWithTimeout(fibGen, 2); 
}


main();