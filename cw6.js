alert(`يا هلا ومرحبا في موقعي لحساب درجاتك
طق Enter
`)
let grade = prompt(`دخل درجتك`)
if(grade>=90 && grade<=100)
console.log(`%c🥳لقد حصلت على امتياز` , 'color :red;')
else if (grade>=80 && grade<=89){
    console.log(`%c😍لقد حصلت على جيد جداً`, 'color :red;')
}
else if (grade>=70 && grade<=79){
    console.log(`%c🙂لقد حصلت على جيد`, 'color :red;')
    
}
else if (grade>=60 && grade<=69){
    console.log(`%c😕لقد حصلت على مقبول`, 'color :red;')
}
else if (grade>=50 && grade <=59) {
    console.log(`%c😓لقد حصلت على ضعيف`, 'color :red;')
}
else if (grade<=50 && grade>=0){
    console.log(`%c💔أنت راسب`, 'color :red;')
}
else if(grade<0){
    console.log(`%c🥶هذي درجة حرارة القطب الجنوبي` , 'color:red;')
}
else if(grade>100){
    console.log(`%c😑تستهبل أنت` , 'color:red;' )
}
else{
    console.log(`Error`)
}
//جافاسكريبت موو جافا