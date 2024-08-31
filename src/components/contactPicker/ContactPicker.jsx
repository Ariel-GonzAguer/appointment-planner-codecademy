import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <>
      <label htmlFor="select-picker"></label>
      <select id="select-picker" name={name} onChange={onChange} value={value}>
      <option value={""} key={-1}>“No Contact Selected”</option>
      {
        contacts.map((contact, index) => {
          // const { name } = contact;
          return (
            <option value={contact} key={index}>{contact}</option>
          )
        })
      }
      </select>
    </>
  );
};
