import { CaretDown, GithubLogo, Icon } from "@phosphor-icons/react";
import React, { useState } from "react";
import Select, {
  components,
  ControlProps,
  DropdownIndicatorProps,
  OptionProps,
  Props,
  StylesConfig,
} from "react-select";

interface SelectOptions {
  readonly value: string | number;
  readonly label: string;
  readonly color?: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

//Select main from react-select
const Control = ({ ...props }: ControlProps<SelectOptions, false>) => {
  return (
    <components.Control
      className={
        (props.menuIsOpen ? " border border-primary " : " border-gray ") +
        " h-[48px] px-4 hover:shadow-input-active"
      }
      {...props}
    >
      <>{props.children}</>
    </components.Control>
  );
};

// options that is values
const Option = ({ children, ...props }: any) => {
  return (
    <components.Option className="!bg-transparent" {...props}>
        <div
            className={`flex max-w-[100%] px-3 cursor-pointer h-[48px] items-center border border-transparent border-b-gray
                ${
                props.isSelected
                    ? "text-primary hover:text-primary"
                    : "hover:text-primary"
                }
                `}
        >
            {props.icon}
            <p>{props.label}</p>
        </div>
    </components.Option>
  );
};

const DropdownIndicator = (
  props: DropdownIndicatorProps<SelectOptions, false>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDown className={`duration-500 ${!props.selectProps.menuIsOpen ? "rotate-0" : "rotate-180"}`} />
    </components.DropdownIndicator>
  );
};
type DropdownType = {
  error: any;
  value: any;
} & Props<SelectOptions>;
export const Dropdown = ({ error, ...props }: Partial<DropdownType>) => {
  const styles: StylesConfig<SelectOptions, false> = {
    control: (css) => ({
      ...css,
      fontWeight: 400,
      background: "#FFFFFF",
      borderRadius: "8px",
      "&:hover": {
        background: "#FCFDFD",
      },
      "&::placeholder": {
        fontWeight: 400,
        color: "red !important",
      },
      "&:focused": {
        background: "red",
      },
    }),
    placeholder: (base) => ({
      ...base,
      fontSize: "16px",
      color: "#869FAC",
      fontWeight: 400,
    }),
    menu: (base) => ({
      ...base,
      boxShadow: "0px -1px 8px 0px #C6CBCD4D",
      maxWidth: "100%",
    }),
    menuList: (base) => ({
      ...base,

      "::-webkit-scrollbar": {
        width: "8px",
        height: "auto",
      },
      "::-webkit-scrollbar-track": {
        background: "white",
        borderRadius: "8px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#F4F8F9",
        borderRadius: "8px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#F4F8F9",
      },
    }),
  };
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Select
      {...props}
      components={{
        Control,
        IndicatorSeparator: () => null,
        Option,
        DropdownIndicator,
      }}
      isSearchable
      onMenuOpen={() => setMenuOpen(true)}
      onMenuClose={() => setMenuOpen(false)}
      name={props.name}
      menuIsOpen={menuOpen}
      options={props.options}
      styles={styles}
    />
  );
};
