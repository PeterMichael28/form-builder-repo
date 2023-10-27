import { FormElementInstance } from "../../FormElements";
import { SubtitleCustomInstance } from "./SubTitleFieldFormElement";

function SubtileFieldFormComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as SubtitleCustomInstance;
  
    const { title } = element.extraAttributes;
    return <p className="text-base">{title}</p>;
  }
  

  export default SubtileFieldFormComponent