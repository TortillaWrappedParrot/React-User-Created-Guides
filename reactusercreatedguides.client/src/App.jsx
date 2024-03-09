import { useEffect, useState } from 'react';
import './App.css';

//Filter function for filtering all rows
function FilterTable(event) {
    //Prevent reloading on submit
    event.preventDefault();

    //Form object from FormData
    const formData = Object.fromEntries(new FormData(event.target).entries());

    const tableRows = document.getElementsByTagName("tr"); //Get all table rows in the document
    
    for (let i = 1; i < tableRows.length; i++) {
        tableRows[i].style.display = tableRows[i].getElementsByTagName("td")[0].textContent.indexOf(formData['authorName']) > -1 ? "" : "none"; //Check author field

        if (tableRows[i].style.display != "none") { //Check if its been disabled by failing previous check
            tableRows[i].style.display = tableRows[i].getElementsByTagName("td")[1].textContent.indexOf(formData['programmingLanguage']) > -1 ? "" : "none"; //Check programming language field
        }

        if (tableRows[i].style.display != "none") { //Check if its been disabled by failing previous check
            tableRows[i].style.display = tableRows[i].getElementsByTagName("td")[2].textContent.indexOf(formData['language']) > -1 ? "" : "none"; //Check language field
        }
    }
}
//Post function for adding to database
async function PostGuide(event) {
    //Prevent reloading on submit
    event.preventDefault();

    //Form object from FormData
    const formData = Object.fromEntries(new FormData(event.target).entries());

    //Create post request
    await fetch('guide', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 0,
            author: formData['authorName'],
            programmingLanguage: formData['programmingLanguage'],
            language: formData['language'],
            briefSummary: formData['briefSummary'],
            detailedGuide: formData['detailedGuide']
        })
    });
}

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
            {/*Buttons and Search Bar*/}
            <div>
                <button data-bs-toggle="collapse" data-bs-target="#addGuide">Add Guide</button>
                <button data-bs-toggle="collapse" data-bs-target="#searchFilter">Filters</button>
            </div>
            {/*Add guide div*/}
            <div className="collapse" id="addGuide">
                <form className="text-white" id="addGuideForm" onSubmit={PostGuide}>
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
                    <label htmlFor="detailedGuide">Detailed Guide</label>
                    <br></br>
                    <textarea id="detailedGuide" cols="40" rows="5" name="detailedGuide"></textarea>
                    <br></br>
                    <br></br>
                    <input type="submit"></input>
                </form>
            </div>
            {/*Search filter div*/}
            <div className="collapse" id="searchFilter">
                <form className="text-white" id="searchFilterForm" onSubmit={FilterTable}>
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
                    <br></br>
                    <input type="submit"></input>
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