import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";
import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [activeIndex, setActiveIndex] = useState(0);

  const byDateDesc = data?.focus?.sort((evtA, evtB) =>
    new Date(evtB.date) - new Date(evtA.date)
  ) || [];

  const nextCard = () => {
    if (byDateDesc.length > 1) {
      setActiveIndex(activeIndex < byDateDesc.length - 1 ? activeIndex + 1 : 0);
    }
  };

  useEffect(() => {
    const timer = setTimeout(nextCard, 5000);
    return () => clearTimeout(timer);
  }, [activeIndex, byDateDesc.length]);

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((sliderEvent, idx) => (
        <div key={sliderEvent.id}>
          <div
            className={`SlideCard SlideCard--${activeIndex === idx ? "display" : "hide"}`}
          >
            <img src={sliderEvent.cover} alt={sliderEvent.title} />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{sliderEvent.title}</h3>
                <p>{sliderEvent.description}</p>
                <div>{getMonth(new Date(sliderEvent.date))}</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc.map((sliderEvent, radioIdx) => (
            <input
              // eslint-disable-next-line react/no-array-index-key
              key={`radio-${sliderEvent.id}-${radioIdx}`}
              type="radio"
              name="radio-button"
              checked={activeIndex === radioIdx}
              onChange={() => setActiveIndex(radioIdx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;