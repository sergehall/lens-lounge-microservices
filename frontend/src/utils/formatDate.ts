/**
 * Formats a date into a readable string.
 *
 * @param date - The date to format (can be a Date object, string, or number).
 * @param options - Optional formatting options for date representation.
 * @returns A formatted date string.
 */
export const formatDate = (
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string => {
  try {
    // const rawDate = '2024-12-18T18:30:00Z';
    // const formattedDate = formatDate(rawDate);
    //
    // return <p>The formatted date is: {formattedDate}</p>;

    const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
    return new Intl.DateTimeFormat('en-US', options).format(dateObj);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid Date';
  }
};
