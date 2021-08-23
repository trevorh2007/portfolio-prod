# Updated portfolio 08/01/21

- Using node for backend
- Using react for frontend
- Using postgresql for database

- Use of react hooks
- Unit testing
- Snapshot testing

# TODO

- [X] Contact back end hook up, then decide what service to use to send email/notification to phone
    - [X] Decided to use nodemailer
    - [x] front end email form validator, something simple like regex, no need to have backend validation
    - [x] maybe make submit button unclickable while email is sending? and have it have a little loading icon while sending before confirmation message pops up
    - [x] submit button is pressable even with no data entered, at least make name a requirement, probably email as well?
- [ ] contact section still isn't to my liking, maybe create floating labels?
    - [ ] condense the forms, seems to spread apart on large devices (actually like how it looks on mobile currently)
    - [x] submit button needs a cursor:pointer added on hover
- [ ] project section filled out with Discord bot app and other applications
    - ~~[ ] aquire screenshots of each project so you can cycle through them when clicked (maybe 3-5 images per project)~~
    - [ ] create modal that opens when clicking on a project to see more info of the project (link to project page and code)
    - ~~[ ] carousel to go through images~~
        - [ ] create gifs of the projects you showcase, less work and no need for carousel
- [ ] about section to add a link to contact page
- [x] about section re-word elevator pitch
    - [ ] update picture, take a more professional picture
- [X] add resume to be viewed in browser as well as be able to download in docx/pdf
    - [X] above is technically just pdf link, add it so that the link has a drop down and 2 options (pdf/docx) and both clickable/viewable/downloadable in browser
- [X] add footer, not sure what content to add to footer, but bottom of page is somewhat lacking (good place to add linkedin/github icons)
    - [x] footer links need to open in a new tab, not in the same tab as portfolio
- [ ] fix it so that #{page}-section scss doesn't need to be a calc of vh - px, things like about/contact are too long
- [x] remove section headers (or restyle them to be better looking)
- [ ] navbar links, add highlight under where you currently are on the page, example: if you click about then "about" in navbar will have highlight underneath
    - [x] hovering over links should change the background color to indicate what you are hovering over
    - [x] navbar "Resume" should possibly be changed to a "hover" dropdown instead of clicking as it might seem a little confusing, maybe also add animated arrow next to it for better clarification
        - [x] resume hover design rethought and not needed
- [x] navbar mobile, condense to hamburger menu maybe? adding in resume link will likely make this a must (extra credit: do hamburger menu without a library)
    - [x] the "more about me >" button on mobile the arrow (>) shows over the hamburger menu when expanded, fix it
    - [x] the "resume" link when menu is expanded needs to be reconfigured for mobile to be a better ui/ux