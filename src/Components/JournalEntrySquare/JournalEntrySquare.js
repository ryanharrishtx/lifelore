import './JournalEntrySquare.css';

const JournalEntrySquare = () => {
    return (
        <div className="journal-entry">
            <h2 className="journal-entry_title">Title</h2>
            <h3 className="journal-entry_date">Created: Date</h3>
                <div>
                    Tags:
                    <ul className="journal-entry_tags">Tag 1, Tag 2</ul>
                </div>
                <p className="journal-entry_body">Body ...</p>
        </div>
    )
}

export default JournalEntrySquare;