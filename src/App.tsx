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
import ObjectJs from "./pages/it/Languages/Javascript/Objects/ObjectJs.tsx";
import VariablePy from "./pages/it/Languages/Python/Variables/VariablePy.tsx";
import ListPy from "./pages/it/Languages/Python/Lists/ListPy.tsx";
import DictionaryPy from "./pages/it/Languages/Python/Dictionaries/DictionaryPy.tsx";
import SetPy from "./pages/it/Languages/Python/Sets/SetPy.tsx";
import StringPy from "./pages/it/Languages/Python/Strings/StringPy.tsx";
import Html from "./pages/it/Frontend/Html/HtmlFe.tsx";
import Css from "./pages/it/Frontend/Css/CssFe.tsx";
import ReactFe from "./pages/it/Frontend/React/ReactFe.tsx";
import NodeJsBe from "./pages/it/Backend/NodeJs/NodeJsBe.tsx";
import QANodeJsBe from "./pages/it/Backend/NodeJs/Q&A/QANodeJs.tsx";
import ErrorFirstCB from "./pages/it/Backend/NodeJs/ErrorFirstCB/ErrorFirstCB.tsx";
import CoreModuleNodeJs from "./pages/it/Backend/NodeJs/CoreModulesNodeJS/CoreModuleNodeJs.tsx";
import Php from "./pages/it/Languages/Php/Php.tsx";
import ArrayMethods from "./pages/it/Languages/Javascript/Arrays/Methods/ArrayMethods.tsx";
import ConsoleMethods from "./pages/it/Languages/Javascript/Console/ConsoleMethods.tsx";
import Http from "./pages/it/HTTP/Http.tsx";
import HttpStatusCodes from "./pages/it/HTTP/HttpStatusCodes/HttpStatusCodes.tsx";


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
                        <Route path="/it/languages/javascript/console" element={<ConsoleMethods/>} />
                        <Route path="/it/languages/javascript/arrays" element={<ArrayMethods/>} />
                        <Route path="/it/languages/javascript/objects" element={<ObjectJs/>} />
                        <Route path="/it/languages/typescript" element={<Typescript/>} />
                        <Route path="/it/languages/python" element={<Python/>} />
                        <Route path="/it/languages/python/strings" element={<StringPy/>} />
                        <Route path="/it/languages/python/variables" element={<VariablePy/>} />
                        <Route path="/it/languages/python/lists" element={<ListPy/>} />
                        <Route path="/it/languages/python/dictionaries" element={<DictionaryPy/>} />
                        <Route path="/it/languages/python/sets" element={<SetPy/>} />
                        <Route path="/it/languages/php" element={<Php/>} />

                        <Route path="/it/algorithms" element={<Algorithms/>} />
                        <Route path="/it/datastructures" element={<DataStructures/>} />
                        <Route path="/it/frontend" element={<Frontend/>} />
                        <Route path="/it/frontend/html" element={<Html/>} />
                        <Route path="/it/frontend/css" element={<Css/>} />
                        <Route path="/it/frontend/react" element={<ReactFe/>} />
                        <Route path="/it/backend" element={<Backend/>} />
                        <Route path="/it/backend/nodejs" element={<NodeJsBe/>} />
                        <Route path="/it/backend/nodejs/coremodules" element={<CoreModuleNodeJs/>} />
                        <Route path="/it/backend/nodejs/errorfirst" element={<ErrorFirstCB/>} />
                        <Route path="/it/backend/nodejs/qa" element={<QANodeJsBe/>} />
                        <Route path="/it/http" element={<Http/>} />
                        <Route path="/it/http/statuscodes" element={<HttpStatusCodes/>} />

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
