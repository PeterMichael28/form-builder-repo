import { Label } from "@/components/ui/label";
import { SubtitleCustomInstance } from "./SubTitleFieldFormElement";
import { FormElementInstance } from "../../FormElements";

function SubtileFieldDesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as SubtitleCustomInstance;
    const { title } = element.extraAttributes;
    return (
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-muted-foreground">SubTitle field</Label>
        <p className="text-lg">{title}</p>
      </div>
    );
  }

  export default SubtileFieldDesignerComponent