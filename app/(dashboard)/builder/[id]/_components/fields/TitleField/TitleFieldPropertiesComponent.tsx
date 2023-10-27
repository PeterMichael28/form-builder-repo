"use client"

import useDesigner from "@/hooks/useDesigner";
import { FormElementInstance } from "../../FormElements";
import { TitleFieldCustomInstance } from "./TitleFieldFormElement";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";


export const textFieldPropertiesSchema = z.object({
  title: z.string().min(2).max(50),
});

type textFieldPropertiesFormSchemaType = z.infer<typeof textFieldPropertiesSchema>;

export default function TitleFieldPropertiesComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as TitleFieldCustomInstance;
    const { updateElement } = useDesigner();
    const form = useForm<textFieldPropertiesFormSchemaType>({
      resolver: zodResolver(textFieldPropertiesSchema),
      mode: "onBlur",
      defaultValues: {
        title: element.extraAttributes.title,
      },
    });
  
    useEffect(() => {
      form.reset(element.extraAttributes);
    }, [element, form]);
  
    function applyChanges(values: textFieldPropertiesFormSchemaType) {
      const { title } = values;
      updateElement(element.id, {
        ...element,
        extraAttributes: {
          title,
        },
      });
    }
  
    return (
      <Form {...form}>
        <form
          onBlur={form.handleSubmit(applyChanges)}
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-3"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") e.currentTarget.blur();
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    );
  }