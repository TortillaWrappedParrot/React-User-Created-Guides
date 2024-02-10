import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [guides, setGuides] = useState();

    useEffect(() => {
        populateGuideData();
    }, []);

    const contents = guides === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
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

    return (
        <div>
            <h1 id="tabelLabel">User Created Guides</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
    
    async function populateGuideData() {
        const response = await fetch('guide');
        const data = await response.json();
        setGuides(data);
    }
}

export default App;