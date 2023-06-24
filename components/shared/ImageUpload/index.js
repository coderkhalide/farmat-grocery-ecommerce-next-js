import { useCallback, useEffect, useState } from 'react'
import Progress from '../Progress'
import styles from './ImageUpload.module.css'
import { storage } from '../../utils/firebase'
import { useDropzone } from 'react-dropzone'

function ImageUpload({ setShowImageUpload, setImageUrl }) {
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [files, setFiles] = useState([])

    const types = ['image/png', 'image/jpeg']

    const handleUpload = () => {
        const time = Date.now()
        if (image) {
            const uploadTask = storage.ref(`menus_new/menu_${time}`).put(image)
            uploadTask.on(
                // Progress function
                'state_changed',
                (snap) => {
                    const progress = Math.round(
                        (snap.bytesTransferred / snap.totalBytes) * 100
                    )
                    setProgress(progress)
                },
                (error) => {
                    // Error function
                    console.log(error)
                    setError('Something went wrong!')
                },
                () => {
                    // Complete function
                    storage
                        .ref('menus_new')
                        .child(`menu_${time}`)
                        .getDownloadURL()
                        .then(url => {
                            setImageUrl(url)
                            setProgress(0)
                            setImage(null)
                            setShowImageUpload(false)
                        })
                }
            )
        } else {
            setError('Please select an image!')
        }
    }

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })))
        let selected = acceptedFiles[0]
        if (selected) {
            if (types.includes(selected.type)) {
                setImage(selected)
                setError(null)
            } else {
                setImage(null)
                setError('Please select an image file (png or jpeg)!')
            }
        } else {
            setImage(null)
            setError('Please select an image file (png or jpeg)!')
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div className={styles.imageUpload}>
            <div className={styles.imageUpload_content}>
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                            <p>Drop the files here ...</p> :
                            (
                                <>
                                    {!!files.length ? <img className="w-72 mx-auto h-72 object-cover rounded-lg" src={files[0]?.preview} alt="Image preview" /> : (
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                    )}
                                </>
                            )
                    }
                </div>
                <div className={styles.imageUpload_output_wrapper}>
                    <div className={styles.output}>
                        {error && (<div className="text-sm text-red-400">{error}</div>)}
                        {/* {image && (<p>{image.name}</p>)} */}
                        {(progress > 0) && (<Progress done={progress} />)}
                    </div>
                    <button onClick={handleUpload}>Upload</button>
                </div>
            </div>

            <div className={styles.backdrop} onClick={() => setShowImageUpload(false)}></div>
        </div>
    )
}

export default ImageUpload
