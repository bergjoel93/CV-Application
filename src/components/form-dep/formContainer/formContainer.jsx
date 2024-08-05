import { Fragment, useState } from "react";
import FormCard from "../formCard/formCard";
import MainInfo from "../formComponents/mainInfo";
import Education from "../formComponents/education/education";
import WorkExperience from "../formComponents/workExperience";
import Skills from "../formComponents/skills";

export default function FormContainer() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cards = [
    {
      id: 0,
      title: "Main Information",
      component: <MainInfo />,
    },
    {
      id: 1,
      title: "Education",
      component: <Education />,
    },
    {
      id: 2,
      title: "Work Experience",
      component: <WorkExperience />,
    },
    {
      id: 3,
      title: "Skills",
      component: <Skills />,
    },
  ];

  const handleShow = (id) => {
    // Toggle the active index if the same card is clicked.
    setActiveIndex(activeIndex === id ? null : id);
  };

  const cardElements = cards.map((card) => (
    <Fragment key={card.id}>
      <FormCard
        title={card.title}
        formComponent={card.component}
        isActive={activeIndex === card.id}
        onShow={() => handleShow(card.id)}
      />
    </Fragment>
  ));
  return <div className="border m-4 p-4 rounded-xl">{cardElements}</div>;
}
