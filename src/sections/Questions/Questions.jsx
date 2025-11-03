import "./Questions.scss";
import classNames from "classnames";
import Button from "@/components/Button";
import Section from "@/layouts/Section";
import AccordionGroup from "@/components/AccordionGroup";
import Accordion from "@/components/Accordion";

const Questions = props => {
  const { className } = props;

  const questionItems = [
    "What is StreamVibe?",
    "How much does StreamVibe cost?",
    "What content is available on StreamVibe?",
    "How can I watch StreamVibe?",
    "How do I sign up for StreamVibe?",
    "What is the StreamVibe free trial?",
    "How do I contact StreamVibe customer support?",
    "What are the StreamVibe payment methods?",
  ];
  return (
    <Section
      className={classNames(className, "question")}
      title="Frequently Asked Questions"
      description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
      titleId="questions-title"
      actions={<Button label="Ask a Question" href="/support" />}
    >
      <AccordionGroup columns={2}>
        {questionItems.map((question, index) => (
          <Accordion
            title={question}
            name="questions"
            id={`question-${index}`}
            isOpen={index === 0}
            key={index}
          >
            <p>
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Section>
  );
};

export default Questions;
