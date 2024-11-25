fuction nilaiBesar(value){
  const nilaiBesar = value[0];
  for(let i = 0; i < value.length; i++){
    if(value[i] > nilaiBesar){
      nilaiBesar = value[i];
    };
  };
let arr = [1,3,6,2,9];
console.log(nilaiBesar[arr]);
