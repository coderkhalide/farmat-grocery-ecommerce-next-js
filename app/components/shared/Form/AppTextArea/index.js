import { useFormikContext } from "formik";

function AppTextArea({ name, editProfile, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();

  return (
    <div className={`${!editProfile ? "mt-4" : "mb-3"}`}>
      <textarea
        name={name}
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange(name)}
        value={values[name]}
        {...otherProps}
        className={`outline-none border-[1px] py-3 px-5 rounded w-full ${!editProfile ? "app_input" : "edit_input"} min-h-[100px]`}
      />
      {touched[name] && (
        <span className="text-sm text-red-400">{errors[name]}</span>
      )}
    </div>
  );
}

export default AppTextArea;
