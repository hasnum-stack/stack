import {
  type JSXOpeningElement,
  type JSXElement,
  jsxClosingFragment,
} from "@babel/types";
import template from "@babel/template";

import t from "@babel/types";
export function stringLiteralToJSXIcon(
  value: string,
  openingElement: JSXOpeningElement,
): [JSXElement, string] {
  const valueStr = value.replace(/['"]/g, "");
  const valueStrArr = valueStr.split("-");
  let newValueStr = "";
  valueStrArr.forEach((item, index) => {
    newValueStr += item[0].toUpperCase() + item.slice(1);
  });
  const name = newValueStr + "Outlined";
  return [
    t.jsxElement(
      t.jsxOpeningElement(
        t.jsxIdentifier(name),
        [
          ...openingElement.attributes.filter((item) => {
            return !(item.type === "JSXAttribute" && item.name.name == "type");
          }),
        ],
        true,
      ),
      null,
      [],
    ),
    name,
  ];
}
