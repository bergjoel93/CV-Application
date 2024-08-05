import TextInput from "../../genericComponents/textInput";
export default function MainInfoForm() {
  return (
    <div>
      <div className="">
        <TextInput type="text" label="Name" id="clientName" />
        <TextInput type="email" label="Email" id="email" />
        <TextInput type="text" label="Address Line 1" id="addressLine1" />
        <TextInput type="text" label="Address Line 2" id="addressLine2" />
        <TextInput type="text" label="City" id="city" />
        <TextInput type="text" label="State" id="state" />
        <TextInput type="number" label="Zip" id="zip" />
        <TextInput type="tel" label="Phone" id="phone" />
      </div>
    </div>
  );
}
