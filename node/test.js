const messages = ['adorn', 'beautify', 'bedeck', 'bedizen', 'blazon', 'caparison', 'deck', 'decorate', 'do', 'do up', 'doll up', 'drape', 'dress', 'embellish', 'emblaze', 'emboss', 'enrich', 'fancify', 'fancy up', 'festoon', 'garnish', 'glitz (up)', 'grace', 'gussy up', 'ornament', 'pretty (up)', 'trim']
const finalResult = [];
const rndWords = num => {
    let rnd = Math.floor(Math.random()*messages.length);
    let limit = Math.random()*5;
    let i = 0;
    let phrase = '';
    if(num < 3){
        return 'please choose a number above 3'
    }else{
        while(i < num){
            let rnd = Math.floor(Math.random()*messages.length);
            if(!finalResult.find(x=> x === messages[rnd])) {
                finalResult.push(messages[rnd])
                i++;
            }
        }
        for(let j = 0; j < num; j++){
            phrase += ' '+finalResult[j];
        }
        return `Voila ta phrase généré grand con de tes morts: ${phrase}`;
    }
    

}

console.log(rndWords(8));