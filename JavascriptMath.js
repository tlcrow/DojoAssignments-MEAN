function zero_negativity(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
}

var arr = [2, -4, 3, 15];
zero_negativity(arr);

function is_even(num){
    if(num % 2 == 0){
        console.log(true);
        return true;
    }
    console.log(false);
    return false;
}

var num = 13;
is_even(num);

function how_many_even(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            count = count + 1;
        }
    }
    console.log(count);
    return count;
}

var arr = [2, -4, 3, 15];
how_many_even(arr);

function create_dummy_array(n){
    const arr = [];
    for(let i = 0; i < n; i++){
        arr.push(Math.floor(Math.random() * 10));
    }
    console.log(arr);
}

n = 3;
create_dummy_array(n);

function randomChoice(arr){
    let index = Math.floor(Math.random() * arr.length);
    console.log(arr[index]);
    return arr[index];
}

var arr = [2, -4, 3, 15];
randomChoice(arr);
