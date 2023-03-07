function test1(num){
    if (num >= 7)
    console.log(num)
    console.log('Final')
}

test1(3)
test1(7)

function test2(num){
    if(num >= 7); // Não usar ;, não usar ele com as estruturas de controle
    {
        console.log(num)
    }
}

test2(3);
test2(7);