import './App.css'
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Languages  from "./pages/it/Languages/Languages.tsx";
import Algorithms from "./pages/it/Algorithms/Algorithms.tsx";
import Frontend from "./pages/it/Frontend/Frontend.tsx";
import Backend from "./pages/it/Backend/Backend.tsx";
import Database from "./pages/it/Database/Database.tsx";
import DataScience from "./pages/it/DataScience/DataScience.tsx";
import Docker from "./pages/it/Docker/Docker.tsx";
import Git from "./pages/it/Git/Git.tsx";
import Python from "./pages/it/Languages/Python/Python.tsx";
import DataStructures from "./pages/it/DataStructures/DataStructures.tsx";
import Javascript from "./pages/it/Languages/Javascript/Javascript.tsx";
import Typescript from "./pages/it/Languages/Typescript/Typescript.tsx";
import ObjectJs from "./pages/it/Languages/Javascript/Object/ObjectJs.tsx";


const App: React.FC = () => {

    const [section, setSection] = React.useState<string>('frontend');

    const handleSectionChange = (newSection: string) => {
        setSection(newSection);
    }

    return (
        <BrowserRouter>
            <div className="app">
                <div className="header-container">
                    <div className="navbar">
                        <Navbar onSectionChange={handleSectionChange} />
                    </div>
                </div>
                <div className="body-container">
                    <div className="sidebar">
                        <Sidebar section={section} />
                    </div>
                <div className="main-content">
                    <Routes>
                        <Route path="/it/languages" element={<Languages/>} />
                        <Route path="/it/languages/javascript" element={<Javascript/>} />
                        <Route path="/it/languages/javascript/object" element={<ObjectJs/>} />
                        <Route path="/it/languages/typescript" element={<Typescript/>} />
                        <Route path="/it/languages/python" element={<Python/>} />
                        <Route path="/it/algorithms" element={<Algorithms/>} />
                        <Route path="/it/datastructures" element={<DataStructures/>} />
                        <Route path="/it/frontend" element={<Frontend/>} />
                        <Route path="/it/backend" element={<Backend/>} />
                        <Route path="/it/database" element={<Database/>} />
                        <Route path="/it/datascience" element={<DataScience/>} />
                        <Route path="/it/git" element={<Git/>} />
                        <Route path="/it/docker" element={<Docker/>} />
                        <Route path="/" element={
                            <div>
                                <h1>Benvenuto!</h1>
                                <p>Seleziona una sezione dalla navbar.</p>
                            </div>
                        } />
                    </Routes>
                </div>
            </div>
        </div>
    </BrowserRouter>
    );
}

export default App
