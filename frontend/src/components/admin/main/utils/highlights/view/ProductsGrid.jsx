import { ReactElement } from "react";
import { useIndeterminateChecked } from "@react-md/form";
import {
  Table,
  TableBody,
  TableCell,
  TableCheckbox,
  TableContainer,
  TableHeader,
  TableRow,
} from "@react-md/table";


const desserts = [
    {
      name: "Frozen yogurt",
      type: "Ice cream",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      sodium: 87,
      calcium: 14,
      iron: 1,
    },
    {
      name: "Ice cream sandwhich",
      type: "Ice cream",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      sodium: 129,
      calcium: 8,
      iron: 1,
    },
    {
      name: "Eclair",
      type: "Pastry",
      calories: 262,
      fat: 16.0,
      carbs: 37,
      protein: 6.0,
      sodium: 337,
      calcium: 6,
      iron: 7,
    },
    {
      name: "Cupcake",
      type: "Pastry",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      sodium: 413,
      calcium: 3,
      iron: 8,
    },
    {
      name: "Gingerbread",
      type: "Pastry",
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      sodium: 327,
      calcium: 7,
      iron: 16,
    },
    {
      name: "Jelly bean",
      type: "Other",
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      sodium: 50,
      calcium: 0,
      iron: 0,
    },
    {
      name: "Lollipop",
      type: "Other",
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0.0,
      sodium: 38,
      calcium: 0,
      iron: 2,
    },
    {
      name: "Honeycomb",
      type: "Other",
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      sodium: 562,
      calcium: 0,
      iron: 45,
    },
    {
      name: "Donut",
      type: "Pastry",
      calories: 52,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      sodium: 326,
      calcium: 2,
      iron: 22,
    },
    {
      name: "KitKat",
      type: "Other",
      calories: 16,
      fat: 6.0,
      carbs: 65,
      protein: 7.0,
      sodium: 54,
      calcium: 12,
      iron: 6,
    },
  ];

const headers = [
  "Dessert (100g serving)",
  "Calories",
  "Fat (g)",
  "Carbs (g)",
  "Protein (g)",
  "Sodium (mg)",
  "Calcium (mg)",
  "Icon (mg)",
];

export default function Demo() {
  const { rootProps, getProps } = useIndeterminateChecked(
    desserts.map(({ name }) => name)
  );

  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCheckbox id="selectable-rows-root-checkbox" {...rootProps} />
            {headers.map((name, i) => (
              <TableCell key={name} grow={i === 0}>
                {name}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody hAlign="right">
          {desserts.map((dessert, i) => {
            const {
              name,
              calories,
              fat,
              carbs,
              protein,
              sodium,
              calcium,
              iron,
            } = dessert;
            const checkboxProps = getProps(name);
            const { checked, onChange } = checkboxProps;

            return (
              <TableRow
                key={name}
                clickable
                selected={checked}
                onClick={onChange}
              >
                <TableCheckbox
                  id={`selectable-rows-checkbox-${i + 1}`}
                  {...checkboxProps}
                />
                <TableCell hAlign="left">{name}</TableCell>
                <TableCell>{calories}</TableCell>
                <TableCell>{fat}</TableCell>
                <TableCell>{carbs}</TableCell>
                <TableCell>{protein}</TableCell>
                <TableCell>{sodium}</TableCell>
                <TableCell>{calcium}</TableCell>
                <TableCell>{iron}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}