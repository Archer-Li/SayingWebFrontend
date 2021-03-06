import React, { FC } from "react";
import Button from "../../components/Button";
interface InfoCardProps {
  title: string;
  time: string;
  place: string;
  day: string;
}

const InfoCard: FC<InfoCardProps> = (props) => {
  const { title, time, place, day } = props;
  return (
    <div className="play-info-card">
      <p className="play-info-title">{title}</p>
      <div className="play-page-content-wrapper">
        <div className="play-info-left">
          <div className="play-info-day">{day}</div>
          <div className="play-info-time">{time}</div>
          <div className="play-info-place">{place}</div>
        </div>

        <div className="play-info-right">
          {["招新", "直播预约", "Program"].map((item) => (
            <Button
              type={
                item === "招新"
                  ? "disabled"
                  : item === "Program"
                  ? "default"
                  : "primary"
              }
              className="play-page-button"
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
