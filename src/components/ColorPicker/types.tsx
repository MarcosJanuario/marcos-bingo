export interface ColorPickerProps {
  label: string;
  defaultColor: string;
  onColorPicked: (color: string) => void;
}
