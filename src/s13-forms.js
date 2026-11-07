// Section 13 — the pure half of the form exercise (the DOM half is in web/)

// values: { code, title, department, credits } — all strings, as read from inputs.
// Complete when every field has non-blank text and credits is a whole number 1–6.
export function isComplete(values) {
  const hasText = ["code", "title", "department"].every(
    (field) => typeof values[field] === "string" && values[field].trim() !== ""
  );
  const credits = Number(values.credits);
  return (
    hasText &&
    String(values.credits).trim() !== "" &&
    Number.isInteger(credits) &&
    credits >= 1 &&
    credits <= 6
  );
}

// Turn form values into a course object (the shape the API uses), with a
// fresh id from nextId. Trims text, upper-cases the code, numbers the credits.
export function toCourse(values, nextId) {
  return {
    id: nextId(),
    code: values.code.trim().toUpperCase(),
    title: values.title.trim(),
    department: values.department.trim(),
    credits: Number(values.credits),
    description: null,
    capacity: 60,
    seatsLeft: 60,
  };
}
