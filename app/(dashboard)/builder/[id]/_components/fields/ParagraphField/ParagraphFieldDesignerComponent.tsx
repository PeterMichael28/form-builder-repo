

import { Label } from "@/components/ui/label";
import { ParagraphFieldCustomInstance } from "./ParagraphFieldFormElement";
import { FormElementInstance } from "../../FormElements";

function ParagraphFieldDesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as ParagraphFieldCustomInstance;
    const { text } = element.extraAttributes;
    return (
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-muted-foreground">Paragraph field</Label>
        <p className="truncate">{text}</p>
      </div>
    );
  }

  export default ParagraphFieldDesignerComponent