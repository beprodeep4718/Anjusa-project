import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const NoticePage = () => {
  const { id } = useParams();
  const [notice, setNotice] = useState({});
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const getNotice = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/notices/${id}`
      );
      const data = await res.json();
      setNotice(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotice();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="w-full h-screen">
      {loading ? (
        <div className="h-screen w-full grid place-items-center text-xl">
          Loading...
        </div>
      ) : (
        <div className="w-full pt-24 px-4 lg:px-32">
          <Link className="px-4 py-2 border-2 border-white rounded" to={"/"}>
            ← Back
          </Link>
          <div className="mt-10 space-y-4 lg:text-2xl">
            <h1>{notice.desc}</h1>
            <img src={notice.Image.url} alt="" />
            <p>{notice.updatedAt ? formatDate(notice.updatedAt) : "No Date Available"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticePage;
