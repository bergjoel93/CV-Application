import { useState } from "react";
import { Card } from "./accordianCard";
import MainInfoForm from "./mainInfo/mainInfoForm";
import Education from "./education/education";
import Experience from "./experience/experience";
export default function Accordian({ children }) {
  const [activeIndex, setActiveIndex] = useState(null);

  function toggleActive(index) {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }
  return (
    <div id="Form" className="w-96 flex flex-col mt-6">
      <Card
        title="Main Info"
        isActive={activeIndex === 0}
        onShow={() => toggleActive(0)}
      >
        {children[0]}
      </Card>
      <Card
        title="Education"
        isActive={activeIndex === 1}
        onShow={() => toggleActive(1)}
      >
        {children[1]}
      </Card>
      <Card
        title="Experience"
        isActive={activeIndex === 2}
        onShow={() => toggleActive(2)}
      >
        {children[2]}
      </Card>
    </div>
  );
}
