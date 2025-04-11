import { FormData } from "@/app/page";

type AddressDetailsFormProps = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onPrevious: () => void;
};
export { AddressDetailsFormProps };