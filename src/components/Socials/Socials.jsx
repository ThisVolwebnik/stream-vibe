import "./Socials.scss";
import classNames from "classnames";
import Button from "@/components/Button";

const Socials = props => {
  const { className, links = [] } = props;

  return (
    <div className={classNames(className, "socials")}>
      <ul className="socials__list">
        {links.map(({ label, iconName }, index) => (
          <li className="socials__item" key={index}>
            <Button
              className="socials__links"
              mode="black-10"
              href="/"
              label={label}
              isLabelHidden
              target="_blank"
              iconName={iconName}
              hasFillIcon
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
