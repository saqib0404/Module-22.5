function paperRequirements (numOfBook1, numOfBook2, numOfBook3){
    const papersForBook1 = numOfBook1 * 100;
    const papersForBook2 = numOfBook2 * 200;
    const papersForBook3 = numOfBook3 * 300;
    const totalPaper = papersForBook1 + papersForBook2 + papersForBook3;
    return totalPaper;
}
const numOfBook1 = 1;
const numOfBook2 = 2;
const numOfBook3 = 1;

const totalPapersRequired = paperRequirements(numOfBook1,numOfBook2,numOfBook3);
console.log(totalPapersRequired);