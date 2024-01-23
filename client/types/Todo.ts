export type TodoRequest = {
  description: string;
  potencial_business: string;
  reminder_date: string;
};

export type TodoResponse = {
  id: string;
  description: string;
  potencial_business: string;
  reminder_date: string;
  created_at: string;
  updated_at?: string;
};
