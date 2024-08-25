import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Admin = () => {
  const { notice, serverUrl, getNotice } = useAuth();
  const [data, setData] = useState({ desc: "" });
  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${serverUrl}/api/add-notice`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res_data = await response.json();
      console.log(res_data);
      getNotice();
      toast.success("Notice added successfully!", {
        theme: "dark",
        autoClose: 2000,
      });
      setData({ desc: "" });
    } catch (error) {
      console.log(error);
      toast.error("Failed to add notice! (Internal Server Error)", {
        theme: "dark",
        autoClose: 3000,
      });
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `${serverUrl}/api/delete-notice/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
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
  return (
    <div>
      <div className="p-4 space-y-6 ">
        <h1 className="font-bold text-2xl mb-10 font-[gilroy]">Admin Panel</h1>

        <span className="bg-primary-100 px-4 py-2 text-lg font-semibold font-[gilroy]">
          add new notice
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
              className="p-4 w-full italic"
              onChange={handleChange}
            ></textarea>
            <button className="font-[gilroy] px-6 py-2 text-xl bg-primary-200 text-white ">
              Submit
            </button>
          </form>
        </div>
        <div className="py-10">
          <h1 className="font-semibold text-xl tracking-wide uppercase">
            Current notices
          </h1>
          <ol className="py-8 px-4 ring-1 ring-gray-500 rounded-xl mt-5 shadow-md">
            {notice.length == 0 && (
              <p className="text-primary-100 font-semibold">No notice Yet!</p>
            )}
            {notice.map((item) => {
              return (
                <div key={item._id} className="flex flex-col items-start mt-2">
                  <li className="text-[#595260] font-[gilroy]">{item.desc}</li>
                  <button
                    className="px-2 py-1 bg-red-700 text-white"
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                  >
                    DELETE
                  </button>
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
