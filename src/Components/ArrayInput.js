import React, { useState } from "react";

export default function ArrayInput({
  array,
  setArray,
  exempt,
  placeholder,
  title,
}) {
  const [element, setElement] = useState(array.length > 0 ? " " : "");

  function addMember() {
    const newElement = element.trim();
    if (newElement !== "") {
      if (!array.includes(newElement)) {
        if (exempt !== undefined && !exempt.includes(newElement)) return;
        setArray([...array, newElement]);
      }
    }
    setElement(" ");
  }

  function handleMembersInput(e) {
    if (e.nativeEvent.data === " ") {
      addMember();
      return;
    } else if (
      e.nativeEvent.data === null &&
      e.target.value === "" &&
      array.length > 0
    ) {
      const lastMember = array.pop();
      setArray([...array]);
      setElement(" " + lastMember);
      return;
    }

    setElement(e.target.value);
  }

  function handleMembersBlur(e) {
    addMember();
  }

  return (
    <span>
      <span>
        {title}: {array.length > 0 ? array.toString() : "None"}
      </span>
      <br />
      <input
        type="text"
        name="array"
        value={element}
        onInput={handleMembersInput}
        onBlur={handleMembersBlur}
        placeholder={placeholder}
        required
      />
    </span>
  );
}
