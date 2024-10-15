import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Admin = () => {
  const { notice, serverUrl, getNotice } = useAuth();
  const [data, setData] = useState({ desc: "" });
  const [isEditing, setIsEditing] = useState(false);  // State to track edit mode
  const [editId, setEditId] = useState(null);  // Store the id of the notice being edited

  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if it's edit mode or add mode
      const url = isEditing
        ? `${serverUrl}/api/update-notice/${editId}`
        : `${serverUrl}/api/add-notice`;

      const method = isEditing ? "PUT" : "POST";  // Use PUT for edit, POST for add

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res_data = await response.json();
      console.log(res_data);

      getNotice();
      toast.success(isEditing ? "Notice updated successfully!" : "Notice added successfully!", {
        theme: "dark",
        autoClose: 2000,
      });

      setData({ desc: "" });  // Reset the form
      setIsEditing(false);  // Exit edit mode
      setEditId(null);  // Clear the edit id
    } catch (error) {
      console.log(error);
      toast.error(isEditing ? "Failed to update notice!" : "Failed to add notice! (Internal Server Error)", {
        theme: "dark",
        autoClose: 3000,
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${serverUrl}/api/delete-notice/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res_data = await response.json();
      console.log(res_data);
      getNotice();
      toast.success("Notice deleted successfully!", {
        theme: "dark",
        autoClose: 2000,
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete notice! (Internal Server Error)", {
        theme: "dark",
        autoClose: 3000,
      });
    }
  };

  const handleEdit = (id) => {
    const noticeToEdit = notice.find((item) => item._id === id);
    setData({ desc: noticeToEdit.desc });  // Prefill the form with notice data
    setIsEditing(true);  // Enable edit mode
    setEditId(id);  // Store the id of the notice being edited
  };

  return (
    <div>
      <div className="p-4 space-y-6 ">
        <h1 className="font-bold text-2xl mb-10 font-[gilroy] mt-16">Admin Panel</h1>

        <span className="bg-primary-100 px-4 py-2 text-lg font-semibold font-[gilroy]">
          {isEditing ? "Edit notice" : "Add new notice"}
        </span>

        <div className="flex flex-col items-center justify-center">
          <form onSubmit={handleSubmit}>
            <textarea
              name="desc"
              value={data.desc}
              cols="35"
              rows="10"
              placeholder="Write your notice here..."
              required
              className="p-4 w-full italic text-zinc-900"
              onChange={handleChange}
            ></textarea>
            <button className="font-[gilroy] px-6 py-2 text-xl bg-primary-200 text-zinc-700 ">
              {isEditing ? "Update" : "Submit"}
            </button>
          </form>
        </div>

        <div className="py-10">
          <h1 className="font-semibold text-xl tracking-wide uppercase">
            Current notices
          </h1>
          <ol className="mt-5">
            {notice.length === 0 && (
              <p className="text-primary-100 font-semibold">No notice Yet!</p>
            )}
            {notice.map((item) => {
              return (
                <div key={item._id} className="flex flex-col items-start mt-2 bg-zinc-800 rounded-md p-2">
                  <li className="text-zinc-200  font-[gilroy-light]">{item.desc}</li>
                  <div className="mt-2">
                    <button
                      className="px-2 py-1 bg-red-700 text-white mr-4"
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                    >
                      DELETE
                    </button>
                    <button
                      className="px-2 py-1 bg-yellow-500 text-white"
                      onClick={() => {
                        handleEdit(item._id);
                      }}
                    >
                      EDIT
                    </button>
                  </div>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Admin;
