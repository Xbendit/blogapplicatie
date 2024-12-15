
function ReadTime(str){

    const amountWords = str.split(" ").length;
    const readTime = Math.ceil((amountWords/100)*0.3)

        return readTime

}


export default ReadTime