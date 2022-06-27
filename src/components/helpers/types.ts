export type atomsProps = {
  variant?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: string | React.ReactNode;
  className?: string;
  placeholder?: string;
};

export type StatusOptionTypes = {
  status: string;
  id: number;
};
