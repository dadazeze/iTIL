import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/components/ui/form';
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
}

interface IFormContext<T extends FieldValues> {
  form?: UseFormReturn<T>;
}

const FormContext = createContext<IFormContext<any>>({});

export const FormUI = <T extends FieldValues>({
  children,
  form,
  action,
}: IFormUIProps<T>) => {
  return (
    <Form {...form}>
      <form className='space-y-8' action={action}>
        <FormContext.Provider value={{ form }}>{children}</FormContext.Provider>
      </form>
    </Form>
  );
};

interface IFieldsProps {
  children: (props: ControllerRenderProps<any, string>) => React.ReactNode;
  name: string;
}

const Fields: React.FC<IFieldsProps> = ({ children, name }: IFieldsProps) => {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form?.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>{children(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

FormUI.Field = Fields;
