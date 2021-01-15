/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */

import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered

export const EntryListComponent = () => {

    const entryLog = document.querySelector(".entryContainer")

    const entries = useJournalEntries()


    let journalHTMLRepresentations = ""
    for (const entry of entries) {

        journalHTMLRepresentations += JournalEntryComponent(entry)

    }
    console.log("JournalList",journalHTMLRepresentations)
        entryLog.innerHTML += `
        <section class="journalList">
            ${journalHTMLRepresentations}
        </section>
        
        `

}
