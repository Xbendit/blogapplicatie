import "./NewPosts.css"
import {useForm} from 'react-hook-form'
import {useNavigate} from "react-router-dom";
import ReadTime from "../../assets/helpers/ReadTime.jsx";


function NewPosts() {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate()
    const todaydate = new Date();
    const today = todaydate.toISOString()




    function onSubmit(data) {
        const readTime = ReadTime(data["message-content"]);
        const postData = {
            ...data,
            readTime, // Voeg leestijd toe
        };
        console.log(postData)
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title-field">
                Titel:
                <input
                    type="text"
                    id="name-field"
                    {...register("title", {required: true, maxLength: 30})}
                />
            </label>

            <label htmlFor="subtitle-field">
                Subtitel:
                <input
                    type="text"
                    id="subtitel-field"
                    {...register("subtitel", {required: true, maxLength: 30})}
                />
            </label>

            <label htmlFor="author-field">
                Auteur:
                <input
                    type="text"
                    id="author-field"
                    {...register("author", {required: true, maxLength: 30})}
                />
            </label>

            <label htmlFor="message-field">
                Bericht:
                <textarea
                    id="message-field"
                    rows="6"
                    cols="80"
                    placeholder="Maak een Post!"
                    {...register("message-content", {required: true, maxLength: 2000, minLength: 300})}
                >
        </textarea>
            </label>

            <input
                type="hidden"
                value={today}
                {...register("created")}
            />
            <input
                type="hidden"
                value={0}
                {...register("comments")}
            />
            <input
                type="hidden"
                value={0}
                {...register("shares")}
            />

            <button type="submit">
                Versturen
            </button>
        </form>
    )
}

export default NewPosts;
