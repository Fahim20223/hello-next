import Title from "@/components/Title";
import React from "react";

const TutorialPage = async ({ params }) => {
  // const { technology, topic, page_no, subject } = await params;

  const { slug } = await params;
  const [technology, topic, , page_no, subject] = slug || [];
  console.log(slug);
  return (
    <div>
      <Title>{technology} tutorials</Title>
      <h2>{topic}</h2> <hr />
      <div className="flex justify-between">
        <h3 className="font-bold">{subject}</h3>
        <p>page no: {page_no}</p>
      </div>
      This is tutorial page
    </div>
  );
};

export default TutorialPage;
