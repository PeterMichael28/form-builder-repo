import { FormElementInstance } from "../../FormElements";
import { TitleFieldCustomInstance } from "./TitleFieldFormElement";

export default function TitleFieldFormComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as TitleFieldCustomInstance;
  
    const { title } = element.extraAttributes;
    return <p className="text-xl">{title}</p>;
  }