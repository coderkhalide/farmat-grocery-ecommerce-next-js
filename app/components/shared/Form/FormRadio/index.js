import { useFormikContext } from 'formik'
import { useEffect, useState } from 'react'

function FormRadio({placeholder, name, onChange}) {
    const {setFieldValue, values} = useFormikContext()
    const [checked, setChecked] = useState(values[name])

    const handleChange = e => {
        setChecked(!checked)
        setFieldValue(name, !checked)
    }

    useEffect(() => {
        if(!onChange) return
        onChange(values[name])
    }, [values[name]])

    return (
        <div className="formRadio mt-2">
            <h4 className="text-gray-600 mr-3 font-medium">{placeholder}</h4>
            <div className="toggle-radio">
                <input type="radio" name="rdo" id="yes" checked={checked} onChange={handleChange} />
                <input type="radio" name="rdo" id="no" checked={!checked} onChange={handleChange} />
                <div className="switch">
                    <label for="yes">Yes</label>
                    <label for="no">No</label>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default FormRadio
