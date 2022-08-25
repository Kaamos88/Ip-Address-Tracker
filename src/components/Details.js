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
    <div className="relative min-h-[8rem] top-10 z-[500] flex flex-col gap-2 lg:flex-row py-7 lg:py-8 bg-white w-11/12 lg:w-4/5 rounded-xl mx-auto">
      <ElementDetails head={"Ip Address"} text={data.ipAddress} />
      <div className="border-l-2 grow-1 lg:py-10 my-auto"></div>
      <ElementDetails head={"Location"} text={data.location} />
      <div className="border-l-2 lg:py-10 my-auto"></div>
      <ElementDetails head={"Timezone"} text={data.timezone} />
      <div className="border-l-2 lg:py-10 my-auto"></div>
      <ElementDetails head={"ISP"} text={data.isp} />
    </div>
  );
};

export default Details;
