import { Field } from 'formik';

interface Props {
  htmlFor: string;
  name: string;
  id: string;
  text?: string;
  as?: string;
  containerClass?: string;
}

const Input: React.FC<Props> = ({ htmlFor, name, id, text, as, containerClass }) => {
  return (
    <div className={`${containerClass}`}>
      <label className='text-white' htmlFor={htmlFor}>
        {text || <div className='capitalize'>{name}</div>}
      </label>
      <div className='p-1' />
      {as == 'select' ? (
        <Field
          className='w-32 rounded-md bg-cool-gray-900 p-1 text-white focus:outline-none'
          id={id}
          name={name}
          as='select'
        >
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='High'>High</option>
        </Field>
      ) : (
        <Field
          className='w-full rounded-md bg-cool-gray-900 p-1 text-white focus:outline-none'
          id={id}
          name={name}
          placeholder={name}
          as={as || ''}
        />
      )}
    </div>
  );
};

export default Input;
