import stap1 from "./stap1";
import stap2 from "./stap2";
import stap3 from "./stap3";
import final from "./finalStap";
export default function sta1({ inputValue, updateStap, currentStap,setData ,image }) {
  console.log("sdjhagsdja")
  if (currentStap == 1) {
    stap1({ inputData: inputValue, updateStap,setData:setData });
  } else if (currentStap == 0) {
    stap2({ inputData: inputValue, updateStap,setData:setData });
  } else if (currentStap == -1) {
    stap3({ inputData: inputValue, updateStap,setData:setData ,image});
  } else if (currentStap == -2) {
    
    final({ inputData: inputValue, updateStap,setData:setData ,image});
  }
}
