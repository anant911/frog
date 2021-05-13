nameofstudentarray=[];




function submit() 
{
var display_students_array=[];

for (var j= 1; j<= 4; j++)
{
var nameofstudent= document.getElementById("name_of_the_student_"+j).value;
console.log(nameofstudent);
nameofstudentarray.push(nameofstudent);
}
console.log(nameofstudentarray);

var lengthofstudentarray=nameofstudentarray.length;
console.log(lengthofstudentarray);

for (var k=0; k<lengthofstudentarray;k++)
{
    display_students_array.push("<h4>NAME-"+ nameofstudentarray[k] +"</h4>");
    console.log(display_students_array);
}
document.getElementById("display_name_with_commas").innerHTML= display_students_array;

var remove_commas=display_students_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;


document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}

function sorting()
{
    nameofstudentarray
}