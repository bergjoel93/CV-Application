import { Fragment } from "react";
import FormCard from "../formCard/formCard";
import MainInfo from "../formComponents/mainInfo";

export default function FormContainer() {
  const cards = [
    {
      id: 0,
      title: "Main Information",
      component: <MainInfo />,
    },
    {
      id: 1,
      title: "Education",
      component: "<Education/>",
    },
    {
      id: 2,
      title: "Work Experience",
      component: "<WorkExperience/>",
    },
    {
      id: 3,
      title: "Skills",
      component: "<Skills/>",
    },
  ];
  const cardElements = cards.map((card) => (
    <Fragment key={card.id}>
      <FormCard title={card.title} formComponent={card.component}></FormCard>
    </Fragment>
  ));
  return <div className="border m-4 p-4">{cardElements}</div>;
}
