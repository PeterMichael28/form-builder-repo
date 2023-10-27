import { GetForms } from "@/actions/form";
import FormSingleCard from "./FormSingleCard";

export default async function FormCards() {
    const forms = await GetForms();
    return (
      <>
        {forms.map((form) => (
          <FormSingleCard key={form.id} form={form} />
        ))}
      </>
    );
  }