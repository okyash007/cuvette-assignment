import React, { useEffect, useState } from "react";
import GroupNameCard from "../../components/GroupNameCard";
import Note from "./components/Note";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { makeGetRequest } from "../../utils/apis/makeGetRequest";
import { makePostRequest } from "../../utils/apis/makePostRequest";
import { backend_url } from "../../utils/constants";
import Loader1 from "../../components/Loader1";

const index = () => {
  const [text, setText] = useState("");
  const { id } = useParams();
  const [notes, setNotes] = useState(null);
  const [group, setGroup] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const navigate = useNavigate();

  async function getNotes(id) {
    const res = await makeGetRequest(`${backend_url}/note/${id}`);
    if (res.success) {
      setNotes(res.data.notes);
      setGroup(res.data.group);
    } else {
      navigate("/");
    }
  }

  useEffect(() => {
    setNotes(null);
    setText("");
    getNotes(id);
  }, [id]);

  async function addNote(text, id) {
    const res = await makePostRequest(`${backend_url}/note`, {
      text,
      group: id,
    });
    setButtonLoading(false);
    if (res.success) {
      setNotes((prev) => {
        return [...prev, res.data];
      });
      setText("");
    }
  }

  if (!notes || !group) {
    return (
      <div className="h-screen flex flex-col justify-center items-center max-sm:absolute max-sm:left-0 max-sm:w-full bg-[#DAE5F5]">
        <Loader1 color={"black"} size={30} stroke={5} />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col max-sm:absolute max-sm:left-0 max-sm:w-full">
      <div className="bg-[#001F8B] p-2 flex items-center gap-2">
        <Link className="hidden max-sm:inline" to={"/"}>
          <FaArrowLeftLong color="white" />
        </Link>
        <GroupNameCard name={group.name} dark={true} color={group.color} />
      </div>
      <div className="flex-grow bg-[#DAE5F5] p-3 overflow-y-auto buttons flex flex-col gap-3">
        {notes.map((m) => {
          return <Note note={m} key={m._id} />;
        })}
      </div>
      <div className="flex bg-blue-600 p-3 rounded-bl-xl relative">
        <div className="absolute bottom-4 right-6">
          {text === "" ? (
            <button>
              <IoSend size={20} color="#0000004a" />
            </button>
          ) : buttonLoading ? (
            <button>
              <Loader1 color={"black"} size={20} stroke={4}/>
            </button>
          ) : (
            <button>
              <IoSend
                size={20}
                color="blue"
                onClick={() => {
                  setButtonLoading(true);
                  addNote(text, id);
                }}
              />
            </button>
          )}
        </div>
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="flex-grow rounded-xl p-3"
          placeholder="Enter your text here.........."
          rows={4}
        ></textarea>
      </div>
    </div>
  );
};

export default index;
