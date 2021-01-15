/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.


const journal = [
    {
        id: 1,
        date: "01/07/2021",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "happy"
    },

    {
        id: 2,
        date: "01/12/2020",
        concept: "JavaScript",
        entry: "Martin is getting on my nerves",
        mood: "frustrated"
    },

    {
        id: 3,
        date: "01/14/2020",
        concept: "JavaScript Components",
        entry: "We learned about JS components.",
        mood: "focused"
    }

]

/*
    Exports useJounralEntries function that provides a version of the
    raw data in the format I want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}