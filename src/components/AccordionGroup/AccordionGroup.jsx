import "./AccordionGroup.scss";
import classNames from "classnames";

const AccordionGroup = props => {
  const { className, columns = 1, children, isOrderList = true } = props;

  const itemsPerColumn = Math.ceil(children.length / columns);
  const ListTag = isOrderList ? "ol" : "ul";
  return (
    <ListTag
      className={classNames(className, "accordion-group", {
        [`accordion-group--${columns}-columns`]: columns > 1,
        "accordion-group--has-counter": isOrderList,
      })}
    >
      {children.map((child, index) => (
        <li
          className={classNames("accordion-group__item", {
            "accordion-group__item--last-column-item":
              columns > 1 && itemsPerColumn / (index + 1) === 1,
          })}
          key={index}
        >
          {child}
        </li>
      ))}
    </ListTag>
  );
};

export default AccordionGroup;
