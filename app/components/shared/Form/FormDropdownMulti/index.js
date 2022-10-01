import { useFormikContext } from 'formik';
import Multiselect from 'multiselect-react-dropdown'

function FormDropdownMulti({ items, name, placeholder }) {
    const { setFieldTouched, setFieldValue, setFieldError, errors, touched, values } = useFormikContext()

    const handleSelectChange = selectedList => {
        setFieldTouched(name)
        setFieldValue(name, selectedList)
    }

    return (
        <div className="mt-4">
            <Multiselect
                options={items} // Options to display in the dropdown
                selectedValues={values[name]} // Preselected value to persist in dropdown
                onSelect={handleSelectChange} // Function will trigger on select event
                onRemove={handleSelectChange} // Function will trigger on remove event
                displayValue="title" // Property name to display in the dropdown options
                placeholder={placeholder}
            />

            {touched[name] && <span className="text-red-400 text-sm">{errors[name]}</span>}
        </div>
    )
}

export default FormDropdownMulti
