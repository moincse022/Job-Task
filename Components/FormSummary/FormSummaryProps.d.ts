import { FormData } from "@/app/page";

type FormSummaryProps = {
  formData: FormData;
  onSubmit: () => void;
  onPrevious: () => void;
  isSubmitted: boolean;
};
export { FormSummaryProps };