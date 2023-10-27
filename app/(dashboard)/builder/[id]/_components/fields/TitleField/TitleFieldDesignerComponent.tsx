import { Label } from "@/components/ui/label";
import { FormElementInstance } from "../../FormElements";
import { TitleFieldCustomInstance, textFieldExtraAttributes } from "./TitleFieldFormElement";


  
export default function TitleFieldDesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as TitleFieldCustomInstance;
    const { title } = element.extraAttributes;
    return (
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-muted-foreground">Title field</Label>
        <p className="text-xl">{title}</p>
      </div>
    );
  }