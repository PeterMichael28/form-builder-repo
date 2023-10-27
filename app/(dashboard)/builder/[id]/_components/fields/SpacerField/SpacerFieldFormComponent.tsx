

import { FormElementInstance } from "../../FormElements";
import { SpacerFieldCustomInstance } from "./SpacerFieldFormElement";

export default function SpacerFieldFormComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as SpacerFieldCustomInstance;
  
    const { height } = element.extraAttributes;
    return <div style={{ height, width: "100%" }}></div>;
  }