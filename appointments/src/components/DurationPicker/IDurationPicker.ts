export default interface IDurationPicker {
  appointmentDurations: Number[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
