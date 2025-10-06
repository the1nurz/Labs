function fn(): void {
  const constObj = { name: "ConstName" };
  let varObj = { name: "VarName" };
  constObj.name = "ChangedConstName";
  varObj.name = "ChangedVarName";
  varObj = { name: "NewObject" }; 
  console.log("constObj:", constObj); //eror
  console.log("varObj:", varObj); //ok
}
fn();
function createUser(name: string, city: string): object {
  return { name, city };
}
console.log(createUser("Marcus Aurelius", "Roma"));

