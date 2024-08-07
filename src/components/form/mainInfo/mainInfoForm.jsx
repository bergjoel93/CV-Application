import TextInput from "../../genericComponents/textInput";
export default function MainInfoForm({ info, onChange }) {
  return (
    <div>
      <div className="">
        <TextInput
          type="text"
          label="Name"
          id="name"
          value={info.name}
          onChange={onChange}
        />
        <TextInput
          type="email"
          label="Email"
          id="email"
          value={info.email}
          onChange={onChange}
        />
        <TextInput
          type="text"
          label="Address Line 1"
          id="address1"
          value={info.address1}
          onChange={onChange}
        />
        <TextInput
          type="text"
          label="Address Line 2"
          id="address2"
          value={info.address2}
          onChange={onChange}
        />
        <TextInput
          type="text"
          label="City"
          id="city"
          value={info.city}
          onChange={onChange}
        />
        <TextInput
          type="text"
          label="State"
          id="state"
          value={info.state}
          onChange={onChange}
        />
        <TextInput
          type="number"
          label="Zip"
          id="zip"
          value={info.zip}
          onChange={onChange}
        />
        <TextInput
          type="tel"
          label="Phone"
          id="phone"
          value={info.phone}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
