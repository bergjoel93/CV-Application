import { useState } from "react";
import TextInput from "../../components/genericComponents/textInput";

export default function MainInfo() {
  const [mainInfo, setMainInfo] = useState({
    clientName: "Steve Jobs",
    email: "Steven.jobs@apple.com",
    address1: "One Apple Park Way",
    address2: "",
    city: "Cupertino",
    state: "CA",
    zip: "95014",
    phone: "800-867-5309",
  });
  // handler to update the state when input changes
  function handleChange(event) {
    // get the name and value from the event target(input field)
    const name = event.target.name;
    const value = event.target.value;

    // create a new person object with the updated property
    const updatedMainInfo = {
      ...mainInfo, // copies the previous mainInfo object
      [name]: value, // update the property with the new value
    };

    // Update the mainInfo state with the new object.
    setMainInfo(updatedMainInfo);
  }
  return (
    <div className="">
      <TextInput
        type="text"
        label="Name"
        id="clientName"
        value={mainInfo.clientName}
        onChange={handleChange}
      />
      <TextInput
        type="email"
        label="Email"
        id="email"
        value={mainInfo.email}
        onChange={handleChange}
      />
      <TextInput
        type="text"
        label="Address Line 1"
        id="addressLine1"
        value={mainInfo.address1}
        onChange={handleChange}
      />
      <TextInput
        type="text"
        label="Address Line 2"
        id="addressLine2"
        value={mainInfo.address2}
        onChange={handleChange}
      />
      <TextInput
        type="text"
        label="City"
        id="city"
        value={mainInfo.city}
        onChange={handleChange}
      />
      <TextInput
        type="text"
        label="State"
        id="state"
        value={mainInfo.state}
        onChange={handleChange}
      />
      <TextInput
        type="number"
        label="Zip"
        id="zip"
        value={mainInfo.zip}
        onChange={handleChange}
      />
      <TextInput
        type="tel"
        label="Phone"
        id="phone"
        value={mainInfo.phone}
        onChange={handleChange}
      />
    </div>
  );
}
