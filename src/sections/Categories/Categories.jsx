import "./Categories.scss";
import classNames from "classnames";
import Section from "@/layouts/Section";

const Categories = props => {
  const { className } = props;

  return (
    <Section
      title="Explore our wide variety of categories"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      titleId="categories-title"
      isActionsHiddenOnMobile
    ></Section>
  );
};

export default Categories;
