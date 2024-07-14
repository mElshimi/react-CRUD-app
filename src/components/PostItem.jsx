import { Button, Card, Modal, Tooltip } from "flowbite-react";
import { MdDeleteForever } from "react-icons/md";

import { useState } from "react";
import ModalDelete from "./ModalDelete";

export default function PostItem({ records, deleteRecord }) {
  const [openModal, setOpenModal] = useState(false);
  const [id, setID] = useState(null);

  const deleteHandler = (id) => {
    deleteRecord(id);
    setOpenModal(false);
  };

  const recordsList = records.map((item) => (
    <div
      key={item.id}
      className="w-11/12 bg-white text-center flex flex-col justify-between dark:bg-slate-800 shadow-lg rounded-lg py-5 px-3 mx-auto "
    >
      <div>
        <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
          {item.title}
        </h5>
        <p className="font-normal text-gray-700 py-5 dark:text-gray-400">
          {item.description}
        </p>
      </div>

      <div className="text-center flex justify-center">
        <Tooltip content="delete" placement="bottom">
          <button
            onClick={() => {
              setOpenModal(true);
              setID(item.id);
            }}
            type="button"
            aria-label="delete post"
            className="text-red-600 hover:underline dark:text-red-500"
          >
            <MdDeleteForever className=" text-lg" />
          </button>
        </Tooltip>
      </div>
    </div>
  ));

  return (
    <>
      <div className="md:w-5/6 mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-3">
        {recordsList}
        <ModalDelete
          openModal={openModal}
          setOpenModal={setOpenModal}
          deleteHandler={deleteHandler}
          id={id}
        />
      </div>
    </>
  );
}
