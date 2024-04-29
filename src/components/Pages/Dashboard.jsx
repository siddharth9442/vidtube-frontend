import React, { useState } from "react";
import Block from "./Block";
import { getChannelStats } from "../conf/Dashboard";
import { useEffect } from "react";
import { getCurrentUser } from "../conf/User";

const Dashboard = () => {
  const [stats, setStats] = useState("");
  const [user, setUser] = useState("");
  useEffect(() => {
    (async () => {
      const response = await getChannelStats();
      if (response) setStats(response);
      const user = await getCurrentUser();
      if (user) setUser(user);
    })();
  }, []);

  return (
    <div>
      <div
        className="flex gap-x-20 p-2 bg-black text-white bg-cover"
        style={{
          backgroundImage: `url(${user.coverImage})`,
          backgroundColor: "rgba(0, 0, 0, 0.05)",
        }}
      >
        <div className="flex flex-col gap-y-4">
          <img
            className="h-32 rounded-full"
            src={`${user.avatar}`}
            alt="profile"
          />
          <p className="text-center text-2xl mb-2">{user.username}</p>
        </div>
        <div className="flex flex-col justify-center space-y-4 h-24 mt-6">
          <h1 className="text-5xl font-bold"> {user.fullName} </h1>
          <a href={`mailto:${user.email}`}> {user.email} </a>
        </div>
      </div>
      <div className="p-2 w-full h-ful grid grid-cols-4 gap-4">
        <Block title="Playlists" count={stats?.totalPlaylists} />
        <Block title="Subscribers" count={stats?.subscribers} />
        <Block title="Subscriptions" count={stats?.subscriptions} />
        <Block title="Videos" count={stats?.totalVideos} />
        <Block title="Likes" count={stats?.totalLikes} />
        <Block title="Comments" count={stats?.totalComments} />
        <Block title="Tweets" count={stats?.totalVideos} />
      </div>
    </div>
  );
};

export default Dashboard;
