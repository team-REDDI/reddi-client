import { useEffect, useState } from "react";
import { ReactComponent as Dots1 } from "../../assets/svgs/indicator.svg";
import { ReactComponent as Dots2 } from "../../assets/svgs/indicator2.svg";
import { ReactComponent as Dots3 } from "../../assets/svgs/indicator3.svg";
import { ReactComponent as Dots4 } from "../../assets/svgs/indicator4.svg";
import { ReactComponent as Dots5 } from "../../assets/svgs/indicator5.svg";
import { ReactComponent as Dots6 } from "../../assets/svgs/indicator6.svg";
import { ReactComponent as Dots7 } from "../../assets/svgs/indicator7.svg";

//indicator용
const LoadingDots: React.FC = () => {
  const [currentDot, setCurrentDot] = useState(0);
  const Dots = [Dots1, Dots2, Dots3, Dots4, Dots5, Dots6, Dots7];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDot((currentDot + 1) % 7);
    }, 85);

    return () => {
      clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌을 정리
    };
  }, [currentDot]);

  const CurrentDot = Dots[currentDot];
  return <CurrentDot />;
};

export default LoadingDots;
