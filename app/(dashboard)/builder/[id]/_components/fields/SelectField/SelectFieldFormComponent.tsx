// SelectFieldFormComponent
"use client"

import { useEffect, useState } from "react";
import { FormElementInstance, SubmitFunction } from "../../FormElements";
import { SelectFieldCustomInstance, SelectFieldFormElement } from "./SelectFieldFormElement";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SelectFieldFormComponent({
    elementInstance,
    submitValue,
    isInvalid,
    defaultValue,
  }: {
    elementInstance: FormElementInstance;
    submitValue?: SubmitFunction;
    isInvalid?: boolean;
    defaultValue?: string;
  }) {
    const element = elementInstance as SelectFieldCustomInstance;
  
    const [value, setValue] = useState(defaultValue || "");
    const [error, setError] = useState(false);
  
    useEffect(() => {
      setError(isInvalid === true);
    }, [isInvalid]);
  
    const { label, required, placeHolder, helperText, options } = element.extraAttributes;
    return (
      <div className="flex flex-col gap-2 w-full">
        <Label className={cn(error && "text-red-500")}>
          {label}
          {required && "*"}
        </Label>
        <Select
          defaultValue={value}
          onValueChange={(value) => {
            setValue(value);
            if (!submitValue) return;
            const valid = SelectFieldFormElement.validate(element, value);
            setError(!valid);
            submitValue(element.id, value);
          }}
        >
          <SelectTrigger className={cn("w-full", error && "border-red-500")}>
            <SelectValue placeholder={placeHolder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {helperText && <p className={cn("text-muted-foreground text-[0.8rem]", error && "text-red-500")}>{helperText !== "Helper text" && helperText}</p>}
      </div>
    );
  }
  