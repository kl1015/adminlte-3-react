import React from 'react';
import SmallBox from '../components/small-box/SmallBox';

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={30}
                        title="Patients"
                        type="info"
                        icon="ion-android-people"
                        navigateTo="/profile"
                    />
                </div>
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={25}
                        title="Libraries"
                        type="success"
                        navigateTo="/"
                    />
                </div>
                {/* <div className="col-lg-3 col-6">
                    <SmallBox
                        count={44}
                        title="User Registrations"
                        type="warning"
                        navigateTo="/"
                    />
                </div>
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={65}
                        title="Unique Visitors"
                        type="danger"
                        navigateTo="/"
                    />
                </div> */}
            </div>
        </div>
    );
};

export default Dashboard;
