import React, { useEffect, useState } from "react";
import { FcApproval } from "react-icons/fc";
import Loading from "./Loading";
// import { FaGithub } from "react-icons/fa";

const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      setLoading(false);
      const response = await fetch("https://api.github.com/users");
      // const data=await response.json();
      setUsers(await response.json());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <h1>UseEffectAPI</h1>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((curElem) => {
            const { avatar_url, id, login, type } = curElem;
            return (
              <div className="col-10 col-md-4 mt-5" key={id}>
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      {" "}
                      <img
                        src={avatar_url}
                        className="rounded"
                        width="155"
                        alt=""
                      />{" "}
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">
                        {login} <FcApproval />{" "}
                      </h4>
                      <span className="text-left">{type}</span>
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="articles">Articles</span>{" "}
                          <span className="number1">38</span>{" "}
                        </div>
                        <div className="d-flex flex-column">
                          <span className="followers">Followers</span>{" "}
                          <span className="number2">980</span>{" "}
                        </div>
                        <div className="d-flex flex-column">
                          <span className="rating">Rating</span>{" "}
                          <span className="number3">8.9</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseEffectAPI;