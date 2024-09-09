import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/components/ui/form';
import { cn } from '@/shared/lib/style/utils';
import { ReactNode, createContext, useContext } from 'react';
import {
  ControllerRenderProps,
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';

interface IFormUIProps<T extends FieldValues> {
  children: ReactNode;
  form: UseFormReturn<T>;
  action: (payload: FormData) => void;
  className?: string;
}

interface IFormContext<T extends FieldValues> {
  form?: UseFormReturn<T>;
}

const FormContext = createContext<IFormContext<any>>({});

export const FormUI = <T extends FieldValues>({
  children,
  form,
  action,
  className,
}: IFormUIProps<T>) => {
  return (
    <Form {...form}>
      <form className={cn('space-y-8', className)} action={action}>
        <FormContext.Provider value={{ form }}>{children}</FormContext.Provider>
      </form>
    </Form>
  );
};

interface IFieldsProps {
  children: (props: ControllerRenderProps<any, string>) => React.ReactNode;
  name: string;
  className?: string;
}

const Fields: React.FC<IFieldsProps> = ({
  children,
  name,
  className,
}: IFieldsProps) => {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form?.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn('w-full', className)}>
          <FormControl>{children(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

FormUI.Field = Fields;
