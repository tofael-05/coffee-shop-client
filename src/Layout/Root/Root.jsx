import { Outlet } from 'react-router-dom';
import FollowingInsta from '../../component/FollowingInsta';
import Banner from '../../component/Banner';

const Root = () => {
    return (
        <div>
            <Banner/>
            <div className="max-w-[1240px] mx-auto px-4">
                <Outlet />
                <FollowingInsta/>
            </div>
        </div>
    );
};

export default Root;