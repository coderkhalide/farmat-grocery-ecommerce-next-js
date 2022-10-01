import { useFormikContext } from "formik";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Tooltip } from "@mantine/core";

function FormInput({
  name,
  tooltip = false,
  hoverBoxContent,
  type = "text",
  editProfile = false,
  ...otherProps
}) {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();
  const [inputType, setInputType] = useState(type);

  return (
    <div className={`${!editProfile ? "mb-4" : "mb-6"}`}>
      <div className="relative flex items-center">
        <input
          name={name}
          onBlur={() => setFieldTouched(name)}
          onChange={handleChange(name)}
          value={values[name]}
          type={inputType}
          {...otherProps}
          className={`outline-none border-[1px] py-3 px-5 rounded w-full ${!editProfile ? "app_input" : "edit_input"}`}
        />
        {!!tooltip && (
          <div className="ml-2">
            <Tooltip
              wrapLines
              withArrow
              width={220}
              label={tooltip}
              color="dark"
              position="right"
              transition="fade"
              transitionDuration={200}
            >
              <BsFillInfoCircleFill color="#63CF50" />
            </Tooltip>
          </div>
        )}
        {type === "password" && (
          <>
            {inputType == "password" ? (
              <AiFillEye
                onClick={() => setInputType("text")}
                className={`absolute z-20 cursor-pointer right-0 mr-4 text-[#63CF50]`}
                size={23}
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => setInputType("password")}
                className={`absolute z-20 cursor-pointer right-0 mr-4 text-[#63CF50]`}
                size={23}
              />
            )}
          </>
        )}
      </div>
      {touched[name] && (
        <span className="text-red-400 text-sm">{errors[name]}</span>
      )}
    </div>
  );
}

export default FormInput;
