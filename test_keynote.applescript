tell application "Keynote"
    open POSIX file "/Users/davidjiang/Documents/projects/project_nocturne/docs/slides/DS Fine Dining | Pasta | Bar.key"
    set doc to front document
    set slideCount to count of slides of doc
    set slideText to ""
    repeat with s from 1 to 1 -- Just check first slide
        set currentSlide to slide s of doc
        repeat with txtItem in text items of currentSlide
            set slideText to slideText & (object text of txtItem) & "\n"
        end repeat
    end repeat
    close doc
    return slideText
end tell
