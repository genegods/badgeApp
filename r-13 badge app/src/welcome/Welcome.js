import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCount } from "../redux/weatherRedux/add.actions";
import { COUNT_KEY } from "../redux/weatherRedux/add.reducer";
import facebook from "../asserts/facebook.png";

const Welcome = () => {
  let dispatch = useDispatch();

  // view data
  let viewCount = useSelector((state) => {
    return state[COUNT_KEY];
  });

  // handle increment
  let handleIncrement = () => {
    dispatch(fetchCount());
  };
  return (
    <React.Fragment>
      <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card text-center ">
            <div className="card-header">
              <h2 className="font-weight-bold">BADGE APP</h2>
            </div>
            <div className="card-body badgeWrapper   ">
              
                <img src={facebook} alt="facebook" className='facebookImage' />
                {viewCount.count === 0 ? null : <span>{viewCount.count}</span>}
              
            </div>

            <div className="card-footer">
              <button
                onClick={handleIncrement}
                className="btn btn-success mt-5 font-weight-bold"
              >
                send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
