import { HiMiniCheckBadge } from "react-icons/hi2";
import PropTypes from "prop-types";
const VideoCard = ({ video }) => {
  const { thumbnail, title, others } = video;
  return (
    <div>
      <div className="card card-compact bg-base-100">
        <div>
          <figure>
            <img
              className="rounded-lg w-[312px] lg:w-[335px] h-[200px]"
              src={thumbnail}
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="px-1">
          {video.authors.map((author, idx) => (
            <div key={idx} className="">
              <div className="text-left flex gap-3 mt-5">
                <div>
                  <div className="avatar">
                    <div className="w-10 h-10 rounded-full">
                      <img src={author.profile_picture} />
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-[#171717]">{title}</h1>
                  <div className="flex items-center gap-2 lg:mt-2">
                    <p className="text-[#171717B3]">{author.profile_name}</p>
                    <HiMiniCheckBadge className="text-[#2568EF] h-[20px] w-[20px]" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <p className="text-[#171717B3] lg:mt-2 mb-4 lg:mb-0 text-start ml-[53px]">
            {others.views} views
          </p>
        </div>
      </div>
    </div>
  );
};
VideoCard.propTypes = {
  video: PropTypes.object.isRequired,
};
export default VideoCard;
