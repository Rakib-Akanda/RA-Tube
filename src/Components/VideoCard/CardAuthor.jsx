import { HiMiniCheckBadge } from "react-icons/hi2";
import PropTypes from "prop-types";
const CardAuthor = ({ author }) => {
  const { profile_picture, profile_name } = author;
  return (
    <div>
      <div className="flex gap-3">
        <div className="avatar">
          <div className="w-10 h-10 rounded-full">
            <img src={profile_picture} />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-[#171717]">{title}</h1>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-[#171717B3]">{profile_name}</p>
            <HiMiniCheckBadge className="text-[#2568EF] h-[20px] w-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
CardAuthor.propTypes = {
  author: PropTypes.object.isRequired,
};
// export default CardAuthor;



// // {
//   <div key={idx}>
//   <div className="text-left flex gap-3 mt-5">
//     <div className="avatar">
//       <div className="w-10 h-10 rounded-full">
//         <img src={author.profile_picture} />
//       </div>
//     </div>
//     <div>
//       <h1 className="font-bold text-[#171717]">{title}</h1>
//       <div className="flex items-center gap-2 mt-2">
//         <p className="text-[#171717B3]">{author.profile_name}</p>
//         <HiMiniCheckBadge className="text-[#2568EF] h-[20px] w-[20px]" />
//         <p className="text-[#171717B3] mt-2">{others} views</p>
//       </div>
//     </div>
//   </div>
// </div>;
// }