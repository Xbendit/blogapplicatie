function ConvertDate (date){

    const newdate = new Date(date)

    return newdate.toLocaleDateString('nl-NL',{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
export default ConvertDate