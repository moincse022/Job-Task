import { FormData } from "@/app/page";

type AccountSetupFormProps = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onPrevious: () => void;
};

export { AccountSetupFormProps };