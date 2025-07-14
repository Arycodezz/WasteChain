import { Input } from "../ui/input";

export default function CommonFormElement({ currentItem, value, onChange }) {
  let content = null;
  switch (currentItem.componentType) {
    case "input":
      content = (
        <Input
          name={currentItem.name}
          id={currentItem.name}
          placeholder={currentItem.placeholder}
          value={value}
          onChange={onChange}
          type={currentItem.type}
        />
      );
      break;
      case "select":
      content = (
        <select
          name={currentItem.name}        // ✅ ADDED - Required for form handling
          id={currentItem.name}          // ✅ ADDED - Good practice
          value={value || ""}            // ✅ ADDED - Controls the selected value
          onChange={onChange}            // ✅ ADDED - Handles changes
          required={currentItem.required} // ✅ ADDED - Form validation
          disabled={currentItem.disabled} // ✅ ADDED - Disable if needed
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="" disabled>
            {currentItem.placeholder || "Please select..."}
          </option>
          {currentItem.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
      break;
      case "textarea":
      content = (
        <textarea
          name={currentItem.name}
          id={currentItem.name}
          placeholder={currentItem.placeholder}
          value={value}
          onChange={onChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      );
      break;
    default:
      content = (
        <Input
          name={currentItem.name}
          id={currentItem.name}
          placeholder={currentItem.placeholder}
          value={value}
          onChange={onChange}
          type={currentItem.type}
        />
      );
      break;
  }
  return content;
}
