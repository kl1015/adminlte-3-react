import React from 'react';
import {Link} from 'react-router-dom';

const TimelineTab = ({isActive}) => {
    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
            {/* The timeline */}
            <div className="timeline timeline-inverse">
                {/* timeline time label */}
                <div className="time-label">
                    <span className="bg-danger">21 Dec. 2021</span>
                </div>
                {/* /.timeline-label */}
                {/* timeline item */}
                <div>
                    <i className="fas fa-envelope bg-primary" />
                    <div className="timeline-item">
                        <span className="time">
                            <i className="far fa-clock" />
                            <span> 12:05</span>
                        </span>
                        <h3 className="timeline-header">
                            <Link to="/">System Analysis</Link>
                            {/* <span> sent you an email</span> */}
                        </h3>
                        <div className="timeline-body">
                            Patient performs weak in grammar for long sentences.
                        </div>
                        <div className="timeline-footer">
                            <Link to="/" className="btn btn-primary btn-sm">
                                Read more
                            </Link>
                            <Link to="/" className="btn btn-danger btn-sm">
                                Delete
                            </Link>
                        </div>
                    </div>
                </div>
                {/* END timeline item */}
                {/* timeline item */}
                {/* <div>
                    <i className="fas fa-user bg-info" />
                    <div className="timeline-item">
                        <span className="time">
                            <i className="far fa-clock" />
                            <span> 5 mins ago</span>
                        </span>
                        <h3 className="timeline-header border-0">
                            <Link to="/">Sarah Young</Link>
                            <span> accepted your friend request</span>
                        </h3>
                    </div>
                </div> */}
                {/* END timeline item */}
                {/* timeline item */}
                <div>
                    <i className="fas fa-comments bg-warning" />
                    <div className="timeline-item">
                        <span className="time">
                            <i className="far fa-clock" />
                            <span> 27 mins ago</span>
                        </span>
                        <h3 className="timeline-header">
                            <Link to="/">Weekly Suggestion</Link>
                            {/* <span> commented on your post</span> */}
                        </h3>
                        <div className="timeline-body">
                            Please pay attention to the grammar of the
                            sentences.
                        </div>
                        <div className="timeline-footer">
                            <Link
                                to="/"
                                className="btn btn-warning btn-flat btn-sm"
                            >
                                View comment
                            </Link>
                        </div>
                    </div>
                </div>
                {/* END timeline item */}
                {/* timeline time label */}
                <div className="time-label">
                    <span className="bg-success">21 Dec. 2021</span>
                </div>
                {/* /.timeline-label */}
                {/* timeline item */}
                <div>
                    <i className="fas fa-camera bg-purple" />
                    <div className="timeline-item">
                        <span className="time">
                            <i className="far fa-clock" />
                            <span> 2 days ago</span>
                        </span>
                        <h3 className="timeline-header">
                            <Link to="/">Mina Lee</Link>
                            <span> uploaded new photos</span>
                        </h3>
                        <div className="timeline-body">
                            <img src="http://placehold.it/150x100" alt="..." />
                            <img src="http://placehold.it/150x100" alt="..." />
                            <img src="http://placehold.it/150x100" alt="..." />
                            <img src="http://placehold.it/150x100" alt="..." />
                        </div>
                    </div>
                </div>
                {/* END timeline item */}
                <div>
                    <i className="far fa-clock bg-gray" />
                </div>
            </div>
        </div>
    );
};

export default TimelineTab;
