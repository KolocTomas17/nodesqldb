import { useEffect, useState } from "react"
import { useParams } from "react-router";

const UpdateBook = () => {
    const { id } = useParams()
    const [book, setBook] = useState({});
    const [formData, setFormData] = useState({});
    const [success, setSuccess] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const getBook = async () => {
        const res = await fetch(`http://localhost:3000/book/${id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "GET",
        });
        const data = await res.json();
        setBook(data);
        setLoaded(true);
    }

    useEffect(() => {
        getBook()
        console.log(book)
    }, [])

    const updateBook = async () => {
        const res = await fetch(`http://localhost:3000/book/${id}`, {
            method: "PUT",
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
        updateBook();
    }

    if (!loaded) {
        return (
            <>
                <p>Loading book...</p>
            </>
        )
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

export default UpdateBook