import final from "./final";
import stap1 from "./stap1";
import stap2 from "./stap2";
export default function main({
  currentStap,
  updateStap,
  inputData,
  updateData,
}) {
  console.log(currentStap)
  if (currentStap == 1) {
    stap1({updateData,updateStap,inputData});
  } else if (currentStap == 0) {
    stap2({updateData,updateStap,inputData});
  } else if (currentStap == -1) {
    final({updateData,updateStap,inputData});
  }
}
