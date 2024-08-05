import { useState } from "react";
import { Card } from "./accordianCard";
import MainInfoForm from "./mainInfo/mainInfoForm";
import Education from "./education/education";
import Experience from "./experience/experience";
export default function Accordian() {
  const [activeIndex, setActiveIndex] = useState(null);

  function toggleActive(index) {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }
  return (
    <div id="Form" className="w-96">
      <Card
        title="Main Info"
        isActive={activeIndex === 0}
        onShow={() => toggleActive(0)}
      >
        <MainInfoForm></MainInfoForm>
      </Card>
      <Card
        title="Education"
        isActive={activeIndex === 1}
        onShow={() => toggleActive(1)}
      >
        <Education></Education>
      </Card>
      <Card
        title="Experience"
        isActive={activeIndex === 2}
        onShow={() => toggleActive(2)}
      >
        <Experience></Experience>
      </Card>
    </div>
  );
}
