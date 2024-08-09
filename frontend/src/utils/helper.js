export function formatTimestamp(timestamp) {
  // Create a Date object from the provided timestamp
  const dateObj = new Date(timestamp);

  // Extract the different components of the date and time
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  // Get the month name
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[dateObj.getMonth()];

  let hours = dateObj.getHours();
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");
  const seconds = dateObj.getSeconds().toString().padStart(2, "0");
  const milliseconds = dateObj.getMilliseconds().toString().padStart(3, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours.toString().padStart(2, "0");

  // Format the date and time in the desired format
  const formattedDate = `${day} ${month} ${year}`;
  const formattedTime = `${hours}:${minutes} ${ampm}`;

  return {
    date: formattedDate,
    time: formattedTime,
  };
}

export function formatString(input) {
  // Trim the input to remove leading and trailing spaces
  const trimmedInput = input.trim();

  // Split the input string into words
  const words = trimmedInput.split(" ");

  if (words.length === 1) {
    // Case: Only one word
    const word = words[0];
    if (word.length === 1) {
      // Case: Only one letter
      return word.toUpperCase();
    } else {
      // Case: One word with more than one letter
      return (word[0] + word[word.length - 1]).toUpperCase();
    }
  } else {
    // Case: Multiple words
    // Only consider the first two words if the input contains three or more words
    const relevantWords = words.slice(0, 2);
    return relevantWords.map((word) => word[0].toUpperCase()).join("");
  }
}
