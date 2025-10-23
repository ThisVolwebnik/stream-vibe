import "./SliderNavigation.scss";
import classNames from "classnames";
import Button from "@/components/Button";

const SliderNavigation = props => {
  const { className, id, hasPagination = true, mode = "" } = props;

  return (
    <div
      className={classNames(className, "slider-navigation", {
        [`slider-navigation--${mode}`]: mode,
      })}
      id={id}
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
        mode="black-10"
        iconName="arrow-left"
        label="Previous slide"
        isLabelHidden
      />
      {hasPagination && <div className="slider-navigation__pagination"></div>}
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
        mode="black-10"
        iconName="arrow-right"
        label="Next slide"
        isLabelHidden
      />
    </div>
  );
};

export default SliderNavigation;
