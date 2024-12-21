import './Home.css';
import axios from 'axios';

function Home () {

   /* async function getPosts() {

        try {
            const result = await axios.get('http://localhost:3000/posts');
            console.log(result);
        } catch (e) {
            console.error(e);
        }
    }*/

   /* async function getPost6() {

        try {
            const result = await axios.get('http://localhost:3000/posts/6');
            console.log(result);
        } catch (e) {
            console.error(e);
        }
    }*/
    /*async function addPost() {

        try {

            const result = await axios.post('http://localhost:3000/posts', {
                "title": "Wat gebruiker heeft ingevuld",
                "subtitle": "Wat gebruiker heeft ingevuld",
                "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
                "author": "Voornaam achternaam",
                "created": "2023-09-21T09:30:00Z",
                "readTime": 1,
                "comments": 0,
                "shares": 0
            }, {
                'Content-Type': 'application/json'
            });

            console.log(result);

        } catch (e) {
            console.error(e);
            console.log('er is iets fout gegaan')
        }
    }*/
   /* async function deletePoste() {

        try {
            const result = await axios.delete('http://localhost:3000/posts/12');
            console.log(result);
        } catch (e) {
            console.error(e);
            console.log('er is iets fout gegaan')
        }
    }*/



    return(
        <>
            <h1>Dit is de Home pagina</h1>

            {/*<button type="button" onClick={getPosts}> Haal gegevens op</button>
            <button type="button" onClick={getPost6}> Haal specifieke post op</button>
            <button type="button" onClick={addPost}> Voeg data toe</button>
            <button type="button" onClick={deletePoste}> Verwijder data</button>*/}
        </>
    );
}

export default Home;