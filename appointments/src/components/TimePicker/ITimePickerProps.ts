interface ITimePickerProps {
  availableAppointments: Date[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default ITimePickerProps;
