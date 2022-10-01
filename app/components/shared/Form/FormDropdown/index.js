import { useFormikContext } from 'formik';
import { useState } from 'react';
import styles from './FormDropdown.module.css'

function FormDropdown({items, name, placeholder, key = "title", label = "title"}) {
    const {setFieldTouched, setFieldValue, errors, touched, values} = useFormikContext()
    const [isOpen, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(values[name])
    
    const toggleDropdown = () => setOpen(!isOpen)
    
    const handleItemClick = (id) => {
        console.log(id)
        setFieldTouched(name)
        selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
        toggleDropdown()
        setFieldValue(name, id)
    }

    return (
        <>
        <div className={`${styles.formDropdown} mt-4 mb-4`}>
            <div className={styles.dropdown}>
                <div className={styles.dropdown_header} onClick={toggleDropdown}>
                    {selectedItem ? items.find(item => item[key] === selectedItem)?.[label] : placeholder}
                    <img className={`${styles.icon} ${isOpen && styles.open}`} src="/right.svg" loading="lazy" alt=""/>
                </div>
                <div className={`${styles.dropdown_body} ${isOpen && styles.open}`}>
                    {items.map(item => (
                        <div key={item[key]} className={styles.dropdown_item} onClick={e => handleItemClick(item[key], item?.value)} id={item[key]}>
                            <span className={`${styles.dropdown_item_dot} ${item[key] === selectedItem && styles.selected}`}>• </span>
                            {item[label]}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {touched[name] && <span className="text-red-400 text-sm">{errors[name]}</span>}
        </>
    )
}

export default FormDropdown
