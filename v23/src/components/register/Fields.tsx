'use client'
import { FormikValues, useField, useFormikContext } from "formik";

type TextFieldProps = {
  icon: React.ReactNode,
  name: string,
  placeholder: string,
  className: string,
  type: string,
}

type SelectFieldProps = {
  icon: React.ReactNode,
  name: string,
  className: string,
  children: React.ReactNode
  onChange?: () => void
}

type TextAreaFieldProps = Omit<TextFieldProps, "type">

export const TextField = ({ ...props }: TextFieldProps) => {
  const [field, meta] = useField(props)
  const { className, icon } = props
  const error = meta.touched && meta.error
  return (
    <div className={` relative flex bg[#E2DDF4] rounded-lg items-center bg-[#E2DDF4] ${className} ${error ? 'border-2 border-red-500' : ''}`}>
      <span className={`text-black/50 pl-2`}>{icon}</span>
      <input {...field} {...props}
        className="bg-[#E2DDF4] pr-1 w-full pl-2 text-black/80 appearance-none rounded-lg border-none outline-none focus:ring-0"
        style={{
          appearance: 'textfield',
          MozAppearance: 'textfield',
        }}
      />
      {meta.touched && meta.error ? (
        <div className="error text-sm text-red-500 mr-2">{meta.error}</div>
      ) : null}
    </div>
  )
}

export const TextAreaField = ({ ...props }: TextAreaFieldProps) => {
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error
  const { icon, className } = props
  return (
    <div className={` relative flex bg[#E2DDF4] rounded-lg items-center bg-[#E2DDF4] ${className} ${error ? 'border-2 border-red-500' : ''}`}>
      <span className={`h-full pt-[13px] text-black/50 items-start pl-2`}>{icon}</span>
      <textarea
        {...field} {...props}
        className="bg-[#E2DDF4] pr-1 w-full align-text-top pl-2 h-full text-black/80 appearance-none rounded-lg border-none outline-none focus:ring-0"
      />
      {meta.touched && meta.error ? (
        <div className="error text-sm text-red-500 mr-2">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const Select = ({ ...props }: SelectFieldProps) => {
  const [field, meta, helpers] = useField(props);
  const error = meta.touched && meta.error

  const { icon, className } = props
  return (
    <div className={` relative flex bg[#E2DDF4] rounded-lg items-center bg-[#E2DDF4] ${className} ${error ? 'border-2 border-red-500' : ''}`}>
      <span className={`text-black/50 pl-2`}>{icon}</span>
      <select {...field} {...props}
        className="bg-[#E2DDF4] text-black/50 pr-1 w-full pl-2 rounded-lg border-none outline-none focus:ring-0"
      />
      {meta.touched && meta.error ? (
        <div className="error text-sm text-red-500 mr-2">{meta.error}</div>
      ) : null}
    </div>
  );
};



export const SelectCommittee = ({ ...props }: SelectFieldProps) => {
  const [field, meta, helpers] = useField(props);
  const error = meta.touched && meta.error

  const { icon, className } = props
  return (
    <div className={` relative flex bg[#E2DDF4] rounded-lg items-center bg-[#E2DDF4] ${className} ${error ? 'border-2 border-red-500' : ''}`}>
      <span className={`text-black/50 pl-2`}>{icon}</span>
      <select {...field} {...props}
        className="bg-[#E2DDF4] text-black/50 pr-1 w-full pl-2 rounded-lg border-none outline-none focus:ring-0"
      />
      {meta.touched && meta.error ? (
        <div className="error text-sm text-red-500 mr-2">{meta.error}</div>
      ) : null}
    </div>
  );
};
