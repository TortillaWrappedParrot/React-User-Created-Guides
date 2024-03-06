import { useEffect, useState } from 'react';
import './App.css';

function App() {
    //guides is the current state, or what the website displays starting off
    //setGuides is the update function in this case the setGuides function which is updated from the useEffect below
    const [guides, setGuides] = useState();

    //Fetches data from the server using the provided function
    useEffect(() => {
        populateGuideData();
    }, []); //[] makes sure it only fetches once the site is refreshed

    const contents = guides === undefined
        //If guides is undefined show a loading message
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        //Else display main page content
        : <table className="bg-transparent text-dark table table-striped" aria-labelledby="tabelLabel">
                <thead>
                <tr>
                        <th>ID</th>
                        <th>Author</th>
                        <th>Programming Language</th>
                        <th>Language</th>
                        <th>Brief Summary</th>
                        <th>Detailed Guide</th>
                    </tr>
                </thead>
                <tbody>
                    {guides.map(guide =>
                        //Map each part of the guide to a section
                        <tr key={guide.id}>
                            <td>{guide.id}</td>
                            <td>{guide.author}</td>
                            <td>{guide.programmingLanguage}</td>
                            <td>{guide.language}</td>
                            <td>{guide.briefSummary}</td>
                            <td>{guide.detailedGuide}</td>
                        </tr>
                    )}
                </tbody>
            </table>;

    //Returned page content
    return (
        <div>
            <h1 id="tabelLabel" className="text-white">User Created Guides</h1>
            <div>
                <button>Add Guide</button>
                <input type="text" placeholder="Search.."></input>
                <button>Filters</button>
            </div>
            <div>
                <form className="text-white">
                    <label htmlFor="authorName">Author Name</label>
                    <br></br>
                    <input type="text" id="authorName" name="authorName"></input>
                    <br></br>
                    <label htmlFor="programmingLanguage">Programming Language</label>
                    <br></br>
                    <input type="text" id="programmingLanguage" name="programmingLanguage"></input>
                    <br></br>
                    <label htmlFor="language">Language</label>
                    <br></br>
                    <input type="text" id="language" name="language"></input>
                    <br></br>
                    <label htmlFor="briefSummary">Brief Sumary</label>
                    <br></br>
                    <textarea id="briefSummary" cols="40" rows="5" name="briefSummary"></textarea>
                    <br></br>
                    <label htmlFor="DetailedGuide">Detailed Guide</label>
                    <br></br>
                    <textarea id="DetailedGuide" cols="40" rows="5" name="DetailedGuide"></textarea>
                    <br></br>
                    <br></br>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
            {contents}
        </div>
    );

    //Function for fetching guide data
    async function populateGuideData() {
        //Get Guides from controller
        const response = await fetch('guide');
        //Convert it to json
        const data = await response.json();
        //Call the update state function
        setGuides(data);
    }
}

export default App;