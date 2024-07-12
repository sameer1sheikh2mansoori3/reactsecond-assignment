import axios from "axios";
import { useEffect, useState } from "react";
import MyLoader from "./Loader";
const Content = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await axios.get(
      `https://602e7c2c4410730017c50b9d.mockapi.io/users`
    );
    setData(res.data);
    console.log(data);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 4000);
  }, []);

  return (
    <div className="flex flex-col justify-center border-2 w-[60%]  overflow-y-auto ">
      <div className="flex flex-col justify-start my-2 h-[100vh] ">
        {data ? (
          data.map((val, index) => (
            <div
              key={index}
              className="py-2 mx-2 cursor-pointer rounded px-2  my-2 border-2 flex flex-row hover:bg-gray-200"
            >
              <div className="flex items-center">
                <img
                  className="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={val.avatar}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center p-2 text-xl">
                <h1 className="font-bold">{val.profile.username}</h1>
                <h1 className="text-gray-500">{val.jobTitle}</h1>
                <h2>{val.Bio}</h2>
              </div>
            </div>
          ))
        ) : (
          <>
            <MyLoader />
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
