export type ContactFormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  text: string;
  asunto: string;
  DNI: string;
  date: string;
};

export type ApiResponse = {
  success?: boolean;
  error?: string;
  fields?: Record<string, string>;
};
