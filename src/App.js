import logo from './logo.svg';
import './App.css';
import Sidebar from "./Sidebar";
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Studentlist from "./Studentlist";
import Attendancelist from './Attendancelist';
import Addattendance from './Addattendance';
import {
  BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";
function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
      <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">

              <Routes>
                <Route path="/dashboard" element={<Dashboard />} /><Route/>
                <Route path="/Student-list" element={<Studentlist />} /><Route/>
                <Route path="/Student/:id" element={<Attendancelist/>}></Route>
                <Route path="/add-attendance/:id" element={<Addattendance/>}></Route>
              </Routes>

            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
