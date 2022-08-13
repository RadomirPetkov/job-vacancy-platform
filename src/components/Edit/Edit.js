import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/authContext"
import "./Edit.css"
import * as requester from "../../services/requester"
import { useNavigate, useParams } from 'react-router-dom'


export const Edit = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const accessToken = user?.accessToken
    const ownerName = user?.name

    const [offer, setOffer] = useState()
    const [values, setValues] = useState({
        category: 'accounting',
        possition: '',
        summary: '',
        vacancies: 1,
        salary: '',
        requirements: '',
        imageUrl: '',
        ownerName,
        ownerId: ''
    })
    const { offerId } = useParams()


    useEffect(() => {
        requester.get(`/data/jobOffers/${offerId}`)
            .then(res => setValues(res))
    }, [])


    const changeHandler = (e) => {
        setValues((oldValues) => (
            { ...oldValues, [e.target.name]: e.target.value }
        ))
    }


    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await requester.put(`/data/jobOffers/${offerId}`, values, accessToken)

            navigate(`/details/${offerId}`)

        } catch (error) {
            // TODO: Add error handling
        }


    }

    return <section id="create-page" className="auth">

        <form id="create" onSubmit={submitHandler}>
            <div className="create-container">
                <h5 className="create-company">The job offer is created by: <span id="company-name">{user?.name}</span></h5>
                <h1>Create Game</h1>

                <label htmlFor="category" >Category</label>
                <select name="category" value={values.category} onChange={changeHandler}>
                    <option value="accounting">Accounting</option>
                    <option value="administration">Administration</option>
                    <option value="marketing">Marketing</option>
                    <option value="hotelsAndRestaurants">Hotels and Restaurants</option>
                    <option value="healthAndCare">Health and care</option>
                    <option value="construction">Construction</option>
                    <option value="finance">Finance</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="transportation">Transportation</option>
                    <option value="retail">Retail</option>
                    <option value="realEstate">Real Estate</option>
                </select>

                <label htmlFor="possition">Job possition:</label>
                <input
                    className="create-input"
                    type="text"
                    id="possition"
                    name="possition"
                    placeholder="Enter job possition here"
                    value={values.possition}
                    onChange={changeHandler}
                />
                <label htmlFor="summary">Job description:</label>
                <textarea
                    name="summary"
                    id="summary"
                    value={values.summary}
                    onChange={changeHandler}
                />

                <label htmlFor="vacancies">Available job possitions:</label>
                <input
                    type="number"
                    id="vacancies"
                    name="vacancies"
                    min={1}
                    placeholder={1}
                    value={values.vacancies}
                    onChange={changeHandler}
                />

                <label htmlFor="salary">Salary:</label>
                <input
                    className="create-input"
                    type="text"
                    id="salary"
                    name="salary"
                    placeholder={`1 000 - 1 500 $`}
                    value={values.salary}
                    onChange={changeHandler}
                />

                <label htmlFor="requirements">Requirements:</label>
                <textarea
                    name="requirements"
                    id="requirements"
                    value={values.requirements}
                    onChange={changeHandler} />

                <label htmlFor="company-logo">Image:</label>
                <input
                    className="create-input"
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    placeholder="Upload a photo..."
                    value={values.imageUrl}
                    onChange={changeHandler}
                />


                <input
                    className="btn submit"
                    type="submit"
                    defaultValue="Create Game"
                />





            </div>
        </form>
    </section>
}