import React, { useEffect, useState } from "react";
import GroupNameCard from "../components/GroupNameCard";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import { makeGetRequest } from "../utils/apis/makeGetRequest";
import { backend_url } from "../utils/constants";
import Loader1 from "../components/Loader1";

const Layout = () => {
  const [modal, setModal] = useState(false);
  const [groups, setGroups] = useState(null);

  async function getGroups() {
    const res = await makeGetRequest(`${backend_url}/group`);
    setGroups(res.data);
  }

  useEffect(() => {
    getGroups();
  }, []);

  if (!groups) {
    return (
      <div className="w-max h-screen max-sm:w-screen flex flex-col gap-2 relative">
        <div className="p-4">
          <h1 className="text-2xl w-max">Pocket Notes</h1>
        </div>
        <div className="flex flex-col justify-center items-center flex-grow">
        <Loader1 color={"black"} size={30} stroke={5} />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-max h-screen max-sm:w-screen flex flex-col gap-2 relative">
        <div className="absolute bottom-2 right-2">
          <button
            className="bg-[#16008B] p-3 text-white rounded-full"
            onClick={() => {
              setModal(true);
            }}
          >
            <FaPlus size={30} />
          </button>
        </div>

        <div className="p-4 flex justify-center">
          <h1 className="text-2xl w-max">Pocket Notes</h1>
        </div>
        <div className="overflow-y-auto buttons flex flex-col">
          {groups.map((m) => {
            return (
              <NavLink
                key={m._id}
                to={"/" + m._id}
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "bg-[#0000003a] py-2 px-4 rounded-lg"
                    : "hover:bg-[#0000001a] py-2 px-4 rounded-lg"
                }
              >
                <GroupNameCard name={m.name} color={m.color} />
              </NavLink>
            );
          })}
        </div>
      </div>
      {modal && <Modal setGroups={setGroups} setModal={setModal} />}
    </>
  );
};

export default Layout;
