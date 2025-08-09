function count_zero(binary) {
    let count = 0;
    for(const bina of binary){
        if(bina === "0" ){ //jokhn ami binary likhbo oita string hoye jabe tai " " er vitor dite hbe
            count++;

    }
    
    }
    return count;

    
}
const result = count_zero("10000110001");//jokhn ami binary likhbo oita string hoye jabe tai " " er vitor dite hbe
console.log(result);