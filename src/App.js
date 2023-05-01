import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CompanyData from "./pages/CompanyData";
import Invoices from "./pages/Invoices";
import MaintenanceHistory from "./pages/MaintenanceHistory";
import PurchaseTokens from "./pages/PurchaseTokens";
// admin
import AddCompany from "./pages/admin/AddCompany";
import AddInvoice from "./pages/admin/AddInvoice";
import AllCompanies from "./pages/admin/AllCompanies";
import AllInvoices from "./pages/admin/AllInvoices";
import AddMaintenanceHistory from "./pages/admin/AddMaintenanceHistory";
import AdminMaintenanceHistory from "./pages/admin/AdminMaintenanceHistory";
import AddTokens from "./pages/admin/AddTokens";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
  redirect
} from "react-router-dom";

function App() {
  return (
    
    <>
    <Router>
        <Switch>
            <Route exact path="/"  element={<Login/>}/>
            <Route exact path="/signup"  element={<SignUp/>}/>
            <Route exact path='/company/data' element={<CompanyData/>}/>
            <Route exact path='/invoices' element={<Invoices/>}/>
            <Route exact path='/maintenance/history' element={<MaintenanceHistory/>}/>
            <Route exact path='/tokens/purchase' element={<PurchaseTokens/>}/>
            {/* ======================== Admin ===================== */}
            <Route exact path='/admin/companies' element={<AllCompanies/>}/>
            <Route exact path='/admin/invoices' element={<AllInvoices/>}/>
            <Route exact path='/admin/company/add' element={<AddCompany/>}/>
            <Route exact path='/admin/invoice/add' element={<AddInvoice/>}/>
            <Route exact path='/admin/maintenance/history/add' element={<AddMaintenanceHistory/>}/>
            <Route exact path='/admin/maintenance/history' element={<AdminMaintenanceHistory/>}/>
            <Route exact path='/admin/token/add' element={<AddTokens/>}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
