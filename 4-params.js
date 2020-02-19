function f(a,b){
  if(arguments.length === f.length){
    console.log("Params matched with expected...");
  }
  else {
    console.log("Params not matched!!!!.");
  }
}


f(1);
f(1,2);
f(1,2,3);