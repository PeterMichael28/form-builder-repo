import { FormElementInstance } from "../../FormElements";
import { ParagraphFieldCustomInstance } from "./ParagraphFieldFormElement";

function ParagraphFieldFormComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as ParagraphFieldCustomInstance;
  
    const { text } = element.extraAttributes;
    return <p className="text-muted-foreground">{text}</p>;
  }

  export default ParagraphFieldFormComponent