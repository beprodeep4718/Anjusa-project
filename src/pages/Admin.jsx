import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { NoticeContext } from "../store/noticeContext";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { notice, getNotice } = useContext(NoticeContext);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [image, setImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isEditing
        ? `${import.meta.env.VITE_SERVER_URL}/api/update-notice/${editId}`
        : `${import.meta.env.VITE_SERVER_URL}/api/add-notice`;

      const method = isEditing ? "PUT" : "POST";
      const formdata = new FormData();
      if (data) formdata.append("desc", data);
      if (image) formdata.append("image", image);
      const response = await fetch(url, {
        method,
        body: formdata,
      });
      const res_data = await response.json();
      console.log(res_data);
      getNotice();
      toast.success(
        isEditing
          ? "Notice updated successfully!"
          : "Notice added successfully!",
        { theme: "dark", autoClose: 2000 }
      );
      setData({ desc: "" });
      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      console.log(error);
      toast.error(
        isEditing
          ? "Failed to update notice!"
          : "Failed to add notice! (Internal Server Error)",
        { theme: "dark", autoClose: 3000 }
      );
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/delete-notice/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

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
    setData({ desc: noticeToEdit.desc });
    setIsEditing(true);
    setEditId(id);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="p-4 space-y-6 ">
      <div className="flex w-full items-center justify-between mb-10 mt-20">
        <h1 className="font-bold text-2xl  font-[gilroy] flex flex-col">
          Welcome <br /> {user ? user.name : "Guest"} 👋
        </h1>

        <button
          className="px-4 py-2 bg-red-600 text-lg font-semibold"
          onClick={handleLogout}
        >
          Log Out <i className="ri-logout-box-r-line"></i>
        </button>
      </div>
      <div className="w-full flex items-center justify-between gap-5 flex-wrap">
        <div className="flex-1">
          <span className="bg-primary-100 px-4 py-2 text-lg font-semibold font-[gilroy]">
            {isEditing ? "Edit notice" : "Add new notice"}
          </span>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-center gap-2"
          >
            <textarea
              name="desc"
              value={data.desc}
              placeholder="Write your notice here..."
              required
              className="p-4 w-full h-52 placeholder:italic outline-none text-zinc-900"
              onChange={handleChange}
            ></textarea>
            <input
              type="file"
              className="w-full p-2 border rounded"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button className="font-[gilroy] px-6 py-2 text-xl bg-primary-200 text-zinc-700 rounded-md">
              {isEditing ? "Update" : "Submit"}
            </button>
          </form>
        </div>
        <div className="flex-1 py-10">
          <h1 className="font-semibold text-xl tracking-wide uppercase">
            Current notices
          </h1>
          <ol className="mt-5">
            {notice.length === 0 && (
              <p className="text-primary-100 font-semibold">No notice Yet!</p>
            )}
            {notice.map((item) => (
              <div
                key={item._id}
                className="flex flex-col items-start mt-2 bg-zinc-800 rounded-md p-2"
              >
                <li className="text-zinc-200  font-[gilroy-light]">
                  {item.desc}
                </li>
                <div className="mt-2 flex">
                  <button
                    className="px-2 py-1 bg-red-700 text-white mr-4 flex items-center gap-2"
                    onClick={() => handleDelete(item._id)}
                  >
                    DELETE <i className="ri-delete-bin-5-line"></i>
                  </button>
                  <button
                    className="px-2 py-1 bg-yellow-500 text-white flex items-center gap-2"
                    onClick={() => handleEdit(item._id)}
                  >
                    EDIT <i className="ri-pencil-line"></i>
                  </button>
                </div>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Admin;
