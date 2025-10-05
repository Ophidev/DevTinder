import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/Redux/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((appStore) => appStore?.requests);

  const reviewRequest = async () => {
    const res = await axios.get(BASE_URL + "/user/requests/received", {
      withCredentials: true,
    });

    dispatch(addRequests(res?.data?.data));
  };

  useEffect(() => {
    reviewRequest();
  }, []);

  if (!requests) return;

  if (requests.length === 0) return <h1>No request found</h1>;

  return (
    <div className="w-full flex justify-center p-5 overflow-scroll">
      {requests?.map((request) => {
        const { firstName, lastName, photoUrl, about, age, gender } =
          request?.fromUserId;
        return (
          <div className="w-[35%] bg-neutral flex gap-3 p-3 rounded-2xl justify-center">
            <img className="w-[100px] rounded-[50%]" src={photoUrl}></img>
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-2xl">
                {firstName + " " + lastName}
              </h1>
              {age && gender && (
                <p>{" age : " + age + " gender : " + gender}</p>
              )}
              <p>{about}</p>
              <div className="flex gap-3 p-2">
              <button className="btn btn-soft btn-primary">Accept</button>
              <button className="btn btn-soft btn-secondary">Reject</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
