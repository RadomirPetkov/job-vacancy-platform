import "./CreateOffer.css"


export const CreateOffer = () => {




    return <section id="create-page" className="auth">

        <form id="create" >
            <div className="create-container">
                <h5 className="create-company">The job offer is created by:</h5>
                <h1>Create Game</h1>
                <label htmlFor="possition">Job possition:</label>
                <input
                    className="create-input"
                    type="text"
                    id="possition"
                    name="possition"
                    placeholder="Enter job possition here"
                // value={values.title}
                // onChange={changeHandler}
                />
                <label htmlFor="description">Job description:</label>
                <textarea name="description" id="description" />

                <label htmlFor="vacancies">Available job possitions:</label>
                <input
                    type="number"
                    id="vacancies"
                    name="vacancies"
                    min={1}
                    placeholder={1}

                />

                <label htmlFor="salary">Salary:</label>
                <input
                    className="create-input"
                    type="text"
                    id="salary"
                    name="salary"
                    placeholder={`1 000 - 1 500 $`}
                // value={values.maxLevel}
                // onChange={changeHandler}
                />

                <label htmlFor="requirements">Requirements:</label>
                <textarea name="requirements" id="requirements" />

                <label htmlFor="game-img">Image:</label>
                <input
                    className="create-input"
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    placeholder="Upload a photo..."
                // value={values.imageUrl}
                // onChange={changeHandler}
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