import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/Redux/feedSlice";
import appStore from "../utils/Redux/appStore";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((appStore) => appStore?.feed);

  const getFeed = async () => {
    if (feed) return;

    const res = await axios.get(BASE_URL + "/feed", { withCredentials: true });

    dispatch(addFeed(res?.data));
  };

  useEffect(() => {
    getFeed();
  }, []);

  if(!feed) return;

  if(feed.length <= 0) <h1 className="text-center">no Feed!</h1>;

  return (
    feed && (
      <div className="flex justify-center p-5 mb-15">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
