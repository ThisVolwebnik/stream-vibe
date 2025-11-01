import "./Categories.scss";
import Section from "@/layouts/Section";
import CategoryCard from "@/components/CategoryCard";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import categoryItems from "@/sections/Categories/categoryItems";

const Categories = () => {
  return (
    <Section
      title="Explore our wide variety of categories"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      titleId="categories-title"
      isActionsHiddenOnMobile
      actions={
        <SliderNavigation mode="tile" id="categories-slider-navigation" />
      }
    >
      <Slider
        navigationTargetElementId="categories-slider-navigation"
        isBeyondTheViewportOnMobileS
      >
        {categoryItems.map((categoryItem, index) => (
          <CategoryCard {...categoryItem} key={index} />
        ))}
      </Slider>
    </Section>
  );
};

export default Categories;
