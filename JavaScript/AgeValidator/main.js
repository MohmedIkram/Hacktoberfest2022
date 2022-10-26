var name, age;

const Validate = () => {
  name = document.getElementById("name").value;
  age = document.getElementById("age").value;

  if(age<=12){
      swal.fire(`${name} you're still a kid`)
  }
  else  if(age>=13 && age<=19){
    swal.fire(`${name} cool, you are a teenager`)
}
else{
    swal.fire(`${name} hurray, you are an adult. Have some beer`)
}
  console.log(name, age);
};
