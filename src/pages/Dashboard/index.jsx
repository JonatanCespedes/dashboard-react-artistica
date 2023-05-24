import { Card } from "../../components/Card"

export const Dashboard = () => {
    return (
        /* <!-- Content Row Top --> */
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
        
            {/* <!-- Content Row Movies--> */}
            <div className="row">
                <Card/>
            </div>

            <div className="row">

            </div>
        </div>
    )
}