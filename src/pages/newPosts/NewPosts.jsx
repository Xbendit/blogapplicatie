import "./NewPosts.css"
import {useForm} from 'react-hook-form'
import {useNavigate} from "react-router-dom";
import ReadTime from "../../assets/helpers/ReadTime.jsx";
import axios from 'axios';
import {useState} from "react";


function NewPosts() {
    const {register, handleSubmit} = useForm();
    /*const navigate = useNavigate()*/
    const todaydate = new Date();
    const today = todaydate.toISOString();
    const [IsSubmitted, setIsSubmitted] = useState(false);


    /*function onSubmit(data) {
        const readTime = ReadTime(data["message-content"]);

        /!*const postData = {
            ...data,
            readTime, // Voeg leestijd toe
        };*!/

        ;*/

    async function onSubmit(data) {

        try {
            const readTime = ReadTime(data["content"]);
            const postData = await axios.post('http://localhost:3000/posts/', {
                ...data,
                readTime,
            }, {
                'Content-Type': 'application/json'
            });
            setIsSubmitted(true);
            console.log(postData);

        } catch (e) {
            console.error(e);
            console.log('er is iets fout gegaan')
        }
        /*console.log(postData)*/


        /*navigate("/");*/
    }

    return (
        <div>
        {
            IsSubmitted ? (
                <p>bedankt he!</p>
            ) : (

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
                            {...register("content", {required: true, maxLength: 2000, minLength: 300})}
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
        </div>
    )
}

export default NewPosts;
