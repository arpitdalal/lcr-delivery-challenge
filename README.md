# Assignment
Build a react.js application that is styled to match the provided design, and dynamically display the provided JavaScript data.

## Instructions
- Timebox your project to at maximum *four hours*, however you can submit earlier if you finish under four hours -- we don't expect you to finish, get as much done as you can.
- If any part of the requirements are unclear, reach out to your contact at Points and ask questions.
- Upload your project to your personal Github profile and share the link with your contact at Points. Alternatively, you can share a zipped (compressed) folder of your relevant project files.

## Requirements
- Code your application to match the provided design: "wdps_challenge__design.png"
- You can use the toolchain "create-react-app", but no other development tools or libraries.
- The design does not surface the CSS e.g. font, spacing, etc. so you're expected to interpret these specifications in the design to the best of your ability.
- Use default cross-browser fonts, like Arial, Verdana, Georgia.
- Code for modern browsers, don't worry about IE11.
- Code using accessibility best practices.
- Code using responsive design best practises.

### Functionality
- Render the contents of the provided JavaScript file cardData.js into the 1x3 cards grid, include the functionality:
    - Add UI control above the cards to filter cards by type: buy, gift, or transfer, and render the corresponding data type properties into each card.
    - Add UI control above the cards to sort card options by lowest to highest cost, and highest to lowest.
- In the payment form, use placeholder copy for default dropdown option.
- In the Order Summary aside, dynamically render the selected card's data as values for elements "Total miles" and "Total cost".