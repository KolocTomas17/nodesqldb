import { useState } from "react"

const CreateBook = () => {
    const [formData, setFormData] = useState({});
    const [success, setSuccess] = useState(false);

    const createBook = async () => {
        const res = await fetch("http://localhost:3000/book", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const data = await res.json();
        if (data.msg == 'Book created') {
            setSuccess(true)
        } else {
            setSuccess(false)
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handlePost = (e) => {
        e.preventDefault();
        createBook();
    }

    return (
        <>
            <form className="form">
                <div className="field">
                    <label className="label">Jméno</label>
                    <div className="control">
                        <input required name="name" className="input" type="text" placeholder="Jméno" onChange={e => handleChange(e)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Autor</label>
                    <div className="control">
                        <input required name="author" className="input" type="text" placeholder="Autor" onChange={e => handleChange(e)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Vydavatel</label>
                    <div className="control">
                        <input required name="publisher" className="input" type="text" placeholder="Vydavatel" onChange={e => handleChange(e)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Cena</label>
                    <div className="control">
                        <input required name="price" className="input" type="number" placeholder="Cena" onChange={e => handleChange(e)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Obrázek (url)</label>
                    <div className="control">
                        <input required name="image" className="input" type="text" placeholder="Obrázek" onChange={e => handleChange(e)} />
                    </div>
                </div>

                {success ? <p className='has-text-success'>Úspěch!</p> : ''}

                <button className='button' onClick={handlePost}>
                    Přidat
                </button>
            </form>
        </>
    )
}

export default CreateBook