function getElementWidth(content, padding, border) {
    // 1. Всі елементи цифрами
    const parseContent = Number.parseFloat(content);
    const parsePadding = Number.parseFloat(padding);
    const parseBorder =  Number.parseFloat(border);
    // 2. Перемноження аргументів
    const result = parseContent + parsePadding * 2 + parseBorder * 2;
    // 3. Повернути значення
    return result;

    
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200