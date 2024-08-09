import React, { useState } from "react";
import { MdDone } from "react-icons/md";
import { makePostRequest } from "../utils/apis/makePostRequest";
import { useClickOutSide } from "../utils/hooks/useClickOutside";
import { backend_url } from "../utils/constants";
import Loader1 from "../components/Loader1";

const Modal = ({ setGroups, setModal }) => {
  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const [form, setForm] = useState({
    name: "",
    color: "",
  });

  const [error, setError] = useState({
    name: "",
    color: "",
  });

  const [loading, setLoading] = useState(false);

  async function createGroup() {
    const res = await makePostRequest(`${backend_url}/group`, form);
    setLoading(false);
    setModal(false);
    if (res.success === true) {
      setGroups((prev) => {
        return [...prev, res.data];
      });
    }
  }

  function handleClick() {
    setError({ name: "", color: "" });
    if (!form.name) {
      setError((prev) => {
        return { ...prev, name: "please enter name correctly" };
      });
    }
    if (!form.color) {
      setError((prev) => {
        return { ...prev, color: "please select color" };
      });
    }

    if (form.name && form.color) {
      setLoading(true);
      createGroup();
    }
  }

  const modalRef = useClickOutSide(() => {
    setModal(false);
  });

  return (
    <div className="w-full h-screen absolute bg-[#00000056] z-10 flex justify-center items-center">
      <div
        className="bg-white p-3 rounded-lg shadow- flex flex-col gap-2"
        ref={modalRef}
      >
        <div>
          <h1 className="text-xl font-semibold">Create New Group </h1>
        </div>
        <div className="flex gap-2 items-center">
          <label className="text-sm" htmlFor="">
            Group name
          </label>
          <div>
            <input
              type="text"
              placeholder="Enter Group Name"
              className="border-2 border-[#0000002a] py-1 px-2 rounded-xl"
              value={form.name}
              onChange={(e) => {
                setForm((prev) => {
                  return { ...prev, name: e.target.value };
                });
              }}
            />
            {error.name && <p className="text-red-600 text-xs">{error.name}</p>}
          </div>
        </div>
        <div className="flex gap-2">
          <p className="text-sm">Choose Color</p>
          <div>
            <div className="flex gap-1">
              {colors.map((m) => {
                return (
                  <div
                    key={m}
                    style={{ backgroundColor: m }}
                    className="w-6 h-6 rounded-full flex justify-center items-center"
                    onClick={() => {
                      setForm((prev) => {
                        return { ...prev, color: m };
                      });
                    }}
                  >
                    {form.color === m && <MdDone color="white" size={15} />}
                  </div>
                );
              })}
            </div>
            {error.color && (
              <p className="text-red-600 text-xs">{error.color}</p>
            )}
          </div>
        </div>
        <div className="text-end flex justify-end max-sm:justify-center">
          {loading ? (
            <button className="bg-blue-900 justify-center text-white py-1 px-3 rounded-lg flex w-[40%] max-sm:w-[80%]">
              <Loader1 color={"white"} size={20} stroke={3} />
            </button>
          ) : (
            <button
              className="bg-blue-900 text-white py-1 w-[40%] px-3 rounded-lg max-sm:w-[80%]"
              onClick={handleClick}
            >
              Create
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
