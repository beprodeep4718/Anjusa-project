import { useContext } from "react";
import { LuMoveRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { NoticeContext } from "../store/noticeContext";

const timeAgo = (date) => {
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) return `${interval} year${interval > 1 ? "s" : ""} ago`;
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) return `${interval} month${interval > 1 ? "s" : ""} ago`;
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return `${interval} day${interval > 1 ? "s" : ""} ago`;
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return `${interval} hour${interval > 1 ? "s" : ""} ago`;
  interval = Math.floor(seconds / 60);
  if (interval >= 1) return `${interval} minute${interval > 1 ? "s" : ""} ago`;
  return "Just now";
};

const NoticeSection = () => {
  const { notice, loading } = useContext(NoticeContext);

  return (
    <div className="w-full relative Notice-Section px-4 py-6 lg:px-24">
      <div>
        <div className="font-[lato] inline-flex items-center justify-center gap-3 rounded-full text-lg bg-[#24FF00] text-zinc-900 px-3 py-1 shadow-[0px_0px_15px_6px_rgba(36,255,0,0.4)] font-semibold">
          Notice
          <span className="w-2 h-2 bg-zinc-900 rounded-full"></span>
        </div>
        <div className="mt-5 space-y-5">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className="flex flex-col items-center justify-center gap-6">
              {notice.map((item) => (
                <li
                  key={item._id}
                  className="relative px-4 py-1 min-h-14 w-full flex items-center justify-between bg-zinc-800 rounded-sm"
                >
                  {item.desc}
                  <span className="text-[#22ff00b5] absolute -top-5 right-1 text-[12px]">
                    {timeAgo(new Date(item.updatedAt))}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <div className="grid place-items-center">
            <h1 className="border-b-[1px] text-zinc-400 text-center text-lg ">
              <Link to={"/all-notices"} className="flex items-center gap-2">
                Read More <LuMoveRight className="text-2xl" />
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeSection;
