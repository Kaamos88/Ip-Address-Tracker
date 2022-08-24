import { useSelector } from "react-redux";
import ElementDetails from "./ElementDetails";

const Details = () => {
  const { api } = useSelector((store) => store.search);
  
  const data = {
    ipAddress: api.ip,
    location: `${api.location.city}, ${api.location.country}, ${api.location.region}`,
    timezone: `UTC ${api.location.timezone}`,
    isp: api.isp,
  };

  return (
    <div className="relative top-12 z-[500] flex justify-evenly bg-white w-4/5 h-36 rounded-xl mx-auto">
      <ElementDetails head={"Ip Address"} text={data.ipAddress} />
      <div className="border-l-2 h-1/2 my-auto"></div>
      <ElementDetails head={"Location"} text={data.location} />
      <div className="border-l-2 h-1/2 my-auto"></div>
      <ElementDetails head={"Timezone"} text={data.timezone} />
      <div className="border-l-2 h-1/2 my-auto"></div>
      <ElementDetails head={"ISP"} text={data.isp} />
    </div>
  );
};

export default Details;
