/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {ContentHeader} from '@components';

const Blank = () => {
    return (
        <div>
            <ContentHeader title="Most frequently used sentences" />
            <section className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Patient: Alex Chan</h3>
                            <div className="card-tools">
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-widget="collapse"
                                    data-toggle="tooltip"
                                    title="Collapse"
                                >
                                    <i className="fa fa-minus" />
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-widget="remove"
                                    data-toggle="tooltip"
                                    title="Remove"
                                >
                                    <i className="fa fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="words">
                                <span>I go to school by bus.</span>
                                <span>15</span>
                            </div>
                            <div className="words">
                                <span>Go toilet now</span>
                                <span>12</span>
                            </div>
                            <div className="words">
                                <span>I am hungry</span>
                                <span>10</span>
                            </div>
                            <div className="words">
                                <span>What time</span>
                                <span>9</span>
                            </div>
                            <div className="words">
                                <span>I feel painful</span>
                                <span>5</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            Lastest Update: 20/12/2021
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Patient: David Lee</h3>
                            <div className="card-tools">
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-widget="collapse"
                                    data-toggle="tooltip"
                                    title="Collapse"
                                >
                                    <i className="fa fa-minus" />
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-widget="remove"
                                    data-toggle="tooltip"
                                    title="Remove"
                                >
                                    <i className="fa fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="words">
                                <span>我想返宿舍</span>
                                <span>17</span>
                            </div>
                            <div className="words">
                                <span>我好頭痛</span>
                                <span>16</span>
                            </div>
                            <div className="words">
                                <span>唔好</span>
                                <span>13</span>
                            </div>
                            <div className="words">
                                <span>幾時食飯</span>
                                <span>12</span>
                            </div>
                            <div className="words">
                                <span>我要去廁所</span>
                                <span>10</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            Lastest Update: 20/12/2021
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blank;
