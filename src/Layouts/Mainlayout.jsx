import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div>
            <Outlet></Outlet>
            {/* <h1>hello dexpress</h1> */}
        </div>
    );
};

export default Mainlayout;