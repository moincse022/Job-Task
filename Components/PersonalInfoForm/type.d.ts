import { FormData } from "@/app/page";

type PersonalInfoFormProps = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
};
export {PersonalInfoFormProps}